const ThemeToggle = ({ handleTheme, theme }) => {
  return (
    <button onClick={handleTheme} className='text-xl'>
      {theme === 'dark' ? ' ☀️ ' : ' 🌑 '}
    </button>
  );
};

export default ThemeToggle;
