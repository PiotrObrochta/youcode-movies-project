import { MovieCard } from "./MovieCard";
import LoadingView from "../../../common/LoadingView";
import NoResultsView from "../../../common/NoResultsView";
import ErrorView from "../../../common/ErrorView";
import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";
import { useSelector } from "react-redux";
import {
  selectFetchPopularMoviesStatus,
  selectPopularMovies,
} from "../moviesSlice";
import {
  selectSearchResults,
  selectSearchStatus,
  selectSearchType,
  selectSearchQuery,
} from "../../search/searchSlice";
import Pagination from "../../../common/Pagination";

const MoviesPage = () => {
  const popularMovies = useSelector(selectPopularMovies);
  const popularStatus = useSelector(selectFetchPopularMoviesStatus);

  const searchResults = useSelector(selectSearchResults);
  const searchStatus = useSelector(selectSearchStatus);
  const searchType = useSelector(selectSearchType);
  const query = useSelector(selectSearchQuery);

  const isSearch = searchType === "movies";

  if (isSearch && searchStatus === "loading")
    return <LoadingView query={query} />;

  if (!isSearch && popularStatus === "loading")
    return <LoadingView header="Movies loading..." />;

  if (popularStatus === "error") return <ErrorView />;

  const movies = isSearch ? searchResults : popularMovies;

  if (isSearch && searchStatus === "success" && movies.length === 0)
    return <NoResultsView query={query} />;

  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>
          {isSearch ? `Search results for "${query}"` : "Popular Movies"}
        </PageTitle>

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
