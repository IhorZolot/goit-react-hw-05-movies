import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=447df3eb6e03f9f04da7db977a7fe76c

const API_KEY = '447df3eb6e03f9f04da7db977a7fe76c';
const baseURL = 'https://api.themoviedb.org/3';

export const api = async params => {
  const { data } = await axios.get(`${baseURL}/movie/550`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  console.log(data);
  return data;
};
