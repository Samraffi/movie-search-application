interface MovieCardProps {
  movie?: {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    releaseDate: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
    <div className="relative h-56 overflow-hidden">
      {/* Movie poster will go here */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center space-x-1 text-white">
          {/* Rating will go here */}
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-gray-800 hover:text-cyan-600 transition-colors">
          {movie?.title || 'Movie Title'}
        </h3>
      </div>
      <p className="text-gray-600 text-sm line-clamp-2">
        {movie?.overview || 'Movie description will go here'}
      </p>
    </div>
  </div>
);

export default MovieCard;
