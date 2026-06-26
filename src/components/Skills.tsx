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
  <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-[#f3f4f6] dark:border-[#1a1a1a]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12 reveal">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] dark:text-[#34d399] mb-2">// habilidades</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111] dark:text-white">Tecnologias</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal reveal-delay-1">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="border border-[#e5e7eb] dark:border-[#262626] rounded-md p-5 hover:border-[#059669] dark:hover:border-[#34d399] transition-colors"
          >
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#111] dark:text-white mb-3">
              <span className="w-2 h-2 rounded-full bg-[#059669] dark:bg-[#34d399] flex-shrink-0" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-[#f0fdf4] dark:bg-[#0f1f17] border border-[#bbf7d0] dark:border-[#1f3d2e] text-[#059669] dark:text-[#34d399] px-2 py-0.5 rounded font-semibold"
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
