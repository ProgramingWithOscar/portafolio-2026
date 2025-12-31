
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">
          OSCAR<span className="text-blue-400">POVEDA</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
          <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-all">Contactar</a>
        </div>
        <div className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
