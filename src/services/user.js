import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/user';

export const signup = async credentials => {
  const { data } = await axios.post(`${BASE_URL}/signup`, credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post(`${BASE_URL}/login`, credentials);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const profile = async () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user.token,
    },
  };

  const id = user.user.id;

  const { data } = await axios.get(`${BASE_URL}/profile/${id}`, config);
  return data;
};
