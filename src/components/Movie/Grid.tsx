import { Movie } from '../../types/movie';
import Card from './Card';

export interface GridProps {
  movies: Movie[];
  loading?: boolean;
  error?: string | null;
}

const Grid = ({ movies, loading = false, error = null }: GridProps) => {
  const renderLoadingSkeletons = () => {
    return Array(8).fill(null).map((_, index) => (
      <div key={`skeleton-${index}`} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
        <div className="movie-poster bg-gray-200 w-full"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ));
  };

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {renderLoadingSkeletons()}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No movies found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Card
          key={movie.id} 
          movie={movie}
        />
      ))}
    </div>
  );
};

export default Grid;
