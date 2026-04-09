import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, LayoutTemplate, Network, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Website Design",
      desc: "Clean modern websites built to convert visitors into clients.",
      icon: MonitorSmartphone,
      glow: "from-blue-500/20",
      iconColor: "text-blue-400 group-hover:text-blue-300",
      borderGlow: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Conversion Focused Structure",
      desc: "We design layouts that clearly guide users to take action.",
      icon: LayoutTemplate,
      glow: "from-purple-500/20",
      iconColor: "text-purple-400 group-hover:text-purple-300",
      borderGlow: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
    },
    {
      title: "Lead Capture System",
      desc: "Frictionless forms and integrations that bring inquiries directly to you.",
      icon: Network,
      glow: "from-pink-500/20",
      iconColor: "text-pink-400 group-hover:text-pink-300",
      borderGlow: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]"
    },
    {
      title: "Website Optimization",
      desc: "Dramatically improve performance speed and user experience.",
      icon: Zap,
      glow: "from-emerald-500/20",
      iconColor: "text-emerald-400 group-hover:text-emerald-300",
      borderGlow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0c] border-y border-white/5 relative overflow-hidden">
      
      {/* Soft Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.05),_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-semibold tracking-tighter text-white"
          >
             What we do
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative glass-card p-8 rounded-[2rem] border border-white/10 bg-[#12121a]/80 backdrop-blur-xl transition-all duration-500 hover:bg-[#16161e] ${service.borderGlow} cursor-pointer overflow-hidden`}
            >
              {/* Massive Internal Reacting Glow */}
              <div className={`absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] ${service.glow} via-transparent to-transparent pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-white/10">
                  <service.icon className={`w-8 h-8 ${service.iconColor} transition-colors duration-300`} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
              </div>

              {/* Shine Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
