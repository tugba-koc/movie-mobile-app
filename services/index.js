import {API_KEY} from '@env';

const API_BASE_URL = 'https://api.themoviedb.org/3';

// Get popular movies
const getPopularMovies = async () => {
  let res = await fetch(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`,
  );
  let resJson = await res.json();
  return resJson.results[0];
};

// Get upcoming movies
const getUpcomingMovies = async () => {
  let res = await fetch(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`,
  );
  let resJson = await res.json();
  return resJson.results[0];
};

export default {
  getPopularMovies,
  getUpcomingMovies,
};
