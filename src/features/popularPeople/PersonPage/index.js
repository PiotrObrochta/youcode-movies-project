import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearch } from "../../../common/search/searchSlice";

import PersonHeader from "./PersonHeader";
import PersonMoviesCast from "./PersonMovies/PersonMoviesCast";
import PersonMoviesCrew from "./PersonMovies/PersonMoviesCrew";
import { Wrapper, HeaderSection } from "./styled";

import { getPersonDetails, getPersonMovieCredits } from "../../tmdbApi";

import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";

const PersonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [person, setPerson] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  useEffect(() => {
    if (!id || isNaN(Number(id))) return;

    const fetchPerson = async () => {
      try {
        setStatus("loading");

        const personData = await getPersonDetails(Number(id));
        const credits = await getPersonMovieCredits(Number(id));

        setPerson(personData);
        setCast(credits.cast || []);
        setCrew(credits.crew || []);
        setStatus("idle");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    fetchPerson();
  }, [id]);

  if (status === "loading") return <LoadingView />;
  if (status === "error") return <ErrorView />;
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
