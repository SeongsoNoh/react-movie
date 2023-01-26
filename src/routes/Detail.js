import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.scss";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="detail">
      <img src={detail?.large_cover_image} className="detail__img" />

      <div className="detail__content">
        <h1 className="detail__title">{detail?.title}</h1>
        <div className="detail__list">
          <div className="detail__list-item">
            <p>Year</p>
            <p>{detail?.year}</p>
          </div>
          <div className="detail__list-item">
            <p>Language</p>
            <p>{detail?.language}</p>
          </div>
          <div className="detail__list-item">
            <p>Rating</p>
            <p>{detail?.rating}</p>
          </div>
          <div className="detail__list-item">
            <p>Runtime</p>
            <p>{detail?.runtime}</p>
          </div>
        </div>
        <div className="detail__genres">
          <h2>Genres</h2>
          <div className="detail__genres-items">
            {detail?.genres.map((g) => (
              <p
                key={g}
                className={`detail__genres-item detail__genres-item--${g}`}
              >
                {g}
              </p>
            ))}
          </div>
        </div>
        <div className="detail__description">
          <h2>Summary</h2>
          <p>{detail?.description_intro}</p>
        </div>
        <div className="detail__download-items">
          <h2>DOWNLOAD</h2>
          <div className="detail__download">
            {detail?.torrents
              .filter((torrent) => torrent.type === "web")
              .map((torrent) => (
                <a
                  key={torrent.url}
                  href={torrent.url}
                  target="_blank"
                  className={`detail__download detail__download-item--${torrent.quality}`}
                >
                  {torrent.quality}
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="detail__close">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="detail__close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
