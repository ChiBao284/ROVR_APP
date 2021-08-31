import axios from 'axios';

import { API_URL } from './api/constants';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
