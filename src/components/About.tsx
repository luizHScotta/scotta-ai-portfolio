const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-[#f3f4f6] dark:border-[#1a1a1a]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12 reveal">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#059669] dark:text-[#34d399] mb-2">// sobre</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-[#111] dark:text-white">Quem sou eu</h2>
      </div>

      <div className="max-w-5xl">
        <p className="text-lg text-[#444] dark:text-[#9ca3af] leading-relaxed max-w-2xl mb-12">
          Cristão e amante de café, vim da Engenharia movido pela paixão por matemática.
          No primeiro contato com programação, mudei o rumo para Ciências da Computação —
          onde busquei conhecimento em todas as etapas do desenvolvimento.
          <br /><br />
          <strong className="text-[#111] dark:text-white">Código claro, simples de manter e guiado por resultado.</strong> Sempre
          com a mesma ideia: entender o contexto, projetar a solução e entregar em produção.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#e5e7eb] dark:border-[#262626] rounded-md p-6 hover:border-[#059669] dark:hover:border-[#34d399] transition-colors reveal reveal-delay-1">
            <h4 className="text-sm font-bold text-[#111] dark:text-white mb-2">Tribunal de Contas do Estado do Pará</h4>
            <p className="text-sm text-[#666] dark:text-[#9ca3af] leading-relaxed">
              Automação e IA para apoiar o controle de contas públicas,
              transformando processos complexos em sistemas eficientes.
            </p>
          </div>
          <div className="border border-[#e5e7eb] dark:border-[#262626] rounded-md p-6 hover:border-[#059669] dark:hover:border-[#34d399] transition-colors reveal reveal-delay-2">
            <h4 className="text-sm font-bold text-[#111] dark:text-white mb-2">Siatech — Programador &amp; Sócio Minoritário</h4>
            <p className="text-sm text-[#666] dark:text-[#9ca3af] leading-relaxed">
              Transformo problemas de negócio em produto com foco em soluções
              pragmáticas e resultados mensuráveis.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default About;
