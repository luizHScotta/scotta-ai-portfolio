
import { GraduationCap, Briefcase, Cpu, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sobre</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Minha trajetória profissional e acadêmica na área de tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-semibold">Olá, eu sou o Luiz Henrique!</h3>
            <p className="text-muted-foreground">
              Sou programador e estudante de Ciências da Computação (7º período), 
              focado no desenvolvimento de soluções com Inteligência Artificial e automação.
              Tenho paixão por transformar ideias complexas em aplicações funcionais e intuitivas.
            </p>
            
            <p className="text-muted-foreground">
              Atualmente, divido meu tempo entre meus estudos universitários e atuações 
              profissionais, sempre buscando aprimorar minhas habilidades técnicas e 
              acompanhar as tendências do mercado de tecnologia.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-md bg-tech-blue/10 text-tech-blue">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Siatech</h4>
                  <p className="text-sm text-muted-foreground">Programador e Sócio Minoritário</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-md bg-tech-purple/10 text-tech-purple">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Tribunal de Contas do Estado do Pará</h4>
                  <p className="text-sm text-muted-foreground">Estagiário - Projetos de IA e Automação</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-md bg-tech-indigo/10 text-tech-indigo">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Ciências da Computação</h4>
                  <p className="text-sm text-muted-foreground">Universidade Faci Wyden - 7º Período</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="order-1 md:order-2">
            <div className="relative border-l border-border pl-8 py-2 space-y-10">
                {
                /* 
                <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 rounded-full bg-tech-blue text-white">
                  <Award size={18} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Pesquisa Acadêmica em IA</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023 - Presente</p>
                  <p className="text-muted-foreground">
                  Participação em projetos de pesquisa focados em aplicações de Inteligência Artificial 
                  para solução de problemas complexos.
                  </p>
                </div>
                </div>
                */}
  
              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 rounded-full bg-tech-purple text-white">
                  <Cpu size={18} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Estágio no TCE-PA</h4>
                  <p className="text-sm text-muted-foreground mb-2">2025 - Presente</p>
                  <p className="text-muted-foreground">
                    Desenvolvimento de soluções de automação e sistemas baseados em IA para 
                    otimização de processos internos do tribunal.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 rounded-full bg-tech-indigo text-white">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Programador na Siatech</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023 - Presente</p>
                  <p className="text-muted-foreground">
                    Desenvolvimento de software e soluções tecnológicas como programador
                    e sócio minoritário da empresa.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 rounded-full bg-tech-darkblue text-white">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Início da Graduação</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023</p>
                  <p className="text-muted-foreground">
                    Ingresso no curso de Ciências da Computação na Faculdade Faci wyden.
                  </p>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-8 h-8 rounded-full bg-tech-blue text-white">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Início da Graduação em engenharia</h4>
                  <p className="text-sm text-muted-foreground mb-2">2020 - 2022</p>
                  <p className="text-muted-foreground">
                    Ingresso no curso de Engenharia da Computação no Cesupa.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
