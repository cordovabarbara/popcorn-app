import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Slider from './Slider';
import '../styles/styles.scss'
import UpcomingMovies from './UpcomingMovies';

const Movies = () => {
  const {Movie, getMovies} = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(searchTerm);
  }, [setSearchTerm]);  // Corregido

  return (
    <div className='movie_container'>
      <h1>Lo Actual</h1>
          <div className='carousel__image'>
          <Slider movies={Movie} />
          </div>
    </div>

  );
};

export default Movies;
