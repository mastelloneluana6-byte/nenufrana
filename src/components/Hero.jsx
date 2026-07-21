import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!textRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15;
      const y = (clientY / window.innerHeight - 0.5) * -15;
      
      textRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ backgroundImage: "url('/hero-bg.png')" }}>
        <div className="overlay"></div>
      </div>
      
      <div className="container hero-content fade-in">
        <h1 ref={textRef} className="hero-title slide-up" style={{ animationDelay: '0.2s' }}>
          NENUFRANA
        </h1>
        <p className="hero-subtitle slide-up" style={{ animationDelay: '0.4s' }}>
          Transforma tu espacio con aromas que equilibran tu energía y limpian tu hogar.
        </p>
        <div className="hero-actions slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="#coleccion" className="btn-glass">
            Descubrir Colección <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
