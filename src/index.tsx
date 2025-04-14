import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { testMovieApi } from './services/movieService/test';
import './index.css';

// Add error boundary for the entire app
const handleError = (error: Error) => {
  console.error('Application Error:', error);
  // You could also log to an error reporting service here
};

// Make test function available in development
if (process.env.NODE_ENV === 'development') {
  (window as any).testMovieApi = testMovieApi;
  console.log('Movie API test function available as window.testMovieApi()');
}

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider 
      router={router} 
      fallbackElement={<div>Loading...</div>}
    />
  </StrictMode>
);

// Add global error handler
window.addEventListener('error', (event) => {
  handleError(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  handleError(event.reason);
});
