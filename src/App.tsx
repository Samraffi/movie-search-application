import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Alert from './components/Alert';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Alert component will be controlled by state management later */}
      <Alert
        isOpen={false}
        message=""
        type="info"
        onClose={() => {}}
      />
    </div>
  );
};

export default App;
