export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'd8c2af459c85a0dc3049292938c8adbb', // Will be added from environment variables
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/',
  POSTER_SIZE: {
    SMALL: 'w185',
    MEDIUM: 'w342',
    LARGE: 'w500'
  },
  BACKDROP_SIZE: {
    SMALL: 'w300',
    MEDIUM: 'w780',
    LARGE: 'w1280',
    ORIGINAL: 'original'
  }
};

export const getImageUrl = (path: string | null | undefined, size: string = 'w500'): string => {
  if (!path) return '/placeholder-image.jpg';
  return `${API_CONFIG.IMAGE_BASE_URL}${size}${path}`;
};

// Example endpoints that we'll implement later
export const ENDPOINTS = {
  POPULAR: '/movie/popular',
  SEARCH: '/search/movie',
  MOVIE_DETAILS: (id: number) => `/movie/${id}`,
  SIMILAR_MOVIES: (id: number) => `/movie/${id}/similar`,
  MOVIE_CREDITS: (id: number) => `/movie/${id}/credits`
};

// Response transformers
export const transformMovieData = (data: any) => ({
  id: data.id,
  title: data.title,
  overview: data.overview,
  posterPath: data.poster_path,
  backdropPath: data.backdrop_path,
  releaseDate: data.release_date,
  rating: data.vote_average,
  runtime: data.runtime,
  genres: data.genres?.map((g: any) => g.name) || []
});
