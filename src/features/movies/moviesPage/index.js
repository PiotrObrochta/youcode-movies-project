import { Wrapper } from "../../../common/Wrapper";
import { useEffect } from "react";
import { useState } from "react";
import { fetchPopularMovies } from "../../../api/movies";
import { MovieCard } from "./MovieCard";

export const MoviesPage = () => {
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
    <div>
      <h1>Popular Movies</h1>
      <Wrapper body={movies.slice(0, 8).map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))} />
    </div>
  );
};

export default MoviesPage;
