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

const PeoplePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get("page") || 1);

  const people = useSelector(selectPopularPeople);
  const status = useSelector(selectFetchPopularPeopleStatus);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const submittedQuery = useSelector(selectSubmittedQuery);

  useEffect(() => {
    if (searchStatus !== "success") {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, page, searchStatus]);

  if (status === "loading") return <LoadingView />;
  if (status === "error") return <ErrorView />;

  const isSearching = searchStatus === "loading";
  const isSearchDone = searchStatus === "success";

  const showNoResults = isSearchDone && searchResults.length === 0;
  const list = isSearchDone ? searchResults : people;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearching
            ? `Search results for "${submittedQuery}"`
            : isSearchDone
            ? `Search results for "${submittedQuery}" (${searchResults.length})`
            : "Popular People"}
        </PageTitle>

        {isSearching && <LoadingView />}
        {showNoResults && <NoResultsView query={submittedQuery} />}

        {!isSearching && !showNoResults && (
          <PeopleGrid>
            {list.map((person) => (
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

        {!isSearchDone && (
          <Pagination page={page} totalPages={500} basePath="/people" />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PeoplePage;
