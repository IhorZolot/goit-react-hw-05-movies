import React, { useState, useEffect, useRef } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { api } from 'servises/api';
import styled from 'styled-components';
import {
  MovieDetailsWrapper,
  MovieDetailsWrapperDiv,
  MovieDetailsContent,
  MovieImage,
  MovieTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
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
    <MovieDetailsWrapper>
      <MovieDetailsWrapperDiv>
        <div>
          <GoBackLinkStyled to={goBackLink.current}>Go-Back</GoBackLinkStyled>
          <MovieTitle>{movieDetails.title}</MovieTitle>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <MovieDetailsContent>
          <h4>Release Date: {movieDetails.release_date}</h4>
          <p>Overview: {movieDetails.overview}</p>
          <h5>Rating: {movieDetails.vote_average}</h5>
          <p>
            Genres:{' '}
            {movieDetails.genres &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </MovieDetailsContent>
      </MovieDetailsWrapperDiv>
      <hr />
      <h3> Additional information</h3>
      <ActorBar>
        <ActorLink to={`cast`}>Cast</ActorLink>
        <ActorLink to={`reviews`}>Reviews</ActorLink>
      </ActorBar>
      <hr />
      <Outlet />
    </MovieDetailsWrapper>
  );
};

const GoBackLinkStyled = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  color: #460e57;
  border-radius: 4px;
  border: 2px solid #ccc;
  padding: 5px 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const ActorBar = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  justify-content: left;
`;
const ActorLink = styled(NavLink)`
  margin-left: 40px;
  font-size: 16px;
  text-decoration: none;
  color: #160909;
  font-weight: bold;

  &.active {
    color: #ff006f;
  }
`;
export default MovieDetails;
