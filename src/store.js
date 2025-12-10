import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import moviesReducer from "./features/movies/moviesSlice"
import peopleReducer from "./features/popularPeople/peopleSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        people: peopleReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);

export default store