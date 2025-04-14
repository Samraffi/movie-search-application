interface FormActionsProps {
  onCancel: () => void;
  submitDisabled?: boolean;
}

const FormActions = ({ onCancel, submitDisabled = false }: FormActionsProps) => (
  <div className="flex gap-4 pt-6">
    <button
      type="button"
      onClick={onCancel}
      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
    >
      Cancel
    </button>
    <button
      type="submit"
      disabled={submitDisabled}
      className={`px-6 py-3 text-white rounded-lg ${
        submitDisabled 
          ? 'bg-cyan-400 cursor-not-allowed' 
          : 'bg-cyan-600 hover:bg-cyan-700'
      }`}
    >
      Add movie
    </button>
  </div>
);

export default FormActions;
