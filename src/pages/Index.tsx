import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StackStrip from '@/components/StackStrip';
import About from '@/components/About';
import Projects from '@/components/Projects';
import GithubRepos from '@/components/GithubRepos';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <CommandPalette />
      <Header />
      <main className="flex-grow">
        <Hero />
        <StackStrip />
        <About />
        <Projects />
        <GithubRepos />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
