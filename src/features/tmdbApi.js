const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const MAX_SEARCH_PAGES = 5;

export const getDataFromApi = async (type = "movie", page = 1) => {
  let endpoint;

  switch (type) {
    case "movie":
      endpoint = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      break;
    case "people":
      endpoint = `${baseUrl}/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      break;
    case "genre":
      endpoint = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`;
      break;
    default:
      endpoint = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  }

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Fetching data failed");
  }

  const result = await response.json();
  return type === "genre" ? result.genres : result.results;
};

const fetchSearchPage = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Search request failed");
  }
  return await response.json();
};

export const searchMovies = async (query) => {
  const firstPageUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
    query
  )}&page=1`;

  const firstPage = await fetchSearchPage(firstPageUrl);

  const totalPages = Math.min(firstPage.total_pages, MAX_SEARCH_PAGES);
  let results = [...firstPage.results];

  for (let page = 2; page <= totalPages; page++) {
    const pageUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
      query
    )}&page=${page}`;

    const pageData = await fetchSearchPage(pageUrl);
    results = results.concat(pageData.results);
  }

  return results;
};

export const searchPeople = async (query) => {
  const firstPageUrl = `${baseUrl}/search/person?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
    query
  )}&page=1`;

  const firstPage = await fetchSearchPage(firstPageUrl);

  const totalPages = Math.min(firstPage.total_pages, MAX_SEARCH_PAGES);
  let results = [...firstPage.results];

  for (let page = 2; page <= totalPages; page++) {
    const pageUrl = `${baseUrl}/search/person?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
      query
    )}&page=${page}`;

    const pageData = await fetchSearchPage(pageUrl);
    results = results.concat(pageData.results);
  }

  return results;
};

export const fetchMovieData = async (id) => {
  const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error("Fetching movie failed");
  }
  return await response.json();
};

export const fetchMovieCredits = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Fetching movie credits failed");
  }
  return await response.json();
};

export const getPersonDetails = async (id) => {
  const response = await fetch(
    `${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Fetching person details failed");
  }
  return await response.json();
};

export const getPersonMovieCredits = async (id) => {
  const response = await fetch(
    `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Fetching person movie credits failed");
  }

  const result = await response.json();
  return {
    cast: result.cast || [],
    crew: result.crew || [],
  };
};
