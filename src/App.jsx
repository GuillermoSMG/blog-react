import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ArticleDetail from './components/ArticleDetail';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import ContextContainer from './components/UserContext';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextContainer>
  );
}

export default App;
