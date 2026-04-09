import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, MousePointerClick, DatabaseZap, MessageSquareWarning } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: ShieldAlert,
      text: "Your website looks good but does not convert",
      detail: "High bounce rates and zero inquiries out of hundreds of visitors."
    },
    {
      icon: MousePointerClick,
      text: "Visitors leave without taking action",
      detail: "No clear funnel directing users to contact you or purchase."
    },
    {
      icon: DatabaseZap,
      text: "No system to capture and track leads",
      detail: "You lack form integrations, CRMs, or analytics to track growth."
    },
    {
      icon: MessageSquareWarning,
      text: "You rely only on WhatsApp and referrals",
      detail: "Your sales pipeline dries up if your personal network stalls."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0c] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-4">
            Most websites fail to bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gray-500">actual clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((prob, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#12121a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-[#16161e] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.08)] hover:border-red-500/20"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  <prob.icon className="w-6 h-6 text-red-500/80 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                   <p className="text-xl font-medium text-gray-200 leading-snug mb-2">{prob.text}</p>
                   <p className="text-sm font-medium text-gray-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{prob.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
           <div className="inline-flex items-center px-6 py-3 rounded-full border border-red-500/10 bg-red-500/5 shadow-[0_0_30px_rgba(239,68,68,0.05)] backdrop-blur-md hover:bg-red-500/10 transition-colors">
              <span className="text-red-400 font-semibold">This leads to missed opportunities <strong className="text-red-300">every single day</strong></span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
