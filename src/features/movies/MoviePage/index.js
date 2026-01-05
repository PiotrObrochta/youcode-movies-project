import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearch } from "../../../common/search/searchSlice";

import useMovie from "./useMovie";
import useMovieCredits from "./useMovieCredits";

import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";
import PageWrapper from "../../../common/PageWrapper";

import { BackdropWrapper, Header, Hero, HeroContent } from "./styled";
import MovieDescription from "./MovieDescription";
import Rating from "../../../common/Rating";
import PeopleList from "./PeopleList";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  const [movie, loadingMovie, errorMovie] = useMovie(id);
  const [credits, loadingCredits, errorCredits] = useMovieCredits(id);

  if (loadingMovie) return <LoadingView />;
  if (errorMovie) return <ErrorView />;

  const backdropURL = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;

  return (
    <>
      {movie.backdrop_path && (
        <Hero>
          <BackdropWrapper $backdropURL={backdropURL}>
            <HeroContent>
              <Header>{movie.title}</Header>
              <Rating rate={movie.vote_average} votes={movie.vote_count} />
            </HeroContent>
          </BackdropWrapper>
        </Hero>
      )}

      <PageWrapper>
        <MovieDescription movie={movie} />

        {!loadingCredits && !errorCredits && (
          <>
            <PeopleList header="Cast" people={credits.cast} />
            <PeopleList header="Crew" people={credits.crew} />
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default MoviePage;
