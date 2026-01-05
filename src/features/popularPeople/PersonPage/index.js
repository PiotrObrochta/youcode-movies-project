import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearch } from "../../../common/search/searchSlice";

import PersonHeader from "./PersonHeader";
import PersonMoviesCast from "./PersonMovies/PersonMoviesCast";
import PersonMoviesCrew from "./PersonMovies/PersonMoviesCrew";
import { Wrapper, HeaderSection } from "./styled";
import { getPersonDetails, getPersonMovieCredits } from "../../tmdbApi";

const PersonPage = () => {
  const { personId } = useParams();
  const dispatch = useDispatch();

  const [person, setPerson] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  useEffect(() => {
    const fetchPerson = async () => {
      const personData = await getPersonDetails(personId);
      const credits = await getPersonMovieCredits(personId);

      setPerson(personData);
      setCast(credits.cast || []);
      setCrew(credits.crew || []);
    };

    fetchPerson();
  }, [personId]);

  if (!person) return null;

  return (
    <Wrapper>
      <HeaderSection>
        <PersonHeader person={person} />
      </HeaderSection>

      <PersonMoviesCast cast={cast} />
      <PersonMoviesCrew crew={crew} />
    </Wrapper>
  );
};

export default PersonPage;
