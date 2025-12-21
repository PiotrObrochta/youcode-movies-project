import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useMovie from "./useMovie"
import LoadingView from "../../../common/LoadingView";
import ErrorView from "../../../common/ErrorView";
import PageWrapper from "../../../common/PageWrapper";
import { Backdrop, BackdropWrapper, Hero } from "./styled";

const MoviePage = () => {
    const { id } = useParams()

    const [movie, loading, error] = useMovie(id);

    if (loading) return <LoadingView />;
    if (error) return <ErrorView />;

    if (loading === false && !error) {
        console.log(movie)
        const backdropURL = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`

        return (
            <>
                <Hero>
                    <BackdropWrapper>
                        <Backdrop src={backdropURL}></Backdrop>
                    </BackdropWrapper>
                </Hero>
                <PageWrapper>
                </PageWrapper>
            </>
        )
    }
}

export default MoviePage;