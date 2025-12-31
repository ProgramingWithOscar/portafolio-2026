
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Creando <span className="gradient-text">Soluciones</span> Digitales Eficientes
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Hola, soy <span className="text-white font-semibold">Oscar Poveda</span>. Ingeniero de Sistemas en formación y Tecnólogo en Desarrollo de Sistemas con pasión por construir software escalable y automatizaciones inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#proyectos" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all text-center">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-8 py-4 glass-effect text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center border border-white/20">
              Descargar CV
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass-effect border-2 border-white/5 p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/dev/800/800" 
              alt="Oscar Poveda" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
