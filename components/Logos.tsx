
import React from 'react';

const LogoWrapper: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
  <div 
    className="h-8 md:h-10 w-auto flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-all duration-500 px-8"
    title={name}
  >
    {children}
  </div>
);

const TextLogo = ({ text }: { text: string }) => (
  <span className="text-lg font-black tracking-tighter uppercase text-slate-900">{text}</span>
);

const Logos: React.FC = () => {
  const brands = [
    "ADP", "Avanti", "BambooHR", "Dayforce", "Employment Hero", 
    "Humi", "Knit", "QuickBooks", "Rippling", "Rise", "Sage", 
    "Wagepoint", "Wave", "Xero"
  ];

  const displayBrands = [...brands, ...brands];

  return (
    <div className="bg-white py-24 overflow-hidden select-none border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 text-center">
          Works seamlessly with your existing stack
        </p>
      </div>

      <div className="relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
          {displayBrands.map((brand, idx) => (
            <div key={`${brand}-${idx}`} className="flex-shrink-0">
              <LogoWrapper name={brand}>
                <TextLogo text={brand} />
              </LogoWrapper>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Logos;
