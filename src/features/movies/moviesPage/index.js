import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../../api/movies";
import { MovieCard } from "./MovieCard";
import { PageWrapper, PageTitle, GridWrapper } from "./styled";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <PageWrapper>
      <PageTitle>Popular Movies</PageTitle>
      <GridWrapper>
        {movies.slice(0, 8).map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </GridWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
