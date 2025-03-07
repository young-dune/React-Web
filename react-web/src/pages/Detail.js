import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useNavigate import
import Movie from '../components/Movie';
import styles from './Detail.module.css';
import Navbar from '../components/Navbar';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [id]);


    return (
        <div className={styles.container}>
            <Navbar />
            {loading ? (
                <h1 className={styles.loading}>Loading...</h1>
            ) : (
                <div className={styles.movieDetail}>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        year={movie.year}
                        rating={movie.rating}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;
