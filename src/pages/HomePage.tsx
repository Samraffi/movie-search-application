import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieGrid from '../components/Movie/MovieGrid';
import MovieSearch from '../components/Movie/MovieSearch';
import { useMovies } from '../hooks/useMovies';
import Alert from '../components/Alert';

const HomePage = () => {
  const { movies, loading, error, loadPopularMovies, searchMovies } = useMovies();
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

  const handleCloseAlert = () => setAlertMessage(null);

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <MovieSearch 
            onSearch={searchMovies}
            loading={loading}
          />
        </div>

        <h2 className="text-2xl font-bold mb-8">
          {loading ? 'Loading movies...' : 'Popular Movies'}
        </h2>

        <MovieGrid
          movies={movies.slice(0, 8)} // Show only first 8 movies on homepage
          loading={loading}
          error={error}
        />

        {movies.length > 0 && (
          <div className="text-center mt-8">
            <Link
              to="/movies"
              className="btn btn-primary"
            >
              View All Movies
            </Link>
          </div>
        )}

        {alertMessage && (
          <Alert
            isOpen={true}
            message={alertMessage}
            type="error"
            onClose={handleCloseAlert}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
