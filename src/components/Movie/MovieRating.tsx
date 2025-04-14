interface MovieRatingProps {
  rating: number;
  reviews?: number;
}

const MovieRating = ({ rating, reviews }: MovieRatingProps) => {
  const stars = Math.round(rating / 2); // Convert 10-point scale to 5-point

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < stars ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-sm">
        {rating.toFixed(1)}
        {reviews !== undefined && ` (${reviews} reviews)`}
      </span>
    </div>
  );
};

export default MovieRating;
