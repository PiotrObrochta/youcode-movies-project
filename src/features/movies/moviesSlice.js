import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        fetchPopularMoviesStatus: "loading"
    },
    reducers: {
        setPopularMovies: (state, {payload: moviesList}) => {
            state.popularMovies = moviesList
        },
        fetchPopularMovies: () => { },
        setFetchPopularMoviesStatus: (state, { payload: fetchStatus }) => {
            state.fetchPopularMoviesStatus = fetchStatus;
        }
    }
}
);

export const {
    setPopularMovies,
    fetchPopularMovies,
    setFetchPopularMoviesStatus
} = moviesSlice.actions

export const selectPopularMoviesState = ({ movies }) => movies;

export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;
export const selectFetchPopularMoviesStatus = state => selectPopularMoviesState(state).fetchPopularMoviesStatus;

export default moviesSlice.reducer;