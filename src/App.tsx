import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { testMovieApi } from './services/movieService/test';

const App = () => {
  // This will help us test the API in development
  if (process.env.NODE_ENV === 'development') {
    (window as any).testMovieApi = testMovieApi;
    console.log('Movie API test function available as window.testMovieApi()');
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
