
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200",
      scrolled 
        ? "bg-[#F2F4F7]/95 backdrop-blur-md border-b border-[#D9D9D9] shadow-sm" 
        : "bg-[#F2F4F7]/90 backdrop-blur-sm"
    )}>
      <div className="container max-w-7xl flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <a
            href="#home"
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold text-[#0A2540] font-space">LHS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#2E2E2E] hover:text-[#3A7CA5] transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center space-x-3">
            <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-[#2E2E2E] hover:text-[#3A7CA5] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/luiz-scotta-450572213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-[#2E2E2E] hover:text-[#3A7CA5] transition-colors" />
            </a>
            <a href="mailto:luizhgscotta@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-[#2E2E2E] hover:text-[#3A7CA5] transition-colors" />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
            className="text-[#2E2E2E] hover:text-[#3A7CA5] hover:bg-[#D9D9D9]"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#0A2540]/80 backdrop-blur-sm md:hidden",
          mobileMenuOpen ? "flex" : "hidden"
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <div className="fixed top-0 right-0 h-full w-full bg-[#F2F4F7] shadow-2xl">
          {/* Header com azul-marinho institucional */}
          <div className="bg-[#0A2540] px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold text-[#C5A46D]">
              LHS
            </span>
            <button
              onClick={toggleMobileMenu}
              className="w-8 h-8 rounded-full border border-[#3A7CA5] bg-[#F2F4F7] flex items-center justify-center hover:bg-[#D9D9D9] transition-colors"
            >
              <X className="h-4 w-4 text-[#0A2540]" />
            </button>
          </div>
          
          {/* Menu principal com fundo cinza claro */}
          <nav className="px-6 py-8 space-y-6 bg-[#F2F4F7]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-[#2E2E2E] hover:text-[#3A7CA5] transition-colors cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Seção de redes sociais */}
            <div className="pt-8 border-t border-[#D9D9D9]">
              <h4 className="text-sm font-semibold text-[#444444] mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/luizHScotta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="p-3 rounded-lg bg-[#D9D9D9] hover:bg-[#3A7CA5] hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5 text-[#2E2E2E] hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/luiz-scotta-450572213/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg bg-[#D9D9D9] hover:bg-[#3A7CA5] hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-[#2E2E2E] hover:text-white" />
                </a>
                <a 
                  href="mailto:luizhgscotta@gmail.com" 
                  aria-label="Email"
                  className="p-3 rounded-lg bg-[#D9D9D9] hover:bg-[#3A7CA5] hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#2E2E2E] hover:text-white" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
