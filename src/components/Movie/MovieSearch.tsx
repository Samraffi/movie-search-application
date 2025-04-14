import { useState } from 'react';
import { MovieSearchParams } from '../../types/movie';

interface MovieSearchProps {
  onSearch: (params: MovieSearchParams) => void;
  loading?: boolean;
}

const MovieSearch = ({ onSearch, loading = false }: MovieSearchProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch({ query: query.trim() });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Optionally add debounced search here for auto-search
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
        className="input pr-20"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !query.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary py-1"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default MovieSearch;
