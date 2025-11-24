import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

interface HeroProps {
  onScrollToReel: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToReel }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Visuals - Simulating a dark 3D environment */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#09090b]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-[-5vh]">
        <p className="text-zinc-400 tracking-[0.5em] text-sm md:text-base mb-6 uppercase animate-pulse">
          Digital Artist &amp; Motion Designer
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mix-blend-difference">
          KENJIL
        </h1>
        <div className="h-1 w-24 bg-white mx-auto my-8"></div>
        <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
          Turning imagination into <span className="text-white font-semibold">digital reality</span>. 
          Specializing in hyper-realistic environments and abstract motion.
        </p>

        <button 
          onClick={onScrollToReel}
          className="mt-12 group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-transparent border border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
        >
          <span className="mr-3 uppercase tracking-widest text-sm">Watch Showreel</span>
          <Play className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;