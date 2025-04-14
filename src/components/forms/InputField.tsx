import { useField } from 'formik';

export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const InputField = ({ label, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...field}
        {...props}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
