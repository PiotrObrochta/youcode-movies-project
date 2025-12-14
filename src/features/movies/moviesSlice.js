import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        fetchPopularMoviesStatus: "loading",
        moviesGenres: [],
        fetchMoviesGenresStatus: "loading"
    },
    reducers: {
        setPopularMovies: (state, {payload: moviesList}) => {
            state.popularMovies = moviesList
        },
        fetchPopularMovies: () => { },
        setFetchPopularMoviesStatus: (state, { payload: fetchStatus }) => {
            state.fetchPopularMoviesStatus = fetchStatus;
        },
        setMoviesGenres: (state, {payload: genresList}) => {
            state.moviesGenres = genresList;
        },
        fetchMoviesGenres: () => {},
        setFetchMoviesGenresStatus: (state, {payload: fetchStatus}) => {
            state.fetchMoviesGenresStatus = fetchStatus
        }
    }
}
);

export const {
    setPopularMovies,
    fetchPopularMovies,
    setFetchPopularMoviesStatus,
    setMoviesGenres,
    fetchMoviesGenres,
    setFetchMoviesGenresStatus
} = moviesSlice.actions

export const selectPopularMoviesState = ({ movies }) => movies;

export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;
export const selectFetchPopularMoviesStatus = state => selectPopularMoviesState(state).fetchPopularMoviesStatus;
export const selectMoviesGenres = state => selectPopularMoviesState(state).moviesGenres;
export const selectFetchMoviesGenresStatus = state => selectPopularMoviesState(state).fetchMoviesGenresStatus;

export default moviesSlice.reducer;