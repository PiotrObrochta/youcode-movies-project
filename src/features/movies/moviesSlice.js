import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: ["Harry Potter", "Mulan", "Zaczarowani"]
    },
    reducers: {
        fetchMovies: () => { }
    }
}
);

export const {
    fetchMovies
} = moviesSlice.actions

export const selectMoviesState = ({ movies }) => movies;

export const selectMovies = state => selectMoviesState(state).movies

export default moviesSlice.reducer;