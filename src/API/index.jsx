import axios from 'axios';

const BASE_URL = `http://www.apilayer.net/api/live?access_key=${process.env.REACT_APP_API_KEY}`;

function Get_API() {
  return axios.get(BASE_URL);
}

export const API = {
  Get_API,
};
