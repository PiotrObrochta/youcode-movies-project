import { createSlice } from "@reduxjs/toolkit";

export const SEARCH_RESULTS_PER_PAGE = 24;

const initialState = {
  query: "",
  submittedQuery: "",
  results: [],
  status: "idle",
  page: 1,
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
      state.page = 1;
    },

    setResults: (state, { payload }) => {
      state.results = payload;
      state.status = "success";
    },

    setStatus: (state, { payload }) => {
      state.status = payload;
    },

    setSearchPage: (state, { payload }) => {
      state.page = payload;
    },

    clearSearch: () => initialState,
  },
});

export const {
  setQuery,
  submitSearch,
  setResults,
  setStatus,
  setSearchPage,
  clearSearch,
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.query;
export const selectSubmittedQuery = (state) => state.search.submittedQuery;
export const selectSearchResults = (state) => state.search.results;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchPage = (state) => state.search.page;

export default searchSlice.reducer;
