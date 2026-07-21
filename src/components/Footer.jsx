import React from 'react';
import './Footer.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer className={`site-footer reveal-fade ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h2 className="footer-logo">Nenufrana</h2>
            <p className="footer-desc">
              Transformando espacios con aromas naturales, palo santo de origen ético y diseños artesanales únicos.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-title">Colección</h4>
            <ul className="footer-links">
              <li><a href="#palo-santo">Palo Santo</a></li>
              <li><a href="#quemadores">Quemadores</a></li>
              <li><a href="#ceramica">Cerámica</a></li>
              <li><a href="#nuevos">Nuevos Ingresos</a></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#sostenibilidad">Sostenibilidad</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nenufrana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
