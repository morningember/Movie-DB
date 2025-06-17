import React from "react";
import "../css/Favourites.css";
import { UseMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
const Favourites = () => {
  const { favourites } = UseMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourites-empty">
      <h2>No Favourites Added</h2>
      <p>add movies to favourites</p>
    </div>
  );
};

export default Favourites;
