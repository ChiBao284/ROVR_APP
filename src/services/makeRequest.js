import axios from './axios';

export default async config => {
  const response = await axios(config);
  return response;
};
