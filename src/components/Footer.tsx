const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-cyan-600/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* About column */}
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-white/60">
              About Us
            </h3>
            <p className="text-white/90 leading-relaxed font-light text-base">
              We are a creative agency dedicated to providing innovative solutions 
              for businesses of all sizes. Our passion is turning ideas into reality.
            </p>
          </div>
          
          {/* Quick Links column */}
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-white/60">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-white/90 hover:text-white transition-all duration-300 ease-in-out pl-4 relative font-medium text-base before:content-['>'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-white/70 before:transition-all before:duration-300 hover:pl-5 hover:before:left-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info column */}
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-5 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 pb-2 relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-white/60">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/90 text-base font-light">123 Street Name, City, Country</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                <span className="text-white/90 text-base font-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-white/90 text-base font-light">info@example.com</span>
              </li>
            </ul>
          </div>          
        </div>
        
        {/* Footer bottom */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0 font-light">
            &copy; {currentYear} <span className="font-medium">Brand Name</span>. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-white/80 hover:text-white text-sm transition-colors duration-300 font-medium">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/80 hover:text-white text-sm transition-colors duration-300 font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;