import { useEffect, useState } from 'react';
import { api } from 'servises/api';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await api('trending/all/day', {});
        setTrendingMovies(response.results);
      } catch (error) {}
    };
    getTrendingMovies();
  }, []);

  return <div>dfdfd</div>;
};
