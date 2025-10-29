const ActionButton = ({ status, children }) => {
  return (
    <button
      disabled={status}
      className="bg-green-700 hover:bg-green-900 rounded-xl p-2 disabled:bg-green-900"
    >
      {children}
    </button>
  );
};

export default ActionButton;
