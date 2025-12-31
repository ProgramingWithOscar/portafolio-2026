
import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    role: "Desarrollador Full Stack",
    company: "Red Dan Technology",
    period: "1 Año",
    description: [
      "Liderazgo técnico en mantenimiento y nuevos desarrollos sobre ecosistemas heredados y modernos.",
      "Desarrollo integral de módulos de Facturación Electrónica y Documento Soporte.",
      "Gestión de infraestructuras Linux y despliegue continuo (CI/CD) con Jenkins.",
      "Diseño y consumo de API REST robustas integradas con bases de datos SQL.",
      "Trabajo bajo metodologías ágiles (SCRUM) garantizando entregas de alta calidad.",
      "Desarrollador Frontend y Backend."
    ]
  },
  {
    role: "Desarrollador SEO",
    company: "Global Matik SAS",
    period: "6 Meses",
    description: [
      "Implementación de técnicas avanzadas de posicionamiento web para mejorar la visibilidad orgánica.",
      "Administración y optimización técnica de sitios web corporativos.",
      "Creación de contenido optimizado y manejo de herramientas de diseño (Photoshop).",
      "Análisis de métricas y rendimiento para estrategias de contenido web."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Trayectoria <span className="text-blue-400">Profesional</span></h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <div className="text-lg font-medium text-slate-300 mb-4">{exp.company}</div>
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-slate-400">
                    <span className="mr-2 text-blue-500">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
