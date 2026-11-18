import React from 'react';
import { Globe, Smartphone, Server, Palette, Database, Shield, Terminal, ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      code: 'svc_01',
      title: 'Desenvolvimento Web Full Stack',
      description: 'Criação de aplicações web robustas, responsivas e de alta performance utilizando ecossistemas modernos (React, Next.js, TypeScript).',
      features: ['Aplicações SPA & SSR', 'Progressive Web Apps (PWA)', 'Otimização Core Web Vitals', 'Integrações de E-commerce']
    },
    {
      icon: Smartphone,
      code: 'svc_02',
      title: 'Aplicações Mobile',
      description: 'Desenvolvimento de aplicativos multiplataforma para iOS e Android com interfaces fluidas e integração com APIs nativas.',
      features: ['React Native & Expo', 'UI/UX Responsivo', 'Sincronização Offline', 'Publicação nas Lojas']
    },
    {
      icon: Server,
      code: 'svc_03',
      title: 'Backend & Arquitetura de APIs',
      description: 'Projeção e implementação de APIs RESTful escaláveis, microsserviços seguros e regras de negócio com Node.js, PHP e Python.',
      features: ['APIs RESTful & GraphQL', 'Autenticação JWT / OAuth', 'Webhooks & Background Jobs', 'Automação n8n & Node-RED']
    },
    {
      icon: Database,
      code: 'svc_04',
      title: 'Bancos de Dados & Modelagem',
      description: 'Design relacional eficiente, normalização de esquemas e tuning de performance em bancos relacionais e NoSQL.',
      features: ['PostgreSQL & MySQL', 'Oracle Database', 'Consultas & Indexação', 'Migrations & Data Integrity']
    },
    {
      icon: Palette,
      code: 'svc_05',
      title: 'Design Systems & UI Engineering',
      description: 'Desenvolvimento de interfaces modernas e consistentes com design tokens, acessibilidade e microinterações propositais.',
      features: ['Shadcn UI & Radix Primitives', 'Tailwind CSS Avançado', 'Framer Motion & GSAP', 'Design Responsivo Pixel-Perfect']
    },
    {
      icon: Shield,
      code: 'svc_06',
      title: 'DevOps, CI/CD & Pentest',
      description: 'Conteinerização de ambientes, automação de deploys contínuos e análise de vulnerabilidades de segurança em aplicações web.',
      features: ['Docker & Docker Compose', 'Pipelines de CI/CD', 'Deploy Cloud (AWS, Vercel)', 'Análise de Pentest & Hardening']
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      {/* Background Engineering Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-4">
            <Terminal size={13} />
            <span>services.manifest --all</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Serviços & Soluções Técnicas
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Engenharia de software ponta a ponta com rigor técnico, garantindo produtos performáticos, seguros e prontos para escala.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Code and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[11px] text-zinc-500">
                      [{service.code}]
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-zinc-800/60">
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-xs text-zinc-400 gap-2">
                        <Check size={13} className="text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Iniciar um Projeto</span>
            <ArrowRight size={16} className="text-zinc-950" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
