import axios from 'axios';

const BASE_URL =
  'https://blogapirestful-production.up.railway.app/api/articles/';

export const noAuthFetch = async url => {
  const { data } = await axios.get(`${BASE_URL}${url}`);
  return data;
};

export const postArticle = async body => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user.token,
    },
  };
  const { data } = await axios.post(BASE_URL, body, config);
  return data;
};

export const deleteArticle = async id => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user.token,
    },
  };
  const { data } = await axios.delete(`${BASE_URL}${id}`, config);
  return data;
};
