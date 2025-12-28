import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useMovie from "./useMovie"
import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";
import PageWrapper from "../../../common/PageWrapper";
import { BackdropWrapper, Header, Hero, HeroContent } from "./styled";
import MovieDescription from "./MovieDescription";
import Rating from "../../../common/Rating";
import useMovieCredits from "./useMovieCredits";
import PeopleList from "./PeopleList";

const MoviePage = () => {
    const { id } = useParams()

    const [movie, loadingMovie, errorMovie] = useMovie(id);
    const [credits, loadingCredits, errorCredits] = useMovieCredits(id);

    if (loadingMovie) return <LoadingView />;
    if (errorMovie) return <ErrorView />;

    if (loadingMovie === false && !errorMovie) {
        const backdropURL = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`

        return (
            <>
                {movie.backdrop_path &&
                    <Hero>
                        <BackdropWrapper $backdropURL={backdropURL}>
                            <HeroContent>
                                <Header>{movie.title}</Header>
                                <Rating rate={movie.vote_average} votes={movie.vote_count} />
                            </HeroContent>
                        </BackdropWrapper>
                    </Hero>
                }
                <PageWrapper>
                    <MovieDescription movie={movie}></MovieDescription>
                    {
                        !loadingCredits && !errorCredits &&
                        <>
                            <PeopleList header="Cast" people={credits.cast} />
                            <PeopleList header="Crew" people={credits.crew} />
                        </>
                    }
                </PageWrapper>
            </>
        )
    }
}

export default MoviePage;