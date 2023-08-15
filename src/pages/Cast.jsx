import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'servises/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await api(`/movie/${movieId}/credits`);
        setCast(response.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};
