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

      <div className="mb-12 reveal">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] mb-2">// habilidades</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111]">Tecnologias</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal reveal-delay-1">
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
