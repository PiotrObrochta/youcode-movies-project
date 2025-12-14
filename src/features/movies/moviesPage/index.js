import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../../api/movies";
import { MovieCard } from "./MovieCard";
import LoadingView from "../../../common/LoadingView";
import { PageWrapper, ContentWrapper, PageTitle, GridWrapper } from "./styled";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  if (false) return <LoadingView header={"Movies loading..."}></LoadingView>
  if (!movies.length) return <p>Nic nie znaleziono</p>;
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageTitle>Popular Movies</PageTitle>

        <GridWrapper>
          {movies.slice(0, 8).map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MoviesPage;
