import { useSelector } from "react-redux";
import {
  Card,
  Poster,
  Content,
  Title,
  Info,
  GenresWrapper,
  GenreTag,
  RatingWrapper,
  RatingValue,
  RatingCount,
  PosterWrapper,
} from "./styled";
import { selectFetchMoviesGenresStatus, selectMoviesGenres } from "../../moviesSlice";

export const MovieCard = ({ movie }) => {
  const moviesGenres = useSelector(selectMoviesGenres);
  const fetchMoviesGeneresStatus = useSelector(selectFetchMoviesGenresStatus);

  if (!movie) return null;
  if (fetchMoviesGeneresStatus !== "success") return;

  const movieGenres = (movie.genre_ids || []).slice(0, 3).map(id => moviesGenres.find(genre => genre.id === id))


  return (
    <Card>
      <PosterWrapper>
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
        />
      </PosterWrapper>
      <Content>
        <Title>{movie.title}</Title>
        <Info>{movie.release_date?.slice(0, 4)}</Info>
        <GenresWrapper>
          {movieGenres.map(({ id, name }) => (
            <GenreTag key={id}>{name}</GenreTag>
          ))}
        </GenresWrapper>
        <RatingWrapper>
          <RatingValue>{movie.vote_average?.toFixed(1)}</RatingValue>
          <RatingCount>({movie.vote_count})</RatingCount>
        </RatingWrapper>
      </Content>
    </Card>
  );
};
