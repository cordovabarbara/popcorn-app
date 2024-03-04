
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/styles.scss'

const UpcomingMovies = () => {
  const { upComingMovie, getMovies } = useFetch();

  useEffect(() => {
    getMovies();
  }, []); // Llamada una vez al montar el componente

  return (
    <div className='upcomingmovie_container'>
      <h1>Próximas Películas</h1>
      {upComingMovie.map((movie) =>( 
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}>
          </img>
        </li>
      ))}
    </div>
  );
};

export default UpcomingMovies;
