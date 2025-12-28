import Navigation from "./common/Navigation";
import MoviePage from "./features/movies/MoviePage";
import MoviesPage from "./features/movies/moviesPage";
import PersonPage from "./features/popularPeople/PersonPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route path="/people/:personId">
          <PersonPage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
