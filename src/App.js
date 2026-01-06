import { HashRouter, Switch, Route } from "react-router-dom";

import Navigation from "./common/Navigation";

import MoviesPage from "./features/movies/moviesPage";
import MoviePage from "./features/movies/MoviePage";

import PeoplePage from "./features/popularPeople/PeoplePage";
import PersonPage from "./features/popularPeople/PersonPage";

const App = () => {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route path="/movies/:id">
          <MoviePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/people/:id">
          <PersonPage />
        </Route>

        <Route path="/people">
          <PeoplePage />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
