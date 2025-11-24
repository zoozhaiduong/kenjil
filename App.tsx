import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white relative overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-bold text-xl tracking-tighter font-display">KENJIL</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <button onClick={() => scrollToSection('showreel')} className="hover:underline underline-offset-4">Showreel</button>
          <button onClick={() => scrollToSection('works')} className="hover:underline underline-offset-4">Works</button>
          <button onClick={() => scrollToSection('about')} className="hover:underline underline-offset-4">Profile</button>
        </div>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-sm border border-white/50 px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          HIRE ME
        </button>
      </nav>

      {/* Custom Cursor Glow Effect */}
      <div 
        className="cursor-glow hidden md:block"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      />

      <main className="relative z-10">
        <Hero onScrollToReel={() => scrollToSection('showreel')} />
        <Showreel />
        <Gallery />
        <About />
        <Contact />
      </main>

      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;