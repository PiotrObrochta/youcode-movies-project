import { MovieCard } from "./MovieCard";
import LoadingView from "../../../common/LoadingView";
import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";
import { useSelector } from "react-redux";
import {
  selectFetchPopularMoviesStatus,
  selectPopularMovies,
} from "../moviesSlice";
import ErrorView from "../../../common/ErrorView";
import Pagination from "../../../common/Pagination";
import {
  selectSearchResults,
  selectSearchStatus,
  selectSearchType,
} from "../../search/searchSlice";

const MoviesPage = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const popularStatus = useSelector(selectFetchPopularMoviesStatus);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const searchType = useSelector(selectSearchType);

  const isSearch = searchType === "movies";

  if (isSearch && searchStatus === "loading")
    return <LoadingView header="Searching movies..." />;

  if (!isSearch && popularStatus === "loading")
    return <LoadingView header="Movies loading..." />;

  if (popularStatus === "error") return <ErrorView />;

  const movies = isSearch ? searchResults : popularMovies;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>{isSearch ? "Search results" : "Popular Movies"}</PageTitle>

        <GridWrapper>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </GridWrapper>

        {!isSearch && <Pagination page="1" totalPages="500" />}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
