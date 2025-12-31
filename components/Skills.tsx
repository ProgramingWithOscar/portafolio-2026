
import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'PHP / Laravel', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Java / Spring Boot', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'JavaScript / TypeScript', category: 'Frontend' },
  { name: 'Tailwind / Bootstrap', category: 'Frontend' },
  { name: 'n8n / Make', category: 'IA & Automation' },
  { name: 'SQL Server / MySQL', category: 'Database' },
  { name: 'NoSQL', category: 'Database' },
  { name: 'Docker / Linux', category: 'Tools' },
  { name: 'Jenkins / CI/CD', category: 'Tools' },
  { name: 'Git / Scrum', category: 'Tools' },
];

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech <span className="text-blue-400">Stack</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="p-8 glass-effect rounded-3xl border border-white/5 hover:border-blue-400/30 transition-all group">
              <h3 className="text-xl font-bold mb-6 text-slate-200 group-hover:text-blue-400 transition-colors">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === category).map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm font-medium text-slate-400 border border-white/5 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
