import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

import LoadingView from "../../../common/LoadingView";
import Pagination from "../../../common/Pagination";
import ErrorView from "../../../common/ErrorView";
import NoResultsView from "../../../common/NoResultsView";

import {
  fetchPopularPeople,
  selectPopularPeople,
  selectFetchPopularPeopleStatus,
} from "../peopleSlice";

import {
  setQuery,
  submitSearch,
  selectSearchResults,
  selectSearchStatus,
  selectSubmittedQuery,
} from "../../../common/search/searchSlice";

import {
  PageWrapper,
  ContentWrapper,
  PageTitle,
  PeopleGrid,
  PersonTile,
  Photo,
  Name,
  PhotoWrapper,
} from "./styled";

import noProfile from "../../../assets/no-profile.svg";

const SEARCH_PAGE_SIZE = 36;

const PeoplePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page") || 1);
  const searchFromUrl = params.get("search");

  const people = useSelector(selectPopularPeople);
  const status = useSelector(selectFetchPopularPeopleStatus);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const submittedQuery = useSelector(selectSubmittedQuery);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (searchFromUrl && searchFromUrl !== submittedQuery) {
      dispatch(setQuery(searchFromUrl));
      dispatch(submitSearch());
    }
  }, [dispatch, searchFromUrl, submittedQuery]);

  useEffect(() => {
    if (!searchFromUrl) {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, page, searchFromUrl]);

  useEffect(() => {
    if (searchStatus === "loading") {
      setShowLoader(true);
      return;
    }

    if (searchStatus === "success" || searchStatus === "error") {
      const timer = setTimeout(() => setShowLoader(false), 800);
      return () => clearTimeout(timer);
    }
  }, [searchStatus]);

  if (status === "loading" && !searchFromUrl) return <LoadingView />;
  if (status === "error") return <ErrorView />;

  const isSearchActive = Boolean(searchFromUrl);

  const pagedSearchResults = searchResults.slice(
    (page - 1) * SEARCH_PAGE_SIZE,
    page * SEARCH_PAGE_SIZE
  );

  const searchTotalPages = Math.ceil(searchResults.length / SEARCH_PAGE_SIZE);

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearchActive
            ? `Search results for "${submittedQuery}" (${
                showLoader ? 0 : searchResults.length
              })`
            : "Popular People"}
        </PageTitle>

        {showLoader && <LoadingView />}

        {!showLoader && isSearchActive && searchResults.length === 0 && (
          <NoResultsView query={submittedQuery} />
        )}

        {!showLoader && (
          <PeopleGrid>
            {(isSearchActive ? pagedSearchResults : people).map((person) => (
              <PersonTile key={person.id} as={Link} to={`/people/${person.id}`}>
                <PhotoWrapper>
                  <Photo
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                        : noProfile
                    }
                    alt={person.name}
                  />
                </PhotoWrapper>
                <Name>{person.name}</Name>
              </PersonTile>
            ))}
          </PeopleGrid>
        )}

        {!showLoader &&
          (isSearchActive ? (
            searchTotalPages > 1 && (
              <Pagination
                page={page}
                totalPages={searchTotalPages}
                basePath={`/people?search=${encodeURIComponent(
                  submittedQuery
                )}`}
              />
            )
          ) : (
            <Pagination page={page} totalPages={500} basePath="/people" />
          ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PeoplePage;
