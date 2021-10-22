import React from 'react';
import PropTypes from 'prop-types';
import { deletePlayer } from '../api/data/teamData';

export default function Team({ players, setPlayers }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(players.firebaseKey).then(setPlayers);
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{players.id}</td>
          <td>{players.name}</td>
          <td>{players.position}</td>
          <td>{players.imageUrl}</td>
          <>
            <>
              <button type="button" className="btn btn-info">EDIT</button>
              <button onClick={() => handleClick('delete')} type="button" className="btn btn-danger">DELETE</button>
            </>
          </>
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
  //   setEditItem: PropTypes.func.isRequired,
};
