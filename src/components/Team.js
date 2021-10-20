import React from 'react';
import PropTypes from 'prop-types';

export default function Team({ players }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{players.id}</td>
          <td>{players.name}</td>
          <td>{players.position}</td>
          <td>{players.imageUrl}</td>
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
  }).isRequired,
  //   setPlayers: PropTypes.func.isRequired,
  //   setEditItem: PropTypes.func.isRequired,
};
