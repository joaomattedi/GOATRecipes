import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import FoodDetail from '../pages/FoodDetail';
import FoodInProgress from '../pages/FoodInProgress';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/foods/:id" component={ FoodDetail } />
      <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
    </Switch>
  );
}
