const ActionButton = ({
  width = 'w-fit',
  position = 'self-auto',
  text,
  disabled = false,
  mdw = 'md:w-fit',
}) => {
  return (
    <button
      disabled={disabled}
      className={`${width} ${mdw} ${position} bg-blue-600 text-sm px-3 py-2 rounded-md text-white font-bold hover:bg-blue-500 active:translate-y-1 disabled:bg-blue-200`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
