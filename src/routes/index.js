import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ConnectedMovies from '../Containers/views/movies';
import ConnectedMovie from '../Containers/views/home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ConnectedMovies} />
    <Route exact path="/movie/:movieId" component={ConnectedMovie} />
  </Switch>
)

export default Routes;
