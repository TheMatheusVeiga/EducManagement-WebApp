import axios from 'axios';

const baseURL = process.env.REACT_APP_DEV_API;
const header = {};

const api = axios.create({
  baseURL,
  header,
});

export default api;
