import { useEffect, useState } from "react";
import { fetchMovieData } from "../../tmdbApi";

const useMovie = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId || isNaN(movieId)) {
      setLoading(false);
      setError(new Error("Invalid movie id"));
      return;
    }

    const loadMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieData(movieId);
        setMovie(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [movieId]);

  return [movie, loading, error];
};

export default useMovie;
