import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { movieValidationSchema } from '../constants/validation';
import InputField from '../components/forms/InputField';
import TextareaField from '../components/forms/TextareaField';
import Alert from '../components/Alert';
import { MovieCategory, MoviePost } from '../types/movie';

const MovieAddPage = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  const initialValues: Partial<MoviePost> = {
    title: '',
    overview: '',
    posterPath: '',
    releaseDate: '',
    rating: 0,
    runtime: 0,
    genres: []
  };

  const handleSubmit = async (values: Partial<MoviePost>) => {
    try {
      // API call will be implemented later
      console.log('New movie:', values);
      setAlert({ message: 'Movie added successfully', type: 'success' });
      setTimeout(() => {
        navigate('/movies');
      }, 1500);
    } catch (err) {
      setAlert({ message: 'Failed to add movie', type: 'error' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Movie</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={movieValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <InputField
                label="Title"
                name="title"
                type="text"
              />

              <TextareaField
                label="Overview"
                name="overview"
                rows={4}
              />

              <InputField
                label="Poster URL"
                name="posterPath"
                type="url"
              />

              <InputField
                label="Release Date"
                name="releaseDate"
                type="date"
              />

              <div className="grid grid-cols-2 gap-6">
                <InputField
                  label="Rating"
                  name="rating"
                  type="number"
                  min={0}
                  max={10}
                  step={0.1}
                />

                <InputField
                  label="Runtime (minutes)"
                  name="runtime"
                  type="number"
                  min={1}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/movies')}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-50"
                >
                  Add Movie
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {alert && (
          <Alert
            isOpen={true}
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MovieAddPage;
