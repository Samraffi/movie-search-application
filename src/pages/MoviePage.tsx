import MovieDetails from '../components/Movie/MovieDetails';
import { Movie } from '../types/movie';

const MoviePage = () => {
  // This is just a placeholder movie object
  const mockMovie: Movie = {
    id: 1,
    title: 'Movie Title',
    overview: 'Movie description will be here...',
    posterPath: '/placeholder.jpg',
    releaseDate: '2024-01-01',
    rating: 8.5,
    runtime: 120,
    genres: ['Action', 'Adventure'],
    director: 'Director Name',
    cast: ['Actor 1', 'Actor 2', 'Actor 3']
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <MovieDetails movie={mockMovie} />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
        {/* MovieGrid component will be added here later */}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Movie Reviews</h2>
        {/* Reviews component will be added here later */}
      </div>
    </div>
  );
};

export default MoviePage;
