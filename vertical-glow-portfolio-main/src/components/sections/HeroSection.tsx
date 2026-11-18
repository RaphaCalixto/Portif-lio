import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, Terminal, ArrowRight, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Olá, sou Raphael e sou um Desenvolvedor Fullstack';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white relative overflow-hidden pt-24 pb-16"
    >
      {/* Background Engineering Grid (Dot Matrix) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#52525b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Radial Ambient Lighting (Monochrome Slate / Emerald) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-5xl">
        
        {/* Terminal Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 font-mono text-xs">system.status</span>
          <span className="text-zinc-600 font-mono text-xs">::</span>
          <span className="text-emerald-400 font-mono text-xs font-medium">available_for_projects</span>
          <span className="hidden sm:inline text-zinc-600 font-mono text-xs">|</span>
          <span className="hidden sm:inline text-zinc-400 font-mono text-xs">RJ, Brasil</span>
        </motion.div>

        {/* Developer Avatar Frame */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto group">
            {/* Corner Tech Ticks */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-500/80 transition-colors group-hover:border-emerald-400" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-emerald-500/80 transition-colors group-hover:border-emerald-400" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-emerald-500/80 transition-colors group-hover:border-emerald-400" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-500/80 transition-colors group-hover:border-emerald-400" />

            {/* Container with crisp border */}
            <div className="w-full h-full rounded-2xl p-1 bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-300 group-hover:border-zinc-700 overflow-hidden">
              <img 
                src="https://i.imgur.com/6EnYG8l.jpeg" 
                alt="Raphael Calixto" 
                className="w-full h-full rounded-xl object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Monospace Tech Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md bg-zinc-900 border border-zinc-700/80 text-[11px] font-mono text-zinc-300 shadow-lg whitespace-nowrap flex items-center gap-1.5">
              <Code2 size={12} className="text-emerald-400" />
              <span>dev.fullstack</span>
            </div>
          </div>
        </motion.div>
        
        {/* Terminal Command Line Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 text-zinc-500 font-mono text-xs sm:text-sm mb-2">
            <span className="text-emerald-500 font-semibold">$</span>
            <span>whoami --summary</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white min-h-[90px] sm:min-h-[140px] flex items-center justify-center px-2">
            <span className="leading-tight">
              {displayedText}
              <span className="inline-block w-2.5 sm:w-3 h-[0.85em] ml-2 bg-emerald-400 align-middle animate-pulse" />
            </span>
          </h1>
        </motion.div>
        
        {/* Engineering Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-normal"
        >
          Construindo aplicações web escaláveis, microsserviços resilientes e experiências digitais de alta performance. 
          Especialista no ecossistema <span className="text-zinc-200 font-semibold">React / Next.js</span>, <span className="text-zinc-200 font-semibold">TypeScript</span>, <span className="text-zinc-200 font-semibold">Node.js</span> e <span className="text-zinc-200 font-semibold">Docker</span>.
        </motion.p>
        
        {/* Tech Stack Pills in Monospace */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl mx-auto font-mono text-xs"
        >
          {['Next.js 14+', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'RESTful APIs', 'Tailwind CSS'].map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Social Terminal Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center space-x-3 sm:space-x-4 mb-10"
        >
          <a 
            href="https://github.com/RaphaCalixto" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center hover:scale-105 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 transition-all duration-200 shadow-sm"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/raphael-roberto-calixto-10a204234/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center hover:scale-105 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 transition-all duration-200 shadow-sm"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:raphacalixto10@gmail.com"
            aria-label="Email"
            className="w-11 h-11 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center hover:scale-105 hover:border-zinc-600 hover:text-white hover:bg-zinc-800 transition-all duration-200 shadow-sm"
          >
            <Mail size={18} />
          </a>
        </motion.div>
        
        {/* Primary Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explorar Projetos</span>
            <ArrowRight size={16} className="text-zinc-950" />
          </button>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal size={15} className="text-zinc-400" />
            <span>Sobre Mim</span>
          </button>

          <a 
            href="/cv.pdf" 
            download
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 font-mono text-xs hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={14} className="text-emerald-400" />
            <span>[CV.PDF]</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="font-mono text-[10px] uppercase tracking-widest mb-1 text-zinc-500">scroll</span>
        <ChevronDown size={14} className="animate-bounce text-zinc-500" />
      </div>
    </section>
  );
};

export default HeroSection;
