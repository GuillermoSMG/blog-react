import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleDetail from './components/ArticleDetail';
import Footer from './components/Footer';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';
import Signup from './components/Signup';
import ContextContainer from './components/UserContext';
import UserProfile from './components/UserProfile';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'dark'
  );
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    if (theme === 'dark') {
      localStorage.setItem('theme', JSON.stringify('light'));
    } else {
      localStorage.setItem('theme', JSON.stringify('dark'));
    }
  };

  return (
    <ContextContainer>
      <BrowserRouter>
        <Navbar handleTheme={handleTheme} theme={theme} />
        <Routes>
          <Route path='/:page?' element={<Main />} />
          <Route path='/article/:id' element={<ArticleDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/:id/:page?' element={<UserProfile />} />
          <Route path='/search/:searchString?' element={<SearchFeed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextContainer>
  );
}

export default App;
