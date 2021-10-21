import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/New';

export default function Routes({ user, players, setPlayers }) {
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
            <New user={user} setPlayers={setPlayers} />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.shape({
    fullName: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
