import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-cyan-600' : 'text-gray-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-cyan-600">
            Movie Search
          </Link>
          
          <div className="space-x-6">
            <Link 
              to="/movies" 
              className={`${isActive('/movies')} hover:text-cyan-600 transition-colors`}
            >
              Movies
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact')} hover:text-cyan-600 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
