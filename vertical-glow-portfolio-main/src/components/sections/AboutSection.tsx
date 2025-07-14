import React, { useEffect, useState } from 'react';
import { Code, Coffee, Lightbulb, Users, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const relativePosition = (scrollPosition - sectionTop) / sectionHeight;
        const experienceIndex = Math.min(Math.floor(relativePosition * 3), 2);
        setActiveExperience(experienceIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconElement = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      oracle: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',
      wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
      elementor: 'https://i.imgur.com/cVJIxnc.png',
      vtex: 'https://companieslogo.com/img/orig/VTEX-64045aa2.png?t=1720244494',
      figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      googleads: 'https://img.icons8.com/color/512/google-ads.png',
      googleanalytics: 'https://images.icon-icons.com/2699/PNG/512/google_analytics_logo_icon_171061.png',
      vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      shadcnui: 'https://miro.medium.com/v2/resize:fit:1400/1*O-ClkORJkmUm1wRsApB_yQ.png'
    };

    if (iconMap[iconName]) {
      return <img src={iconMap[iconName]} alt={iconName} className="w-8 h-8" />;
    }
    
    return <span>{iconName}</span>;
  };

  const skills = [
    // Front-end
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'shadcn-ui', icon: 'shadcnui' },
    // Back-end
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'PHP', icon: 'php' },
    { name: 'Python', icon: 'python' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Oracle', icon: 'oracle' },
    // UX/E-commerce/Google
    { name: 'Figma', icon: 'figma' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Elementor', icon: 'elementor' },
    { name: 'VTEX', icon: 'vtex' },
    { name: 'Google Ads', icon: 'googleads' },
    { name: 'Google Analytics', icon: 'googleanalytics' }
  ];

  const experiences = [
    {
      year: 'Jan 2024 - Jun 2025',
      title: 'Desenvolvedor Full Stack',
      company: 'Inovative Automação',
      description: 'Especialização em gerenciamento avançado do WordPress, desenvolvimento completo de websites e fóruns, customização de Loja Integrada, gerenciamento de sistema ERP e execução de tráfego pago em Google Ads e Facebook Ads.',
      skills: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Google Ads', 'Facebook Ads']
    },
    {
      year: 'Jan 2021 - Jun 2022',
      title: 'Desenvolvedor Full Stack',
      company: 'Elle et Lui',
      description: 'Desenvolvimento e implementação de funcionalidades com React.js, testes automatizados com Jest, integração com APIs RESTful e GraphQL, gerenciamento de plataformas VTEX e WordPress.',
      skills: ['React.js', 'JavaScript', 'Jest', 'APIs RESTful', 'GraphQL', 'VTEX', 'WordPress']
    },
    {
      year: 'Jan 2019 - Dez 2019',
      title: 'Desenvolvedor Full Stack',
      company: 'Lemos de Castro',
      description: 'Integração de sistemas com APIs RESTful e SOAP, uso de serviços AWS (EC2, S3, RDS), desenvolvimento de interfaces responsivas e soluções back-end robustas com ASP.NET, PHP e bancos Oracle.',
      skills: ['AWS', 'ASP.NET', 'PHP', 'MySQL', 'Oracle', 'TypeScript', 'APIs SOAP']
    }
  ];

  const values = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Escrevo código legível, testável e bem documentado'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e melhores soluções'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e valorizo a comunicação'
    },
    {
      icon: Coffee,
      title: 'Dedicação',
      description: 'Apaixonado por programação e sempre aprendendo'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor com mais de 5 anos de experiência criando soluções digitais inovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Minha Jornada
            </h3>
            <div className="relative">
              {/* Linha vertical da timeline - mais grossa e com animação */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                {/* Linha animada que segue o scroll */}
                <div 
                  className="w-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: `${Math.min(((activeExperience + 1) / experiences.length) * 100, 100)}%`
                  }}
                />
              </div>
              
              {/* Bolinha animada que segue o progresso */}
              <div 
                className="absolute left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-500 ease-out z-10"
                style={{
                  transform: `translateY(${activeExperience * 220}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
              </div>
              
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start mb-8 last:mb-0 transition-all duration-500 ${
                    index <= activeExperience ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-2'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Ponto da timeline - agora invisível pois temos a bolinha animada */}
                  <div className="absolute left-4 w-6 h-6 rounded-full opacity-0"></div>
                  
                  {/* Conteúdo com animações */}
                  <div className={`ml-16 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                    index === activeExperience ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}>
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
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
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
          
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Ferramentas/Tecnologias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-200 cursor-default group opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {(() => {
                    const iconMap: { [key: string]: string } = {
                      html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                      css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                      nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
                      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                      tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                      bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
                      php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
                      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
                      postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
                      oracle: 'https://m.media-amazon.com/images/I/41QodfboFdL.png',
                      wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
                      elementor: 'https://i.imgur.com/cVJIxnc.png',
                      vtex: 'https://companieslogo.com/img/orig/VTEX-64045aa2.png?t=1720244494',
                      figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
                      googleads: 'https://img.icons8.com/color/512/google-ads.png',
                      googleanalytics: 'https://images.icon-icons.com/2699/PNG/512/google_analytics_logo_icon_171061.png',
                      vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
                      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
                      shadcnui: 'https://miro.medium.com/v2/resize:fit:1400/1*O-ClkORJkmUm1wRsApB_yQ.png'
                    };

                    if (iconMap[skill.icon]) {
                      if (skill.icon === 'wordpress') {
                        return <img src={iconMap[skill.icon]} alt={skill.name} className="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-200" />;
                      }
                      if (skill.icon === 'mysql') {
                        return <img src={iconMap[skill.icon]} alt={skill.name} className="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-200" />;
                      }
                      if (skill.icon === 'elementor') {
                        return <img src={iconMap[skill.icon]} alt={skill.name} className="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-200" />;
                      }
                      return <img src={iconMap[skill.icon]} alt={skill.name} className="w-8 h-8" />;
                    }
                    
                    return <span>{skill.icon}</span>;
                  })()}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-white text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
