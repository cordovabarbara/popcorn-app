import { useState } from "react";
import axios from "axios";

const useFetch = () => {

const [upComingMovie, setUpComingMovie] = useState([])
const [hasError, setHasError] = useState(false)

const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming';
const API_KEY ='9acc36a0b8d6390b09f1c8d0109bce32';

const getMovies = () => {
    axios.get(urlUpcoming, {
        params: {
            api_key: API_KEY,
        },})
        .then(res => {
            setUpComingMovie(res.data.results);
            console.log(res.data.results);
            setHasError(false);
        })
        .catch(err => {
            setHasError(true); // Aquí estableces hasError en true en caso de error
            console.error('Error fetching data:', err);
        });
}

return {
    upComingMovie,
    hasError,
    getMovies
}
}

export default useFetch