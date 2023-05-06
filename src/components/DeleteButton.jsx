const DeleteButton = ({ handleDelete }) => {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        handleDelete();
      }}
      title='Delete'
      className='absolute right-0 text-[1.25rem]'
    >
      🗑
    </button>
  );
};

export default DeleteButton;
