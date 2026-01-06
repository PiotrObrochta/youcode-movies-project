import { useEffect } from "react";
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
  selectSearchResults,
  selectSubmittedQuery,
} from "../../../common/search/searchSlice";

import { useSearchPageEffect } from "../../../common/search/useSearchPageEffect";
import { useSearchResults } from "../../../common/search/useSearchResults";
import { useSearchLoaderEffect } from "../../../common/search/useSearchLoaderEffect";

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

  const people = useSelector(selectPopularPeople) || [];
  const status = useSelector(selectFetchPopularPeopleStatus);

  const searchResults = useSelector(selectSearchResults) || [];
  const submittedQuery = useSelector(selectSubmittedQuery);

  const hasSearchResults = searchResults.length > 0;

  useSearchPageEffect({ searchFromUrl, submittedQuery });

  const {
    isSearchActive,
    pagedResults,
    totalPages: searchTotalPages,
  } = useSearchResults({
    searchResults,
    page,
    pageSize: SEARCH_PAGE_SIZE,
    searchFromUrl,
  });

  const showLoader = useSearchLoaderEffect({
    isSearchActive,
    page,
  });

  useEffect(() => {
    if (!searchFromUrl) {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, page, searchFromUrl]);

  if (status === "loading" && !isSearchActive) return <LoadingView />;
  if (status === "error") return <ErrorView />;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearchActive && hasSearchResults
            ? `Search results for "${submittedQuery}" (${searchResults.length})`
            : isSearchActive
            ? ""
            : "Popular People"}
        </PageTitle>

        {showLoader && <LoadingView />}

        {!showLoader && isSearchActive && !hasSearchResults && (
          <NoResultsView />
        )}

        {!showLoader && (
          <PeopleGrid>
            {(isSearchActive ? pagedResults : people).map((person) => (
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
            hasSearchResults &&
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
