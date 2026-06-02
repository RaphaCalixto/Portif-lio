
import React from 'react';
import { Home, User, Briefcase, FolderOpen, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

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
    { id: 'portfolio', label: 'Portfólio', icon: FolderOpen },
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
    <div className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
      <div className="flex shrink-0 items-center">
        <div className="flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="hidden lg:block ml-3 text-base font-bold text-gray-900 dark:text-white">
            Raphael Calixto
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-x-auto">
        <ul className="flex items-center justify-center gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center whitespace-nowrap rounded-full px-3 py-3 transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon 
                    size={20} 
                    className={`${isActive ? 'text-white' : ''} lg:mr-2`}
                  />
                  <span className="hidden lg:block font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-2 w-2 h-2 bg-white rounded-full hidden lg:block"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shrink-0">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-full px-3 py-3 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="hidden lg:block ml-2 font-medium">
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
