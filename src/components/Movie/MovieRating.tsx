interface MovieRatingProps {
  rating: number;
  showText?: boolean;
}

const MovieRating = ({ rating, showText = true }: MovieRatingProps) => {
  // Convert rating from 0-10 scale to 0-5 stars
  const stars = Math.round((rating / 2));
  
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-lg">
          {star <= stars ? '★' : '☆'}
        </span>
      ))}
      {showText && (
        <span className="ml-2 text-white text-sm">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default MovieRating;
