import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../tmdbApi";

const useMovieCredits = (movieId) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId || isNaN(movieId)) {
      setCredits(null);
      setLoading(false);
      setError(new Error("Invalid movie id"));
      return;
    }

    const loadCredits = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCredits(movieId);
        setCredits(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadCredits();
  }, [movieId]);

  return [credits, loading, error];
};

export default useMovieCredits;
