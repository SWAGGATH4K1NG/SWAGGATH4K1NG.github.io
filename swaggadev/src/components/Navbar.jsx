export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dark-950/80 backdrop-blur-lg border-b border-dark-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="gradient-text text-2xl font-bold">swagg.dev</div>
        
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projetos</a></li>
          <li><a href="#contact" className="nav-link">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
