import { useState } from "react";
import axios from "axios";

const useFetch = () => {

    // VARIABLES DE ESTADO
const [Movie, setMovie] = useState([])
const [hasError, setHasError] = useState(false)

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY ='9acc36a0b8d6390b09f1c8d0109bce32';

const getMovies = (searchTerm = "") => {
    axios.get(`${API_URL}/movie/popular`, {
        params: {
            api_key: API_KEY,
            query: searchTerm,
        },})
        .then(res => {
            setMovie(res.data.results);
            console.log(res.data.results);
            setHasError(false);
        })
        .catch(err => {
            setHasError(true); 
            console.error('Error fetching data:', err);
        });
}

return {
    Movie,
    hasError,
    getMovies
}
}

export default useFetch