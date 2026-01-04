import { GridWrapper } from "../../../../movies/moviesPage/styled";
import { MovieCard } from "../../../../../common/MovieCard";
import { MoviesSection, SectionTitle, PosterFallbackScope } from "./styled";

const PersonMoviesCrew = ({ crew }) => (
    <MoviesSection>
        <SectionTitle>Movies – crew ({crew.length})</SectionTitle>
        <PosterFallbackScope>
            <GridWrapper>
                {crew.map((movie) => (
                    <MovieCard key={movie.credit_id} movie={movie} mode="crew" />
                ))}
            </GridWrapper>
        </PosterFallbackScope>
    </MoviesSection>
);

export default PersonMoviesCrew;
