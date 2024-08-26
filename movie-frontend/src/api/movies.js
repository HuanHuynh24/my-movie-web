import axios from 'axios';
import { useState, useEffect } from 'react';

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("https://phimhay2402.vercel.app/api/movies/");
                setMovies(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(true);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading, error };
};

export default useMovies;
