import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Team from '../components/Team';

export default function Home({ players, setPlayers }) {
  return (
    <>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Image Url</th>
          </tr>
        </thead>
        {players.map((player) => (
          <Team
            key={player.id}
            players={player}
            setPlayers={setPlayers}
          />
        ))}
      </Table>
    </>
  );
}

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
};
