import Navigation from "./common/Navigation";
import MoviesPage from "./features/movies/moviesPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
