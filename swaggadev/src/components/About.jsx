export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold gradient-text mb-8">Sobre Mim</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Sou um desenvolvedor em construção, aprendendo e criando coisas incríveis. 
          Estou focado em React, JavaScript e criando experiências web modernas e responsivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-emerald-400 transition-colors">
            <h3 className="text-emerald-400 font-bold mb-2">Frontend</h3>
            <p className="text-gray-400">React, Tailwind CSS, JavaScript</p>
          </div>

          <div className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-emerald-400 transition-colors">
            <h3 className="text-emerald-400 font-bold mb-2">Backend</h3>
            <p className="text-gray-400">Node.js, APIs REST</p>
          </div>

          <div className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-emerald-400 transition-colors">
            <h3 className="text-emerald-400 font-bold mb-2">Tools</h3>
            <p className="text-gray-400">Git, NPM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
