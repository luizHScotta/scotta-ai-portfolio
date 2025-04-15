
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Análise de Dados com IA",
      description: "Sistema desenvolvido para o TCE-PA que utiliza algoritmos de aprendizado de máquina para identificar padrões em grandes conjuntos de dados, otimizando o processo de auditoria.",
      tags: ["Python", "TensorFlow", "Pandas", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Automação de Processos Administrativos",
      description: "Ferramenta de automação desenvolvida para reduzir o tempo de processamento de documentos administrativos, utilizando técnicas de OCR e processamento de linguagem natural.",
      tags: ["Python", "OCR", "NLP", "Automação"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format",
      githubUrl: "https://github.com"
    },
    {
      title: "Plataforma de Gestão Empresarial",
      description: "Sistema web completo para gestão de empresas, desenvolvido na Siatech, integrando módulos de finanças, recursos humanos e operações com interface intuitiva.",
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format",
      liveUrl: "https://example.com"
    },
    {
      title: "Algoritmo de Predição de Falhas",
      description: "Pesquisa acadêmica sobre algoritmos de IA para predição de falhas em sistemas computacionais, com aplicação prática em ambientes de produção.",
      tags: ["Machine Learning", "Estatística", "Análise Preditiva", "Python"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format",
      githubUrl: "https://github.com"
    },
    {
      title: "Assistente Virtual para Consulta de Processos",
      description: "Chatbot baseado em IA para consulta de processos jurídicos, capaz de responder perguntas complexas e auxiliar no acesso à informação.",
      tags: ["NLP", "Chatbot", "LLM", "Python", "API"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format",
      liveUrl: "https://example.com"
    },
    {
      title: "Framework de Desenvolvimento Rápido",
      description: "Framework desenvolvido para acelerar o processo de criação de aplicações web, integrando ferramentas modernas e práticas de desenvolvimento ágil.",
      tags: ["TypeScript", "React", "AWS", "DevOps"],
      githubUrl: "https://github.com"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
