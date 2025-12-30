import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        moviesGenres: [],
        fetchMoviesGenresStatus: "loading"
    },
    reducers: {
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
    setMoviesGenres,
    fetchMoviesGenres,
    setFetchMoviesGenresStatus
} = genresSlice.actions

export const selectGenresState = ({ genres }) => genres;

export const selectMoviesGenres = state => selectGenresState(state).moviesGenres;
export const selectFetchMoviesGenresStatus = state => selectGenresState(state).fetchMoviesGenresStatus;

export default genresSlice.reducer;