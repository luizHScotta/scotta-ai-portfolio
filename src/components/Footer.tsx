
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-muted/30 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Luiz Henrique Scotta
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Programador e estudante de Ciências da Computação, especializado em soluções com Inteligência Artificial e automação.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">Sobre</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projetos</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Habilidades</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Conecte-se</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/luizscottadev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/luiz-henrique-gualberto-scotta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@luizscotta.com"
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              contato@luizscotta.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Luiz Henrique Gualberto Scotta. Todos os direitos reservados.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Desenvolvido com React, TypeScript e TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
