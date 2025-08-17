
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-200 h-full hover:shadow-md hover:translate-y-0.5 bg-white border-[#D9D9D9] rounded-2xl shadow-sm">
      {image ? (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* Overlay de gradiente sutil no topo para legibilidade das tags */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A2540]/20 to-transparent"></div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-[#D9D9D9] to-[#F2F4F7] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mb-2">
              <Github className="h-8 w-8 text-white" />
            </div>
            <p className="text-[#2E2E2E] font-medium">Projeto</p>
          </div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#0A2540] font-space">{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs h-7 px-3 rounded-full tracking-wide bg-[#D9D9D9] text-[#0A2540] hover:bg-[#3A7CA5] hover:text-white border-0"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-[#2E2E2E] leading-relaxed">{description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-[#D9D9D9] pt-4">
        <div className="flex gap-3">
          {github && (
            <Button variant="outline" size="sm" asChild className="border-[#3A7CA5] text-[#3A7CA5] hover:bg-[#3A7CA5] hover:text-white">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Código
              </a>
            </Button>
          )}
          
          {link && (
            <Button size="sm" asChild className="bg-[#0A2540] hover:bg-[#3A7CA5] text-white border-0">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Ver Projeto
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
