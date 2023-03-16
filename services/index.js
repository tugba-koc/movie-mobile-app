import {API_KEY} from '@env';

const API_BASE_URL = 'https://api.themoviedb.org/3';

// Get popular movies
export const getPopularMovies = async () => {
  let res = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`);
  let resJson = await res.json();
  return resJson.results;
};

// Get upcoming movies
export const getUpcomingMovies = async () => {
  let res = await fetch(`${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  let resJson = await res.json();
  return resJson.results;
};

// Get popular tv
export const getPopularTv = async () => {
  let res = await fetch(`${API_BASE_URL}/tv/popular?api_key=${API_KEY}`);
  let resJson = await res.json();
  return resJson.results;
};

// Get family tv
export const getFamilyMovies = async () => {
  let res = await fetch(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  );
  let resJson = await res.json();
  return resJson.results;
};

// Get movie detail
export const getMovieDetail = async movie_id => {
  let res = await fetch(`${API_BASE_URL}/movie/${movie_id}`);
  let resJson = await res.json();
  return resJson.results;
};
