const HERO_DESCRIPTION = [
  "Discover thousands of movies, from latest releases to timeless classics.",
  "Get detailed information about your favorite films, including ratings, cast, and reviews.",
  "Search by title, genre, or release year to find exactly what you're looking for."
];

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Movie Discovery Platform
          </h1>
          <div className="space-y-4">
            {HERO_DESCRIPTION.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-gray-100">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-lg text-sm">
              Powered by TMDb API
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
