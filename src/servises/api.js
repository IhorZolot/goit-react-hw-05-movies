import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=447df3eb6e03f9f04da7db977a7fe76c

const API_KEY = '447df3eb6e03f9f04da7db977a7fe76c';
const baseURL = 'https://api.themoviedb.org/3';

export const api = async params => {
  const { data } = await axios.get(`${baseURL}/trending/all/day`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};

export const apiSearch = async params => {
  const { data } = await axios.get(`${baseURL}/search/movie`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};

export const apiMovieDetails = async (movieId, params) => {
  const { data } = await axios.get(`${baseURL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};

// export const getTrendingMovies = async () => {
//   const response = await api('/trending/all/day');
//   return response.data;
// };

// export const searchMovies = async query => {
//   const response = await api('/search/movie', {
//     params: {
//       query,
//     },
//   });
//   return response.data;
// };

// export const getMovieDetails = async movieId => {
//   const response = await api(`/movie/${movieId}`);
//   return response.data;
// };

// export const getMovieCredits = async movieId => {
//   const response = await api(`/movie/${movieId}/credits`);
//   return response.data;
// };

// export const getMovieReviews = async movieId => {
//   const response = await api(`/movie/${movieId}/reviews`);
//   return response.data;
// };
