import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CaseStudy() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0c] relative overflow-hidden">
       {/* Background Noise & Lighting */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent pointer-events-none blur-[50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-4"
          >
            Recent Work
          </motion.h2>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-card rounded-[3rem] border border-white/10 bg-[#12121a]/80 backdrop-blur-2xl overflow-hidden relative group shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid lg:grid-cols-3">
             {/* Left - Context & Problem */}
             <div className="relative p-12 lg:p-16 lg:border-r border-white/5 flex flex-col justify-center">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                 
                 <div className="space-y-10 relative z-10">
                    <div>
                       <h3 className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
                         <Sparkles className="w-3 h-3" /> Service Business
                       </h3>
                       <p className="text-2xl font-bold tracking-tight text-white mb-3">The Challenge</p>
                       <p className="text-sm text-gray-400 font-medium leading-relaxed">
                         Had no structured website and a scattered online presence. Relying heavily on untracked messages.
                       </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                    <div>
                       <p className="text-2xl font-bold tracking-tight text-white mb-3">The Solution</p>
                       <p className="text-sm text-gray-400 font-medium leading-relaxed">
                         We built a clean website with proper architecture and an embedded lead system.
                       </p>
                    </div>

                    <motion.div 
                       whileHover={{ scale: 1.02 }}
                       className="p-6 rounded-2xl bg-gradient-to-tr from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 mt-8 relative overflow-hidden cursor-pointer"
                    >
                       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <p className="text-gray-300 font-medium text-xs mb-1 uppercase tracking-widest">The Result</p>
                       <p className="text-white font-semibold text-lg leading-snug">Started receiving consistent inquiries immediately.</p>
                    </motion.div>
                 </div>
             </div>

             {/* Right - Visual Before / After */}
             <div className="lg:col-span-2 relative bg-[#0a0a0c] p-8 lg:p-16 flex flex-col justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                <div className="grid md:grid-cols-2 gap-10 items-center h-full relative z-10">
                   
                   {/* Cyber Connection Arrow */}
                   <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black items-center justify-center border-2 border-white/5 shadow-[0_0_30px_rgba(0,0,0,1)]">
                      <motion.div 
                         animate={{ rotate: [0, 360] }}
                         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-blue opacity-50"
                      />
                      <div className="w-12 h-12 rounded-full bg-accent-blue border-2 border-[#12121a] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(29,78,216,0.8)] z-10 relative overflow-hidden">
                         <motion.div 
                            animate={{ x: [-20, 20] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                         >
                            <ArrowRight className="w-5 h-5 text-white" />
                         </motion.div>
                      </div>
                   </div>

                   {/* Before Visual */}
                   <motion.div className="flex flex-col gap-4 relative group" whileHover={{ scale: 1.02 }}>
                      <div className="flex items-center gap-3 w-max mx-auto px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                         <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">Before</span>
                      </div>
                      <div className="w-full aspect-[4/5] bg-[#12121a] rounded-2xl border border-white/5 opacity-60 grayscale flex flex-col p-6 text-center shadow-inner relative overflow-hidden">
                         <div className="w-full h-12 bg-white/5 rounded-lg mb-6 flex items-center justify-between px-4">
                            <div className="w-16 h-3 bg-white/10 rounded" />
                            <div className="w-6 h-6 bg-white/10 rounded-full" />
                         </div>
                         <div className="w-full h-32 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-col gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full border-2 border-red-500/20 text-red-500/50 flex flex-col items-center justify-center">!</div>
                            <span className="text-red-500/50 text-[10px] font-bold uppercase tracking-widest">Low Conversion</span>
                         </div>
                         <div className="w-full h-4 bg-white/5 rounded-md mb-3" />
                         <div className="w-3/4 mx-auto h-4 bg-white/5 rounded-md" />
                      </div>
                   </motion.div>

                   {/* After Visual */}
                   <motion.div className="flex flex-col gap-4 relative group" whileHover={{ scale: 1.05 }}>
                      <div className="absolute -inset-4 bg-accent-blue/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="flex items-center gap-3 w-max mx-auto px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                         <span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase">After</span>
                      </div>
                      
                      <div className="w-full aspect-[4/5] bg-[#0d0d14] rounded-2xl border border-accent-blue/30 shadow-[0_0_40px_rgba(29,78,216,0.15)] group-hover:shadow-[0_0_50px_rgba(29,78,216,0.3)] p-6 relative overflow-hidden transition-shadow duration-500">
                         {/* Scanning Laser */}
                         <div className="absolute top-0 bottom-0 w-[1px] bg-accent-blue/50 shadow-[0_0_10px_rgba(59,130,246,1)] z-20 opacity-0 group-hover:opacity-100" style={{ animation: 'scan-x 3s linear infinite' }} />

                         {/* Mockup Container */}
                         <div className="w-full h-full bg-[#12121a] rounded-xl border border-white/10 flex flex-col relative z-10 shadow-2xl">
                            <div className="h-8 border-b border-white/10 flex justify-end items-center px-4 bg-white/[0.02]">
                               <div className="w-2 h-2 bg-white/20 rounded-full" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col gap-4">
                               <div className="h-12 w-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg border border-accent-blue/20 flex flex-col justify-center px-4">
                                  <div className="w-20 h-2 bg-white/20 rounded" />
                               </div>
                               <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-4 flex flex-col gap-3 relative overflow-hidden">
                                  <div className="absolute right-0 top-0 w-16 h-16 bg-accent-cyan/10 blur-xl rounded-full" />
                                  <div className="h-3 w-full rounded bg-white/10" />
                                  <div className="h-3 w-4/5 rounded bg-white/10" />
                                  
                                  <motion.div 
                                     animate={{ scale: [1, 1.05, 1] }}
                                     transition={{ duration: 2, repeat: Infinity }}
                                     className="h-10 w-full rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-auto shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                                  >
                                     <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">High Conversions Captured</span>
                                  </motion.div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </motion.div>

                </div>
             </div>

          </div>
        </motion.div>

      </div>
       {/* Inject global scanner animation */}
       <style>{`
          @keyframes scan-x {
             0% { transform: translateX(-100%); }
             50% { transform: translateX(300px); }
             100% { transform: translateX(300px); opacity: 0; }
          }
       `}</style>
    </section>
  );
}
