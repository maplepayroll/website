
import React from 'react';

// Helper component for consistent logo sizing and transition
const LogoWrapper: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
  <div 
    className="h-10 md:h-12 w-auto flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-4"
    title={name}
  >
    {children}
  </div>
);

// Inline SVGs for reliability - No external requests required
// Switched ADP to text-based SVG to guarantee character correctness
const AdpLogo = () => (
  <svg viewBox="0 0 110 40" className="h-full w-auto" fill="currentColor">
    <text 
      x="55" 
      y="32" 
      fontSize="38" 
      fontWeight="900" 
      textAnchor="middle" 
      fill="#D0271D" 
      fontFamily="Arial, Helvetica, sans-serif" 
      letterSpacing="-1"
    >
      ADP
    </text>
  </svg>
);

const XeroLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto" fill="currentColor">
    <circle cx="50" cy="50" r="45" fill="#0B3E5C" />
    <text x="50" y="65" fontSize="40" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial">xero</text>
  </svg>
);

const QuickBooksLogo = () => (
  <svg viewBox="0 0 200 50" className="h-full w-auto" fill="currentColor">
    <text x="0" y="38" fontSize="40" fontWeight="bold" fill="#2CA01C" fontFamily="Arial">qb</text>
    <text x="50" y="38" fontSize="30" fontWeight="bold" fill="#333" fontFamily="Arial">quickbooks</text>
  </svg>
);

const SageLogo = () => (
  <svg viewBox="0 0 100 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="30" fontSize="35" fontWeight="900" fill="#00DC7D" fontFamily="Arial">sage</text>
  </svg>
);

const WaveLogo = () => (
  <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="30" fontSize="35" fontWeight="bold" fill="#1C2D41" fontFamily="Arial">wave</text>
  </svg>
);

const BambooLogo = () => (
  <svg viewBox="0 0 180 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="30" fontSize="30" fontWeight="bold" fill="#50A82E" fontFamily="Arial">Bamboo</text>
    <text x="120" y="30" fontSize="30" fontWeight="normal" fill="#333" fontFamily="Arial">HR</text>
  </svg>
);

// Generic Styled Text Fallbacks for specific Canadian brands to ensure visibility
const TextLogo = ({ text, color }: { text: string; color: string }) => (
  <svg viewBox="0 0 200 50" className="h-full w-auto">
    <text x="100" y="35" fontSize="32" fontWeight="900" textAnchor="middle" fill={color} fontFamily="Inter, Arial, sans-serif" style={{ textTransform: 'uppercase', letterSpacing: '-1px' }}>
      {text}
    </text>
  </svg>
);

const Logos: React.FC = () => {
  // Using components instead of image URLs to guarantee rendering.
  // Sorted Alphabetically.
  const brands = [
    { name: "ADP", component: <AdpLogo /> },
    { name: "Avanti", component: <TextLogo text="AVANTI" color="#D32F2F" /> },
    { name: "BambooHR", component: <BambooLogo /> },
    { name: "Dayforce", component: <TextLogo text="DAYFORCE" color="#005EB8" /> },
    { name: "Employment Hero", component: <TextLogo text="EMP HERO" color="#E91E63" /> },
    { name: "Humi", component: <TextLogo text="HUMI" color="#1A1A1A" /> },
    { name: "Knit", component: <TextLogo text="KNIT" color="#673AB7" /> },
    { name: "QuickBooks", component: <QuickBooksLogo /> },
    { name: "Rippling", component: <TextLogo text="RIPPLING" color="#FFAE00" /> },
    { name: "Rise", component: <TextLogo text="RISE" color="#F4B400" /> },
    { name: "Sage", component: <SageLogo /> },
    { name: "Wagepoint", component: <TextLogo text="WAGEPOINT" color="#333" /> },
    { name: "Wave", component: <WaveLogo /> },
    { name: "Xero", component: <XeroLogo /> },
  ];

  // Triple the array for infinite scroll
  const displayBrands = [...brands, ...brands, ...brands];

  return (
    <div className="bg-white border-b border-slate-100 py-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-3">
          Deeply Integrated
        </p>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Works with your favorite tech stack</h2>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Carousel Track */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center py-4">
          {displayBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex-shrink-0">
              <LogoWrapper name={brand.name}>
                {brand.component}
              </LogoWrapper>
            </div>
          ))}
        </div>

        {/* Visual Masking Fades */}
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
