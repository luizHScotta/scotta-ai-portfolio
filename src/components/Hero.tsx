
import { ArrowRight, BrainCircuit, FileDown, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="py-32 bg-[#F2F4F7]">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#0A2540] bg-[#D9D9D9] rounded-full mb-4">
              <BrainCircuit size={16} className="mr-2" />
              <span>Programação &amp; Inteligência Artificial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2540]">
              Luiz Henrique<br />
              <span className="bg-gradient-to-r from-[#3A7CA5] to-[#5DA9E9] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
                Gualberto Scotta
              </span>
            </h1>
            
            <p className="text-body text-[#2E2E2E] max-w-lg mx-auto md:mx-0">
              Programador e estudante de Ciências da Computação apaixonado por criar soluções 
              com Inteligência Artificial e automação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-[#0A2540] hover:bg-[#3A7CA5] text-white border-0">
                <a href="#projects">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#3A7CA5] text-[#3A7CA5] hover:bg-[#3A7CA5] hover:text-white">
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="bg-[#D9D9D9] text-[#2E2E2E] hover:bg-[#C5A46D] hover:text-white"
              >
                <a 
                  href="/curriculo Luiz Scotta.pdf" 
                  download="Curriculo_Luiz_Scotta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Baixar CV
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 mt-16 md:mt-0">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-[#3A7CA5] shadow-2xl">
                <img 
                  src="/foto perfil.jpg"
                  alt="Luiz Henrique Gualberto Scotta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
