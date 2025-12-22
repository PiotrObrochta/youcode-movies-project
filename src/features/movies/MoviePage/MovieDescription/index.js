import Rating from "../../../../common/Rating";
import { Genre, GenresContainer, InfoContainer, LabelsContainer, Poster, PosterWrapper, Text, Title, Wrapper } from "./styled";

const MovieDescription = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`

    const date = new Date(movie.release_date);
    const production = movie.production_countries.map(country => country.name).join(", ");

    return (
        <Wrapper>
            <PosterWrapper>
                <Poster src={posterURL} alt="poster" />
            </PosterWrapper>
            <InfoContainer>
                <Title>{movie.title}</Title>
                <Text>{date.getFullYear()}</Text>
                <LabelsContainer>
                    <Text $label><Text as={"span"} $greyColor $label>Production:</Text>{production}</Text>
                    <Text $label><Text as={"span"} $greyColor $label>Release date:</Text>{date.toLocaleDateString()}</Text>
                </LabelsContainer>
                <GenresContainer>
                    {movie.genres.map(genre => <Genre key={genre.id}>{genre.name}</Genre>)}
                </GenresContainer>
                <Rating description={true} rate={movie.vote_average} votes={movie.vote_count}></Rating>
            </InfoContainer>
            <Text $overview>{movie.overview}</Text>
        </Wrapper>
    );
};

export default MovieDescription;