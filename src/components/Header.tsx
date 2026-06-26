import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) return;
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200 bg-white dark:bg-[#0a0a0a]",
      scrolled && "border-b border-[#e5e7eb] dark:border-[#1a1a1a] shadow-sm"
    )}>
      <div className="container max-w-7xl flex items-center justify-between h-14 px-4 md:px-6">
        <a href="#home" className="text-xl font-black tracking-tight text-[#111] dark:text-white">
          LH<span className="text-[#059669] dark:text-[#34d399]">S</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#555] dark:text-[#9ca3af] hover:text-[#111] dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4 text-[#555] dark:text-[#9ca3af] hover:text-[#111] dark:hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/luiz-scotta-450572213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 text-[#555] dark:text-[#9ca3af] hover:text-[#111] dark:hover:text-white transition-colors" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
            aria-label="Abrir busca de comandos"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#777] dark:text-[#888] border border-[#e5e7eb] dark:border-[#262626] rounded px-2.5 py-1.5 hover:border-[#059669] dark:hover:border-[#34d399] hover:text-[#111] dark:hover:text-white transition-colors"
          >
            <Search className="h-3.5 w-3.5" />
            <kbd className="font-sans">⌘K</kbd>
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-[#059669] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#047857] dark:hover:bg-[#34d399] dark:hover:text-[#0a0a0a] transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-[#111] dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-[#0a0a0a] md:hidden flex flex-col">
          <div className="flex items-center justify-between px-6 h-14 border-b border-[#e5e7eb] dark:border-[#1a1a1a]">
            <span className="text-xl font-black text-[#111] dark:text-white">LH<span className="text-[#059669] dark:text-[#34d399]">S</span></span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
              <X className="h-5 w-5 text-[#111] dark:text-white" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {[...navItems, { name: 'Home', href: '#home' }, { name: 'Contato', href: '#contact' }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold text-[#111] dark:text-white hover:text-[#059669] dark:hover:text-[#34d399] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-[#e5e7eb] dark:border-[#1a1a1a]">
              <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-[#555]" />
              </a>
              <a href="https://www.linkedin.com/in/luiz-scotta-450572213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-[#555]" />
              </a>
              <a href="mailto:luizhgscotta@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-[#555]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
