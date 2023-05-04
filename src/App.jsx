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

function App() {
  return (
    <ContextContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/:page?' element={<Main />} />
          <Route path='/article/:id' element={<ArticleDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='/search/:searchString?' element={<SearchFeed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextContainer>
  );
}

export default App;
