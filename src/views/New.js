import { PropTypes } from 'prop-types';
import React from 'react';
import NewPlayerForm from '../components/NewPlayerForm';

export default function New({
  user, setPlayers, editItem, setEditItem,
}) {
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
  editItem: PropTypes.shape.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
