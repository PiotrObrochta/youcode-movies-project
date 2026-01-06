import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuery, submitSearch } from "./searchSlice";

export const useSearchPageEffect = ({ searchFromUrl, submittedQuery }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchFromUrl) return;
    if (searchFromUrl === submittedQuery) return;

    dispatch(setQuery(searchFromUrl));
    dispatch(submitSearch());
  }, [dispatch, searchFromUrl, submittedQuery]);
};
