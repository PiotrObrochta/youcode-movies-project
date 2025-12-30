const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const getDataFromApi = async (type = "movie", page = 1) => {

    let endpoint = undefined;

    switch (type) {
        case "movie":
            endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
            break;
        case "people":
            endpoint = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;
            break;
        case "genre":
            endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
            break;
        default:
            endpoint = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    }

    const response = await fetch(endpoint);


    if (!response.ok) {
        throw new Error("Fetching movies failed")
    }

    const result = await response.json();

    if (type === "genre") return result.genres;
    return await result.results;
};

export const fetchMovieData = async (id) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Fetching movies failed");
    }

    return await response.json();
};

export const fetchMovieCredits = async (id) => {
    const endpoint = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Fetching movies failed");
    }

    return await response.json();
}

export const getPersonDetails = async (personId) => {
    const apiKey = "a85fbe514b26d45ce26b9e97d6b6977c";

    const endpoint = `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Fetching person details failed");
    }

    return await response.json();
};

export const getPersonMovieCredits = async (personId) => {
    const apiKey = "a85fbe514b26d45ce26b9e97d6b6977c";

    const endpoint = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Fetching person movie credits failed");
    }

    const result = await response.json();

    return {
        cast: result.cast || [],
        crew: result.crew || [],
    };
};
