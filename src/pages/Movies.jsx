import React, { useState, useEffect } from 'react';
import { apiSearch } from 'servises/api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const response = await apiSearch({
          query: searchQuery,
        });

        setMovies(response.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    if (searchQuery) {
      fetchSearchMovies();
    }
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Search Movies</h2>
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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
