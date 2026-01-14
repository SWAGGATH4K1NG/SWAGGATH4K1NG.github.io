import { useState } from 'react';
import Silk from './Silk';

export default function Hero() {
  const myName = "SWAGGA";
  const realName = "Luís Moreira";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Fundo Silk - fixo para toda a página */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <Silk
          speed={5.8}
          scale={1}
          color="#7B7481"
          noiseIntensity={4.6}
          rotation={0}
        />
      </div>

      <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center pt-20 px-6 relative overflow-hidden bg-opacity-0 z-10">
        {/* Blobs animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1 }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: 1 }}></div>

      {/* Conteúdo ESQUERDA */}
      <div className="relative text-left max-w-2xl">
        <div className="mb-2 text-gray-400 text-lg">Hi, I am</div>
        <h1 
          className="text-7xl md:text-8xl font-black mb-6 leading-tight cursor-pointer transition-all duration-500 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`inline-block transition-all duration-500 gradient-text-gold ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
            {myName}
          </span>
          <span className={`absolute left-0 top-0 inline-block transition-all duration-500 gradient-text-gold ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            {realName}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Junior fullstack developer always looking for new challenges and opportunities to learn more.
        </p>

        <a href="#projects" className="cta-button">
          See My Projects
        </a>
      </div>
    </section>
    </>
  );
}

