import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <div className="lotus-symbol">🪷</div>
          </div>
        </div>
        <div className="about-content">
          <span className="subtitle">Nuestra Historia</span>
          <h2>Armonía natural en cada respiración</h2>
          <p>
            En Nenufrana creemos en el poder de la naturaleza para traer paz 
            y equilibrio a un mundo agitado. Nuestro Palo Santo cuidadosamente 
            seleccionado y nuestros porta inciensos hechos a mano están diseñados 
            para transformar tu espacio en un santuario de paz.
          </p>
          <p>
            Inspirados en la flor de loto, símbolo de pureza y despertar espiritual, 
            reunimos elementos que apoyan tu bienestar.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: '20px' }}>Lee más sobre nosotros</button>
        </div>
      </div>
    </section>
  );
};

export default About;
