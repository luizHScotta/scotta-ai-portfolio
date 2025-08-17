
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-[#0A2540] border-t border-[#3A7CA5]">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-[#C5A46D] font-space">
              Luiz Henrique Scotta
            </h3>
            <p className="text-sm text-[#F2F4F7] max-w-xs">
              Programador e estudante de Ciências da Computação, especializado em soluções com Inteligência Artificial e automação.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-white">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm text-[#F2F4F7] hover:text-[#C5A46D] transition-colors">Home</a>
              <a href="#about" className="text-sm text-[#F2F4F7] hover:text-[#C5A46D] transition-colors">Sobre</a>
              <a href="#projects" className="text-sm text-[#F2F4F7] hover:text-[#C5A46D] transition-colors">Projetos</a>
              <a href="#skills" className="text-sm text-[#F2F4F7] hover:text-[#C5A46D] transition-colors">Habilidades</a>
              <a href="#contact" className="text-sm text-[#F2F4F7] hover:text-[#C5A46D] transition-colors">Contato</a>
            </nav>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/luizHScotta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#3A7CA5] text-white hover:bg-[#5DA9E9] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/luiz-scotta-450572213/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#3A7CA5] text-white hover:bg-[#5DA9E9] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:luizhgscotta@gmail.com"
                className="p-2 rounded-lg bg-[#3A7CA5] text-white hover:bg-[#5DA9E9] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3A7CA5] mt-8 pt-8 text-center">
          <p className="text-sm text-[#F2F4F7]">
            © {currentYear} Luiz Henrique Scotta. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#D9D9D9] mt-2">
            Desenvolvido com ❤️ e muito café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
