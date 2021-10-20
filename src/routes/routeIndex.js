import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/New';

export default function Routes({ players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home players={players} setPlayers={setPlayers} />
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

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};
