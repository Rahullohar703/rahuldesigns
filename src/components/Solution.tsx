import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon, ShieldCheck, MailPlus, Flame } from "lucide-react";

export function Solution() {
  const flow = [
    { icon: ImageIcon, title: "Show work", color: "blue" },
    { icon: ShieldCheck, title: "Build trust", color: "purple" },
    { icon: MailPlus, title: "Capture lead", color: "pink" },
    { icon: Flame, title: "Convert", color: "emerald" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]";
      case "purple": return "bg-purple-500/10 border-purple-500/20 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]";
      case "pink": return "bg-pink-500/10 border-pink-500/20 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)]";
      case "emerald": return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]";
      default: return "";
    }
  };

  return (
    <section className="py-32 px-6 bg-[#0a0a0c] border-y border-white/5 relative overflow-hidden">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white leading-tight">
            We turn your website into a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple animate-pulse">client generating system</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">
            We combine clean design with smart structure and lead capture systems so your visitors trust you quickly and take action.
          </p>
        </motion.div>

        {/* Visual Engine */}
        <div className="relative pt-12 lg:pt-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
             {flow.map((step, i) => (
                <Fragment key={i}>
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.2 }}
                     whileHover={{ y: -10, scale: 1.05 }}
                     className="flex flex-col items-center gap-4 relative group cursor-pointer"
                  >
                     <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border backdrop-blur-xl transition-all duration-300 ${getColorClasses(step.color)} group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] relative overflow-hidden`}>
                        {/* Hover flare */}
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:animate-[sweep_2s_infinite]" />
                        <step.icon className="w-8 h-8 relative z-10" />
                     </div>
                     <span className="font-bold text-gray-200 tracking-tight">{step.title}</span>
                  </motion.div>

                  {/* Connectors */}
                  {i < flow.length - 1 && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: (i * 0.2) + 0.1 }}
                       className="hidden md:flex text-gray-600"
                     >
                       <motion.div
                         animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                       >
                         <ArrowRight className="w-6 h-6" />
                       </motion.div>
                     </motion.div>
                  )}
                </Fragment>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
