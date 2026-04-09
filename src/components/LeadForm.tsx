import React from "react";
import { motion } from "framer-motion";

export function LeadForm() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0c] border-y border-white/5 relative flex justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_0deg,transparent,rgba(29,78,216,0.05),transparent,rgba(168,85,247,0.05),transparent)] rounded-full blur-[80px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-screen" />
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="max-w-2xl w-full relative z-10 bg-[#12121a]/80 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
             Request Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Audit</span>
          </h2>
          <p className="text-gray-300 font-medium text-lg">Ready to scale? Fill out the form below and we'll analyze your current funnel.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="group relative">
             <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-accent-blue transition-colors">Full Name</label>
             <input 
               type="text" 
               placeholder="John Doe" 
               className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 focus:shadow-[0_0_30px_rgba(29,78,216,0.15)] transition-all group-hover:border-white/20"
             />
          </div>

          <div className="group relative">
             <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-accent-blue transition-colors">Phone Number</label>
             <input 
               type="tel" 
               placeholder="+1 (555) 000-0000" 
               className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 focus:shadow-[0_0_30px_rgba(29,78,216,0.15)] transition-all group-hover:border-white/20"
             />
          </div>

          <div className="group relative">
             <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-accent-blue transition-colors">Business Type</label>
             <select 
               className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 focus:shadow-[0_0_30px_rgba(29,78,216,0.15)] transition-all group-hover:border-white/20 appearance-none cursor-pointer"
             >
                <option value="" disabled selected className="text-gray-500">Select your industry</option>
                <option className="bg-[#12121a]">Architecture</option>
                <option className="bg-[#12121a]">Interior Design</option>
                <option className="bg-[#12121a]">Consulting</option>
                <option className="bg-[#12121a]">Other Service</option>
             </select>
          </div>

          <div className="group relative">
             <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block ml-1 group-focus-within:text-accent-blue transition-colors">Requirement</label>
             <textarea 
               placeholder="Tell us about your biggest bottleneck..." 
               rows={4}
               className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 focus:shadow-[0_0_30px_rgba(29,78,216,0.15)] transition-all group-hover:border-white/20 resize-none"
             />
          </div>

          <motion.button 
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="mt-6 group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border border-accent-blue/30 bg-accent-blue/10 px-8 py-6 font-semibold text-accent-blue transition-all hover:bg-accent-blue hover:text-white hover:shadow-[0_0_40px_rgba(29,78,216,0.4)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_2s_infinite]" />
            <span className="relative z-10 text-lg uppercase tracking-wider">Request Free Audit</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
