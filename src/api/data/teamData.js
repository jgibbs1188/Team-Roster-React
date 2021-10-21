import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/team.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/team.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/team/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTeam().then(resolve);
        });
    })
    .catch(reject);
});

export { getTeam, createPlayer };
