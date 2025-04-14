const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Movie Search. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700"
            >
              The Movie Database (TMDb)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
