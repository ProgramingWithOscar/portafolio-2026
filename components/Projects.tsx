
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Módulo de Facturación Electrónica",
    description: "Sistema integral para la generación y envío de documentos legales electrónicos ante entidades tributarias, manejando grandes volúmenes de datos.",
    tags: ["Laravel", "PHP", "SQL Server", "REST API"],
    role: "Full Stack Developer"
  },
  {
    title: "Automatización con IA & n8n",
    description: "Flujos de trabajo automatizados que integran modelos de IA para el procesamiento de información y notificaciones en tiempo real.",
    tags: ["n8n", "Make", "IA", "API Integration"],
    role: "Automation Lead"
  },
  {
    title: "Panel Administrativo Full Stack",
    description: "Plataforma de gestión empresarial con dashboards interactivos, control de inventario y autenticación segura.",
    tags: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
    role: "Full Stack Developer"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos <span className="text-blue-400">Destacados</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-effect rounded-3xl overflow-hidden card-hover group cursor-pointer">
              <div className="h-48 overflow-hidden bg-slate-800 relative">
                 <img src={`https://picsum.photos/seed/project${index}/600/400`} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">{project.role}</p>
                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-400 border border-blue-400/20 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
