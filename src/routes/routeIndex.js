import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Team from '../views/Team';
import New from '../views/New';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Team />
          )}
        />
        <Route
          exact
          path="/new"
          component={() => (
            <New />
          )}
        />
      </Switch>
    </div>
  );
}
