import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import MovieCard from "../../../common/MovieCard";
import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";
import Pagination from "../../../common/Pagination";
import NoResultsView from "../../../common/NoResultsView";

import {
  fetchPopularMovies,
  selectPopularMovies,
  selectFetchPopularMoviesStatus,
  selectTotalPopularMoviesPages,
} from "../moviesSlice";

import {
  selectSearchResults,
  selectSubmittedQuery,
} from "../../../common/search/searchSlice";

import { useSearchPageEffect } from "../../../common/search/useSearchPageEffect";
import { useSearchResults } from "../../../common/search/useSearchResults";
import { useSearchLoaderEffect } from "../../../common/search/useSearchLoaderEffect";

import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";

const SEARCH_PAGE_SIZE = 24;

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page") || 1);
  const searchFromUrl = params.get("search");

  const movies = useSelector(selectPopularMovies) || [];
  const status = useSelector(selectFetchPopularMoviesStatus);
  const totalPages = useSelector(selectTotalPopularMoviesPages);

  const searchResults = useSelector(selectSearchResults) || [];
  const submittedQuery = useSelector(selectSubmittedQuery);

  useSearchPageEffect({ searchFromUrl, submittedQuery });

  const {
    isSearchActive,
    pagedResults,
    totalPages: searchTotalPages,
  } = useSearchResults({
    searchResults,
    page,
    pageSize: SEARCH_PAGE_SIZE,
    searchFromUrl,
  });

  const showLoader = useSearchLoaderEffect({
    isSearchActive,
    page,
  });

  useEffect(() => {
    if (!searchFromUrl) {
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, page, searchFromUrl]);

  if (status === "loading" && !isSearchActive) return <LoadingView />;
  if (status === "error") return <ErrorView />;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearchActive
            ? `Search results for "${submittedQuery}" (${searchResults.length})`
            : "Popular Movies"}
        </PageTitle>

        {showLoader && <LoadingView />}

        {!showLoader && isSearchActive && searchResults.length === 0 && (
          <NoResultsView />
        )}

        {!showLoader && (
          <GridWrapper>
            {(isSearchActive ? pagedResults : movies).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </GridWrapper>
        )}

        {!showLoader &&
          (isSearchActive ? (
            searchTotalPages > 1 && (
              <Pagination
                page={page}
                totalPages={searchTotalPages}
                basePath={`/movies?search=${encodeURIComponent(
                  submittedQuery
                )}`}
              />
            )
          ) : (
            <Pagination
              page={page}
              totalPages={totalPages}
              basePath="/movies"
            />
          ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
