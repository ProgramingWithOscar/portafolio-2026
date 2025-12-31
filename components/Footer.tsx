
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Oscar Eduardo Poveda Lozada. Todos los derechos reservados.
        </div>
        <div className="flex space-x-6">
          <span>Diseñado con enfoque en UX/UI</span>
          <span className="text-slate-800">|</span>
          <span className="text-slate-400">Desarrollador Full Stack</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
