import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useMovie from "./useMovie"
import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";
import PageWrapper from "../../../common/PageWrapper";
import { BackdropWrapper, Header, Hero, HeroContent } from "./styled";
import MovieDescription from "./MovieDescription";
import Rating from "../../../common/Rating";

const MoviePage = () => {
    const { id } = useParams()

    const [movie, loading, error] = useMovie(id);

    if (loading) return <LoadingView />;
    if (error) return <ErrorView />;

    if (loading === false && !error) {
        const backdropURL = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
        console.log(movie)

        return (
            <>
                <Hero>
                    <BackdropWrapper $backdropURL={backdropURL}>
                        <HeroContent>
                            <Header>{movie.title}</Header>
                            <Rating rate={movie.vote_average} votes={movie.vote_count} />
                        </HeroContent>
                    </BackdropWrapper>
                </Hero>
                <PageWrapper>
                    <MovieDescription movie={movie}></MovieDescription>
                </PageWrapper>
            </>
        )
    }
}

export default MoviePage;