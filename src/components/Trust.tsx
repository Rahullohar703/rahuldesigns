export function Trust() {
  const logos = [
    "VANTA",
    "MIVIZ",
    "KALAAAKAAR",
    "NEXUS",
    "AVEX",
    "NUDGE",
    "PULSE",
    "LUMINA"
  ];

  return (
    <section className="py-12 border-y border-glass-border bg-black/40 backdrop-blur-xl overflow-hidden relative">
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-10 relative z-20">
        <p className="text-sm text-gray-400 font-medium tracking-[0.2em] uppercase">
          Trusted by service businesses across multiple industries
        </p>
      </div>

      <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
         {/* Render logos seamlessly for infinite loop */}
         {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
           <div 
             key={i} 
             className="flex items-center justify-center w-[250px] shrink-0 mx-4 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity duration-300 cursor-default"
           >
             <span className="text-3xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 tracking-tight">
               {logo}
             </span>
           </div>
         ))}
      </div>
    </section>
  );
}
