import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Offer() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0c] relative flex items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Intense Spinning Glowing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.8),transparent,rgba(168,85,247,0.8),transparent)] blur-[100px]"
         />
      </div>
      
      <div className="max-w-4xl w-full mx-auto relative group z-10 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative bg-[#12121a]/80 backdrop-blur-2xl border border-white/10 p-12 md:p-24 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden w-full flex flex-col items-center"
        >
          {/* Animated Mesh Grid inside Box */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
          
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-accent-blue animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-accent-cyan uppercase">Limited Time Opportunity</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-[1.1] z-10">
            Get a free <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-[gradient_4s_ease_infinite] bg-[length:200%_200%]">
              website audit
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-10 z-10 drop-shadow-sm">
            I will review your current website or online presence and show you exactly what is missing and how you can improve it to get more inquiries.
          </p>
          
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="group relative inline-flex h-16 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-white px-12 font-bold text-black transition-all shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] z-10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="text-lg relative flex items-center">
               Claim Free Audit Inside
               <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
