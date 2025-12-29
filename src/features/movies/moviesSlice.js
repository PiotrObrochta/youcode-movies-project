import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        fetchPopularMoviesStatus: "loading",
        totalPopularMoviesPages: 1,
        moviesGenres: [],
        fetchMoviesGenresStatus: "loading"
    },
    reducers: {
        setPopularMovies: (state, { payload: moviesList }) => {
            state.popularMovies = moviesList
        },
        fetchPopularMovies: (state, action) => { },
        setFetchPopularMoviesStatus: (state, { payload: fetchStatus }) => {
            state.fetchPopularMoviesStatus = fetchStatus;
        },
        setMoviesGenres: (state, { payload: genresList }) => {
            state.moviesGenres = genresList;
        },
        fetchMoviesGenres: () => { },
        setFetchMoviesGenresStatus: (state, { payload: fetchStatus }) => {
            state.fetchMoviesGenresStatus = fetchStatus
        },
        setTotalPopularMoviesPages: (state, { payload }) => {
            state.totalPopularMoviesPages = payload;
        },

    }
}
);

export const {
    setPopularMovies,
    fetchPopularMovies,
    setFetchPopularMoviesStatus,
    setTotalPopularMoviesPages,
    setMoviesGenres,
    fetchMoviesGenres,
    setFetchMoviesGenresStatus
} = moviesSlice.actions

export const selectPopularMoviesState = ({ movies }) => movies;

export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;
export const selectFetchPopularMoviesStatus = state => selectPopularMoviesState(state).fetchPopularMoviesStatus;
export const selectMoviesGenres = state => selectPopularMoviesState(state).moviesGenres;
export const selectFetchMoviesGenresStatus = state => selectPopularMoviesState(state).fetchMoviesGenresStatus;
export const selectTotalPopularMoviesPages = state => selectPopularMoviesState(state).totalPopularMoviesPages;


export default moviesSlice.reducer;