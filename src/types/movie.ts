export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Rating?: number;  // Rating is optional for movies in the watchlist
  }
  