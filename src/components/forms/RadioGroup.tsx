import { Field, ErrorMessage } from 'formik';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  className?: string;
  label?: string;
  required?: boolean;
}

const RadioGroup = ({ name, options, className = '', label, required = false }: RadioGroupProps) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="flex items-center gap-3">
        {options.map(({ value, label }) => (
          <label key={value} className="flex items-center gap-2">
            <Field
              type="radio"
              name={name}
              value={value}
              className="form-radio text-cyan-400 focus:ring-cyan-400"
            />
            <span className="text-gray-900">{label}</span>
          </label>
        ))}
      </div>
      
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default RadioGroup;
