import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5001/v1',
  responseType: 'json'
});
