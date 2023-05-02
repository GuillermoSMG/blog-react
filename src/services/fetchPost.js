import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';

export const fetchPost = async body => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      Authorization: user.token,
    },
  };
  const { data } = await axios.post(`${BASE_URL}/save`, body, config);
  return data;
};
