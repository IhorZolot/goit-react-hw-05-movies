import React, { useState, useEffect } from 'react';
import { apiMovieDetails } from 'servises/api';

export const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { movieId } = match.params;
      try {
        const response = await apiMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>
        Genres:{' '}
        {movieDetails.genres &&
          movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
    </div>
  );
};
