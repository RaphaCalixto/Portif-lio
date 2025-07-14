import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada com sucesso. Entrarei em contato em breve!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'raphacalixto10@gmail.com',
      link: 'mailto:raphacalixto10@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (21) 98775-3982',
      link: 'tel:+5521987753982'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Rio de Janeiro, RJ - Brasil',
      link: '#'
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
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 px-4 sm:px-0">
              Informações de Contato
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 px-4 sm:px-0">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="px-4 sm:px-0">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Siga-me nas redes sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:scale-110`}
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white text-sm sm:text-base disabled:opacity-50"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white text-sm sm:text-base disabled:opacity-50"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white text-sm sm:text-base disabled:opacity-50"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white resize-none text-sm sm:text-base disabled:opacity-50"
                  placeholder="Descreva seu projeto ou necessidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
