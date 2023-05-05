const EditButton = ({ handleEdit }) => {
  return (
    <button
      title='Edit'
      onClick={handleEdit}
      className='absolute right-7 text-[1.25rem]'
    >
      📝
    </button>
  );
};

export default EditButton;
