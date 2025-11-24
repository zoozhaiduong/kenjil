import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Showreel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Using a placeholder video for demonstration. In a real app, this would be the artist's actual reel file.
  // Since I cannot upload a file, I'll simulate the UI over a static image that plays a stock video on click.
  
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="showreel" className="w-full py-24 px-4 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            SHOWREEL <span className="text-zinc-600">2024</span>
          </h2>
          <div className="hidden md:block text-zinc-400 text-sm tracking-widest uppercase">
            Selected Works
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden group border border-zinc-800">
          {!isPlaying && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 transition-opacity duration-500 hover:bg-black/40">
              <button 
                onClick={handlePlayPause}
                className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transition-transform transform group-hover:scale-110 hover:bg-white hover:text-black text-white"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
          )}

          {/* Controls Overlay (Visible on hover or pause) */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 flex justify-between items-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <button onClick={handlePlayPause} className="text-white hover:text-zinc-300">
               {isPlaying ? <Pause /> : <Play className="fill-current"/>}
            </button>
            
            <div className="text-white font-mono text-xs tracking-widest">
              00:00 / 01:45
            </div>

            <button onClick={toggleMute} className="text-white hover:text-zinc-300">
              {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
          </div>

          {/* Actual Video Element */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted={isMuted}
            poster="https://picsum.photos/1920/1080" // Thumbnail
            onClick={handlePlayPause}
          >
            {/* Using a creative commons video for demo purposes */}
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Showreel;