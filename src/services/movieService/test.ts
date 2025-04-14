import { movieApi } from './api';

// Test function to verify API connectivity
export const testMovieApi = async () => {
  try {
    console.log('Testing API connection...');
    const response = await movieApi.getPopular(1);
    console.log('Popular movies:', response);
    return response;
  } catch (error) {
    console.error('API test failed:', error);
    throw error;
  }
};

// Add to window for testing in browser console
if (typeof window !== 'undefined') {
  (window as any).testMovieApi = testMovieApi;
}
