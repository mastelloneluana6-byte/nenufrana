import React, { useEffect, useRef, useState } from 'react';
import './Benefits.css';

const LeafIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);

const BoxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
  </svg>
);

const LockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const benefitsData = [
  {
    num: '01',
    title: '100% Natural',
    description: 'Palo Santo y plantas de origen ético, elaborados sin componentes químicos añadidos.',
  },
  {
    num: '02',
    title: 'Aromaterapia Real',
    description: 'Aromas puros e intensos, diseñados meticulosamente para la meditación profunda y el relax.',
  },
  {
    num: '03',
    title: 'Envío Rápido',
    description: 'Preparamos tu pedido al instante. Recíbelo en la comodidad de tu casa en tan solo 24-48h.',
  },
  {
    num: '04',
    title: 'Pago Seguro',
    description: 'Múltiples opciones de pago garantizadas con encriptación de extremo a extremo.',
  },
];

const Benefits = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [visibleRows, setVisibleRows] = useState([]);
  
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    // Observer for the main section (image and title)
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Observer for individual rows
    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleRows((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) rowObserver.observe(ref);
    });

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      rowRefs.current.forEach((ref) => {
        if (ref) rowObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="benefits-section" ref={sectionRef}>
      <div className="container">
        <div className="benefits-wrapper">
          
          <div className={`benefits-visual ${isSectionVisible ? 'animate-in' : ''}`}>
            <div className="benefits-image-editorial">
              {/* Using the dark, moody image */}
              <img src="/dark_burner.png" alt="Esencia Natural" />
              <div className="editorial-frame"></div>
            </div>
          </div>
          
          <div className="benefits-content">
            <h2 className={`benefits-main-title ${isSectionVisible ? 'text-reveal' : ''}`}>
              Por qué elegirnos
            </h2>
            <div className="benefits-list">
              {benefitsData.map((benefit, index) => (
                <div 
                  key={index}
                  ref={el => rowRefs.current[index] = el}
                  data-index={index}
                  className={`benefit-row ${visibleRows.includes(index) ? 'fade-up' : ''}`}
                >
                  <div className="benefit-number">{benefit.num}</div>
                  <div className="benefit-text">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-desc">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;
