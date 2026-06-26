# Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign visual do portfólio para estética Minimal & Bold com acento esmeralda, nova seção Stack Principal e animações de scroll.

**Architecture:** Atualização pura de apresentação — mesmos componentes React existentes, sem alteração de lógica ou roteamento. Adiciona um novo componente `StackStrip` e classes CSS de animação via `IntersectionObserver`. Todas as cores hardcoded no código serão substituídas pela paleta esmeralda/preto/branco.

**Tech Stack:** React, TypeScript, TailwindCSS, CSS custom properties, IntersectionObserver API

---

## Arquivos Modificados / Criados

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/index.css` | Modificar | Variáveis CSS esmeralda, classes `.reveal` de animação |
| `src/components/Header.tsx` | Modificar | Logo com S esmeralda, CTA button, estilos minimalistas |
| `src/components/Hero.tsx` | Modificar | Tipografia 900 bold, ring esmeralda na foto |
| `src/components/StackStrip.tsx` | **Criar** | Faixa nova "Stack Principal" entre Hero e Sobre |
| `src/components/About.tsx` | Modificar | Cards de experiência com hover esmeralda |
| `src/components/Projects.tsx` | Modificar | Fundo, tag, título, botão GitHub |
| `src/components/ProjectCard.tsx` | Modificar | Borda hover esmeralda, tags outline esmeralda |
| `src/components/Skills.tsx` | Modificar | Pills esmeralda, dot no título de cada card |
| `src/components/Contact.tsx` | Modificar | Fundo preto, acentos esmeralda |
| `src/components/Footer.tsx` | Modificar | Logo com S esmeralda, fundo escuro simplificado |
| `src/pages/Index.tsx` | Modificar | Importar e inserir `<StackStrip />` |

---

## Task 1: Atualizar variáveis CSS e classes de animação

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Substituir variáveis de cor no `:root` e adicionar classes de animação**

Abra `src/index.css` e substitua o bloco `@layer base` inteiro pelo seguinte:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 7%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 7%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 7%;

    --primary: 161 93% 30%; /* esmeralda #059669 */
    --primary-foreground: 0 0% 100%;

    --secondary: 210 20% 98%;
    --secondary-foreground: 0 0% 7%;

    --muted: 210 20% 98%;
    --muted-foreground: 220 9% 46%;

    --accent: 161 93% 30%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 161 93% 30%;

    --radius: 0.375rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-white text-[#111] font-inter;
    scroll-behavior: smooth;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3 {
    @apply font-space;
  }

  h1 { @apply text-h1 font-black; }
  h2 { @apply text-h2 font-black; }
  h3 { @apply text-h3 font-bold; }

  a, button {
    @apply transition-all duration-200;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer utilities {
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
}
```

- [ ] **Step 2: Verificar que o app compila sem erros**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```
Esperado: sem erros de compilação.

- [ ] **Step 3: Commit**

```bash
cd /home/luizs/eu/scotta-ai-portfolio
git add src/index.css
git commit -m "style: update CSS variables to emerald palette and add reveal animations"
```

---

## Task 2: Atualizar Header

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200 bg-white",
      scrolled && "border-b border-[#e5e7eb] shadow-sm"
    )}>
      <div className="container max-w-7xl flex items-center justify-between h-14 px-4 md:px-6">
        <a href="#home" className="text-xl font-black tracking-tight text-[#111]">
          LH<span className="text-[#059669]">S</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#555] hover:text-[#111] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4 text-[#555] hover:text-[#111] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/luiz-scotta-450572213/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 text-[#555] hover:text-[#111] transition-colors" />
            </a>
          </div>
          <a
            href="#contact"
            className="bg-[#059669] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#047857] transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden p-2 text-[#111]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col">
          <div className="flex items-center justify-between px-6 h-14 border-b border-[#e5e7eb]">
            <span className="text-xl font-black text-[#111]">LH<span className="text-[#059669]">S</span></span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
              <X className="h-5 w-5 text-[#111]" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {[...navItems, { name: 'Home', href: '#home' }, { name: 'Contato', href: '#contact' }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold text-[#111] hover:text-[#059669] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-[#e5e7eb]">
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
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```
Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "style: redesign header with emerald CTA and minimal nav"
```

---

## Task 3: Atualizar Hero

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
import { ArrowRight, FileDown } from 'lucide-react';

const Hero = () => (
  <section id="home" className="py-24 md:py-32 bg-white border-b border-[#f3f4f6]">
    <div className="container max-w-7xl px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#059669]">
            <span className="block w-6 h-0.5 bg-[#059669]" />
            Programação &amp; Inteligência Artificial
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-none text-[#111]">
            Luiz<br />
            <span className="text-[#059669]">Scotta</span>
          </h1>

          <p className="text-base md:text-lg text-[#555] max-w-md mx-auto md:mx-0 leading-relaxed">
            Programador e estudante de Ciências da Computação apaixonado por criar soluções
            com Inteligência Artificial e automação.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] transition-colors"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#059669] text-[#059669] text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] hover:text-white transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="/curriculo Luiz Scotta.pdf"
              download="Curriculo_Luiz_Scotta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#555] px-4 py-3 hover:text-[#111] transition-colors"
            >
              <FileDown className="h-4 w-4" />
              Baixar CV
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-3 border-[#059669] shadow-[0_0_0_8px_rgba(5,150,105,0.1)]">
            <img
              src="/foto perfil.jpg"
              alt="Luiz Henrique Gualberto Scotta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "style: redesign hero with bold typography and emerald accent"
```

---

## Task 4: Criar componente StackStrip

**Files:**
- Create: `src/components/StackStrip.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
const stacks = [
  'Python',
  'React',
  'TypeScript',
  'FastAPI',
  'Docker',
  'LLMs / RAG',
  'PostgreSQL',
  'TailwindCSS',
];

const StackStrip = () => (
  <div className="py-6 px-4 bg-[#f9fafb] border-b border-[#e5e7eb]">
    <div className="container max-w-7xl md:px-6">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] mb-4">
        Stack Principal
      </p>
      <div className="flex flex-wrap gap-2">
        {stacks.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 py-1.5 rounded text-sm font-semibold text-[#333]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StackStrip;
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Inserir em Index.tsx**

Em `src/pages/Index.tsx`, adicionar o import e o componente entre `<Hero />` e `<About />`:

```tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StackStrip from '@/components/StackStrip';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Hero />
      <StackStrip />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
```

- [ ] **Step 4: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 5: Commit**

```bash
git add src/components/StackStrip.tsx src/pages/Index.tsx
git commit -m "feat: add StackStrip section with main technologies"
```

---

## Task 5: Atualizar About

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
const About = () => (
  <section id="about" className="py-20 bg-white border-b border-[#f3f4f6]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] mb-2">// sobre</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111]">Quem sou eu</h2>
      </div>

      <div className="max-w-5xl">
        <p className="text-lg text-[#444] leading-relaxed max-w-2xl mb-12">
          Cristão e amante de café, vim da Engenharia movido pela paixão por matemática.
          No primeiro contato com programação, mudei o rumo para Ciências da Computação —
          onde busquei conhecimento em todas as etapas do desenvolvimento.
          <br /><br />
          <strong className="text-[#111]">Código claro, simples de manter e guiado por resultado.</strong> Sempre
          com a mesma ideia: entender o contexto, projetar a solução e entregar em produção.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#e5e7eb] rounded-md p-6 hover:border-[#059669] transition-colors">
            <h4 className="text-sm font-bold text-[#111] mb-2">Tribunal de Contas do Estado do Pará</h4>
            <p className="text-sm text-[#666] leading-relaxed">
              Automação e IA para apoiar o controle de contas públicas,
              transformando processos complexos em sistemas eficientes.
            </p>
          </div>
          <div className="border border-[#e5e7eb] rounded-md p-6 hover:border-[#059669] transition-colors">
            <h4 className="text-sm font-bold text-[#111] mb-2">Siatech — Programador &amp; Sócio Minoritário</h4>
            <p className="text-sm text-[#666] leading-relaxed">
              Transformo problemas de negócio em produto com foco em soluções
              pragmáticas e resultados mensuráveis.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default About;
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "style: redesign about section with minimal cards and emerald hover"
```

---

## Task 6: Atualizar ProjectCard e Projects

**Files:**
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/Projects.tsx`

- [ ] **Step 1: Substituir ProjectCard**

```tsx
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    github: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, image, link, github } = project;
  const isPlaceholder = !image;

  return (
    <div className="flex flex-col overflow-hidden border border-[#e5e7eb] rounded-md hover:border-[#059669] transition-colors duration-200 bg-white h-full">
      {image ? (
        <div className="h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-44 bg-[#f0fdf4] border-b border-dashed border-[#bbf7d0] flex items-center justify-center">
          <span className="text-3xl">🚧</span>
        </div>
      )}

      <div className="flex flex-col flex-grow p-5">
        <h3 className={`text-base font-bold mb-1 ${isPlaceholder ? 'text-[#059669]' : 'text-[#111]'}`}>
          {title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed flex-grow mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-[#059669] text-[#059669] px-2 py-0.5 rounded font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {(github || link) && (
          <div className="flex gap-2 pt-4 border-t border-[#f3f4f6]">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold border border-[#e5e7eb] text-[#555] px-3 py-1.5 rounded hover:border-[#059669] hover:text-[#059669] transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Código
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#111] text-white px-3 py-1.5 rounded hover:bg-[#059669] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Ver Projeto
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
```

- [ ] **Step 2: Substituir Projects**

```tsx
import ProjectCard from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'newsGPT',
    description: 'Automação que monitora portais de notícias diariamente em busca de novidades sobre IA. Utilizando Python, Prefect, Docker e LLama 3, o sistema coleta, resume e envia por email as notícias mais recentes.',
    technologies: ['Python', 'Prefect', 'Docker', 'LLama 3', 'BeautifulSoup'],
    image: '/proj-newsgpt.png',
    link: '',
    github: 'https://github.com/luizHScotta/newsGPT',
  },
  {
    id: 2,
    title: 'Site SIATech',
    description: 'Site institucional desenvolvido para a empresa SIATech, com design moderno e responsivo usando React, TypeScript e TailwindCSS.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/proj-site-siatech.png',
    link: 'https://www.siatechbrasil.com.br/',
    github: '',
  },
  {
    id: 3,
    title: 'Projeto em Construção',
    description: 'Novo projeto em desenvolvimento. Em breve mais novidades sobre esta iniciativa inovadora.',
    technologies: ['Em Desenvolvimento'],
    image: '',
    link: '',
    github: '',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-[#f9fafb] border-b border-[#e5e7eb]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] mb-2">// projetos</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111]">O que eu construí</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://github.com/luizHScotta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] transition-colors"
        >
          Ver Mais no GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  </section>
);

export default Projects;
```

- [ ] **Step 3: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/Projects.tsx
git commit -m "style: redesign project cards with emerald outline tags and hover borders"
```

---

## Task 7: Atualizar Skills

**Files:**
- Modify: `src/components/Skills.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
import { Code, Layers, Database, Cloud, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Linguagens',
    icon: <Code className="h-4 w-4" />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  },
  {
    name: 'Frameworks & Libs',
    icon: <Layers className="h-4 w-4" />,
    skills: ['React', 'Node.js', 'Django', 'FastAPI', 'TensorFlow'],
  },
  {
    name: 'Banco de Dados',
    icon: <Database className="h-4 w-4" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQLite'],
  },
  {
    name: 'DevOps & Cloud',
    icon: <Cloud className="h-4 w-4" />,
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes'],
  },
  {
    name: 'Inteligência Artificial',
    icon: <Brain className="h-4 w-4" />,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG'],
  },
  {
    name: 'Ferramentas',
    icon: <Wrench className="h-4 w-4" />,
    skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'PyCharm'],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white border-b border-[#f3f4f6]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] mb-2">// habilidades</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111]">Tecnologias</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="border border-[#e5e7eb] rounded-md p-5 hover:border-[#059669] transition-colors"
          >
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#111] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#059669] flex-shrink-0" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-[#f0fdf4] border border-[#bbf7d0] text-[#059669] px-2 py-0.5 rounded font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "style: redesign skills with emerald pills and dot category headers"
```

---

## Task 8: Atualizar Contact

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
import { Mail, MapPin, Clock, Github, Linkedin } from 'lucide-react';

const contactItems = [
  { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'luizhgscotta@gmail.com', href: 'mailto:luizhgscotta@gmail.com' },
  { icon: <MapPin className="h-5 w-5" />, label: 'Localização', value: 'Belém, Pará — Brasil', href: null },
  { icon: <Clock className="h-5 w-5" />, label: 'Disponibilidade', value: 'Freelance e projetos pontuais', href: null },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-[#111]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6ee7b7] mb-2">// contato</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">Vamos conversar</h2>
        <p className="text-[#888] mt-4 max-w-md">
          Aberto a novas oportunidades, parcerias e projetos. Entre em contato.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {contactItems.map((item) => (
          <div key={item.label} className="border border-[#222] rounded-md p-5">
            <div className="text-[#6ee7b7] mb-3">{item.icon}</div>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#6ee7b7] mb-1">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="text-sm text-[#ccc] hover:text-white transition-colors">{item.value}</a>
            ) : (
              <p className="text-sm text-[#ccc]">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/luizHScotta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#333] text-[#ccc] text-sm font-bold px-4 py-2.5 rounded hover:border-[#059669] hover:text-[#6ee7b7] transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luiz-scotta-450572213/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#333] text-[#ccc] text-sm font-bold px-4 py-2.5 rounded hover:border-[#059669] hover:text-[#6ee7b7] transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:luizhgscotta@gmail.com"
          className="inline-flex items-center gap-2 bg-[#059669] text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-[#047857] transition-colors"
        >
          <Mail className="h-4 w-4" />
          Enviar Email
        </a>
      </div>

    </div>
  </section>
);

export default Contact;
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "style: redesign contact section with dark background and emerald accents"
```

---

## Task 9: Atualizar Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Substituir o componente inteiro**

```tsx
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
```

- [ ] **Step 2: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "style: simplify footer with emerald logo accent"
```

---

## Task 10: Adicionar animações de scroll (reveal)

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Adicionar hook de IntersectionObserver em Index.tsx**

Substitua `src/pages/Index.tsx` pelo seguinte (que adiciona o hook de reveal ao montar a página):

```tsx
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StackStrip from '@/components/StackStrip';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StackStrip />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
```

- [ ] **Step 2: Adicionar classe `reveal` nos elementos de cada seção**

Nos componentes a seguir, adicione `className="reveal"` (ou concatene com as classes existentes) nos elementos de nível de seção:

**About.tsx** — adicione `reveal` ao `<div className="mb-12">` e a cada card:
```tsx
<div className="mb-12 reveal">
// ...
<div className="border border-[#e5e7eb] rounded-md p-6 hover:border-[#059669] transition-colors reveal reveal-delay-1">
<div className="border border-[#e5e7eb] rounded-md p-6 hover:border-[#059669] transition-colors reveal reveal-delay-2">
```

**Projects.tsx** — adicione `reveal` ao `<div className="mb-12">` e ao grid:
```tsx
<div className="mb-12 reveal">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal reveal-delay-1">
```

**Skills.tsx** — adicione `reveal` ao `<div className="mb-12">` e ao grid:
```tsx
<div className="mb-12 reveal">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal reveal-delay-1">
```

**Contact.tsx** — adicione `reveal` ao `<div className="mb-12">` e ao grid:
```tsx
<div className="mb-12 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 reveal reveal-delay-1">
```

- [ ] **Step 3: Verificar compilação**

```bash
cd /home/luizs/eu/scotta-ai-portfolio && npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit final**

```bash
git add src/pages/Index.tsx src/components/About.tsx src/components/Projects.tsx src/components/Skills.tsx src/components/Contact.tsx
git commit -m "feat: add scroll reveal animations with IntersectionObserver"
```
