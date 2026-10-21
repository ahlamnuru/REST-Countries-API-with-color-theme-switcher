type StatusMessageProps = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

function StatusMessage({ message, actionLabel, onAction }: StatusMessageProps) {
  return (
    <div className="py-20 text-center" role="status">
      <p className="text-lg font-semibold">{message}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-md bg-white px-8 py-2 text-sm shadow-md hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-blue-900"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default StatusMessage;
