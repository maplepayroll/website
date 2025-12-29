
import React from 'react';

const Logos: React.FC = () => {
  const platforms = [
    { name: "ADP", domain: "adp.com" },
    { name: "Rippling", domain: "rippling.com" },
    { name: "Employment Hero", domain: "employmenthero.com" },
    { name: "Avanti", domain: "avanti.ca" },
    { name: "Rise", domain: "risepeople.com" },
    { name: "Knit", domain: "knitpeople.com" },
    { name: "Wave", domain: "waveapps.com" },
    { name: "QuickBooks", domain: "quickbooks.com" },
    { name: "Xero", domain: "xero.com" },
    { name: "Sage", domain: "sage.com" },
    { name: "BambooHR", domain: "bamboohr.com" },
    { name: "Wagepoint", domain: "wagepoint.com" },
    { name: "Dayforce", domain: "dayforce.com" },
    { name: "Humi", domain: "humi.ca" }
  ];

  // Triple the array for a long, gapless scrolling track
  const displayPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <div className="bg-white border-b border-slate-100 py-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-2">
          Deeply Integrated
        </p>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Works with your favorite tech stack</h2>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Carousel Track */}
        <div className="flex animate-marquee whitespace-nowrap gap-24 md:gap-40 items-center py-4">
          {displayPlatforms.map((p, idx) => (
            <div 
              key={`${p.name}-${idx}`} 
              className="flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 px-4"
              title={p.name}
            >
              <img 
                src={`https://logo.clearbit.com/${p.domain}`} 
                alt={`${p.name} logo`} 
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // If the logo fails to load, hide it and reveal the text label
                  target.style.display = 'none';
                  const next = target.nextElementSibling as HTMLElement;
                  if (next) next.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xl font-black text-slate-300 uppercase tracking-tighter">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Masking Fades for a Premium Professional Look */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Logos;
