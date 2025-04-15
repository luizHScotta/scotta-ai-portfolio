
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para oportunidades profissionais, colaborações ou apenas para conversar sobre tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem aqui..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="overflow-hidden bg-gradient-to-br from-tech-blue/10 via-tech-purple/5 to-background border border-border/50">
              <CardContent className="p-0">
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Informações de Contato</h3>
                    <p className="text-muted-foreground">
                      Estou sempre aberto a novas oportunidades e desafios interessantes.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-tech-blue/10 text-tech-blue">
                        <Mail size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:contato@luizscotta.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          contato@luizscotta.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-tech-purple/10 text-tech-purple">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Localização</h4>
                        <p className="text-sm text-muted-foreground">
                          Belém, Pará, Brasil
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 p-2 rounded-full bg-tech-indigo/10 text-tech-indigo">
                        <Phone size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Telefone</h4>
                        <a href="tel:+559100000000" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          +55 (91) 00000-0000
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h4 className="font-medium mb-3">Conecte-se comigo</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://linkedin.com/in/luiz-henrique-gualberto-scotta" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-tech-blue/10 text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://github.com/luizscottadev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-tech-purple/10 text-tech-purple hover:bg-tech-purple hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="mailto:contato@luizscotta.com"
                        className="p-3 rounded-full bg-tech-indigo/10 text-tech-indigo hover:bg-tech-indigo hover:text-white transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
