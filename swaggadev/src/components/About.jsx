export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold gradient-text mb-8">Sobre Mim</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Sou um desenvolvedor em construção, aprendendo e criando coisas incríveis. 
          Estou focado em React, JavaScript e criando experiências web modernas e responsivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors bg-opacity-0">
            <h3 className="text-amber-400 font-bold mb-2">Frontend</h3>
            <p className="text-gray-300">React, Tailwind CSS, JavaScript</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors bg-opacity-0">
            <h3 className="text-amber-400 font-bold mb-2">Backend</h3>
            <p className="text-gray-300">Node.js, APIs REST</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors bg-opacity-0">
            <h3 className="text-amber-400 font-bold mb-2">Tools</h3>
            <p className="text-gray-300">Git, NPM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
