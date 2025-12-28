import { useSelector } from "react-redux";
import {
  Card,
  PosterWrapper,
  Poster,
  Content,
  InfoWrapper,
  Title,
  Info,
  GenresWrapper,
  GenreTag,
  RatingWrapper,
  RatingValue,
  RatingCount,
  Star,
  StyledLink,
} from "./styled";
import {
  selectFetchMoviesGenresStatus,
  selectMoviesGenres,
} from "../../moviesSlice";

export const MovieCard = ({ movie, mode }) => {
  const moviesGenres = useSelector(selectMoviesGenres);
  const fetchMoviesGenresStatus = useSelector(selectFetchMoviesGenresStatus);

  if (!movie) return null;
  if (fetchMoviesGenresStatus !== "success") return;

  const movieGenres = (movie.genre_ids || [])
    .slice(0, 3)
    .map((id) => moviesGenres.find((genre) => genre.id === id));

  return (
    <StyledLink to={`/movie/${movie.id}`}>
      <Card>
        <PosterWrapper>
          <Poster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/292x434?text=No+Image"
            }
            alt={movie.title}
          />
        </PosterWrapper>

        <Content>
          <InfoWrapper>
            <Title>{movie.title}</Title>
            {mode === "cast" && movie.character && (
              <Info>
                as {movie.character}
                {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
              </Info>
            )}

            {mode === "crew" && (movie.job || movie.release_date) && (
              <Info>
                {movie.job && `${movie.job} `}
                {movie.release_date && `(${movie.release_date.slice(0, 4)})`}
              </Info>
            )}


            {!mode && (
              <Info>{movie.release_date?.slice(0, 4)}</Info>
            )}
            <GenresWrapper>
              {movieGenres.map(({ id, name }) => (
                <GenreTag key={id}>{name}</GenreTag>
              ))}
            </GenresWrapper>
          </InfoWrapper>
          <RatingWrapper>
            <Star />
            <RatingValue>
              {movie.vote_average
                ? movie.vote_average.toFixed(1).replace(".", ",")
                : "-"}
            </RatingValue>
            <RatingCount>{movie.vote_count ?? 0} votes</RatingCount>
          </RatingWrapper>
        </Content>
      </Card>
    </StyledLink>
  );
};

export default MovieCard;
