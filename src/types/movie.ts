export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath?: string;
  releaseDate: string;
  rating: number;
  runtime?: number;
  genres?: string[];
  director?: string;
  cast?: string[];
}

export type MoviePost = Omit<Movie, 'id'>;

export interface MovieListResponse {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
}

export interface MovieSearchParams {
  query?: string;
  page?: number;
  genre?: string;
  year?: number;
  sortBy?: 'popularity' | 'rating' | 'release_date';
}

export enum MovieCategory {
  Action = "Action",
  Adventure = "Adventure",
  Comedy = "Comedy",
  Drama = "Drama",
  Horror = "Horror",
  Thriller = "Thriller",
  SciFi = "Science Fiction",
  Fantasy = "Fantasy",
  Romance = "Romance",
  Animation = "Animation",
  Documentary = "Documentary",
  Other = "Other"
}

export interface FormValidation {
  [key: string]: string[];
}

export const MOVIE_VALIDATION = {
  title: {
    required: true,
    minLength: 1,
    maxLength: 100
  },
  overview: {
    required: true,
    minLength: 10,
    maxLength: 1000
  },
  rating: {
    min: 0,
    max: 10
  },
  runtime: {
    min: 1
  }
};

export interface AlertStateType {
  isOpen: boolean;
  message: string;
  type: 'error' | 'success' | 'info';
}
