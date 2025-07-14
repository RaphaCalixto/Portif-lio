import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dashboard de Produtividade e Relaxamento',
      description: 'Uma aplicação web intuitiva, projetada para ajudar os usuários a gerenciar tarefas e encontrar momentos de calma, combinando ferramentas de produtividade com recursos de relaxamento.',
      image: 'https://camo.githubusercontent.com/67b5165acab7cc8f31e2b5ef3c103f3d662cd4a9c31149c7de486fa17f5ecdae/68747470733a2f2f692e696d6775722e636f6d2f5a4b714a7954322e6a706567',
      categories: ['web'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://v0-relaxamento-dashboard.vercel.app',
      githubUrl: 'https://github.com/RaphaCalixto/Dashboard-Relaxamento'
    },
    {
      id: 2,
      title: 'Poupe Bem',
      description: 'Sistema moderno para controle financeiro pessoal, permitindo o acompanhamento de receitas, despesas, metas e relatórios de forma simples e intuitiva.',
      image: 'https://i.imgur.com/rfnPwOE.png',
      categories: ['web', 'backend'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui', 'PostgreSQL'],
      liveUrl: 'https://poupe-bem.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/poupe-bem'
    },
    {
      id: 3,
      title: 'SPA',
      description: 'Uma landing page elegante e responsiva para um SPA, desenvolvida para proporcionar uma experiência de usuário relaxante e informativa, com foco em design moderno e performance.',
      image: 'https://camo.githubusercontent.com/1f421bbaddab1189849ab2c617d18e7796f2b278b0a63f80bf55923bd714ffb5/68747470733a2f2f692e696d6775722e636f6d2f707946654645582e706e67',
      categories: ['web'],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://glamourous-spa.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Glamourous-SPA'
    },
    {
      id: 4,
      title: 'Elle et Lui',
      description: 'E-commerce de roupas masculinas com foco em moda, experiência do usuário e performance.',
      image: 'https://i.imgur.com/Ogsjwry.png',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Vtex', 'JavaScript', 'CSS', 'PHP', 'Google Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com geolocalização e notificações push.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      categories: ['mobile'],
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Inovative',
      description: 'Empresa especializada em manutenção de Estação de Recarga, Inversor de Frequência e Painéis Solares.',
      image: 'https://i.imgur.com/R5jXbQe.jpeg',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Elementor', 'JavaScript', 'React', 'CSS', 'PHP', 'Google Ads', 'Google Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'FullStack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories && project.categories.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meu Portfólio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Eye size={20} className="text-gray-900" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Github size={20} className="text-gray-900" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Projeto</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
