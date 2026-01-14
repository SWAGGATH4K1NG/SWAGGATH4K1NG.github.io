
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';



export default function App() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Hero />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}
