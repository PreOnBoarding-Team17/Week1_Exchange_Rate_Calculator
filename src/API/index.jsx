import axios from 'axios';

// const BASE_URL = `http://www.apilayer.net/api/live?access_key=${process.env.REACT_APP_API_KEY}`;
const BASE_URL = `http://www.apilayer.net/api/live?access_key=804703a74bf6675901d26c72b6db8091`;

function Get_API(params) {
  return axios.get(BASE_URL, { params });
}

export const API = {
  Get_API,
};
