import React from 'react';
import './Banner.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Banner = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="banner-section" ref={ref}>
      <div className={`banner-image reveal-scale ${isVisible ? 'is-visible' : ''}`}>
        <img src="/model_leaves.png" alt="Nenufrana Editorial" className={`parallax-bg ${isVisible ? 'is-visible' : ''}`} />
      </div>
    </section>
  );
};

export default Banner;
