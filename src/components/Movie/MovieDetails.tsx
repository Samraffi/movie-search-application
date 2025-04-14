import MovieRating from './MovieRating';

interface MovieDetailsProps {
  movie?: {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    releaseDate: string;
    runtime?: number;
    genres?: string[];
    director?: string;
    cast?: string[];
  };
}

const MovieDetails = ({ movie }: MovieDetailsProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative h-96 bg-gray-100">
      {/* Movie backdrop will go here */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <h1 className="text-4xl font-bold mb-2">
          {movie?.title || 'Movie Title'}
        </h1>
        {movie?.rating && <MovieRating rating={movie.rating} />}
      </div>
    </div>

    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Poster and metadata */}
        <div>
          <div className="bg-gray-200 rounded-lg aspect-[2/3] mb-4">
            {/* Movie poster will go here */}
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Release Date:</strong> {movie?.releaseDate || 'Unknown'}</p>
            <p><strong>Runtime:</strong> {movie?.runtime ? `${movie.runtime} min` : 'Unknown'}</p>
            <p><strong>Genres:</strong> {movie?.genres?.join(', ') || 'Unknown'}</p>
          </div>
        </div>

        {/* Overview and cast */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700">
              {movie?.overview || 'No overview available'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {movie?.cast?.map((actor, index) => (
                <div key={index} className="text-gray-700">
                  {actor}
                </div>
              )) || 'Cast information not available'}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetails;
