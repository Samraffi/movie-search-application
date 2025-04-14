interface AlertProps {
  isOpen: boolean;
  message: string;
  type: 'error' | 'success' | 'info';
  onClose: () => void;
}

const Alert = ({ isOpen, message, type, onClose }: AlertProps) => {
  if (!isOpen) return null;

  const colors = {
    error: 'bg-red-100 text-red-700 border-red-200',
    success: 'bg-green-100 text-green-700 border-green-200',
    info: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    <div className={`rounded-lg border p-4 ${colors[type]} relative`}>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 hover:opacity-70"
        aria-label="Close alert"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
