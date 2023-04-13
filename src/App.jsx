import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import NavigationMobile from './components/Navigation/NavMobile';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';

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
        {width < 769 ? <NavigationMobile /> : <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )

}

export default App
