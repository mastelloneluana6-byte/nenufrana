import React, { useEffect, useRef, useState } from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Palo Santo Manto Herbal - Eucalipto', price: '14.95 EUR', image: '/p1.png' },
  { id: 2, name: 'Palo Santo Manto Herbal - Rosa', price: '14.95 EUR', image: '/p2.png' },
  { id: 3, name: 'Palo Santo Manto Herbal - Canela', price: '14.95 EUR', image: '/p3.png' },
  { id: 4, name: 'Palo Santo Manto Herbal - Salvia Blanca', price: '14.95 EUR', image: '/p1.png' },
  { id: 5, name: 'Quemador de Incienso Reflujo - Olla Negra', price: '34.95 EUR', image: '/p2.png' },
  { id: 6, name: 'Quemador de Reflujo - Cascada Oscura', price: '44.95 EUR', image: '/p3.png' },
  { id: 7, name: 'Quemador de Reflujo - Cascada Verde', price: '44.95 EUR', image: '/p1.png' },
  { id: 8, name: 'Quemador de Incienso - Olla Verde', price: '34.95 EUR', image: '/p2.png' },
];

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="coleccion" className="products-grid-section" ref={sectionRef}>
      <div className="container">
        <h2 className="products-grid-title">COLECCIÓN</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-grid-card ${isVisible ? 'slide-in-right' : ''}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}</span>
                <button className="add-to-cart-btn">AÑADIR AL CARRITO</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
