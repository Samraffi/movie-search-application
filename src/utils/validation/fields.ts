import { MOVIE_VALIDATION, MovieCategory, FormValidation, MoviePost } from "../../types/movie";

export const validateMovieFields = (movie: Partial<MoviePost>): FormValidation => {
  const errors: FormValidation = {};

  // Validate title
  if (!movie.title) {
    errors.title = ["Title is required"];
  } else if (movie.title.length < MOVIE_VALIDATION.title.minLength) {
    errors.title = [`Title must be at least ${MOVIE_VALIDATION.title.minLength} character`];
  } else if (movie.title.length > MOVIE_VALIDATION.title.maxLength) {
    errors.title = [`Title must not exceed ${MOVIE_VALIDATION.title.maxLength} characters`];
  }

  // Validate overview
  if (!movie.overview) {
    errors.overview = ["Overview is required"];
  } else if (movie.overview.length < MOVIE_VALIDATION.overview.minLength) {
    errors.overview = [`Overview must be at least ${MOVIE_VALIDATION.overview.minLength} characters`];
  } else if (movie.overview.length > MOVIE_VALIDATION.overview.maxLength) {
    errors.overview = [`Overview must not exceed ${MOVIE_VALIDATION.overview.maxLength} characters`];
  }

  // Validate rating
  if (movie.rating !== undefined) {
    if (movie.rating < MOVIE_VALIDATION.rating.min) {
      errors.rating = [`Rating must be at least ${MOVIE_VALIDATION.rating.min}`];
    } else if (movie.rating > MOVIE_VALIDATION.rating.max) {
      errors.rating = [`Rating must not exceed ${MOVIE_VALIDATION.rating.max}`];
    }
  }

  // Validate runtime
  if (movie.runtime !== undefined && movie.runtime < MOVIE_VALIDATION.runtime.min) {
    errors.runtime = [`Runtime must be at least ${MOVIE_VALIDATION.runtime.min} minute`];
  }

  // Validate genres
  if (movie.genres && movie.genres.length > 0) {
    const invalidGenres = movie.genres.filter(
      genre => !Object.values(MovieCategory).includes(genre as MovieCategory)
    );
    if (invalidGenres.length > 0) {
      errors.genres = [`Invalid genres: ${invalidGenres.join(', ')}`];
    }
  }

  return errors;
};
