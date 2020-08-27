import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/users',
});

export default api;