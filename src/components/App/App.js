import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Slider from '../Slider/Slider';
import Privacy from '../Privacy/Privacy';
import Sponsor from '../Sponsor/Sponsor'; 

function App() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const [headerHeight, setHeaderHeight] = useState("100%");

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerWidth >= 768 ? "80vh" : "100%";
      setHeaderHeight(height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <>
              <Header height={headerHeight} color="white" />
              {isHomepage && <Slider />}
              <Services />
              <Footer />
            </>
          } />
          <Route path='/about-us' element={
            <>
              <Header height="100%" color="black" />
              <AboutUs />
              <Sponsor />
              <Services />
              <Footer />
            </>
          } />
          <Route path='/services' element={
            <>
              <Header height="100%" color="black" />
              <Product />
              <Services />
              <Footer />
            </>
          } />
          <Route path='/projects' element={
            <>
              <Header height="100%" color="black" />
              <Projects />
              <Services />
              <Footer />
            </>
          } />
          <Route path='/contacts' element={
            <>
              <Header height="100%" color="black" />
              <Contacts />
              <Services />
              <Footer />
            </>
          } />
          <Route path='/privacy-policy' element={
            <>
              <Header height="100%" color="black" />
              <Privacy />
              <Services />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;