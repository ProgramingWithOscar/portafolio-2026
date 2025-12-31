
import React from 'react';
import { Education } from '../types';

const educationList: Education[] = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Unidades Tecnológicas de Santander (UTS)",
    year: "2025 - En curso (9° Semestre)"
  },
  {
    degree: "Tecnólogo en Desarrollo de Sistemas Informáticos",
    institution: "Unidades Tecnológicas de Santander (UTS)",
    year: "2024 - Finalizada"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Formación <span className="text-blue-400">Académica</span></h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationList.map((edu, index) => (
            <div key={index} className="p-8 glass-effect rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="text-sm font-bold text-blue-400 mb-2">{edu.year}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
              <p className="text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
