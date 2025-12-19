import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectFetchPopularPeopleStatus,
} from "../peopleSlice";
import { Wrapper, Title, PeopleGrid, PersonTile, Photo, Name } from "./styled";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);
  const status = useSelector(selectFetchPopularPeopleStatus);

  useEffect(() => {
    dispatch(fetchPopularPeople(1));
  }, [dispatch]);

  if (status === "loading") return <h2>Loading people...</h2>;
  if (status === "error") return <h2>Cannot load people data</h2>;

  return (
    <Wrapper>
      <Title>Popular people</Title>

      <PeopleGrid>
        {people.map((person) => {
          console.log(person); // <- sprawdź, czy jest person.name
          return (
            <PersonTile key={person.id}>
              <Photo
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                    : "/assets/no-profile.png"
                }
              />
              <Name>{person.name}</Name>
            </PersonTile>
          );
        })}
      </PeopleGrid>
    </Wrapper>
  );
};

export default PeoplePage;
