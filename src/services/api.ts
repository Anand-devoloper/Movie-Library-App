import axios from 'axios';
import { Movie } from '../types/movie';

const API_KEY = 'e58f818a';  // The API key you provided
const API_BASE_URL = 'http://www.omdbapi.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await api.get('', {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies', error);
    return [];
  }
};
