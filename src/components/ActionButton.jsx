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
      className={`${width} ${mdw} ${position} dark:bg-blue-600 bg-green-500 text-sm px-3 py-2 rounded-md text-white font-bold dark:hover:bg-blue-500 hover:bg-green-400 active:translate-y-1 active:disabled:translate-y-0 disabled:bg-green-200 dark:disabled:bg-blue-200`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
