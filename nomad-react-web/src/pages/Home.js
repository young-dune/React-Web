import { useState, useEffect } from 'react'
import Movie from '../components/Movie';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return <div>
        {loading ? <h1>Loading... </h1> :
            <div>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>
        }
    </div >;

}
