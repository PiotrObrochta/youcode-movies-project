import { useEffect, useState } from "react";
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
  setQuery,
  submitSearch,
  selectSearchResults,
  selectSubmittedQuery,
} from "../../../common/search/searchSlice";

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

  const [showLoader, setShowLoader] = useState(false);

  const isSearchActive = Boolean(searchFromUrl);

  useEffect(() => {
    if (searchFromUrl && searchFromUrl !== submittedQuery) {
      dispatch(setQuery(searchFromUrl));
      dispatch(submitSearch());
    }
  }, [dispatch, searchFromUrl, submittedQuery]);

  useEffect(() => {
    if (!isSearchActive) {
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, page, isSearchActive]);

  useEffect(() => {
    if (!isSearchActive) return;

    setShowLoader(true);
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [page, isSearchActive]);

  if (status === "loading" && !isSearchActive) return <LoadingView />;
  if (status === "error") return <ErrorView />;

  const pagedSearchResults = searchResults.slice(
    (page - 1) * SEARCH_PAGE_SIZE,
    page * SEARCH_PAGE_SIZE
  );

  const searchTotalPages = Math.ceil(searchResults.length / SEARCH_PAGE_SIZE);

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
            {(isSearchActive ? pagedSearchResults : movies).map((movie) => (
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
