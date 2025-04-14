import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { getImageUrl } from '../../services/movieService/config';
import Rating from './Rating';

interface CardProps {
  movie: Movie;
}

const Card = ({ movie }: CardProps) => {
  return (
    <Link 
      to={`/movies/${movie.id}`}
      className="movie-card block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <div className="relative">
        <div className="movie-poster">
          <img
            src={getImageUrl(movie.posterPath, 'w500')}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Rating rating={movie.rating} />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1" title={movie.title}>
          {movie.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2" title={movie.overview}>
          {movie.overview}
        </p>
        <div className="mt-2 text-sm text-gray-500">
          {new Date(movie.releaseDate).getFullYear()}
        </div>
      </div>
    </Link>
  );
};

export default Card;
