const stacks = [
  'Python',
  'React',
  'TypeScript',
  'FastAPI',
  'Docker',
  'LLMs / RAG',
  'PostgreSQL',
  'TailwindCSS',
];

const StackStrip = () => (
  <div className="py-6 px-4 bg-[#f9fafb] dark:bg-[#0f0f0f] border-b border-[#e5e7eb] dark:border-[#1a1a1a]">
    <div className="container max-w-7xl md:px-6">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] dark:text-[#666] mb-4">
        Stack Principal
      </p>
      <div className="flex flex-wrap gap-2">
        {stacks.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 bg-white dark:bg-[#161616] border border-[#e5e7eb] dark:border-[#262626] px-3 py-1.5 rounded text-sm font-semibold text-[#333] dark:text-[#d1d5db]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#34d399] flex-shrink-0" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StackStrip;
