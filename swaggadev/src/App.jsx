
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      {/* Conteúdo com z-index para ficar à frente do Silk */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <About />
        <Footer />
      </div>
    </div>
  );
}
