import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchSearchResults,
  setSearchResults,
  setSearchStatus,
  selectSearchQuery,
  selectSearchType,
} from "./searchSlice";
import { searchMovies, searchPeople } from "../tmdbApi";

function* fetchSearchHandler() {
  try {
    yield put(setSearchStatus("loading"));

    const query = yield select(selectSearchQuery);
    const type = yield select(selectSearchType);

    if (!query || !type) {
      yield put(setSearchResults([]));
      yield put(setSearchStatus("success"));
      return;
    }

    const results =
      type === "movies"
        ? yield call(searchMovies, query)
        : yield call(searchPeople, query);

    yield put(setSearchResults(results));
    yield put(setSearchStatus("success"));
  } catch {
    yield put(setSearchStatus("error"));
  }
}

export default function* searchSaga() {
  yield takeLatest(fetchSearchResults.type, fetchSearchHandler);
}
