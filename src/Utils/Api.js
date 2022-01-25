import axios from 'axios';

const BASE_URL = `http://www.apilayer.net/api/live?access_key=${process.env.REACT_APP_API_KEY}`;

const Get_API = async () => {
  return await axios.get(BASE_URL).then((res) => {
    return {
      timestamp: res.data.timestamp,
      quotes: res.data.quotes,
    };
  });
};

export default Get_API;
