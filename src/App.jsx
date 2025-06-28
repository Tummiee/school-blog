import './App.css';

import NavbarHome from './components/NavbarHome';
import NavbarAbout from './components/NavbarAbout';
import NavbarReviews from './components/NavbarReviews';
import NavbarVideos from './components/NavbarVideos';
import NavbarBlogDetail from './components/NavbarBlogDetail'
import NavbarVideoDetail from './components/NavbarVideoDetail'
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Reviews from './Pages/Reviews';
import Videos from './Pages/VideosP';

import BlogPost from './Pages/BlogPost';
import VideoPost from './Pages/VideoPost';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  let NavbarComponent = null;

  if (pathname === '/') NavbarComponent = <NavbarHome />;
  else if (pathname === '/about') NavbarComponent = <NavbarAbout />;
  else if (pathname === '/reviews') NavbarComponent = <NavbarReviews />;
  else if (pathname === '/videos') NavbarComponent = <NavbarVideos />;
  else if (/^\/blog\/[^/]+$/.test(pathname)) NavbarComponent = <NavbarBlogDetail />;
  else if (/^\/video\/[^/]+$/.test(pathname)) NavbarComponent = <NavbarVideoDetail />;

  return (
    <>
      {NavbarComponent}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/video/:id" element={<VideoPost />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
