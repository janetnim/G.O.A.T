import React from "react";
import { Route, Switch } from "react-router-dom";
import ConnectedMovies from "../Containers/views/movies";
import ConnectedMovie from "../Containers/views/home";
import practiceReducer from "../Containers/views/practiceReducer";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ConnectedMovies} />
    <Route exact path="/movie/:movieId" component={ConnectedMovie} />
    <Route exact path="/reducer" component={practiceReducer} />
  </Switch>
);

export default Routes;
