import MoviesPage from "./features/movies/moviesPage";
import Pagination from "./common/Pagination";

export const App = () => (
    <>
        <MoviesPage />
        <Pagination page={1} totalPages={500} />
    </>
);

