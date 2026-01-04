import MovieCard from "../../../common/MovieCard";
import LoadingView from "../../../common/LoadingView";
import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectFetchPopularMoviesStatus, selectPopularMovies } from "../moviesSlice";
import ErrorView from "../../../common/ErrorView";
import Pagination from "../../../common/Pagination";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPopularMovies } from "../moviesSlice";
import { selectTotalPopularMoviesPages } from "../moviesSlice";

export const MoviesPage = () => {
  const movies = useSelector(selectPopularMovies) || [];
  const fetchMoviesStatus = useSelector(selectFetchPopularMoviesStatus);
  const totalPages = useSelector(selectTotalPopularMoviesPages);
  const location = useLocation();
  const dispatch = useDispatch();

  const page = Number(new URLSearchParams(location.search).get("page") || 1);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [page, dispatch]);



  if (fetchMoviesStatus === "loading") return <LoadingView header={"Movies loading..."}></LoadingView>
  if (fetchMoviesStatus === "error") return <ErrorView></ErrorView>
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>Popular Movies</PageTitle>

        <GridWrapper>
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </GridWrapper>
        <Pagination page={page} totalPages={totalPages} basePath="/movies"></Pagination>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
