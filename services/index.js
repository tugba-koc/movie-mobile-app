import {API_KEY} from '@env';

const API_BASE_URL = 'https://api.themoviedb.org/3';

// Get popular movies
export const getPopularMovies = async () => {
  let res = await fetch(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`,
  );
  let resJson = await res.json();
  return resJson.results;
};

// Get upcoming movies
export const getUpcomingMovies = async () => {
  let res = await fetch(
    `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=1`,
  );
  let resJson = await res.json();
  return resJson.results;
};

// Get popular tv
export const getPopularTv = async () => {
  let res = await fetch(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}&page=1`);
  let resJson = await res.json();
  return resJson.results[0];
};
