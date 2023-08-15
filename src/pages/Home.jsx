import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { api } from 'servises/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = useCallback(async () => {
    try {
      const data = await api('/trending/all/day');
      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchTrendingMovies();
  }, [fetchTrendingMovies]);

  return (
    <div>
      <h1>Popular Movies</h1>
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
