import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        fetchPopularMoviesStatus: "loading",
        totalPopularMoviesPages: 1
    },
    reducers: {
        setPopularMovies: (state, { payload: moviesList }) => {
            state.popularMovies = moviesList
        },
        fetchPopularMovies: (state, action) => { },
        setFetchPopularMoviesStatus: (state, { payload: fetchStatus }) => {
            state.fetchPopularMoviesStatus = fetchStatus;
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
    setTotalPopularMoviesPages
} = moviesSlice.actions

export const selectPopularMoviesState = ({ movies }) => movies;

export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;
export const selectFetchPopularMoviesStatus = state => selectPopularMoviesState(state).fetchPopularMoviesStatus;
export const selectTotalPopularMoviesPages = state => selectPopularMoviesState(state).totalPopularMoviesPages;


export default moviesSlice.reducer;