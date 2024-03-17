import axios from "axios";
import { useEffect, useState } from "react"

const UpcomingMovies = () => {

    const [UpcomingMovies, setUpcomingMovies] = useState([])
    const [hasError, setHasError] = useState(false)

    const API_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming';
    const API_KEY ='9acc36a0b8d6390b09f1c8d0109bce32';

    useEffect(() => {
        getUpcoming();
    }, []);

    const getUpcoming = () => {
        axios.get(API_UPCOMING,{
            params: {
                api_key: API_KEY
            },})
            .then(res => {
                setUpcomingMovies(res.data.results);
                console.log(res.data.results);
                setHasError(false);
            })
            .catch(err => {
                setHasError(true);
                console.error('Error fetching data:', err);
            });
    }

  return (
    <div>
        {hasError ? (
            <p>Error fetching data</p>
        ) : (
            <ul>
                <p>Proximos estrenos</p>
                {UpcomingMovies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        )}
    </div>
);
}
export default UpcomingMovies;