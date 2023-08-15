import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'servises/api';
import { ReviewContent, ReviewItem, ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api(`/movie/${movieId}/reviews`);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <h4>{review.author}</h4>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ul>
    </ReviewsContainer>
  );
};

export default Reviews;
