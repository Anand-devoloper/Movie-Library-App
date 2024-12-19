import React, { useState } from 'react';
import { fetchMovies } from '../services/api';
import { Movie } from '../types/movie';

interface MovieSearchProps {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ setMovies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query) {
      const results = await fetchMovies(query);
      setMovies(results);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
