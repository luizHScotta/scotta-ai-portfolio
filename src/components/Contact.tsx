
import { Mail, MapPin, Phone, Linkedin, Github, MessageCircle, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F2F4F7]">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-semibold mb-6 text-[#0A2540]">Contato</h2>
          <p className="text-body text-[#2E2E2E] max-w-3xl mx-auto">
            Vamos conversar sobre como posso ajudar no seu próximo projeto
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D9D9D9]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Vamos Conversar</h3>
              <p className="text-[#2E2E2E] leading-relaxed">
                Estou sempre aberto a novas oportunidades e parcerias. 
                Se você tem um projeto em mente ou gostaria de discutir possibilidades, 
                não hesite em entrar em contato.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-[#F2F4F7] rounded-lg">
                <div className="p-3 rounded-full bg-[#D9D9D9] text-[#0A2540] flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2540] mb-1">Email</h4>
                  <a 
                    href="mailto:luizhgscotta@gmail.com" 
                    className="text-[#3A7CA5] hover:text-[#0A2540] transition-colors"
                  >
                    luizhgscotta@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#F2F4F7] rounded-lg">
                <div className="p-3 rounded-full bg-[#D9D9D9] text-[#0A2540] flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2540] mb-1">Localização</h4>
                  <p className="text-[#2E2E2E]">Belém, Pará - Brasil</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#F2F4F7] rounded-lg">
                <div className="p-3 rounded-full bg-[#D9D9D9] text-[#0A2540] flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2540] mb-1">Disponibilidade</h4>
                  <p className="text-[#2E2E2E]">Freelance e projetos pontuais</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-[#D9D9D9]">
              <h4 className="font-semibold text-[#0A2540] mb-4">Redes Sociais</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/luizHScotta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#D9D9D9] text-[#0A2540] hover:bg-[#3A7CA5] hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/luiz-scotta-450572213/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#D9D9D9] text-[#0A2540] hover:bg-[#3A7CA5] hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
