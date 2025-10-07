import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {  AnimatePresence } from 'framer-motion'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored && (stored === "true" || stored === "false")) {
        setDark(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Theme load error:", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);
  return (
    <div className={dark ? 'dark' : ''}>
      <div className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300'>
      
      <Navbar dark={dark} setDark={setDark} />
      <AnimatePresence mode='wait'>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />

      </AnimatePresence>

    

      </div>
    </div>
  );
};

export default App