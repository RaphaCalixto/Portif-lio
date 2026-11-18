import React from 'react';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Terminal, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      protocol: 'smtp / email',
      title: 'Email Profissional',
      value: 'raphacalixto10@gmail.com',
      description: 'Canal principal para propostas, documentações e alinhamento de escopo.',
      link: 'mailto:raphacalixto10@gmail.com',
      action: 'Enviar Mensagem'
    },
    {
      icon: MessageCircle,
      protocol: 'instant / whatsapp',
      title: 'WhatsApp Direto',
      value: '+55 (21) 98775-3982',
      description: 'Comunicação rápida para alinhamento e respostas em tempo real.',
      link: 'https://wa.me/5521987753982',
      action: 'Iniciar Conversa'
    },
    {
      icon: Phone,
      protocol: 'voice / call',
      title: 'Telefone',
      value: '+55 (21) 98775-3982',
      description: 'Disponível para reuniões técnicas e chamadas com hora marcada.',
      link: 'tel:+5521987753982',
      action: 'Ligar Agora'
    },
    {
      icon: MapPin,
      protocol: 'geo / location',
      title: 'Localização',
      value: 'Rio de Janeiro, RJ — Brasil',
      description: 'Atuação 100% remota com disponibilidade para modelo híbrido ou presencial.',
      link: 'https://www.google.com/maps/search/?api=1&query=Rio+de+Janeiro+RJ+Brasil',
      action: 'Visualizar no Maps'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      handle: '@RaphaCalixto',
      url: 'https://github.com/RaphaCalixto',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'Raphael Calixto',
      url: 'https://www.linkedin.com/in/raphael-roberto-calixto-10a204234/',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'raphacalixto10@gmail.com',
      url: 'mailto:raphacalixto10@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      handle: '(21) 98775-3982',
      url: 'https://wa.me/5521987753982',
    }
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      {/* Background Engineering Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-4">
            <Terminal size={13} />
            <span>communication.channels --open</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Vamos Construir Juntos?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Seja para uma nova vaga, desenvolvimento de um projeto do zero ou otimização de uma arquitetura existente, estou à disposição para conversar.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      [{info.protocol}]
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {info.title}
                  </h3>
                  
                  <p className="text-sm font-mono text-zinc-300 mb-2 break-all">
                    {info.value}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {info.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:underline">
                    {info.action}
                  </span>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Console Matrix */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 text-center backdrop-blur-md">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Redes Sociais & Perfis de Desenvolvedor
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-mono">
            // Siga o código, conexões profissionais e atualizações de projetos
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all duration-200 flex flex-col items-center justify-center gap-2 group"
                >
                  <Icon size={18} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-medium text-white">{social.label}</span>
                  <span className="font-mono text-[10px] text-zinc-500 truncate max-w-full">
                    {social.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-16 text-center text-xs font-mono text-zinc-600">
          <p>© {new Date().getFullYear()} Raphael Calixto. Built with Next/React, TypeScript & Tailwind. 0% AI Slop Gradients.</p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
