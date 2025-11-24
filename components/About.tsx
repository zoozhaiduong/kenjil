import React from 'react';

const SOFTWARE = ['Blender', 'Maya', 'ZBrush', 'Unreal Engine 5', 'Cinema 4D', 'Substance Painter'];
const SERVICES = ['3D Modeling', 'Texturing & Lighting', 'Character Design', 'Animation', 'Motion Graphics', 'Visual Effects'];

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 px-4 md:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Bio */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
            WHO IS <span className="text-zinc-600">KENJIL?</span>
          </h2>
          <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed">
            <p>
              I am a digital artist based in Vietnam, obsessed with the space where reality meets the surreal. With over 6 years of experience in the CGI industry, I specialize in creating immersive environments and highly detailed assets that tell a story without words.
            </p>
            <p>
              My work is driven by a desire to explore the unknown. Whether it's a futuristic cityscape or a microscopic organism, I approach every project with technical precision and artistic flair.
            </p>
            <p>
              Currently available for freelance commissions and collaborative projects worldwide.
            </p>
          </div>
          
          <div className="mt-12">
            <h4 className="text-white font-display uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2 inline-block">
              Software Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOFTWARE.map(sw => (
                <span key={sw} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 hover:text-white transition-colors cursor-default">
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Services & Stats */}
        <div className="flex flex-col justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-900/50 p-8 border border-zinc-800/50">
                 <span className="block text-4xl font-bold text-white mb-2">50+</span>
                 <span className="text-zinc-500 text-sm uppercase tracking-widest">Projects Completed</span>
              </div>
              <div className="bg-zinc-900/50 p-8 border border-zinc-800/50">
                 <span className="block text-4xl font-bold text-white mb-2">6</span>
                 <span className="text-zinc-500 text-sm uppercase tracking-widest">Years Experience</span>
              </div>
           </div>

           <h4 className="text-white font-display uppercase tracking-widest mb-6">
              Services
            </h4>
           <ul className="space-y-4">
             {SERVICES.map((service, index) => (
               <li key={index} className="flex items-center text-zinc-300 border-b border-zinc-900 pb-4">
                 <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                 {service}
               </li>
             ))}
           </ul>
        </div>

      </div>
    </section>
  );
};

export default About;