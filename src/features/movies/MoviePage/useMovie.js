import { useEffect, useState } from "react";
import { fetchMovieData } from "../../tmdbApi";

const useMovie = (movieId) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {

            try {
                const data = await fetchMovieData(movieId);
                setMovie(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            };
        };

        loadMovie();

    }, [movieId]);

    return [movie, loading, error];
}

export default useMovie;