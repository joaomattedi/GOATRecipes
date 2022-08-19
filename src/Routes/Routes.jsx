import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import FoodDetail from '../pages/FoodDetail';
import FoodInProgress from '../pages/FoodInProgress';
import Drinks from '../pages/Drinks';
import DrinkDetail from '../pages/DrinkDetail';
import DrinkInProgress from '../pages/DrinkInProgress';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ FoodDetail } />
      <Route exact path="/drinks/:id" component={ DrinkDetail } />
      <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}
