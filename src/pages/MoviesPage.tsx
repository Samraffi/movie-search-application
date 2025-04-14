import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieGrid from '../components/Movie/MovieGrid';
import MovieSearch from '../components/Movie/MovieSearch';
import { MovieSearchParams } from '../types/movie';
import { useMovies } from '../hooks/useMovies';
import Alert from '../components/Alert';

const MoviesPage = () => {
  const { movies, loading, error, searchMovies, loadPopularMovies } = useMovies();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialMovies = async () => {
      try {
        await loadPopularMovies();
      } catch (err) {
        console.error('Failed to load initial movies:', err);
        setAlertMessage('Failed to load movies. Please try again later.');
      }
    };

    loadInitialMovies();
  }, [loadPopularMovies]);

  const handleSearch = async (params: MovieSearchParams) => {
    try {
      await searchMovies(params);
    } catch (err) {
      console.error('Search failed:', err);
      setAlertMessage('Failed to search movies. Please try again.');
    }
  };

  const handleCloseAlert = () => setAlertMessage(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Movies</h1>
        <Link 
          to="/movies/add"
          className="btn btn-primary"
        >
          Add Movie
        </Link>
      </div>

      <MovieSearch 
        onSearch={handleSearch}
        loading={loading}
      />

      {error && (
        <div className="mb-8">
          <Alert
            isOpen={true}
            message={error}
            type="error"
            onClose={handleCloseAlert}
          />
        </div>
      )}

      <MovieGrid 
        movies={movies}
        loading={loading}
        error={error}
      />

      {alertMessage && (
        <Alert
          isOpen={true}
          message={alertMessage}
          type="error"
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default MoviesPage;
