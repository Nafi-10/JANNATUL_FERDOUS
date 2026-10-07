import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  repeat?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  repeat = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (repeat) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [repeat]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10 scale-[0.98]';
      case 'down':
        return '-translate-y-10 scale-[0.98]';
      case 'left':
        return 'translate-x-10';
      case 'right':
        return '-translate-x-10';
      case 'zoom':
        return 'scale-90';
      case 'fade':
      default:
        return 'translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

