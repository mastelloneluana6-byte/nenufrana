import React from 'react';
import './FeatureSplit.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureSplit = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="feature-editorial-section" ref={ref}>
      <div className="container">
        <div className="feature-editorial-wrapper">
          
          <div className="feature-editorial-text">
            <span className={`editorial-tag reveal-up ${isVisible ? 'is-visible' : ''}`}>OFERTA EXCLUSIVA</span>
            <h2 className={`editorial-title reveal-up delay-100 ${isVisible ? 'is-visible' : ''}`}>
              <em>10% de descuento</em><br/>
              en tu primer pedido.
            </h2>
            <p className={`editorial-desc reveal-up delay-200 ${isVisible ? 'is-visible' : ''}`}>
              Descubre el equilibrio perfecto entre diseño artesanal y bienestar. Únete a nuestra comunidad y transforma tus espacios.
            </p>
            <a href="#coleccion" className={`editorial-link reveal-up delay-300 ${isVisible ? 'is-visible' : ''}`}>COMPRAR AHORA</a>
          </div>
          
          <div className="feature-editorial-images">
            <img src="/editorial_model_right.png" alt="Nenufrana Editorial" className={`editorial-img-main reveal-fade ${isVisible ? 'is-visible' : ''}`} />
            <div className={`editorial-img-secondary-wrapper reveal-up delay-300 ${isVisible ? 'is-visible' : ''}`}>
              <img src="/olive_mugs.jpg" alt="Olive Green Ceramic Mug Set" className="editorial-img-secondary" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
