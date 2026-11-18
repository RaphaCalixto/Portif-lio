import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
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
      <LucideIcon className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
    );
  }

  const url = ICON_URLS[skill.icon];
  if (url) {
    const invertClass = DARK_INVERT_ICONS.has(skill.icon)
      ? 'invert brightness-0 contrast-200'
      : '';
    return <img src={url} alt={skill.name} className={`w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200 ${invertClass}`} />;
  }

  return <span className="font-mono text-sm">{skill.icon}</span>;
};

const AboutSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Front-end Engineering',
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
      title: 'Back-end & Databases',
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
      title: 'DevOps, Security & Tools',
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
      year: 'Jan 2024 — Set 2026',
      title: 'Desenvolvedor Full Stack',
      company: 'Inovative — Rio de Janeiro, RJ',
      current: true,
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
      year: 'Jan 2023 — Atual',
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Freelance — Rio de Janeiro, RJ',
      current: false,
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
      year: 'Jan 2021 — Jun 2022',
      title: 'Desenvolvedor Front-End',
      company: 'Elle et Lui — Rio de Janeiro, RJ',
      current: false,
      highlights: [
        'Realizei manutenção evolutiva e customizações em 4 projetos de e-commerce utilizando React na VTEX, PHP no WordPress e ZapCommerce, gerenciando assets na nuvem AWS.',
        'Criei templates responsivos de e-mail marketing com HTML, CSS e JavaScript, priorizando entregabilidade e renderização cross-client para elevar taxas de conversão.',
        'Realizei o gerenciamento de sistemas de PDV e colaborei em testes de conversão e melhorias visuais para otimização contínua da experiência do usuário.',
      ],
      skills: [
        'VTEX',
        'React',
        'WordPress',
        'PHP',
        'ZapCommerce',
        'AWS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'PDV',
        'E-mail Marketing',
      ],
    },
    {
      year: 'Jan 2019 — Dez 2019',
      title: 'Desenvolvedor Full Stack',
      company: 'Lemos de Castro — Rio de Janeiro, RJ',
      current: false,
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

  const values = [
    {
      icon: Code,
      title: 'Clean Architecture & DX',
      description: 'Código modular, tipagem estrita com TypeScript, arquitetura desacoplada e foco em manutenibilidade a longo prazo.',
    },
    {
      icon: Cpu,
      title: 'Alta Performance',
      description: 'Otimização contínua de Core Web Vitals, SSR/SSG inteligente e redução do payload inicial em produção.',
    },
    {
      icon: Layers,
      title: 'Segurança & Resiliência',
      description: 'Práticas defensivas de código, sanitização de inputs, análise de vulnerabilidades (pentest) e isolamento.',
    },
    {
      icon: Workflow,
      title: 'Automação & CI/CD',
      description: 'Pipelines automatizados de testes e deploy contínuo com Docker, n8n e Node-RED para eliminar atritos operacionais.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      {/* Background Engineering Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-4">
            <Terminal size={13} />
            <span>developer.profile --verbose</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Sobre Mim
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Desenvolvedor Full Stack com sólida experiência na construção de aplicações web escaláveis, integrando ecossistemas front-end modernos (React.js, Next.js, TypeScript) e serviços back-end (Node.js, PHP, Python). Especialista em integrações de APIs RESTful, automação de processos (n8n, Node-RED) e arquitetura de e-commerces, com foco em desempenho, usabilidade e métricas de conversão.
          </p>
        </div>

        {/* Experience Timeline & Core Principles */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Career Timeline (Col 7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Trajetória Profissional</span>
              </h3>
              <span className="font-mono text-xs text-zinc-500">git log --experience</span>
            </div>

            <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveExperience(index)}
                >
                  {/* Circuit Node on Timeline */}
                  <div 
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-950 transition-all duration-300 ${
                      index === activeExperience 
                        ? 'bg-emerald-400 ring-4 ring-emerald-500/20 scale-125' 
                        : 'bg-zinc-700 group-hover:bg-zinc-500'
                    }`}
                  />

                  {/* Experience Card */}
                  <div className={`p-6 rounded-2xl bg-zinc-900/80 border transition-all duration-300 ${
                    index === activeExperience 
                      ? 'border-zinc-700 shadow-xl bg-zinc-900' 
                      : 'border-zinc-800/80 hover:border-zinc-700'
                  }`}>
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.year}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px] flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.company}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3">
                      {exp.title}
                    </h4>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {exp.highlights.map((h, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-mono mt-0.5">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400"
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

          {/* Core Principles / Pillars + Education (Col 5) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Princípios de Engenharia
              </h3>
              <span className="font-mono text-xs text-zinc-500">core.values</span>
            </div>

            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Academic Education Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-start gap-4 group mt-6">
              <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Universidade Veiga de Almeida
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Bacharelado em Engenharia da Computação
                </p>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  Jan 2020 — Ago 2026 (Previsão de Conclusão) • Rio de Janeiro, RJ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Stack Matrix */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-xs mb-2">
              <span className="text-emerald-400">$</span>
              <span>cat /etc/developer/stack.json</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Stack & Ecossistema de Ferramentas
            </h3>
          </div>

          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-800/60">
                  <h4 className="text-sm sm:text-base font-mono font-semibold text-zinc-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    <span>{category.title}</span>
                  </h4>
                  <span className="font-mono text-[11px] text-zinc-500">
                    [{category.items.length} pacotes]
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 cursor-default group"
                    >
                      <div className="mb-2 h-8 flex items-center justify-center">
                        {renderSkillIcon(skill)}
                      </div>
                      <span className="font-mono text-[11px] text-zinc-400 group-hover:text-white text-center truncate max-w-full">
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
