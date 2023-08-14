import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { api } from 'servises/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await api();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const data = await getTrendingMovies();
//         setTrendingMovies(data.results);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };
//     fetchTrendingMovies();
//   }, []);
