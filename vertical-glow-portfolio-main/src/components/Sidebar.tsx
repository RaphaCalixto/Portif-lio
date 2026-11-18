import React from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'services', label: 'Serviços', icon: Briefcase },
    { id: 'portfolio', label: 'Projetos', icon: FolderOpen },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionClick(sectionId);
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-between gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/85 px-3 py-2 shadow-2xl backdrop-blur-xl">
      {/* Brand Dev Tag */}
      <div className="flex shrink-0 items-center">
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center cursor-pointer group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-700/80 text-white font-mono font-bold text-sm group-hover:border-emerald-500/50 transition-colors">
            R
          </div>
          <div className="hidden sm:flex flex-col ml-2.5">
            <span className="text-sm font-bold text-white leading-tight">
              Raphael Calixto
            </span>
            <span className="font-mono text-[10px] text-emerald-400">
              dev.fullstack
            </span>
          </div>
        </div>
      </div>

      {/* Nav Menu Items */}
      <nav className="flex-1 overflow-x-auto">
        <ul className="flex items-center justify-center gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-xl bg-zinc-800 border border-zinc-700 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon 
                    size={16} 
                    className={`relative z-10 ${isActive ? 'text-emerald-400' : 'text-zinc-400'} sm:mr-1.5`}
                  />
                  <span className="relative z-10 hidden sm:inline">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Theme Toggle (or Status Terminal) */}
      <div className="shrink-0 flex items-center">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Sidebar;
