import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import paths from './paths';

import Dashboard from '../screens/Dashboard/Dashboard';
import Results from '../screens/Results/Results';

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path={paths.DEFAULT} component={Dashboard} />
        <Route path={paths.RESULTS} component={Results} />
      </Switch>
    </Router>
);

export default Routes;