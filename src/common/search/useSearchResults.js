import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import {
  setQuery,
  submitSearch,
  clearSearch,
  selectSearchResults,
  selectSearchStatus,
  selectSubmittedQuery,
} from "./searchSlice";

const MIN_LENGTH = 3;
const LOADER_TIME = 800;

const useSearchResults = ({ listPath }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const submittedQuery = useSelector(selectSubmittedQuery);

  const [showLoader, setShowLoader] = useState(false);

  const params = new URLSearchParams(location.search);
  const searchFromUrl = params.get("search");
  const page = Number(params.get("page") || 1);

  const isSearchActive = Boolean(searchFromUrl);

  useEffect(() => {
    if (!searchFromUrl) {
      dispatch(clearSearch());
      return;
    }

    if (searchFromUrl.length < MIN_LENGTH) {
      history.replace(listPath);
      dispatch(clearSearch());
      return;
    }

    if (searchFromUrl !== submittedQuery) {
      dispatch(setQuery(searchFromUrl));
      dispatch(submitSearch());
    }
  }, [dispatch, searchFromUrl, submittedQuery, history, listPath]);

  useEffect(() => {
    if (searchStatus === "loading") {
      setShowLoader(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (searchStatus === "success" || searchStatus === "error") {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, LOADER_TIME);

      return () => clearTimeout(timer);
    }
  }, [searchStatus, page]);

  return {
    isSearchActive,
    searchResults,
    searchStatus,
    submittedQuery,
    searchFromUrl,
    page,
    showLoader,
  };
};

export default useSearchResults;
