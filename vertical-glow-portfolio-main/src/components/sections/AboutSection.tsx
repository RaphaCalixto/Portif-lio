import React, { useEffect, useState } from 'react';
import {
  Code,
  Coffee,
  Lightbulb,
  Users,
  Calendar,
  MapPin,
  Webhook,
  Workflow,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const ICON_URLS: Record<string, string> = {
  html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
  shadcnui: 'https://miro.medium.com/v2/resize:fit:1400/1*O-ClkORJkmUm1wRsApB_yQ.png',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  aspnet: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  oracle: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  aws: 'https://img.icons8.com/color/512/amazon-web-services.png',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  n8n: 'https://cdn.simpleicons.org/n8n',
  nodered: 'https://cdn.simpleicons.org/nodered',
  vtex: 'https://companieslogo.com/img/orig/VTEX-64045aa2.png?t=1720244494',
  wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
  gtm: 'https://cdn.simpleicons.org/googletagmanager',
  googleanalytics: 'https://images.icon-icons.com/2699/PNG/512/google_analytics_logo_icon_171061.png',
  figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  elementor: 'https://i.imgur.com/cVJIxnc.png',
  googleads: 'https://img.icons8.com/color/512/google-ads.png',
};

const DARK_INVERT_ICONS = new Set(['wordpress', 'mysql', 'elementor', 'github', 'nextjs']);

const LUCIDE_SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  restful: Webhook,
  cicd: Workflow,
  pentest: ShieldCheck,
  lojaintegrada: ShoppingBag,
};

const renderSkillIcon = (skill: SkillItem) => {
  const LucideIcon = LUCIDE_SKILL_ICONS[skill.icon];
  if (LucideIcon) {
    return (
      <LucideIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" />
    );
  }

  const url = ICON_URLS[skill.icon];
  if (url) {
    const invertClass = DARK_INVERT_ICONS.has(skill.icon)
      ? 'dark:invert dark:brightness-0 dark:contrast-200'
      : '';
    return <img src={url} alt={skill.name} className={`w-8 h-8 object-contain ${invertClass}`} />;
  }

  return <span>{skill.icon}</span>;
};

const AboutSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Front-end',
      items: [
        { name: 'JavaScript (ES6+)', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'React.js', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Shadcn UI', icon: 'shadcnui' },
        { name: 'Redux', icon: 'redux' },
      ],
    },
    {
      title: 'Back-end & Bancos de Dados',
      items: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'PHP', icon: 'php' },
        { name: 'Python', icon: 'python' },
        { name: 'ASP.NET', icon: 'aspnet' },
        { name: 'APIs RESTful', icon: 'restful' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Oracle', icon: 'oracle' },
      ],
    },
    {
      title: 'DevOps, Segurança & Ferramentas',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'AWS', icon: 'aws' },
        { name: 'CI/CD', icon: 'cicd' },
        { name: 'Pentest', icon: 'pentest' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'n8n', icon: 'n8n' },
        { name: 'Node-RED', icon: 'nodered' },
        { name: 'VTEX', icon: 'vtex' },
        { name: 'Loja Integrada', icon: 'lojaintegrada' },
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'Elementor', icon: 'elementor' },
        { name: 'Figma', icon: 'figma' },
        { name: 'GTM', icon: 'gtm' },
        { name: 'Google Analytics', icon: 'googleanalytics' },
        { name: 'Google Ads', icon: 'googleads' },
      ],
    },
  ];

  const experiences = [
    {
      year: 'Jan 2024 - Set 2026',
      title: 'Desenvolvedor Full Stack',
      company: 'Inovative — Rio de Janeiro, RJ',
      highlights: [
        'Desenvolvi e mantive 7 projetos de aplicações web e plataformas interativas utilizando React.js, Vite, Node.js, TypeScript, Tailwind CSS, PHP e APIs RESTful.',
        'Estruturei conteinerização com Docker e pipelines de CI/CD para deploy contínuo, conduzindo rotinas de pentest para mitigação de vulnerabilidades.',
        'Arquitetei e implementei fluxos de automação de processos e integração de sistemas ERP com Node-RED e n8n, eliminando gargalos operacionais e sincronizando dados.',
        'Gerenciei plataforma de e-commerce (Loja Integrada) e configurei métricas de conversão via GTM e Google Analytics para otimização de produtos e campanhas.',
      ],
      skills: [
        'React.js',
        'Vite',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
        'PHP',
        'APIs RESTful',
        'Docker',
        'CI/CD',
        'Pentest',
        'Node-RED',
        'n8n',
        'Loja Integrada',
        'GTM',
        'Google Analytics',
      ],
    },
    {
      year: 'Jan 2023 - Atual',
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Freelance — Rio de Janeiro, RJ',
      highlights: [
        'Construí mais de 20 projetos de aplicações web (SPA/SSR) com Next.js, React.js, TypeScript, Vite, Tailwind CSS e Shadcn UI, priorizando design responsivo e clean code.',
        'Desenvolvi back-ends modulares em Node.js, PHP e Python, projetando APIs REST e realizando modelagem eficiente em bancos MySQL, PostgreSQL e Oracle.',
        'Realizei pentests em aplicações web para análise de segurança e atuei no ciclo completo de software: requisitos, arquitetura técnica, Git e publicação em produção.',
      ],
      skills: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Shadcn UI',
        'Node.js',
        'PHP',
        'Python',
        'MySQL',
        'PostgreSQL',
        'Oracle',
        'Pentest',
        'Git',
      ],
    },
    {
      year: 'Jan 2021 - Jun 2022',
      title: 'Desenvolvedor Front-End',
      company: 'Elle et Lui — Rio de Janeiro, RJ',
      highlights: [
        'Realizei manutenção evolutiva e customizações em 4 projetos de e-commerce (VTEX, WordPress e ZapCommerce), gerenciando assets e rotinas na nuvem AWS.',
        'Criei templates responsivos de e-mail marketing com foco em entregabilidade e renderização cross-client, impulsionando a taxa de engajamento e conversão de campanhas.',
        'Colaborei em rotinas de testes de conversão e melhorias visuais para otimização contínua da experiência de navegação do usuário.',
      ],
      skills: ['VTEX', 'WordPress', 'ZapCommerce', 'AWS', 'HTML5', 'CSS3', 'E-mail Marketing'],
    },
    {
      year: 'Jan 2019 - Dez 2019',
      title: 'Desenvolvedor Full Stack',
      company: 'Lemos de Castro — Rio de Janeiro, RJ',
      highlights: [
        'Atuei no desenvolvimento de 2 projetos corporativos com interfaces web responsivas em HTML5, CSS3, JavaScript (ES6+), TypeScript e Bootstrap, consumindo APIs RESTful.',
        'Implementei funcionalidades de back-end em PHP e ASP.NET, integrando e manipulando dados estruturados em bases MySQL e Oracle.',
        'Elaborei documentação técnica de sistemas e fluxos de processos, garantindo padronização e suporte a operações internas.',
      ],
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'Bootstrap',
        'APIs RESTful',
        'PHP',
        'ASP.NET',
        'MySQL',
        'Oracle',
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const relativePosition = (scrollPosition - sectionTop) / sectionHeight;
        const experienceIndex = Math.min(
          Math.floor(relativePosition * experiences.length),
          experiences.length - 1
        );
        setActiveExperience(experienceIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

  const values = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Escrevo código legível, testável e bem documentado',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e melhores soluções',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e valorizo a comunicação',
    },
    {
      icon: Coffee,
      title: 'Dedicação',
      description: 'Apaixonado por programação e sempre aprendendo',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack com sólida experiência na construção de aplicações web escaláveis, integrando ecossistemas front-end modernos (React.js, Next.js, TypeScript) e serviços back-end (Node.js, PHP, Python). Especialista em integrações de APIs RESTful, automação de processos (n8n, Node-RED) e arquitetura de e-commerces, com foco em desempenho, usabilidade e métricas de conversão.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experiência Profissional
            </h3>
            <div className="relative">
              {/* Linha vertical da timeline */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: `${Math.min(((activeExperience + 1) / experiences.length) * 100, 100)}%`,
                  }}
                />
              </div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-8 last:mb-0 transition-all duration-500 ${
                    index <= activeExperience ? 'opacity-100 translate-x-0' : 'opacity-70 translate-x-2'
                  }`}
                >
                  {/* Ponto da timeline alinhado a cada experiência */}
                  <div
                    className={`absolute left-3.5 top-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-500 z-10 ${
                      index === activeExperience
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-110'
                        : index < activeExperience
                          ? 'bg-blue-500'
                          : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    {index === activeExperience && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Conteúdo da experiência */}
                  <div
                    className={`ml-16 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                      index === activeExperience ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-blue-500 mr-2" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {exp.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <div className="flex items-center mb-3">
                      <MapPin size={14} className="text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 list-disc pl-4">
                      {exp.highlights.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Ferramentas/Tecnologias
          </h3>
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center sm:text-left">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.items.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-200 cursor-default group opacity-0 animate-fade-in"
                      style={{
                        animationDelay: `${index * 40}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-white text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
