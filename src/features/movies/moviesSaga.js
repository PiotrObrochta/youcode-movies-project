import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, setFetchPopularMoviesStatus, setPopularMovies } from "./moviesSlice"
import { getDataFromApi } from "../tmdbApi";

function* fetchPopularMoviesHandler (page) {
    try {
        yield put(setFetchPopularMoviesStatus('loading'));
        yield delay(1000);

        const movies = yield call(getDataFromApi, "movie", page || 1);

        yield put(setPopularMovies(movies))
        yield put(setFetchPopularMoviesStatus("success"))
    } catch (error) {
        yield put(setFetchPopularMoviesStatus("error"))
    }
}

export default function* moviesSaga () {
    yield call(fetchPopularMoviesHandler)
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}