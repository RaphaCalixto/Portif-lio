import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Olá, sou Raphael e sou um Desenvolvedor Fullstack';
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Criar estrelas interativas
  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;
      
      const starsContainer = starsRef.current;
      const numberOfStars = 80; // Aumentei o número de estrelas
      
      // Limpar estrelas existentes
      starsContainer.innerHTML = '';
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 2; // Estrelas maiores (2-5px)
        const opacity = Math.random() * 0.6 + 0.4; // Mais opacas (0.4-1.0)
        
        star.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: currentColor;
          border-radius: 50%;
          opacity: ${opacity};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 0 ${size * 2}px currentColor;
        `;
        starsContainer.appendChild(star);
      }
    };

    createStars();

    const handleMouseMove = (e: MouseEvent) => {
      if (!starsRef.current) return;
      
      const stars = starsRef.current.querySelectorAll('.star');
      const rect = starsRef.current.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
      
      stars.forEach((star, index) => {
        const element = star as HTMLElement;
        const starX = parseFloat(element.style.left);
        const starY = parseFloat(element.style.top);
        
        const distance = Math.sqrt(
          Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
        );
        
        if (distance < 25) { // Aumentei a área de interação
          const angle = Math.atan2(starY - mouseY, starX - mouseX);
          const moveDistance = (25 - distance) * 0.8; // Mais movimento
          const scale = 1 + (25 - distance) * 0.08; // Maior escala
          
          element.style.transform = `translate(${Math.cos(angle) * moveDistance}px, ${Math.sin(angle) * moveDistance}px) scale(${scale})`;
          element.style.opacity = String(Math.min(1, 0.4 + (25 - distance) * 0.06));
          element.style.boxShadow = `0 0 ${(25 - distance) * 0.5}px currentColor`;
        } else {
          element.style.transform = 'translate(0, 0) scale(1)';
          element.style.opacity = String(Math.random() * 0.6 + 0.4);
          element.style.boxShadow = '0 0 4px currentColor';
        }
      });
    };

    // Animação automática das estrelas
    const animateStars = () => {
      if (!starsRef.current) return;
      
      const stars = starsRef.current.querySelectorAll('.star');
      stars.forEach((star) => {
        const element = star as HTMLElement;
        if (!element.style.transform.includes('translate')) {
          const currentOpacity = parseFloat(element.style.opacity);
          const newOpacity = Math.random() * 0.6 + 0.4;
          element.style.opacity = String(Math.abs(currentOpacity - newOpacity) < 0.1 ? newOpacity : currentOpacity + (newOpacity - currentOpacity) * 0.1);
        }
      });
    };

    const animationInterval = setInterval(animateStars, 2000);

    const container = starsRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        clearInterval(animationInterval);
      };
    }

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Interactive Stars Background */}
      <div 
        ref={starsRef}
        className="absolute inset-0 opacity-70 dark:opacity-80 text-gray-700 dark:text-blue-400"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,50,0.1) 100%)' }}
      />
      
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="mb-6 sm:mb-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl relative">
            {/* Animação da borda girando */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 animate-spin"></div>
            <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/6EnYG8l.jpeg" 
                alt="Perfil" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover transition-all duration-300 hover:filter hover:grayscale"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 min-h-[120px] sm:min-h-[200px] flex items-center justify-center px-2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. 
          Especializado em React, Node.js e tecnologias modernas.
        </p>
        
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          <a 
            href="https://github.com/RaphaCalixto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 shadow-lg"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/raphael-roberto-calixto-10a204234/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-purple-600 transition-all duration-200 shadow-lg"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a 
            href="mailto:raphacalixto10@gmail.com"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-200 shadow-lg"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 text-sm sm:text-base"
        >
          <span>Conheça meu trabalho</span>
          <ChevronDown size={18} className="sm:w-5 sm:h-5" />
        </button>
          
          <a 
            href="/cv.pdf" 
            download
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 text-sm sm:text-base"
          >
            <span>CV</span>
            <Download size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
