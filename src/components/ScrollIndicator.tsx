import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator = ({ className = '' }: ScrollIndicatorProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50 ${className}`}
      role='progressbar'
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label='Page scroll progress'
    >
      <div
        className='h-full bg-primary-600 transition-all duration-150 ease-out'
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
