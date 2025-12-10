import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        popularPeople: [],
        fetchPopularPeopleStatus: "loading"
    },
    reducers: {
        setPopularPeople: (state, {payload: peopleList}) => {
            state.popularPeople = peopleList
        },
        fetchPopularPeople: () => { },
        setFetchPopularPeopleStatus: (state, { payload: fetchStatus }) => {
            state.fetchPopularPeopleStatus = fetchStatus;
        }
    }
}
);

export const {
    setPopularPeople,
    fetchPopularPeople,
    setFetchPopularPeopleStatus
} = peopleSlice.actions

export const selectPopularPeopleState = ({ people }) => people;

export const selectPopularPeople = state => selectPopularPeopleState(state).popularPeople;
export const selectFetchPopularPeopleStatus = state => selectPopularPeopleState(state).fetchPopularPeopleStatus;

export default peopleSlice.reducer;