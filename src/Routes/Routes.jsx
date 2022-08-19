import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import MainScreen from '../pages/MainScreen';
import RecipeDetails from '../pages/RecipeDetails';
import RecipeInProgress from '../pages/RecipeInProgress';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/recipes" component={ MainScreen } />
      <Route exact path="/recipe-details" component={ RecipeDetails } />
      <Route exact path="/recipe-in-progress" component={ RecipeInProgress } />
    </Switch>
  );
}
