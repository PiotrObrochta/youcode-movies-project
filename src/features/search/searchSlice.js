import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    inputValue: "",
    submittedQuery: "",
    searchType: null,
    results: [],
    status: "idle",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    setSearchStatus: (state, action) => {
      state.status = action.payload;
    },
    submitSearch: (state) => {
      state.submittedQuery = state.inputValue;
      state.inputValue = "";
    },
    clearSearch: (state) => {
      state.inputValue = "";
      state.submittedQuery = "";
      state.results = [];
      state.searchType = null;
      state.status = "idle";
    },
  },
});

export const {
  setInputValue,
  setSearchType,
  setSearchResults,
  setSearchStatus,
  submitSearch,
  clearSearch,
} = searchSlice.actions;

export const selectInputValue = (state) => state.search.inputValue;
export const selectSubmittedQuery = (state) => state.search.submittedQuery;
export const selectSearchType = (state) => state.search.searchType;
export const selectSearchResults = (state) => state.search.results;
export const selectSearchStatus = (state) => state.search.status;

export default searchSlice.reducer;
