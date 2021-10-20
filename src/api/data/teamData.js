import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/team.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTeam;
