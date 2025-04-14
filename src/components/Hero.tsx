import { DESCRIPTION_OF_MOVIE_SEARCH } from '../constants/about';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Movie Search</h1>
          <div className="space-y-4">
            {DESCRIPTION_OF_MOVIE_SEARCH.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
