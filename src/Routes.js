import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home.js/index.js'
import Config from './pages/Config.js/index.js'

export default function () {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route   path="/config">
        <Config/>
      </Route>

      <Route  path="/sobre">
      </Route>

    </Switch>
  );
}
