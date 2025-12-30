import { call, put} from "redux-saga/effects";
import { setFetchMoviesGenresStatus,  setMoviesGenres } from "./genresSlice"
import { getDataFromApi } from "../../features/tmdbApi";

function* fetchMoviesGenresHandler () {
    try {
        yield put(setFetchMoviesGenresStatus('loading'));

        const genres = yield call(getDataFromApi, "genre");

        yield put(setMoviesGenres(genres))
        yield put(setFetchMoviesGenresStatus("success"))
    } catch (error) {
        yield put(setFetchMoviesGenresStatus("error"))
    }
}

export default function* genresSaga () {
    yield call(fetchMoviesGenresHandler)
}