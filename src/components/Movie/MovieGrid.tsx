import MovieCard from './MovieCard';

interface MovieGridProps {
  movies?: Array<{
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    releaseDate: string;
  }>;
}

const MovieGrid = ({ movies = [] }: MovieGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {movies.length > 0 ? (
      movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))
    ) : (
      // Placeholder cards
      Array(8).fill(null).map((_, index) => (
        <MovieCard key={index} />
      ))
    )}
  </div>
);

export default MovieGrid;
