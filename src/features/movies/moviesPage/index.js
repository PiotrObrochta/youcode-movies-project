import { Wrapper } from "../../../common/Wrapper";
import { MovieCard } from "./MovieCard";
import { useSelector } from "react-redux";
import { selectFetchPopularMoviesStatus, selectPopularMovies } from "../moviesSlice";

export const MoviesPage = () => {
  const movies = useSelector(selectPopularMovies);
  const fetchMoviesStatus = useSelector(selectFetchPopularMoviesStatus);

  if (fetchMoviesStatus === "loading") return <p>Ładowanie...</p>;
  if (fetchMoviesStatus === "error") return <p>Nic nie znaleziono</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <Wrapper>
        {movies.slice(0, 8).map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Wrapper>
    </div>
  );
};

export default MoviesPage;
