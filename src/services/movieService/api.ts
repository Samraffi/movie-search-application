import { API_CONFIG, ENDPOINTS, transformMovieData } from './config';
import { Movie, MovieListResponse, MovieSearchParams } from '../../types/movie';

interface TMDBResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: any[];
}

interface TMDBMovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  runtime?: number;
  genres?: { id: number; name: string }[];
}

const makeRequest = async <T>(endpoint: string, params: Record<string, any> = {}): Promise<T> => {
  const queryParams = new URLSearchParams({
    api_key: API_CONFIG.API_KEY,
    language: 'en-US',
    ...params
  });

  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}?${queryParams}`);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `API request failed with status ${response.status}`);
  }

  return response.json();
};

export const movieApi = {
  // Get popular movies
  getPopular: async (page: number = 1): Promise<MovieListResponse> => {
    const data = await makeRequest<TMDBResponse>(ENDPOINTS.POPULAR, { page });
    return {
      page: data.page,
      results: data.results.map(transformMovieData),
      totalPages: data.total_pages,
      totalResults: data.total_results
    };
  },

  // Search movies
  searchMovies: async (params: MovieSearchParams): Promise<MovieListResponse> => {
    const data = await makeRequest<TMDBResponse>(ENDPOINTS.SEARCH, {
      query: params.query,
      page: params.page || 1,
      ...(params.year && { year: params.year }),
      ...(params.genre && { with_genres: params.genre })
    });

    return {
      page: data.page,
      results: data.results.map(transformMovieData),
      totalPages: data.total_pages,
      totalResults: data.total_results
    };
  },

  // Get movie details
  getMovieDetails: async (id: number): Promise<Movie> => {
    const data = await makeRequest<TMDBMovieDetails>(ENDPOINTS.MOVIE_DETAILS(id), {
      append_to_response: 'credits,similar'
    });
    return transformMovieData(data);
  },

  // Get similar movies
  getSimilarMovies: async (id: number): Promise<Movie[]> => {
    const data = await makeRequest<TMDBResponse>(ENDPOINTS.SIMILAR_MOVIES(id));
    return data.results.map(transformMovieData);
  }
};

export default movieApi;
