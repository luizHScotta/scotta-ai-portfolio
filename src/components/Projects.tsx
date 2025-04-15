
import ProjectCard from './ProjectCard';
import { Construction, News, Robot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "newsGPT",
      description: "Automação que monitora portais de notícias diariamente em busca de novidades sobre IA. Utilizando Python, Prefect, Docker e LLama 3, o sistema coleta, resume e envia por email as notícias mais recentes sobre Inteligência Artificial.",
      tags: ["Python", "Prefect", "Docker", "LLama 3", "BeautifulSoup", "Automação"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format",
      githubUrl: "https://github.com",
      icon: <Robot className="h-12 w-12 text-tech-blue/40" />
    },
    {
      title: "Projeto em Construção",
      description: "Novo projeto em desenvolvimento. Em breve mais novidades sobre esta iniciativa inovadora.",
      tags: ["Em Desenvolvimento"],
      icon: <Construction className="h-12 w-12 text-tech-purple/40" />
    },
    {
      title: "Projeto em Construção",
      description: "Novo projeto em desenvolvimento. Em breve mais novidades sobre esta iniciativa inovadora.",
      tags: ["Em Desenvolvimento"],
      icon: <Construction className="h-12 w-12 text-tech-purple/40" />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de projetos em que trabalhei nas áreas de IA, automação e desenvolvimento de software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              image={project.image}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
