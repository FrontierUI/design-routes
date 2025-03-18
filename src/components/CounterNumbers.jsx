import React, { useState, useEffect, useRef } from 'react';

const CounterNumbers = ({ end, duration = 2000, start = 0, decimals = 0 }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Element is entering viewport
          if (!isVisible) {
            setIsVisible(true);
            if (isCompleted) {
              // Reset and prepare to restart
              setCount(start);
              setIsCompleted(false);
            }
          }
        } else if (isCompleted) {
          // Element is leaving viewport and animation is complete
          setIsVisible(false);
          setCount(start); // Reset to start value when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [isCompleted, isVisible, start]); // Added start to dependencies

  useEffect(() => {
    if (!isVisible || isCompleted) return;

    const startTime = performance.now();
    const step = (end - start) / (duration / 16);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = start + (end - start) * progress;

      if (progress < 1) {
        setCount(Number(newValue.toFixed(decimals)));
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsCompleted(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, start, end, duration, decimals, isCompleted]);

  const formatNumber = (num) => {
    if (isCompleted) {
      return Number(num)
        .toFixed(decimals)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const validNum = Number.isFinite(num) ? num : 0;
    return validNum.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return <div ref={containerRef}>{formatNumber(count)}</div>;
};

export default CounterNumbers;
