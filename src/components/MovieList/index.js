import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard";
import { fetchPopularMovies } from "../../api/movies";
import { MoviesWrapper } from "./styled"; // <── IMPORT styled.js

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  if (loading) return <p>Ładowanie...</p>;
  if (!movies.length) return <p>Nic nie znaleziono</p>;

  return (
    <MoviesWrapper>
      {movies.slice(0, 8).map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </MoviesWrapper>
  );
};
