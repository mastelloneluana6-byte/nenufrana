import React from 'react';
import './Categories.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = [
  { id: 1, title: 'Palo Santo & Hierbas', image: '/p2.png' },
  { id: 2, title: 'Quemadores de Cascada', image: '/burner.png' },
  { id: 3, title: 'Conos de Incienso', image: '/cones.png' },
  { id: 4, title: 'Packs de Regalo', image: '/hero-bg.png' },
];

const Categories = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="categories-section" ref={ref}>
      <div className="container">
        <h2 className="categories-title">Comprar por Categoría</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <a 
              href="#products" 
              key={cat.id} 
              className={`category-tile reveal-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img src={cat.image} alt={cat.title} className="category-img" />
              <div className="category-overlay">
                <h3 className="category-name">{cat.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
