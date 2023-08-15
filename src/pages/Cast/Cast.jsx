import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { api } from 'servises/api';
import { ActorCard, ActorImage, CastContainer } from './Cast.styled';

const Cast = () => {
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
    <CastContainer>
      <h3>Cast</h3>
      <ActorCard>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={`${actor.name} profile`}
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </ActorCard>
    </CastContainer>
  );
};

export default Cast;
