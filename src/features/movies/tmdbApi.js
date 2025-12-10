export const getPopularMovies = async (page = 1) => {
    const apiKey = "a85fbe514b26d45ce26b9e97d6b6977c";
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Fetching movies failed")
    }

    const result = await response.json();

    return await result.results;

}

