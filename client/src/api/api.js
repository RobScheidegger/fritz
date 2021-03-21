import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('authenticationToken')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('authenticationToken'))}`;
  }
  return req;
});

export const API;