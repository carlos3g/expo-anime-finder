import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.trace.moe',
});

export default api;
