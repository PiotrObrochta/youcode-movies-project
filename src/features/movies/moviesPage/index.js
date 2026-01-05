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
  selectSearchStatus,
  selectSubmittedQuery,
} from "../../../common/search/searchSlice";

import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get("page") || 1);

  const movies = useSelector(selectPopularMovies);
  const status = useSelector(selectFetchPopularMoviesStatus);
  const totalPages = useSelector(selectTotalPopularMoviesPages);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const submittedQuery = useSelector(selectSubmittedQuery);

  useEffect(() => {
    if (searchStatus !== "success") {
      dispatch(fetchPopularMovies(page));
    }
  }, [dispatch, page, searchStatus]);

  if (status === "loading") return <LoadingView />;
  if (status === "error") return <ErrorView />;

  const isSearching = searchStatus === "loading";
  const isSearchDone = searchStatus === "success";

  const showNoResults = isSearchDone && searchResults.length === 0;
  const list = isSearchDone ? searchResults : movies;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearching
            ? `Search results for "${submittedQuery}"`
            : isSearchDone
            ? `Search results for "${submittedQuery}" (${searchResults.length})`
            : "Popular Movies"}
        </PageTitle>

        {isSearching && <LoadingView />}
        {showNoResults && <NoResultsView query={submittedQuery} />}

        {!isSearching && !showNoResults && (
          <GridWrapper>
            {list.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </GridWrapper>
        )}

        {!isSearchDone && (
          <Pagination page={page} totalPages={totalPages} basePath="/movies" />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
