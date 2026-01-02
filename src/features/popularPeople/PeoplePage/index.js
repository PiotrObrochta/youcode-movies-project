import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectFetchPopularPeopleStatus,
} from "../peopleSlice";
import LoadingView from "../../../common/LoadingView";
import NoResultsView from "../../../common/NoResultsView";
import ErrorView from "../../../common/ErrorView";
import Pagination from "../../../common/Pagination";
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
import { Link } from "react-router-dom";
import {
  selectSearchResults,
  selectSearchStatus,
  selectSearchType,
  selectSubmittedQuery,
} from "../../search/searchSlice";
import noProfile from "../../../assets/no-profile.svg";

const PeoplePage = () => {
  const dispatch = useDispatch();

  const popularPeople = useSelector(selectPopularPeople);
  const popularStatus = useSelector(selectFetchPopularPeopleStatus);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const searchType = useSelector(selectSearchType);
  const submittedQuery = useSelector(selectSubmittedQuery);

  const isSearch = searchType === "people";

  useEffect(() => {
    if (!isSearch) dispatch(fetchPopularPeople(1));
  }, [dispatch, isSearch]);

  if (isSearch && searchStatus === "loading")
    return <LoadingView query={submittedQuery} />;

  if (!isSearch && popularStatus === "loading")
    return <LoadingView header="People loading..." />;

  if (popularStatus === "error") return <ErrorView />;

  const people = isSearch ? searchResults : popularPeople;

  if (isSearch && searchStatus === "success" && people.length === 0)
    return <NoResultsView query={submittedQuery} />;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearch
            ? `Search results for "${submittedQuery}"`
            : "Popular People"}
        </PageTitle>

        <PeopleGrid>
          {people.map((person) => (
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

        {!isSearch && <Pagination page="1" totalPages="500" />}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PeoplePage;
