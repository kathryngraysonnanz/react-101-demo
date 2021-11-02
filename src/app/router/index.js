import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from '../home'
import Page from '../page'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/page"
          component={Page} />
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
