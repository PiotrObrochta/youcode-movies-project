import { GridWrapper } from "../../../../movies/moviesPage/styled";
import { MovieCard } from "../../../../movies/moviesPage/MovieCard";
import { MoviesSection, SectionTitle, PosterFallbackScope } from "./styled";

const PersonMoviesCast = ({ cast }) => (
    <MoviesSection>
        <SectionTitle>Movies – cast ({cast.length})</SectionTitle>
        <PosterFallbackScope>
            <GridWrapper>
                {cast.map((movie) => (
                    <MovieCard key={movie.credit_id} movie={movie} mode="cast" />
                ))}
            </GridWrapper>
        </PosterFallbackScope>
    </MoviesSection>
);

export default PersonMoviesCast;
