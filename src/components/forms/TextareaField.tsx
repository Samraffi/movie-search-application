import { useField } from 'formik';

interface TextareaFieldProps {
  label: string;
  name: string;
  rows?: number;
  error?: string;
  required?: boolean;
}

const TextareaField = ({
  label,
  name,
  rows = 4,
  error,
  required = true
}: TextareaFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        {...field}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
        required={required}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default TextareaField;
