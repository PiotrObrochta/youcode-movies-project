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

  const movieId = Number(id);

  const [movie, loadingMovie, errorMovie] = useMovie(movieId);
  const [credits, loadingCredits, errorCredits] = useMovieCredits(movieId);

  if (loadingMovie) return <LoadingView />;
  if (errorMovie) return <ErrorView />;
  if (!movie) return <ErrorView />;

  const backdropURL = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    : null;

  return (
    <>
      {backdropURL && (
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

        {!loadingCredits && !errorCredits && credits && (
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
