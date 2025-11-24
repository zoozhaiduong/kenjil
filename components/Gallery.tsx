import React, { useState } from 'react';
import { Project, PortfolioCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS: Project[] = [
  { id: '1', title: 'Cyber Samurai', category: PortfolioCategory.CHARACTER, imageUrl: 'https://picsum.photos/600/800?random=1' },
  { id: '2', title: 'Neon Cityscape', category: PortfolioCategory.ENVIRONMENT, imageUrl: 'https://picsum.photos/800/600?random=2' },
  { id: '3', title: 'Abstract Flow', category: PortfolioCategory.MOTION, imageUrl: 'https://picsum.photos/600/600?random=3' },
  { id: '4', title: 'Mechanical Wasp', category: PortfolioCategory.PRODUCT, imageUrl: 'https://picsum.photos/600/800?random=4' },
  { id: '5', title: 'Lost Ruins', category: PortfolioCategory.ENVIRONMENT, imageUrl: 'https://picsum.photos/800/500?random=5' },
  { id: '6', title: 'Sneaker Commercial', category: PortfolioCategory.PRODUCT, imageUrl: 'https://picsum.photos/600/600?random=6' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(PortfolioCategory.ALL);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = activeCategory === PortfolioCategory.ALL
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="w-full py-24 px-4 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            SELECTED <br/><span className="text-zinc-600">WORKS</span>
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4">
            {Object.values(PortfolioCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest px-3 py-1 border transition-colors duration-300 
                  ${activeCategory === cat 
                    ? 'border-white text-white' 
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer overflow-hidden bg-zinc-900 aspect-[4/5]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-display text-white">{project.title}</h3>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-zinc-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;