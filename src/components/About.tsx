
import { Coffee, Code, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-semibold mb-6 text-[#0A2540]">Sobre</h2>
          <p className="text-body text-[#2E2E2E] max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada e filosofia de trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introdução */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D9D9D9] rounded-full mb-6">
              <Code size={32} className="text-[#0A2540]" />
            </div>
            <h3 className="text-3xl font-semibold text-[#0A2540] font-space mb-6">Luiz Henrique Scotta (LHS)</h3>
            <p className="text-xl text-[#2E2E2E] max-w-2xl mx-auto leading-relaxed">
              Cristão e amante de café, vim da Engenharia movido pela paixão por matemática. 
              No primeiro contato com programação, mudei o rumo dos estudos para ciências da computação, onde busquei conhecimento em todas as etapas do desenvolvimento.
            </p>
          </div>

          {/* Filosofia de Trabalho */}
          <div className="bg-[#F2F4F7] rounded-2xl p-8 shadow-sm border border-[#D9D9D9] mb-12">
            <h4 className="text-2xl font-semibold text-[#0A2540] mb-6 text-center">Minha Filosofia</h4>
            <p className="text-lg text-[#2E2E2E] text-center leading-relaxed">
              <strong className="text-[#3A7CA5]">Código claro, simples de manter e guiado por resultado.</strong> 
              Sempre com a mesma ideia: entender o contexto, projetar a solução e entregar em produção, resolvendo problemas de forma eficiente.
            </p>
          </div>

          {/* Jornada Técnica */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9D9D9] rounded-full mb-4 group-hover:bg-[#3A7CA5] transition-colors">
                <Code size={24} className="text-[#0A2540] group-hover:text-white" />
              </div>
              <h5 className="font-semibold text-[#0A2540] mb-2">Front-end</h5>
              <p className="text-sm text-[#2E2E2E]">Comecei minha jornada no desenvolvimento de interfaces</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9D9D9] rounded-full mb-4 group-hover:bg-[#3A7CA5] transition-colors">
                <Target size={24} className="text-[#0A2540] group-hover:text-white" />
              </div>
              <h5 className="font-semibold text-[#0A2540] mb-2">Back-end</h5>
              <p className="text-sm text-[#2E2E2E]">Aprofundei no desenvolvimento de sistemas e APIs</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9D9D9] rounded-full mb-4 group-hover:bg-[#3A7CA5] transition-colors">
                <Heart size={24} className="text-[#0A2540] group-hover:text-white" />
              </div>
              <h5 className="font-semibold text-[#0A2540] mb-2">IA Aplicada</h5>
              <p className="text-sm text-[#2E2E2E]">Cheguei à Inteligência Artificial com DevOps</p>
            </div>
          </div>

          {/* Atuação Atual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F2F4F7] rounded-2xl p-6 shadow-sm border border-[#D9D9D9]">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-[#D9D9D9] text-[#0A2540] mr-3">
                  <Target size={20} />
                </div>
                <h5 className="font-semibold text-[#0A2540]">Tribunal de Contas do Estado do Pará</h5>
              </div>
              <p className="text-[#2E2E2E]">
                Desenvolvo soluções de automação e IA para apoiar o controle de contas, 
                transformando processos complexos em sistemas eficientes.
              </p>
            </div>
            
            <div className="bg-[#F2F4F7] rounded-2xl p-6 shadow-sm border border-[#D9D9D9]">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-[#D9D9D9] text-[#0A2540] mr-3">
                  <Code size={20} />
                </div>
                <h5 className="font-semibold text-[#0A2540]">Siatech</h5>
              </div>
              <p className="text-[#2E2E2E]">
                Como programador e sócio minoritário, transformo problemas de negócio em produto, 
                sempre com foco em soluções pragmáticas e resultados mensuráveis.
              </p>
            </div>
          </div>

          {/* Características Pessoais */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D9D9D9] rounded-full mb-4">
              <Coffee size={24} className="text-[#0A2540]" />
            </div>
            <p className="text-lg text-[#2E2E2E]">
              <strong className="text-[#3A7CA5]">Gosto de problemas difíceis e de resolvê-los com pragmatismo.</strong> 
              Cada desafio é uma oportunidade de aprender e crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
