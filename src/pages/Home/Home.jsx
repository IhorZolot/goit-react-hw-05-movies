import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { api } from 'servises/api';
import { HomeStyled, ListItemStyled, ListStyled } from './Home.styled';

const Home = () => {
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
    <HomeStyled>
      <h1>Popular Movies</h1>
      <ListStyled>
        {trendingMovies.map(movie => (
          <ListItemStyled key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </ListItemStyled>
        ))}
      </ListStyled>
    </HomeStyled>
  );
};

export default Home;
