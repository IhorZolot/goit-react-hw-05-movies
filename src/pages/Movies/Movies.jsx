import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { api } from 'servises/api';
import {
  MovieItem,
  MoviesList,
  MoviesStyled,
  SearchForm,
} from './Movies.styles';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSearchChange = event => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const fetchSearchMovies = useCallback(async () => {
    try {
      const response = await api('/search/movie', {
        query,
      });
      setMovies(response.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, [query]);

  useEffect(() => {
    fetchSearchMovies();
  }, [fetchSearchMovies]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams(searchQuery ? { query: searchQuery } : {});
  };

  return (
    <MoviesStyled>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </SearchForm>

      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
    </MoviesStyled>
  );
};

export default Movies;
