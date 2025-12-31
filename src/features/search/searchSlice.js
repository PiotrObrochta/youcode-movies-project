import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    searchType: null, // "movies" | "people"
    results: [],
    status: "idle",
  },
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setSearchType: (state, { payload }) => {
      state.searchType = payload;
    },
    fetchSearchResults: () => {},
    setSearchResults: (state, { payload }) => {
      state.results = payload;
    },
    setSearchStatus: (state, { payload }) => {
      state.status = payload;
    },
    clearSearch: (state) => {
      state.query = "";
      state.searchType = null;
      state.results = [];
      state.status = "idle";
    },
  },
});

export const {
  setQuery,
  setSearchType,
  fetchSearchResults,
  setSearchResults,
  setSearchStatus,
  clearSearch,
} = searchSlice.actions;

export const selectSearch = (state) => state.search;
export const selectSearchResults = (state) => state.search.results;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchQuery = (state) => state.search.query;
export const selectSearchType = (state) => state.search.searchType;

export default searchSlice.reducer;
