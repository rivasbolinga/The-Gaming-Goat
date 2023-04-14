import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import NavigationMobile from './components/Navigation/NavMobile';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';
import MyProfile from './pages/MyProfile';
import Cart from './pages/Cart';

function App() {

     const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <HashRouter>
        {width < 768 ? <NavigationMobile /> : <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )

}

export default App
