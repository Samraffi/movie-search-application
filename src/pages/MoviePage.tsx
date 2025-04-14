import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieApi } from '../services/movieService/api';
import MovieDetails from '../components/Movie/MovieDetails';
import Alert from '../components/Alert';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (!id) {
        navigate('/movies');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await movieApi.getMovieDetails(Number(id));
        setMovie(data);
      } catch (err) {
        console.error('Failed to load movie:', err);
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {error ? (
        <Alert
          isOpen={true}
          message={error}
          type="error"
          onClose={() => setError(null)}
        />
      ) : movie ? (
        <MovieDetails movie={movie} />
      ) : null}
    </div>
  );
};

export default MoviePage;
