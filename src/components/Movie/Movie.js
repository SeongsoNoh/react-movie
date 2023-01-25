import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.scss";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <div className="movie">
      <img src={coverImg} alt={title} className="movie__img" />
      <div className="movie__title-container">
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>

        <div className="movie__rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="movie__icon"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <p>{rating}</p>
        </div>
      </div>
      {/* <p>{summary}</p> */}

      <div className="movie__genres">
        {genres.slice(0, 3).map((g) => (
          <p key={g} className={`movie__genres-item movie__genres-item--${g}`}>
            {g}
          </p>
        ))}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
