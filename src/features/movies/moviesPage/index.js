import { MovieCard } from "./MovieCard";
import LoadingView from "../../../common/LoadingView";
import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectFetchPopularMoviesStatus, selectPopularMovies } from "../moviesSlice";

export const MoviesPage = () => {
  const movies = useSelector(selectPopularMovies);
  const fetchMoviesStatus = useSelector(selectFetchPopularMoviesStatus);

  if (fetchMoviesStatus === "loading") return <LoadingView header={"Movies loading..."}></LoadingView>
  if (!movies.length) return <p>Nic nie znaleziono</p>;
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>Popular Movies</PageTitle>

        <GridWrapper>
          {movies.slice(0, 8).map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
        </GridWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
