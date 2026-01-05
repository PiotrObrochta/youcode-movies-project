import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  submittedQuery: "",
  results: [],
  status: "idle", // idle | loading | success | error
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },

    submitSearch: (state) => {
      state.submittedQuery = state.query;
      state.status = "loading";
    },

    setResults: (state, { payload }) => {
      state.results = payload;
    },

    setStatus: (state, { payload }) => {
      state.status = payload;
    },

    clearSearch: (state) => {
      state.query = "";
      state.submittedQuery = "";
      state.results = [];
      state.status = "idle";
    },
  },
});

export const { setQuery, submitSearch, setResults, setStatus, clearSearch } =
  searchSlice.actions;

export const selectSearchQuery = (state) => state.search.query;
export const selectSubmittedQuery = (state) => state.search.submittedQuery;
export const selectSearchResults = (state) => state.search.results;
export const selectSearchStatus = (state) => state.search.status;

export default searchSlice.reducer;
