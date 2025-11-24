import React from 'react';
import { Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="w-full py-24 px-4 md:px-12 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-white/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
          LET'S CREATE <br className="md:hidden" /> TOGETHER
        </h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-xl mx-auto">
          Have a project in mind? I'm currently open for new opportunities. 
          Drop me a line and let's discuss how we can build something extraordinary.
        </p>

        <a 
          href="mailto:kenjil.art@email.com"
          className="inline-flex items-center px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors rounded-sm"
        >
          <Mail className="mr-3 w-5 h-5" />
          Get in Touch
        </a>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-sm border-t border-zinc-900 pt-8">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} KENJIL. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
              Instagram <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
              ArtStation <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
              LinkedIn <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;