import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectFetchPopularPeopleStatus,
} from "../peopleSlice";

import LoadingView from "../../../common/LoadingView";
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
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);
  const status = useSelector(selectFetchPopularPeopleStatus);

  useEffect(() => {
    dispatch(fetchPopularPeople(1));
  }, [dispatch]);

  if (status === "loading") {
    return <LoadingView header="People loading..." />;
  }

  if (status === "error") {
    return <h2>Cannot load people data</h2>;
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>Popular People</PageTitle>

        <PeopleGrid>
          {people.map((person) => (
            <PersonTile key={person.id} as={Link} to={`/people/${person.id}`}>
              <PhotoWrapper>
                <Photo
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                      : "/assets/no-profile.png"
                  }
                  alt={person.name}
                />
              </PhotoWrapper>
              <Name>{person.name}</Name>
            </PersonTile>
          ))}
        </PeopleGrid>
        <Pagination page={"1"} totalPages={"500"} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PeoplePage;
