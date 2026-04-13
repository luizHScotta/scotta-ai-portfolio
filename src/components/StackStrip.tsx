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
  <div className="py-6 px-4 bg-[#f9fafb] border-b border-[#e5e7eb]">
    <div className="container max-w-7xl md:px-6">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] mb-4">
        Stack Principal
      </p>
      <div className="flex flex-wrap gap-2">
        {stacks.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 bg-white border border-[#e5e7eb] px-3 py-1.5 rounded text-sm font-semibold text-[#333]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StackStrip;
