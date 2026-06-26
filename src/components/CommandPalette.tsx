import { useEffect, useState, useCallback } from 'react';
import { Command } from 'cmdk';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';
import {
  Home, User, FolderGit2, Wrench, Mail, Github, Linkedin,
  FileDown, Moon, Sun, Copy,
} from 'lucide-react';

const EMAIL = 'luizhgscotta@gmail.com';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Atalho ⌘K / Ctrl+K e evento disparado pelo botão do header
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onOpen);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onOpen);
    };
  }, []);

  const run = useCallback((fn: () => void) => {
    setOpen(false);
    // espera o diálogo fechar antes de navegar/scrollar
    setTimeout(fn, 60);
  }, []);

  const goTo = (hash: string) => run(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  });

  const openUrl = (url: string) => run(() => window.open(url, '_blank', 'noopener,noreferrer'));

  const copyEmail = () => run(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success('Email copiado', { description: EMAIL });
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  });

  const isDark = resolvedTheme === 'dark';

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Paleta de comandos"
      className="cmdk-root"
    >
      <Command.Input placeholder="Buscar seção ou ação…" />
      <Command.List>
        <Command.Empty>Nenhum resultado.</Command.Empty>

        <Command.Group heading="Navegar">
          <Command.Item onSelect={() => goTo('#home')}><Home className="h-4 w-4" /> Início</Command.Item>
          <Command.Item onSelect={() => goTo('#about')}><User className="h-4 w-4" /> Sobre</Command.Item>
          <Command.Item onSelect={() => goTo('#projects')}><FolderGit2 className="h-4 w-4" /> Projetos</Command.Item>
          <Command.Item onSelect={() => goTo('#github')}><Github className="h-4 w-4" /> GitHub</Command.Item>
          <Command.Item onSelect={() => goTo('#skills')}><Wrench className="h-4 w-4" /> Habilidades</Command.Item>
          <Command.Item onSelect={() => goTo('#contact')}><Mail className="h-4 w-4" /> Contato</Command.Item>
        </Command.Group>

        <Command.Group heading="Ações">
          <Command.Item onSelect={copyEmail}><Copy className="h-4 w-4" /> Copiar email</Command.Item>
          <Command.Item onSelect={() => openUrl('/curriculo-luiz-scotta.pdf')}><FileDown className="h-4 w-4" /> Baixar currículo</Command.Item>
          <Command.Item onSelect={() => run(() => setTheme(isDark ? 'light' : 'dark'))}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            Alternar tema {isDark ? 'claro' : 'escuro'}
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Links">
          <Command.Item onSelect={() => openUrl('https://github.com/luizHScotta')}><Github className="h-4 w-4" /> GitHub</Command.Item>
          <Command.Item onSelect={() => openUrl('https://www.linkedin.com/in/luiz-scotta-450572213/')}><Linkedin className="h-4 w-4" /> LinkedIn</Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandPalette;
