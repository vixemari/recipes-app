import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';

// alteraçao pra PR
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      {/* <Route exact path="/drinks" component={ Login } />
      <Route exact path={ `/foods/${iddareceit}` } component={ Login } />
      <Route exact path={ `/drinks/${iddareceita}` } component={ Login } />
      <Route exact path={ `/food/${iddareceita}/in-progress` } component={ Login } />
      <Route exact path={ `/drink/${iddareceita}/in-progress` } component={ Login } />
      <Route exact path="/explore" component={ Login } />
      <Route exact path="/explore/foods" component={ Login } />
      <Route exact path="/explore/drinks" component={ Login } />
      <Route exact path="/explore/foods/ingredients" component={ Login } />
      <Route exact path="/explore/drinks/ingredients" component={ Login } />
      <Route exact path="/explore/foods/nationalities" component={ Login } />
      <Route exact path="/profile" component={ Login } />
      <Route exact path="/done-recipes" component={ Login } />
      <Route exact path="/favorite-recipes" component={ Login } /> */}
    </Switch>
  );
}

export default Routes;
