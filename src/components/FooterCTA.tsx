export function FooterCTA() {
  return (
    <>
      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-[#0a0a0c] text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-purple/20 via-[#0a0a0c] to-[#0a0a0c]" />
         
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-tight tracking-tight mb-8">
              If your website is not bringing you clients you are <span className="text-red-500">leaving money on the table.</span>
            </h2>
            <p className="text-3xl text-gray-300 font-medium mb-12">Let's fix that.</p>
            
            <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-12 font-medium text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 shadow-xl">
               <span className="text-lg">Get Free Audit</span>
            </button>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-glass-border bg-[#050505] text-center relative z-20">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-3xl font-semibold tracking-tighter tracking-tight text-white mb-2">RahulDesigns.</span>
            <p className="text-gray-400 font-medium mb-10">Helping businesses turn visitors into clients.</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-gray-300 mb-12">
               <a href="#" className="hover:text-white transition-colors">info@rahuldesigns.com</a>
               <a href="#" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>

            <p className="text-xs text-gray-600">© {new Date().getFullYear()} RahulDesigns Inc. All Rights Reserved.</p>
         </div>
      </footer>
    </>
  );
}
