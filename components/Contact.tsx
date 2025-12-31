
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-effect rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
           {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades y colaboraciones. Hablemos sobre cómo puedo aportar valor a tu equipo o negocio.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <a href="mailto:oscarpoveda679@gmail.com" className="p-6 glass-effect rounded-2xl hover:bg-white/5 transition-all flex flex-col items-center group">
               <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <span className="text-sm font-medium">Email</span>
               <span className="text-xs text-slate-500 mt-1">oscarpoveda679@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/oscar-eduardo-poveda-lozada/" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl hover:bg-white/5 transition-all flex flex-col items-center group border border-blue-500/20">
               <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </div>
               <span className="text-sm font-medium">LinkedIn</span>
               <span className="text-xs text-slate-500 mt-1 truncate max-w-[150px]">oscar-eduardo-poveda-lozada</span>
            </a>
            <a href="https://wa.me/573228953349" target="_blank" rel="noopener noreferrer" className="p-6 glass-effect rounded-2xl hover:bg-white/5 transition-all flex flex-col items-center group border border-green-500/20">
               <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
               </div>
               <span className="text-sm font-medium">WhatsApp</span>
               <span className="text-xs text-slate-500 mt-1">+57 322 8953349</span>
            </a>
            <div className="p-6 glass-effect rounded-2xl flex flex-col items-center group">
               <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <span className="text-sm font-medium">Ubicación</span>
               <span className="text-xs text-slate-500 mt-1">Bucaramanga, Col</span>
            </div>
          </div>
          
          <a href="https://wa.me/573228953349" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-green-900/40">
            Hablemos por WhatsApp
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
