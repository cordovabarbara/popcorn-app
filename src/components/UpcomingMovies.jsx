import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Slider from '../components/Slider';
import '../styles/styles.scss';

const UpcomingMovies = () => {
  const { upComingMovie, getMovies } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(searchTerm);
  }, [setSearchTerm]);  // Corregido

  return (
    <div className='upcomingmovie_container'>
      <h1>Próximas Películas</h1>
        <div className='carousel__image'>
          <Slider movies={upComingMovie} />
      </div>
    </div>
  );
};

export default UpcomingMovies;
