import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPopularPeople, setFetchPopularPeopleStatus, setPopularPeople } from "./peopleSlice"
import { getDataFromApi } from "../tmdbApi";

function* fetchPopularPeopleHandler (page) {
    try {
        yield put(setFetchPopularPeopleStatus('loading'));
        yield delay(1000);

        const People = yield call(getDataFromApi, "people", page || 1);

        yield put(setPopularPeople(People))
        yield put(setFetchPopularPeopleStatus("success"))
    } catch (error) {
        yield put(setFetchPopularPeopleStatus("error"))
    }
}

export default function* peopleSaga () {
    yield call(fetchPopularPeopleHandler)
    yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}