import React, { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieCard from './components/MovieCard';
import WatchList from './components/WatchList';
import { Movie } from './types/movie';
import './App.css'; // Import CSS styles

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const addToWatchList = (movie: Movie) => {
    if (!watchList.some((m) => m.imdbID === movie.imdbID)) {
      setWatchList([...watchList, movie]);
    }
  };

  const updateRating = (id: string, rating: number) => {
    setWatchList(watchList.map((movie) =>
      movie.imdbID === id ? { ...movie, Rating: rating } : movie
    ));
  };

  const removeFromWatchList = (id: string) => {
    setWatchList(watchList.filter((movie) => movie.imdbID !== id));
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <MovieSearch setMovies={setMovies} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} addToWatchList={addToWatchList} />
        ))}
      </div>
      <WatchList
        watchList={watchList}
        updateRating={updateRating}
        removeFromWatchList={removeFromWatchList}
      />
    </div>
  );
};

export default App;
