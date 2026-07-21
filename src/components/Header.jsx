import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#home" className="logo">
          Nenufrana
        </a>
        
        <nav className="nav-modern">
          <div className="nav-pill">
            <a href="#home" className="nav-link">Inicio</a>
            <a href="#products" className="nav-link">Colección</a>
            <a href="#about" className="nav-link">Sobre Nosotros</a>
            <a href="#contact" className="nav-link">Contacto</a>
          </div>
        </nav>
        
        <div className="header-actions">
          <button className="cart-btn">
            Carrito (0)
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
