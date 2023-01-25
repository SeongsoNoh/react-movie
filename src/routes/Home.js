import { useState, useEffect } from "react";
import Movie from "../components/Movie/Movie";
import "../styles.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="loader"></h1>
      ) : (
        <div className="main">
          <div className="main__category">
            <span>Rates</span>
            <span>Years</span>
            <span>Language</span>
          </div>
          <div className="main__search-container">
            <input type="text" className="main__search" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="main__search-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <p className="main__title">All Movies</p>
          <div className="main__movie-list">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
