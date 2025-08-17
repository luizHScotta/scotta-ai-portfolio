
import ProjectCard from './ProjectCard';
import { Bot, Construction, Newspaper, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "newsGPT",
      description: "Automação que monitora portais de notícias diariamente em busca de novidades sobre IA. Utilizando Python, Prefect, Docker e LLama 3, o sistema coleta, resume e envia por email as notícias mais recentes sobre Inteligência Artificial.",
      technologies: ["Python", "Prefect", "Docker", "LLama 3", "BeautifulSoup", "Automação"],
      image: "/proj-newsgpt.png",
      link: "",
      github: "https://github.com/luizHScotta/newsGPT"
    },
    {
      id: 2,
      title: "Site SIATech",
      description: "Site institucional desenvolvido para a empresa SIATech, com design moderno e responsivo. Utilizando React, TypeScript e TailwindCSS para criar uma experiência de usuário excepcional.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Responsivo", "Design Moderno"],
      image: "/proj-site-siatech.png",
      link: "https://www.siatechbrasil.com.br/",
      github: ""
    },
    {
      id: 3,
      title: "Projeto em Construção",
      description: "Novo projeto em desenvolvimento. Em breve mais novidades sobre esta iniciativa inovadora.",
      technologies: ["Em Desenvolvimento"],
      image: "",
      link: "",
      github: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F2F4F7]">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-semibold mb-6 text-[#0A2540]">Projetos</h2>
          <p className="text-body text-[#2E2E2E] max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, focados em soluções práticas e inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-[#0A2540] hover:bg-[#3A7CA5] text-white border-0">
            <a href="https://github.com/luizHScotta" target="_blank" rel="noopener noreferrer">
              Ver Mais Projetos no GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
