import { useState, useCallback } from 'react';
import { Movie, MovieSearchParams } from '../types/movie';
import { movieApi } from '../services/movieService/api';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Load popular movies
  const loadPopularMovies = useCallback(async (pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await movieApi.getPopular(pageNum);
      
      setMovies(prev => pageNum === 1 ? response.results : [...prev, ...response.results]);
      setHasMore(pageNum < response.totalPages);
      setPage(pageNum);
    } catch (err) {
      setError('Failed to load movies');
      console.error('Error loading movies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Search movies
  const searchMovies = useCallback(async (params: MovieSearchParams) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await movieApi.searchMovies(params);
      
      setMovies(response.results);
      setHasMore(params.page ? params.page < response.totalPages : false);
      setPage(params.page || 1);
    } catch (err) {
      setError('Failed to search movies');
      console.error('Error searching movies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load more movies (for infinite scroll)
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadPopularMovies(page + 1);
    }
  }, [loading, hasMore, page, loadPopularMovies]);

  return {
    movies,
    loading,
    error,
    hasMore,
    loadPopularMovies,
    searchMovies,
    loadMore
  };
};
