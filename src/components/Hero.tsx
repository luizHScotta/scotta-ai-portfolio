
import { ArrowRight, BrainCircuit, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/curriculo%20Luiz%20Scotta.pdf'; // Corrected path
    link.download = 'curriculo Luiz Scotta.pdf'; // Corrected filename
    link.click();
  };

  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-tech-lightblue/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tech-purple/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-tech-blue bg-tech-lightblue/30 rounded-full mb-4">
              <BrainCircuit size={16} className="mr-2" />
              <span>Programação &amp; Inteligência Artificial</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Luiz Henrique<br />
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                Gualberto Scotta
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Programador e estudante de Ciências da Computação apaixonado por criar soluções 
              com Inteligência Artificial e automação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={handleDownloadCV}
              >
                <FileDown className="mr-2 h-4 w-4" />
                Baixar CV
              </Button>
            </div>
          </div>
          
          <div className="flex-1 mt-12 md:mt-0">
            <div className="relative mx-auto md:mr-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-tech-purple opacity-10"></div>
              <img 
                src="public/foto perfil.jpg"
                alt="Luiz Henrique Gualberto Scotta"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
