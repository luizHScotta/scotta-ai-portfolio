import { Code, Users, Terminal, BrainCircuit, Layers, Database, Cloud, Brain, Wrench, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => (
  <Card className="h-full hover:shadow-md hover:translate-y-0.5 transition-all duration-200 bg-white border-slate-200 rounded-2xl shadow-sm">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-violet-50 text-violet-600">
          {icon}
        </div>
        <CardTitle className="text-lg text-slate-900 font-space">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-slate-600">
        <ul className="space-y-2 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
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
      name: "Linguagens de Programação",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
      icon: <Code className="h-6 w-6" />
    },
    {
      name: "Frameworks & Bibliotecas",
      skills: ["React", "Node.js", "Django", "FastAPI", "TensorFlow"],
      icon: <Layers className="h-6 w-6" />
    },
    {
      name: "Banco de Dados",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite"],
      icon: <Database className="h-6 w-6" />
    },
    {
      name: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"],
      icon: <Cloud className="h-6 w-6" />
    },
    {
      name: "Inteligência Artificial",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs"],
      icon: <Brain className="h-6 w-6" />
    },
    {
      name: "Ferramentas",
      skills: ["VS Code", "PyCharm", "Postman", "Figma", "Jira"],
      icon: <Wrench className="h-6 w-6" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-semibold mb-6 text-[#0A2540]">Habilidades</h2>
          <p className="text-body text-[#2E2E2E] max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo para desenvolver soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className="bg-[#F2F4F7] rounded-2xl p-6 border border-[#D9D9D9] hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[#D9D9D9] text-[#0A2540] mr-3 group-hover:bg-[#3A7CA5] group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0A2540]">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-[#D9D9D9] text-[#2E2E2E] rounded-full hover:bg-[#3A7CA5] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-[#0A2540] text-white rounded-full">
            <TrendingUp className="mr-2 h-5 w-5" />
            <span className="font-medium">Sempre aprendendo e evoluindo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
