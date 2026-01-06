import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  setQuery,
  submitSearch,
  clearSearch,
  selectSearchQuery,
} from "./searchSlice";

const MIN_LENGTH = 3;
const DEBOUNCE_TIME = 800;

export const useSearchNavigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const query = useSelector(selectSearchQuery);
  const debounceRef = useRef(null);

  const isPeopleContext = location.pathname.startsWith("/people");
  const basePath = isPeopleContext ? "/people" : "/movies";

  const executeSearch = (value) => {
    if (value.length >= MIN_LENGTH) {
      history.push(`${basePath}?search=${encodeURIComponent(value)}&page=1`);
      dispatch(submitSearch());
      return;
    }

    history.push(basePath);
    dispatch(clearSearch());
  };

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      executeSearch(value);
    }, DEBOUNCE_TIME);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      executeSearch(query);
    }
  };

  const resetSearch = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    dispatch(clearSearch());
    history.push(basePath);
  };

  return {
    query,
    onChange,
    onKeyDown,
    resetSearch,
    isPeopleContext,
  };
};
