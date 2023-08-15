import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { api } from 'servises/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  console.log(location);
  const goBackLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api(`/movie/${movieId}`);
        setMovieDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={goBackLink.current}>Go-Back</Link>
      <h2>{movieDetails.title}</h2>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>
        Genres:{' '}
        {movieDetails.genres &&
          movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      <nav>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};
