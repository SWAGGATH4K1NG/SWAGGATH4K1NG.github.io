import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiDocker, SiPostgresql } from 'react-icons/si';
import ScrollFloat from './ScrollFloat';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollFloat
          duration={2.3}
          stagger={0.04}
          containerClassName="text-center mb-20"
          textClassName="gradient-text-gold text-6xl md:text-7xl lg:text-8xl font-black"
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
  );
}
