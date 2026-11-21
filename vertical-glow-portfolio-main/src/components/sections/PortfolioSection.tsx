import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Sparkles, Monitor } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Jardim Secreto • Beco do Café Artesanal',
      slug: 'jardim-secreto',
      description: 'Experiência web sensorial e imersiva para cafeteria artesanal ("O Beco Oculto"), com atmosfera intimista, iluminação dinâmica, narrativa visual envolvente e cardápio interativo.',
      image: '/projects/jardim-secreto.jpg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://cafeteria-theta-smoky.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Cafeteria'
    },
    {
      id: 2,
      title: 'Valença & Advogados — Family Office',
      slug: 'valenca-advogados',
      description: 'Plataforma jurídica de alta precisão para banca de advocacia estratégica e family office, com apresentação de contencioso de alto risco, estruturação societária e simulador de diagnóstico.',
      image: '/projects/valenca-advogados.jpg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://advocacia-sand-two.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Advocacia'
    },
    {
      id: 3,
      title: 'Cafeteria Portuguesa • Delta Cafés',
      slug: 'cafeteria-portuguesa',
      description: 'Website imersivo para a tradicional marca portuguesa Delta Cafés, explorando a cultura do café, catálogo de produtos, soluções de negócio, sustentabilidade, jornal e quiz interativo.',
      image: '/projects/cafeteria-portuguesa.jpg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://cafeteria-portuguesa.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Cafeteria-Portuguesa'
    },
    {
      id: 4,
      title: 'Fruity — Fruit Cider',
      slug: 'fruity-cider',
      description: 'Landing page interativa e dinâmica para marca de sidra de frutas artesanal (Green Pear), com animações fluidas, efeitos de scroll e apresentação visual imersiva do produto.',
      image: '/projects/fruity.jpg',
      categories: ['web'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://frutas-gray.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Frutas-'
    },
    {
      id: 5,
      title: 'Scarlette Radiance — wepink',
      slug: 'wepink-scarlette',
      description: 'Experiência web imersiva em scrollytelling de alta fidelidade para o perfume Scarlette Radiance da wepink, com sequência cinematográfica em canvas renderizada por scroll.',
      image: '/projects/wepink.jpg',
      categories: ['web'],
      technologies: ['JavaScript', 'Canvas API', 'Scrollytelling', 'CSS3', 'HTML5'],
      liveUrl: 'https://wepink-ten.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Wepink'
    },
    {
      id: 6,
      title: 'Neymar Jr · Seleção Brasileira',
      slug: 'neymar-jr',
      description: 'Website editorial e tributo interativo à carreira de Neymar Jr na Seleção Brasileira e no Santos FC, com estatísticas de jogos e gols, biografia, títulos e galeria visual.',
      image: '/projects/neymar.jpg',
      categories: ['web'],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vite'],
      liveUrl: 'https://neymar-silk.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Neymar'
    },
    {
      id: 7,
      title: 'AERO LUXURY — Aviação Executiva',
      slug: 'aero-luxury',
      description: 'Plataforma premium e cinematográfica para fretamento de jatos executivos e aviação privada de alta precisão, desenvolvida com animações avançadas em GSAP, ScrollTrigger e design de alto luxo.',
      image: '/projects/aero-luxury.jpg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://avia-o-six.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Avia-o'
    },
    {
      id: 8,
      title: 'CineRapha',
      slug: 'cinerapha-desktop',
      description: 'Plataforma desktop e streaming pessoal estilo Netflix para organização e reprodução de filmes, séries e animes direto do disco local, com escaneamento automático de pastas e player integrado.',
      image: '/projects/cinerapha.jpg',
      categories: ['web', 'backend'],
      technologies: ['Electron', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
      liveUrl: '',
      githubUrl: 'https://github.com/RaphaCalixto/CineRapha'
    },
    {
      id: 9,
      title: 'M TEC ELETRIC',
      slug: 'm-tec-eletric',
      description: 'Landing page de alta conversão para formação completa em Eletricista Predial, Residencial e Refrigeração, com apresentação de módulos, bônus, oferta promocional e suporte via WhatsApp.',
      image: '/projects/m-tec-eletric.jpg',
      categories: ['web'],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://vendedor-de-curso.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Vendedor-de-Curso'
    },
    {
      id: 10,
      title: 'Psicóloga Vera Miranda',
      slug: 'psicologa-vera-miranda',
      description: 'Landing page profissional para psicoterapia clínica humanizada (online e presencial), com autoavaliação de sintomas, especialidades e agendamento via WhatsApp.',
      image: '/projects/psicologa.jpg',
      categories: ['web'],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://psicologa-sable.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Psicologa'
    },
    {
      id: 11,
      title: 'NutriPlan Pro',
      slug: 'nutriplan-pro-saas',
      description: 'Sistema completo de gestão nutricional e clínica para nutricionistas (SaaS). Conta com prontuário eletrônico de pacientes, montador inteligente de dietas com tabela TACO & API, agenda de consultas, tabela de alimentos e suporte a PWA.',
      image: '/projects/nutriplan-pro.png',
      categories: ['web', 'backend'],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'Lucide React'],
      liveUrl: 'https://pacientenutri.com.br/',
      githubUrl: 'https://github.com/RaphaCalixto/Nutricionista-Dashboard'
    },
    {
      id: 12,
      title: 'Clima Global 3D',
      slug: 'clima-global-3d',
      description: 'Dashboard interativo de clima mundial em tempo real com visualização 3D de globo terrestre, dados meteorológicos ao vivo e busca dinâmica.',
      image: '/projects/clima-global-3d.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Three.js', 'react-globe.gl', 'Tailwind CSS', 'Open-Meteo API'],
      liveUrl: 'https://clima-mundial-tempo-real.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Clima-mundial-tempo-real'
    },
    {
      id: 13,
      title: 'Miyazaki Hayao',
      slug: 'miyazaki-hayao',
      description: 'Experiência web imersiva dedicada à vida, trajetória e obras-primas de Hayao Miyazaki e do Studio Ghibli, com animações e galeria de arte.',
      image: '/projects/miyazaki-hayao.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Lucide React'],
      liveUrl: 'https://miyazaki-hayao.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Miyazaki-Hayao'
    },
    {
      id: 14,
      title: 'Beautiful',
      slug: 'beautiful-skincare',
      description: 'E-commerce e vitrine de cosméticos e skincare de luxo, com IA de tons, cards flutuantes interativos e animações de alta performance.',
      image: '/projects/beautiful.png',
      categories: ['web'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
      liveUrl: 'https://beautiful-delta-tan.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Beautiful'
    },
    {
      id: 15,
      title: 'NEXUS',
      slug: 'nexus-3d',
      description: 'Plataforma interativa futurista com transições fluidas entre seções e efeitos visuais 3D de alta fidelidade.',
      image: '/projects/nexus.png',
      categories: ['web'],
      technologies: ['React', 'Three.js', 'Vite', 'Lucide React', 'CSS3'],
      liveUrl: 'https://nexus-theta-roan.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/NEXUS'
    },
    {
      id: 16,
      title: 'PAYROT',
      slug: 'payrot-fintech',
      description: 'Plataforma global de pagamentos e transferências internacionais sem fronteiras, com interface moderna e recursos de segurança.',
      image: '/projects/payrot.png',
      categories: ['web', 'backend'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://payrot-rho.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/PAYROT'
    },
    {
      id: 17,
      title: 'Nutri — Dra. Laís Leal',
      slug: 'nutri-lais-leal',
      description: 'Landing page premium para consultoria nutricional clínica e esportiva, com apresentação de metodologia, planos e agendamento.',
      image: '/projects/nutri.png',
      categories: ['web'],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://nutri-lemon.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Nutri'
    },
    {
      id: 18,
      title: 'Advogada Brenda Pitner',
      slug: 'brenda-pitner-adv',
      description: 'Website profissional para advocacia especializada em Propriedade Intelectual, Registro de Marcas e Patentes no INPI.',
      image: '/projects/advogada.png',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      liveUrl: 'https://advogada-sandy.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/Advogada'
    },
    {
      id: 19,
      title: 'Everest',
      slug: 'everest-climatizacao',
      description: 'Uma aplicação web intuitiva, projetada para ajudar os usuários a gerenciar tarefas e encontrar momentos de calma, combinando ferramentas de produtividade com recursos de relaxamento.',
      image: 'https://i.imgur.com/Drtby6o.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui'],
      liveUrl: 'https://everestclimatizacao.com.br/',
      githubUrl: 'https://github.com/RaphaCalixto/Dashboard-Relaxamento'
    },
    {
      id: 20,
      title: 'Poupe Bem',
      slug: 'poupe-bem',
      description: 'Sistema moderno para controle financeiro pessoal, permitindo o acompanhamento de receitas, despesas, metas e relatórios de forma simples e intuitiva.',
      image: 'https://i.imgur.com/MrKhv9d.png',
      categories: ['web', 'mobile', 'backend'],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui', 'PostgreSQL'],
      liveUrl: 'https://poupe-bem-two.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/poupe-bem'
    },
    {
      id: 21,
      title: 'Inovative',
      slug: 'inovative-spa',
      description: 'Uma landing page elegante e responsiva para um SPA, desenvolvida para proporcionar uma experiência de usuário relaxante e informativa, com foco em design moderno e performance.',
      image: 'https://i.imgur.com/9F6tA3o.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'shadcn-ui'],
      liveUrl: 'https://inovativesolucoes.com.br/',
      githubUrl: 'https://github.com/RaphaCalixto/Glamourous-SPA'
    },
    {
      id: 22,
      title: 'Elle et Lui',
      slug: 'elle-et-lui',
      description: 'E-commerce de roupas masculinas com foco em moda, experiência do usuário e performance.',
      image: 'https://i.imgur.com/Ogsjwry.png',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Vtex', 'JavaScript', 'CSS', 'PHP', 'Google Analytics'],
      liveUrl: 'https://www.elleetlui.com.br/',
      githubUrl: '#'
    },
    {
      id: 23,
      title: 'Hotel Rio de Janeiro',
      slug: 'hotel-rio',
      description: 'Projeto de um hotel para o Rio de Janeiro com interface moderna e reservas online.',
      image: 'https://i.imgur.com/YnhGY88.jpeg',
      categories: ['web'],
      technologies: ['React', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'shadcn/ui', 'NodeJs'],
      liveUrl: 'https://riode-janeiro-ivory.vercel.app/',
      githubUrl: 'https://github.com/RaphaCalixto/RiodeJaneiro'
    },
    {
      id: 24,
      title: 'Inovative Automação',
      slug: 'inovative-automacao',
      description: 'Empresa especializada em manutenção de Estação de Recarga, Inversor de Frequência e Painéis Solares.',
      image: 'https://i.imgur.com/R5jXbQe.jpeg',
      categories: ['web', 'backend'],
      technologies: ['Wordpress', 'Elementor', 'JavaScript', 'React', 'CSS', 'PHP', 'Google Ads', 'Google Analytics'],
      liveUrl: 'https://inovativesolucoes.com.br/',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: '--all', count: projects.length },
    { id: 'web', label: '--web', count: projects.filter(p => p.categories.includes('web')).length },
    { id: 'backend', label: '--fullstack', count: projects.filter(p => p.categories.includes('backend')).length },
    { id: 'mobile', label: '--mobile', count: projects.filter(p => p.categories.includes('mobile')).length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories && project.categories.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-4">
            <Terminal size={13} />
            <span>repositories.status: production</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Projetos Selecionados
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Aplicações em produção, plataformas interativas e sistemas fullstack desenvolvidos com foco em escalabilidade, precisão técnica e performance.
          </p>

          {/* CLI Filter Tabs with Framer Motion */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 max-w-fit mx-auto backdrop-blur-md">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-4 py-2 rounded-xl font-mono text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-zinc-100 rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-zinc-300 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Motion */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-zinc-800/80 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    
                    <span className="text-zinc-500 truncate max-w-[170px] text-[10px]">
                      ~/projects/{project.slug || `p-${project.id}`}
                    </span>

                    {project.liveUrl ? (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500">
                        <Monitor size={10} />
                        local
                      </span>
                    )}
                  </div>

                  {/* Project Screenshot Showcase */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Subtle Dark Bottom Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-[10px] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Monochrome & Emerald Dev Style) */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2.5">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-zinc-100 hover:bg-emerald-400 text-zinc-950 hover:text-black font-semibold text-xs py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm group/btn"
                    >
                      <span>Acessar</span>
                      <ExternalLink size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="flex-1 bg-zinc-800/50 border border-zinc-800 text-zinc-500 font-mono text-[11px] py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5">
                      <Monitor size={12} />
                      <span>Execução Local</span>
                    </div>
                  )}

                  {project.githubUrl && project.githubUrl !== '#' ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                      <Github size={13} />
                      <span>Código</span>
                    </a>
                  ) : (
                    <span className="flex-1 bg-zinc-900/40 border border-zinc-800/40 text-zinc-600 font-mono text-[11px] py-2.5 px-3 rounded-xl text-center">
                      repo: priv
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
