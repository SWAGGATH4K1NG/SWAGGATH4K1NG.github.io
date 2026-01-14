import Silk from './Silk';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-dark-950">
      {/* Fundo com Silk - componente 3D */}
      <Silk
        speed={2.8}
        scale={1}
        color="#7B7481"
        noiseIntensity={4.6}
        rotation={0}
      />

      {/* Blobs animados (opcional) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1 }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1 }}></div>

      {/* Conteúdo em cima (z-10 = fica acima do fundo) */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-6">
          Olá, sou Swagg
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Desenvolvedor fullstack apaixonado por criar experiências incríveis
        </p>

        <a href="#projects" className="cta-button">
          Ver Meus Projetos
        </a>
      </div>
    </section>
  );
}
