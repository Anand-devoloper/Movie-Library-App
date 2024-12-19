import React from 'react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  addToWatchList: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, addToWatchList }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title} ({movie.Year})</h3>
      <button onClick={() => addToWatchList(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
