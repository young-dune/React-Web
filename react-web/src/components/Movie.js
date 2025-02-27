import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Movie({ id, coverImg, title, year, rating, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`movie/${id}`}>{title}({year})</Link></h2>
            <h3> Rating: {rating}</h3>
            <p><b>Content:</b> {summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}


Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
