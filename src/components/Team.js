import React from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import { deletePlayer, updatePlayers } from '../api/data/teamData';
import NewPlayerForm from './NewPlayerForm';

export default function Team({ players, setPlayers }) {
  // const history = useHistory();

  const handleDelete = () => {
    deletePlayer(players.firebaseKey).then(setPlayers);
  };

  const handleUpdate = () => {
    updatePlayers(players.firebaseKey).then((playersResponse) => {
      <NewPlayerForm players={playersResponse} setPlayers={setPlayers} />;
    });
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{players.id}</td>
          <td>{players.name}</td>
          <td>{players.position}</td>
          <td>{players.imageUrl}</td>
          <button onClick={(e) => handleUpdate(e)} type="button" className="btn btn-info">EDIT</button>
          <button onClick={(e) => handleDelete(e)} type="button" className="btn btn-danger">DELETE</button>
        </tr>
      </tbody>
    </>
  );
}

Team.propTypes = {
  players: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  // setEditItem: PropTypes.func.isRequired,
};
