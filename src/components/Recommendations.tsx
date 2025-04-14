import HeadphonesIcon from "./Icons/HeadphonesIcon";
import MovieIcon from "./Icons/MovieIcon";
import ReadmeIcon from "./Icons/ReadmeIcon";
import YoutubeIcon from "./Icons/YoutubeIcon";

const Recommendations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">My recomendations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkj-zxQQLOqN5Z_usypqjo3C0w5utdBMZtO1uYB9XawvFmY9Ix19KQ4mQWdAXeFrhTrlo&usqp=CAU"
                alt="book 'Salt, Fat, Acid, Heat'"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Books</h3>
            <p className="text-gray-600 mb-4 min-h-[48px]">Culinary bestsellers that changed my approach</p>
            <div className="flex justify-center space-x-4 opacity-80">
              <a href="https://www.amazon.com/Salt-Fat-Acid-Heat-Mastering/dp/1476753830" target="_blank" className="flex items-center text-white bg-cyan-600 hover:bg-cyan-800 rounded-md py-2 px-4 font-semibold transition duration-700 ease-in-out">
                <span className="mr-2">I wanna read you</span>
                <ReadmeIcon />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/330px-Gordon_Ramsay.jpg"
                alt="Gordon Ramsay"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">On-screen mentors</h3>
            <p className="text-gray-600 mb-4 min-h-[48px]">Channels to find movie ideas</p>
            <div className="flex justify-center space-x-4 opacity-80">
              <a href="https://www.youtube.com/user/theFword" target="_blank" className="flex items-center text-white bg-cyan-600 hover:bg-cyan-800 rounded-md py-2 px-4 font-semibold transition duration-700 ease-in-out">
                <span className="mr-2">I wanna watch you</span>
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              <img src="https://m.media-amazon.com/images/M/MV5BODkyNTI4YjUtNjEyNC00NWQ5LTk4M2YtM2Q3NjBiYmJmMGUyXkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg"
                alt="Chef 2014"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Kitchen on screen</h3>
            <p className="text-gray-600 mb-4 min-h-[48px]">Shows that motivate experimentation</p>
            <div className="flex justify-center space-x-4 opacity-80">
              <a href="https://www.imdb.com/title/tt2883512" target="_blank" className="flex items-center text-white bg-cyan-600 hover:bg-cyan-800 rounded-md py-2 px-4 font-semibold transition duration-700 ease-in-out">
                <span className="mr-2">I wanna watch you</span>
                <MovieIcon />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad"
                alt="Food background music"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Background Wisdom</h3>
            <p className="text-gray-600 mb-4 min-h-[48px]">Background Music for Multitasking Chef</p>
            <div className="flex justify-center space-x-4 opacity-80">
              <a href="https://open.spotify.com/track/7cvJJOLeNZf9iAeXIxOyyP" target="_blank" className="flex items-center text-white bg-cyan-600 hover:bg-cyan-800 rounded-md py-2 px-4 font-semibold transition duration-700 ease-in-out">
                <span className="mr-2">I wanna listen you</span>
                <HeadphonesIcon />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg relative">
              <img src="https://i.ytimg.com/vi/_5mpXly7kIo/maxresdefault.jpg"
                alt="Interview with Chef Gustavo Garnica at Cosme"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">Interview with Gustavo</h3>
            <p className="text-gray-600 mb-4 min-h-[48px]">Conversations to broaden horizons</p>
            <div className="flex justify-center space-x-4 opacity-80">
              <a href="https://www.youtube.com/watch?v=fNJaRH_XhLQ" target="_blank" className="flex items-center text-white bg-cyan-600 hover:bg-cyan-800 rounded-md py-2 px-4 font-semibold transition duration-700 ease-in-out">
                <span className="mr-2">I wanna watch you</span>
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;