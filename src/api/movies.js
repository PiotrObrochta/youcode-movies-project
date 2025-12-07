import { API_KEY, BASE_URL } from "./config";

export const fetchPopularMovies = async (page = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await res.json();
    return data.results; // tablica filmów
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
};
