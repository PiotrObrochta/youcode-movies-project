import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectFetchPopularPeopleStatus,
} from "../peopleSlice";
// import { Link } from "react-router-dom";  ( jak będzie juz strona o aktorze, to usunąc komentarz )

import LoadingView from "../../../common/LoadingView";

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
            <PersonTile
              key={person.id}
              // as={Link}
              // to={`/person/${person.id}`} <- przygotowane pod przyszłą stronę o aktorze
            >
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
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PeoplePage;
