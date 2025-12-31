
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceSection from './components/Experience';
import Projects from './components/Projects';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Snowfall />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppFAB />
    </div>
  );
};

export default App;
