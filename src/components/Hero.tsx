import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 bg-[#0a0a0c]">
      {/* High-End Glassmorphism Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div 
          className="absolute top-0 -left-1/4 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent-blue/30 via-transparent to-transparent" 
        />
        <div 
          className="absolute bottom-0 -right-1/4 w-full h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-purple/30 via-transparent to-transparent" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {/* Animated Pill */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl w-max shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
            </span>
            <span className="text-sm font-semibold text-gray-200">Trusted by architects and interior designers</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-white selection:bg-accent-blue/30">
            Websites that actually <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple animate-[gradient_8s_ease_infinite] bg-[length:200%_200%]">bring you clients,</span>
            <br /> <span className="text-gray-400 font-medium text-4xl md:text-6xl drop-shadow-sm">not just look good.</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-medium">
            We design and build high-converting websites for service businesses so your visitors turn into real inquiries not just views.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-accent-blue px-8 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(29,78,216,0.6)]">
              {/* Button sweep animation */}
              <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_2s_infinite]" />
              <span className="relative z-10 flex items-center">
                Book a call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a href="#work" className="group inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 font-bold text-white transition-all hover:bg-white/[0.08] hover:border-white/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer">
              <Play className="mr-3 w-5 h-5 text-accent-cyan group-hover:text-white transition-colors" />
              <span>View Work</span>
            </a>
          </div>
        </motion.div>

        {/* Floating Mockup Physics */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[600px] aspect-video rounded-2xl bg-[#16161e]/80 backdrop-blur-2xl border border-white/20 p-2 shadow-[0_0_80px_rgba(29,78,216,0.2)] group"
          >
             {/* Glow Behind Mockup */}
             <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
             <div className="relative z-10 h-full w-full rounded-xl overflow-hidden bg-[#0a0a0c]">
                {/* Browser bar */}
                <div className="w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                {/* Dashboard UI */}
                <div className="w-full h-[calc(100%-2rem)] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)] rounded-b-xl p-6 flex flex-col gap-4 relative">
                   
                   {/* Scanning Cyber-Line */}
                   <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                      className="absolute left-0 right-0 h-[1px] bg-accent-blue/50 shadow-[0_0_10px_rgba(59,130,246,1)] z-20 pointer-events-none opacity-50"
                   />

                   <div className="flex justify-between items-center mb-2">
                      <div className="h-6 w-32 bg-white/10 rounded-md overflow-hidden relative">
                         <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </div>
                      <div className="h-8 w-8 bg-accent-blue/50 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse" />
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                         <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/10 hover:border-accent-blue/50 transition-colors shadow-inner flex items-center justify-center">
                            <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="w-10 h-10 rounded-full bg-accent-blue/20" />
                         </div>
                      ))}
                   </div>
                   <div className="flex-1 bg-white/5 rounded-xl border border-white/10 mt-2 flex p-4 gap-4 items-center">
                      <div className="w-1/3 h-full bg-gradient-to-br from-accent-purple/20 to-transparent rounded-lg border border-accent-purple/20" />
                      <div className="w-2/3 flex flex-col gap-3">
                         <div className="h-4 w-full bg-white/10 rounded overflow-hidden relative">
                            <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }} className="h-full bg-accent-blue/40" />
                         </div>
                         <div className="h-4 w-3/4 bg-white/10 rounded" />
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
