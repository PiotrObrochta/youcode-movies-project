import { FaStar } from "react-icons/fa";
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
} from "./styled";

export const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const genres = (movie.genre_ids || []).slice(0, 3).map((id) => genreMap[id]);

  return (
    <Card>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title}
      />
      <Content>
        <Title>{movie.title}</Title>
        <Info>{movie.release_date?.slice(0, 4)}</Info>
        <GenresWrapper>
          {genres.map((g, i) => (
            <GenreTag key={i}>{g}</GenreTag>
          ))}
        </GenresWrapper>
        <RatingWrapper>
          <FaStar color="#f5c518" size={20} />
          <RatingValue>{movie.vote_average?.toFixed(1)}</RatingValue>
          <RatingCount>({movie.vote_count})</RatingCount>
        </RatingWrapper>
      </Content>
    </Card>
  );
};
