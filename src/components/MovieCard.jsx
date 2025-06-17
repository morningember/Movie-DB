import React from "react";
import { UseMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const image_url = "https://image.tmdb.org/t/p/w500/";
  const { isFavourite, addToFavourites, removeFromFavourites } =
    UseMovieContext();

  const favourite = isFavourite(movie.id);

  const clickToAddFavourite = (e) => {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`${image_url}${movie.poster_path}`}
          alt={movie.title}
          srcset=""
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={clickToAddFavourite}
          >
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
