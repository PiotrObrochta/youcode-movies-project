import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  submitSearch,
  setResults,
  setStatus,
  selectSubmittedQuery,
} from "./searchSlice";

import { searchMovies, searchPeople } from "../../features/tmdbApi";

function* searchHandler() {
  const query = yield select(selectSubmittedQuery);

  if (!query || query.length < 3) return;

  try {
    const isPeople = window.location.hash.startsWith("#/people");

    const results = isPeople
      ? yield call(searchPeople, query)
      : yield call(searchMovies, query);

    yield put(setResults(results));
    yield put(setStatus("success"));
  } catch (error) {
    console.error("Search error:", error);
    yield put(setStatus("error"));
  }
}

export default function* searchSaga() {
  yield takeLatest(submitSearch.type, searchHandler);
}
