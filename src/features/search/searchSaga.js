import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  submitSearch,
  setSearchResults,
  setSearchStatus,
  selectSubmittedQuery,
  selectSearchType,
} from "./searchSlice";
import { searchMovies, searchPeople } from "../tmdbApi";

function* fetchSearchHandler() {
  try {
    const query = yield select(selectSubmittedQuery);
    const type = yield select(selectSearchType);

    if (!query || !type) {
      yield put(setSearchResults([]));
      yield put(setSearchStatus("success"));
      return;
    }

    yield put(setSearchStatus("loading"));

    const results =
      type === "movies"
        ? yield call(searchMovies, query)
        : yield call(searchPeople, query);

    yield put(setSearchResults(results));
    yield put(setSearchStatus("success"));
  } catch (error) {
    console.error("Search saga error:", error);
    yield put(setSearchStatus("error"));
  }
}

export default function* searchSaga() {
  yield takeLatest(submitSearch.type, fetchSearchHandler);
}
