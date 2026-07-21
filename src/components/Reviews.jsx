import React from 'react';
import './Reviews.css';

const reviewsData = [
  { id: 1, name: "María S.", text: "El aroma del palo santo es increíble, transforma mi hogar por completo." },
  { id: 2, name: "Laura G.", text: "Diseño precioso y calidad excepcional. Mi quemador favorito." },
  { id: 3, name: "Carmen P.", text: "Un servicio impecable. Los productos llegaron perfectamente empaquetados." },
  { id: 4, name: "Elena V.", text: "La estética de la marca es de lujo. Se nota el amor en cada detalle." },
  { id: 5, name: "Lucía R.", text: "Relajación absoluta. Las esencias naturales marcan la diferencia." },
  { id: 6, name: "Ana M.", text: "Compré el set de tazas y son mis favoritas para el té de la mañana." },
  { id: 7, name: "Julia C.", text: "He probado muchas marcas, pero la pureza de Nenufrana es única." },
  { id: 8, name: "Sofía T.", text: "Un regalo perfecto. A mi madre le fascinó la calidad de la cerámica." },
  { id: 9, name: "Isabel F.", text: "Envío rápido y atención al cliente de 10. Recomiendo sin duda." },
  { id: 10, name: "Marta D.", text: "Mis rituales de meditación han mejorado gracias a estos productos." }
];

const Reviews = () => {
  return (
    <section className="reviews-section fade-in">
      <div className="reviews-header">
        <h2 className="reviews-title">Lo que dicen de nosotros</h2>
        <div className="reviews-stars">★★★★★</div>
      </div>
      
      <div className="reviews-marquee-container">
        <div className="reviews-marquee">
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
