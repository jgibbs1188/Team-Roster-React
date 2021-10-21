import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import NewPlayerForm from '../components/NewPlayerForm';

export default function New({ user, setPlayers }) {
  const [editItem, setEditItem] = useState({});

  return (
    <>
      <NewPlayerForm
        user={user}
        obj={editItem}
        setPlayers={setPlayers}
        setEditItem={setEditItem}
      />
    </>
  );
}

New.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
};
