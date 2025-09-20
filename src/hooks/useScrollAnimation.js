import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationClass = 'animate-in', threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            // Once animated, we can stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before element is visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};

export default useScrollAnimation;