import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_USER;

export const signup = async credentials => {
  const { data } = await axios.post(`${BASE_URL}`, credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post(`${BASE_URL}login`, credentials);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const getProfile = async id => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user.token,
    },
  };

  const { data } = await axios.get(`${BASE_URL}${id}`, config);
  return data;
};

export const userArticles = async (id, page) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user?.token,
    },
  };
  const { data } = await axios.get(`${BASE_URL}articles/${id}/${page}`, config);
  return data;
};
