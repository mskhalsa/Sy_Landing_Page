import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const SyWebsite = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set loaded to true after a brief delay to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Track scroll position for parallax and reveal effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar loaded={loaded} />
      <Hero loaded={loaded} />
      <Skills loaded={loaded} />
      <Projects loaded={loaded} />
      <Contact />
      <Footer loaded={loaded} />
    </div>
  );
};

export default SyWebsite;