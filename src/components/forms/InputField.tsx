import { useField } from 'formik';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}

const InputField = ({
  label,
  name,
  type = 'text',
  error,
  required = true
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        {...field}
        type={type}
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

export default InputField;
