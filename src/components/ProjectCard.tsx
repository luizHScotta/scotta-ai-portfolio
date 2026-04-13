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
