import React from 'react';
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'raphacalixto10@gmail.com',
      description: 'Me envie uma mensagem por email.',
      link: 'mailto:raphacalixto10@gmail.com',
      action: 'Enviar email'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (21) 98775-3982',
      description: 'Disponível para chamadas e mensagens.',
      link: 'tel:+5521987753982',
      action: 'Ligar agora'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+55 (21) 98775-3982',
      description: 'Fale comigo diretamente pelo WhatsApp.',
      link: 'https://wa.me/5521987753982',
      action: 'Chamar no WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Rio de Janeiro, RJ - Brasil',
      description: 'Atendimento remoto e disponibilidade para projetos.',
      link: 'https://www.google.com/maps/search/?api=1&query=Rio+de+Janeiro+RJ+Brasil',
      action: 'Ver localização'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/RaphaCalixto',
      color: 'hover:bg-gray-300 dark:hover:bg-black dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raphael-roberto-calixto-10a204234/',
      color: 'hover:bg-blue-200 dark:hover:bg-blue-600 dark:hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:raphacalixto10@gmail.com',
      color: 'hover:bg-purple-200 dark:hover:bg-purple-600 dark:hover:text-white'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/5521987753982',
      color: 'hover:bg-green-200 dark:hover:bg-green-600 dark:hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Vamos conversar sobre projetos, oportunidades ou colaborações.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-gray-700 dark:text-gray-200 break-all">
                    {info.value}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-gray-600 dark:text-gray-300">
                    {info.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-blue-600 transition-colors group-hover:text-purple-600 dark:text-blue-400">
                    {info.action}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Redes sociais
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Acompanhe meu trabalho e fale comigo pelos canais abaixo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
