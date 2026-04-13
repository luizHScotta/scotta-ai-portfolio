import { Mail, MapPin, Clock, Github, Linkedin } from 'lucide-react';

const contactItems = [
  { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'luizhgscotta@gmail.com', href: 'mailto:luizhgscotta@gmail.com' },
  { icon: <MapPin className="h-5 w-5" />, label: 'Localização', value: 'Belém, Pará — Brasil', href: null },
  { icon: <Clock className="h-5 w-5" />, label: 'Disponibilidade', value: 'Freelance e projetos pontuais', href: null },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-[#111]">
    <div className="container max-w-7xl px-4 md:px-6">

      <div className="mb-12 reveal">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6ee7b7] mb-2">// contato</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">Vamos conversar</h2>
        <p className="text-[#888] mt-4 max-w-md">
          Aberto a novas oportunidades, parcerias e projetos. Entre em contato.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 reveal reveal-delay-1">
        {contactItems.map((item) => (
          <div key={item.label} className="border border-[#222] rounded-md p-5">
            <div className="text-[#6ee7b7] mb-3">{item.icon}</div>
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#6ee7b7] mb-1">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="text-sm text-[#ccc] hover:text-white transition-colors">{item.value}</a>
            ) : (
              <p className="text-sm text-[#ccc]">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/luizHScotta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#333] text-[#ccc] text-sm font-bold px-4 py-2.5 rounded hover:border-[#059669] hover:text-[#6ee7b7] transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luiz-scotta-450572213/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#333] text-[#ccc] text-sm font-bold px-4 py-2.5 rounded hover:border-[#059669] hover:text-[#6ee7b7] transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="mailto:luizhgscotta@gmail.com"
          className="inline-flex items-center gap-2 bg-[#059669] text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-[#047857] transition-colors"
        >
          <Mail className="h-4 w-4" />
          Enviar Email
        </a>
      </div>

    </div>
  </section>
);

export default Contact;
