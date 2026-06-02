const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (endpoint) => {
  try {
    const separator = endpoint.includes("?") ? "&" : "?";
    const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("TMDB Full Error:", errorText);
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("TMDB Error:", error.message);
    return [];
  }
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
export const backdropBaseUrl = "https://image.tmdb.org/t/p/original";
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchMovieVideos = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};