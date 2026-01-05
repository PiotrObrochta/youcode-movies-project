import { all } from "redux-saga/effects";
import moviesSaga from "./features/movies/moviesSaga";
import peopleSaga from "./features/popularPeople/peopleSaga";
import genresSaga from "./common/genres/genresSaga";
import searchSaga from "./common/search/searchSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga(), genresSaga(), searchSaga()]);
}
