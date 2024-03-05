
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/styles.scss'

const UpcomingMovies = () => {
  const { upComingMovie, getMovies } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(searchTerm);
  }, [setSearchTerm]); // 

  return (
    <div className='upcomingmovie_container'>
      <div className='search'>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <h1>Próximas Películas</h1>
      {upComingMovie.map((movie) =>( 
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}>
          </img>
          <p>{movie.overview}</p>
        </li>
      ))}
    </div>
  );
};

export default UpcomingMovies;
