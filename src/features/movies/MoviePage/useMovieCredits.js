import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../tmdbApi";

const useMovieCredits = (movieId) => {
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCredits = async () => {

            try {
                const data = await fetchMovieCredits(movieId);
                setCredits(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            };
        };

        loadCredits();
    }, [movieId]);

    return [credits, loading, error];
}

export default useMovieCredits;