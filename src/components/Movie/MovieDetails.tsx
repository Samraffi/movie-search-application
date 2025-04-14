import { Movie } from '../../types/movie';
import { getImageUrl } from '../../services/movieService/config';
import MovieRating from './MovieRating';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Movie Header with Backdrop */}
      <div className="relative h-64 md:h-96 bg-gray-900">
        {movie.backdropPath && (
          <img
            src={getImageUrl(movie.backdropPath, 'original')}
            alt={movie.title}
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {movie.title}
          </h1>
          <div className="flex items-center space-x-4">
            <MovieRating rating={movie.rating} />
            <span className="text-gray-300">
              {new Date(movie.releaseDate).getFullYear()}
            </span>
            {movie.runtime && (
              <span className="text-gray-300">
                {movie.runtime} min
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster and Metadata */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                src={getImageUrl(movie.posterPath, 'w500')}
                alt={movie.title}
                className="w-full"
              />
            </div>
            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-4">
                <h3 className="font-bold text-gray-700 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Overview and Details */}
          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {movie.overview}
              </p>
            </section>

            {movie.cast && movie.cast.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Cast</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {movie.cast.map((actor, index) => (
                    <div key={index} className="text-gray-700">
                      {actor}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
