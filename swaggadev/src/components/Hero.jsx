import { useState } from 'react';
import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiDocker, SiPostgresql } from 'react-icons/si';
import ScrollFloat from './ScrollFloat';
import Silk from './Silk';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
];

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

    {/* Skills Section */}
    <section id="skills" className="min-h-screen py-20 px-6 relative bg-opacity-0 z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat
          stagger={0.04}
          duration={2.3}
          containerClassName="text-center mb-16"
          textClassName="gradient-text-gold"
        >
          My Skills
        </ScrollFloat>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:bg-gray-900/80 hover:shadow-lg cursor-pointer"
            >
              <skill.icon 
                size={48} 
                color={skill.color}
                className="mb-3 hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-gray-300 text-center hover:text-gray-100 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
