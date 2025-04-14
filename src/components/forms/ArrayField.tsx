import { FieldArray, useField } from 'formik';

interface ArrayFieldProps {
  label: string;
  name: string;
  error?: string;
  isTextarea?: boolean;
}

const ArrayField = ({
  label,
  name,
  error,
  isTextarea = false
}: ArrayFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <FieldArray name={name}>
        {({ push, remove, form }) => (
          <div>
            {form.values[name].map((item: string, index: number) => (
              <div key={index} className="flex gap-2 mb-2">
                {isTextarea ? (
                  <textarea
                    name={`${name}.${index}`}
                    value={item}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={`flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
                    }`}
                    rows={2}
                  />
                ) : (
                  <input
                    type="text"
                    name={`${name}.${index}`}
                    value={item}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={`flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                      meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                )}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => push('')}
              className="text-cyan-600 hover:text-cyan-800"
            >
              + {isTextarea ? 'Add step' : 'Add item'}
            </button>
          </div>
        )}
      </FieldArray>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default ArrayField;
