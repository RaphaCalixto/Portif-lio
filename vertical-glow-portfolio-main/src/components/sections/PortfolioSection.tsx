import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Clima Global 3D',
      description: 'Dashboard interativo de clima mundial em tempo real com visualização 3D de globo terrestre, dados meteorológicos ao vivo e busca dinâmica.',
      image: '/projects/clima-global-3d.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Three.js', 'react-globe.gl', 'Tailwind CSS', 'Open-Meteo API'],
      liveUrl: 'https://clima-mundial-tempo-real.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Clima-mundial-tempo-real'
    },
    {
      id: 2,
      title: 'Miyazaki Hayao',
      description: 'Experiência web imersiva dedicada à vida, trajetória e obras-primas de Hayao Miyazaki e do Studio Ghibli, com animações e galeria de arte.',
      image: '/projects/miyazaki-hayao.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
      liveUrl: 'https://miyazaki-hayao.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Miyazaki-Hayao'
    },
    {
      id: 3,
      title: 'Beautiful',
      description: 'E-commerce e vitrine de cosméticos e skincare de luxo, com IA de tons, cards flutuantes interativos e animações de alta performance.',
      image: '/projects/beautiful.png',
      categories: ['web'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
      liveUrl: 'https://beautiful-delta-tan.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Beautiful'
    },
    {
      id: 4,
      title: 'NEXUS',
      description: 'Plataforma interativa futurista com transições fluidas entre seções e efeitos visuais 3D de alta fidelidade.',
      image: '/projects/nexus.png',
      categories: ['web'],
      technologies: ['React', 'Three.js', 'Vite', 'Lucide React', 'CSS3'],
      liveUrl: 'https://nexus-theta-roan.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/NEXUS'
    },
    {
      id: 5,
      title: 'PAYROT',
      description: 'Plataforma global de pagamentos e transferências internacionais sem fronteiras, com interface moderna e recursos de segurança.',
      image: '/projects/payrot.png',
      categories: ['web', 'backend'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://payrot-rho.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/PAYROT'
    },
    {
      id: 6,
      title: 'Nutri — Dra. Laís Leal',
      description: 'Landing page premium para consultoria nutricional clínica e esportiva, com apresentação de metodologia, planos e agendamento.',
      image: '/projects/nutri.png',
      categories: ['web'],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://nutri-lemon.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Nutri'
    },
    {
      id: 7,
      title: 'Advogada Brenda Pitner',
      description: 'Website profissional para advocacia especializada em Propriedade Intelectual, Registro de Marcas e Patentes no INPI.',
      image: '/projects/advogada.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://advogada-sandy.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Advogada'
    },
    {
      id: 8,
      title: 'Everest',
      description: 'Uma aplicação web intuitiva, projetada para ajudar os usuários a gerenciar tarefas e encontrar momentos de calma, combinando ferramentas de produtividade com recursos de relaxamento.',
      image: 'https://i.imgur.com/Drtby6o.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui'],
      liveUrl: 'https://everestclimatizacao.com.br/',
      githubUrl: 'https://github.com/RaphaCalixto/Dashboard-Relaxamento'
    },
    {
      id: 9,
      title: 'Poupe Bem',
      description: 'Sistema moderno para controle financeiro pessoal, permitindo o acompanhamento de receitas, despesas, metas e relatórios de forma simples e intuitiva.',
      image: 'https://i.imgur.com/MrKhv9d.png',
      categories: ['web', 'mobile', 'backend'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui', 'PostgreSQL'],
      liveUrl: 'https://poupe-bem-two.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/poupe-bem'
    },
    {
      id: 10,
      title: 'Inovative',
      description: 'Uma landing page elegante e responsiva para um SPA, desenvolvida para proporcionar uma experiência de usuário relaxante e informativa, com foco em design moderno e performance.',
      image: 'https://i.imgur.com/9F6tA3o.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui'],
      liveUrl: 'https://inovativesolucoes.com.br/',
      githubUrl: 'https://github.com/RaphaCalixto/Glamourous-SPA'
    },
    {
      id: 11,
      title: 'Elle et Lui',
      description: 'E-commerce de roupas masculinas com foco em moda, experiência do usuário e performance.',
      image: 'https://i.imgur.com/Ogsjwry.png',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Vtex', 'JavaScript', 'CSS', 'PHP', 'Google Analytics'],
      liveUrl: 'https://www.elleetlui.com.br/',
      githubUrl: '#'
    },
    {
      id: 12,
      title: 'Hotel Rio de Janeiro',
      description: 'Projeto de um hotel para o Rio de Janeiro',
      image: 'https://i.imgur.com/YnhGY88.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'shadcn/ui', 'NodeJs'],
      liveUrl: 'https://riode-janeiro-ivory.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/RiodeJaneiro'
    },
    {
      id: 13,
      title: 'Inovative Automação',
      description: 'Empresa especializada em manutenção de Estação de Recarga, Inversor de Frequência e Painéis Solares.',
      image: 'https://i.imgur.com/R5jXbQe.jpeg',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Elementor', 'JavaScript', 'React', 'CSS', 'PHP', 'Google Ads', 'Google Analytics'],
      liveUrl: 'https://inovativesolucoes.com.br/',
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Eye size={20} className="text-gray-900" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Projeto</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
