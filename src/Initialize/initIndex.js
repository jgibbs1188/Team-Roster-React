import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import { getTeam } from '../api/data/teamData';
import Routes from '../routes/routeIndex';

function Initialize() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getTeam().then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });

    getTeam().then(setPlayers);
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation />
          <Routes user={user} players={players} setPlayers={setPlayers} editItem={editItem} setEditItem={setEditItem} />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default Initialize;
