import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, setFetchMoviesGenresStatus, setFetchPopularMoviesStatus, setMoviesGenres, setPopularMovies } from "./moviesSlice"
import { getDataFromApi } from "../tmdbApi";
import { setTotalPopularMoviesPages } from "./moviesSlice";


function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield put(setFetchPopularMoviesStatus("loading"));
    yield delay(1000);

    const movies = yield call(getDataFromApi, "movie", page || 1);

    yield put(setPopularMovies(movies));
    yield put(setTotalPopularMoviesPages(500));
    yield put(setFetchPopularMoviesStatus("success"));
  } catch {
    yield put(setFetchPopularMoviesStatus("error"));
  }
}

function* fetchMoviesGenresHandler() {
    try {
        yield put(setFetchMoviesGenresStatus('loading'));

        const movies = yield call(getDataFromApi, "genre");

        yield put(setMoviesGenres(movies))
        yield put(setFetchMoviesGenresStatus("success"))
    } catch (error) {
        yield put(setFetchMoviesGenresStatus("error"))
    }
}

export default function* moviesSaga() {
    yield call(fetchMoviesGenresHandler)
    yield call(fetchPopularMoviesHandler, { payload: 1 })
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}