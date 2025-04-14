import * as Yup from 'yup';

export const movieValidationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(1, 'Title is required')
    .max(100, 'Title must not exceed 100 characters'),
  overview: Yup.string()
    .required('Overview is required')
    .min(10, 'Overview must be at least 10 characters')
    .max(1000, 'Overview must not exceed 1000 characters'),
  posterPath: Yup.string()
    .url('Please enter a valid image URL'),
  rating: Yup.number()
    .min(0, 'Rating must be at least 0')
    .max(10, 'Rating must not exceed 10'),
  releaseDate: Yup.string()
    .required('Release date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  runtime: Yup.number()
    .min(1, 'Runtime must be at least 1 minute'),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, 'Select at least one genre')
});

export const searchValidationSchema = Yup.object({
  query: Yup.string()
    .min(2, 'Enter at least 2 characters'),
  year: Yup.number()
    .min(1888, 'Year must be 1888 or later')
    .max(new Date().getFullYear() + 5, 'Invalid future year'),
  genre: Yup.string()
});
