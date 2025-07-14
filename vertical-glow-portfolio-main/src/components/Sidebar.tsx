
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
    <div className="fixed left-0 top-0 h-full w-20 lg:w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="hidden lg:block ml-3 text-xl font-bold text-gray-900 dark:text-white">
            Raphael Calixto
          </span>
        </div>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon 
                    size={20} 
                    className={`${isActive ? 'text-white' : ''} lg:mr-3`}
                  />
                  <span className="hidden lg:block font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full hidden lg:block"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center lg:justify-start px-3 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="hidden lg:block ml-3 font-medium">
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
