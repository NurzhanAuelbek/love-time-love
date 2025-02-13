
import { useEffect, useRef } from 'react';

const RosePetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'rose-petal';
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDelay = `${Math.random() * 10}s`;
      petal.innerHTML = '🌸';
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 10000);
    };

    const interval = setInterval(createPetal, 3000);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default RosePetals;
