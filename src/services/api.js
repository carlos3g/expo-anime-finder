import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trace.moe/api',
});

export default api;
