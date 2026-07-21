import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = { threshold: 0.15 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: unobserve if we only want it to animate once
        if (ref.current) observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold]);

  return { ref, isVisible };
};
