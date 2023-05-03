const DeleteButton = ({ handleDelete }) => {
  return (
    <button onClick={handleDelete} className='absolute right-0 text-[1.25rem]'>
      🗑
    </button>
  );
};

export default DeleteButton;
