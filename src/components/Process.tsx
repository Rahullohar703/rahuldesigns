import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Understand your business", glow: "from-blue-500", textGlow: "text-blue-400" },
    { num: "02", title: "Plan your structure", glow: "from-purple-500", textGlow: "text-purple-400" },
    { num: "03", title: "Design and build", glow: "from-pink-500", textGlow: "text-pink-400" },
    { num: "04", title: "Launch and optimize", glow: "from-emerald-500", textGlow: "text-emerald-400" }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#0a0a0c] relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-white"
          >
            Simple and effective process
          </motion.h2>
        </div>

        <div className="relative">
          {/* Horizontal Track Line Base */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-white/10 hidden md:block" />
          
          {/* Traveling Laser Line */}
          <motion.div 
             animate={{ x: ["-100%", "400%"] }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             className="absolute top-[4.5rem] left-0 w-1/4 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent hidden md:block shadow-[0_0_20px_rgba(6,182,212,1)] z-0 -translate-y-[1px]" 
          />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Node */}
                <div className="relative w-max mb-8">
                   <div className={`absolute inset-0 bg-gradient-to-tr ${step.glow} to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                   <div className="w-20 h-20 rounded-full bg-[#12121a] border-2 border-white/10 flex items-center justify-center text-2xl font-semibold text-gray-500 group-hover:border-white/30 group-hover:text-white transition-all duration-500 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,1)]">
                      {/* Inner Node Glow */}
                      <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors" />
                      <div className={`w-3 h-3 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-all`} />
                   </div>
                </div>

                <div className="glass-card border border-white/5 rounded-3xl p-8 w-full hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 group">
                  <span className={`text-sm font-bold ${step.textGlow} mb-3 block tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity`}>Step {step.num}</span>
                  <h3 className="text-xl font-bold text-gray-200 tracking-tight">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
