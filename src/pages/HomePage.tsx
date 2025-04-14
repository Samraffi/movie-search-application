import MovieGrid from '../components/Movie/MovieGrid';
import MovieSearch from '../components/Movie/MovieSearch';
import { MovieSearchParams } from '../types/movie';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Movies
        </h1>
        <p className="text-xl text-gray-600">
          Search and explore your favorite movies
        </p>
      </div>

      <MovieSearch
        onSearch={(params: MovieSearchParams) => {
          // Search logic will be added later
          console.log('Search params:', params);
        }}
      />

      <MovieGrid
        movies={[]} // Will be populated with real data later
      />
    </div>
  );
};

export default HomePage;
