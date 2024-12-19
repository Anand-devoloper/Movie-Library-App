import React from 'react';
import { Movie } from '../types/movie';

interface WatchListProps {
  watchList: Movie[];
  updateRating: (id: string, rating: number) => void;
  removeFromWatchList: (id: string) => void;
}

const WatchList: React.FC<WatchListProps> = ({ watchList, updateRating, removeFromWatchList }) => {
  return (
    <div className="watch-list">
      <h2>Your Watchlist</h2>
      {watchList.map((movie) => (
        <div key={movie.imdbID} className="watchlist-item">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <input
            type="number"
            min="0"
            max="10"
            value={movie.Rating || 0}
            onChange={(e) => updateRating(movie.imdbID, parseInt(e.target.value))}
          />
          <button id='Remove' onClick={() => removeFromWatchList(movie.imdbID)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default WatchList;
