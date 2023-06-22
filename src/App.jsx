import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextContainer from './components/UserContext';
import ThemeContextContainer from './components/ThemeContext';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';

const ArticleDetail = lazy(() => import('./components/ArticleDetail'));
const Footer = lazy(() => import('./components/Footer'));
const Login = lazy(() => import('./components/Login'));
const Main = lazy(() => import('./components/Main'));
const Navbar = lazy(() => import('./components/Navbar'));
const SearchFeed = lazy(() => import('./components/SearchFeed'));
const Signup = lazy(() => import('./components/Signup'));
const UserProfile = lazy(() => import('./components/UserProfile'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeContextContainer>
        <ContextContainer>
          <BrowserRouter>
            <Navbar />
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
      </ThemeContextContainer>
    </Suspense>
  );
}

export default App;
