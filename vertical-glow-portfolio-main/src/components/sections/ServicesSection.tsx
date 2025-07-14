
import React from 'react';
import { Globe, Smartphone, Server, Palette, Database, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Criação de websites e aplicações web responsivas usando tecnologias modernas como React, Next.js e TypeScript.',
      features: ['Sites Responsivos', 'SPAs', 'Progressive Web Apps', 'E-commerce']
    },
    {
      icon: Smartphone,
      title: 'Aplicações Mobile',
      description: 'Desenvolvimento de aplicativos mobile nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'Apps Híbridos', 'UI/UX Mobile']
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Desenvolvimento de APIs RESTful e GraphQL, microserviços e arquiteturas escaláveis.',
      features: ['APIs REST', 'GraphQL', 'Microserviços', 'Cloud Computing']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Design e otimização de bancos de dados relacionais e NoSQL para máxima performance.',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'Otimização']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Criação de interfaces intuitivas e experiências de usuário excepcionais.',
      features: ['Design System', 'Prototipagem', 'Figma', 'Testes de Usabilidade']
    },
    {
      icon: Shield,
      title: 'DevOps & Segurança',
      description: 'Implementação de pipelines CI/CD, containerização e práticas de segurança.',
      features: ['Docker', 'CI/CD', 'AWS/Azure', 'Segurança Web']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meus Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ofereço soluções completas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Ícone animado */}
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <Icon size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Efeito de pulso */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-opacity duration-300"></div>
                </div>
                
                <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="relative space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300"
                      style={{
                        animationDelay: `${(index * 100) + (featureIndex * 50)}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Borda animada */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 hover:from-blue-600 hover:to-purple-700"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
