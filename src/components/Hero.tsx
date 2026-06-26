import { ArrowRight, FileDown } from 'lucide-react';

const Hero = () => (
  <section id="home" className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-b border-[#f3f4f6] dark:border-[#1a1a1a]">
    <div className="container max-w-7xl px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#059669] dark:text-[#34d399]">
            <span className="block w-6 h-0.5 bg-[#059669] dark:bg-[#34d399]" />
            Programação &amp; Inteligência Artificial
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-none text-[#111] dark:text-white">
            Luiz<br />
            <span className="text-[#059669] dark:text-[#34d399]">Scotta</span>
          </h1>

          <p className="text-base md:text-lg text-[#555] dark:text-[#9ca3af] max-w-md mx-auto md:mx-0 leading-relaxed">
            Programador e estudante de Ciências da Computação apaixonado por criar soluções
            com Inteligência Artificial e automação.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#111] dark:bg-white text-white dark:text-[#0a0a0a] text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] dark:hover:bg-[#34d399] transition-colors"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#059669] dark:border-[#34d399] text-[#059669] dark:text-[#34d399] text-sm font-bold px-5 py-3 rounded hover:bg-[#059669] dark:hover:bg-[#34d399] hover:text-white dark:hover:text-[#0a0a0a] transition-colors"
            >
              Entre em Contato
            </a>
            <a
              href="/curriculo-luiz-scotta.pdf"
              download="Curriculo_Luiz_Scotta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#555] dark:text-[#9ca3af] px-4 py-3 hover:text-[#111] dark:hover:text-white transition-colors"
            >
              <FileDown className="h-4 w-4" />
              Baixar CV
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-[#059669] shadow-[0_0_0_8px_rgba(5,150,105,0.1)]">
            <img
              src="/foto-perfil.webp"
              alt="Luiz Henrique Gualberto Scotta"
              width={288}
              height={288}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
