
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 glass-effect rounded-2xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">+1.5</div>
                    <div className="text-sm text-slate-400">Años de experiencia</div>
                </div>
                <div className="p-6 glass-effect rounded-2xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">Full</div>
                    <div className="text-sm text-slate-400">Stack Capability</div>
                </div>
                <div className="p-6 glass-effect rounded-2xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">IA</div>
                    <div className="text-sm text-slate-400">Automatizaciones</div>
                </div>
                <div className="p-6 glass-effect rounded-2xl">
                    <div className="text-3xl font-bold text-blue-400 mb-1">Agile</div>
                    <div className="text-sm text-slate-400">SCRUM Mindset</div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Un enfoque orientado a <span className="text-blue-400">resultados</span></h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Como desarrollador, mi misión es transformar problemas complejos en soluciones digitales eficientes y elegantes. Mi trayectoria como Tecnólogo en Sistemas y actual estudiante de Ingeniería me ha brindado una base sólida tanto en la arquitectura de software como en la implementación práctica.
              </p>
              <p>
                Me destaco por mi capacidad para adaptarme rápidamente a nuevas tecnologías y mi enfoque en la entrega de valor real. He trabajado en sectores que van desde el posicionamiento SEO hasta la facturación electrónica masiva, siempre priorizando el código limpio y el alto rendimiento.
              </p>
              <p>
                Mi visión a futuro es seguir integrando herramientas de Inteligencia Artificial (n8n, make) en el flujo de desarrollo para potenciar la productividad y la calidad del software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
