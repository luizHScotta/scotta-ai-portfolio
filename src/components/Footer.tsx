import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
    <div className="container max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#home" className="text-lg font-black tracking-tight text-white">
        LH<span className="text-[#059669]">S</span>
      </a>
      <p className="text-xs text-[#555] text-center">
        © {new Date().getFullYear()} Luiz Henrique Scotta · Desenvolvido com ❤️ e muito café
      </p>
      <div className="flex gap-3">
        <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4 text-[#555] hover:text-[#059669] transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/luiz-scotta-450572213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4 text-[#555] hover:text-[#059669] transition-colors" />
        </a>
        <a href="mailto:luizhgscotta@gmail.com" aria-label="Email">
          <Mail className="h-4 w-4 text-[#555] hover:text-[#059669] transition-colors" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
