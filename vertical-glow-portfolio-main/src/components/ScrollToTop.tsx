
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
      } hover:scale-110 hover:-translate-y-1`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} className="mx-auto" />
      
      {/* Efeito de onda ao clicar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-30 hover:animate-ping transition-opacity duration-300"></div>
    </button>
  );
};

export default ScrollToTop;
