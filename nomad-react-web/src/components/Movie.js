import React from 'react'
import PropTypes from 'prop-types';

export default function Movie({ coverImg, title, year, rating, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>{title}({year})</h2>
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
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
