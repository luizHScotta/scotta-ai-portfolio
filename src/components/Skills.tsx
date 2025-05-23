import { Code, Users, Terminal, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => (
  <Card className="h-full hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription>
        <ul className="space-y-2 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-tech-blue rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </CardDescription>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="h-5 w-5 text-tech-blue" />,
      skills: ["Python", "JavaScript/TypeScript", "C++", "Java", "SQL"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5 text-tech-darkblue" />,
      skills: ["Trabalho em Equipe", "Resolução de Problemas", "Comunicação", "Adaptabilidade"]
    },
    {
      title: "DevOps & Ferramentas",
      icon: <Terminal className="h-5 w-5 text-tech-darkblue" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux/Unix"]
    },
    {
      title: "IA & Machine Learning",
      icon: <BrainCircuit className="h-5 w-5 text-tech-blue" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competências técnicas e interpessoais desenvolvidas ao longo da minha trajetória profissional e acadêmica
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
