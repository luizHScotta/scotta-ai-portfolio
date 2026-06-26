import ProjectCard from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'newsGPT',
    description: 'Automação que monitora portais de notícias diariamente em busca de novidades sobre IA. Utilizando Python, Prefect, Docker e LLama 3, o sistema coleta, resume e envia por email as notícias mais recentes.',
    technologies: ['Python', 'Prefect', 'Docker', 'LLama 3', 'BeautifulSoup'],
    image: '/proj-newsgpt.webp',
    link: '',
    github: 'https://github.com/luizHScotta/newsGPT',
  },
  {
    id: 2,
    title: 'Site SIATech',
    description: 'Site institucional desenvolvido para a empresa SIATech, com design moderno e responsivo usando React, TypeScript e TailwindCSS.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/proj-site-siatech.webp',
    link: 'https://www.siatechbrasil.com.br/',
    github: '',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-[#f9fafb] dark:bg-[#0f0f0f] border-b border-[#e5e7eb] dark:border-[#1a1a1a]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12 reveal">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] dark:text-[#34d399] mb-2">// projetos</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111] dark:text-white">O que eu construí</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal reveal-delay-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://github.com/luizHScotta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#111] dark:bg-white text-white dark:text-[#0a0a0a] text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] dark:hover:bg-[#34d399] transition-colors"
        >
          Ver Mais no GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  </section>
);

export default Projects;
