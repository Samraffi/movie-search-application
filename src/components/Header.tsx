import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="group">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                Simple Blog
              </span>
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          
          <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'} md:opacity-100 md:scale-y-100 md:pointer-events-auto origin-top ${isMenuOpen ? 'z-50' : '-z-10 md:z-auto'}`}>
            <ul className="flex flex-col md:flex-row items-center py-4 md:py-0 px-4 md:px-0 space-y-4 md:space-y-0 md:space-x-8">
              {['Home', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-800 hover:text-cyan-600 font-medium relative transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-0.5 before:bg-gradient-to-r before:from-cyan-600 before:to-cyan-800 before:transition-all before:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;