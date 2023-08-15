import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { api } from 'servises/api';

export const Movies = () => {
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
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
