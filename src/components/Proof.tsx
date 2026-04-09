import React from "react";
import { motion } from "framer-motion";
import { CopyCheck, LineChart, Bell } from "lucide-react";

export function Proof() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-max text-sm text-gray-200 font-semibold mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <CopyCheck className="w-4 h-4 text-accent-cyan" />
            Proven Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-4 text-white">
            Real results <br/><span className="text-gray-500">not just design</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-medium mb-2">
            We have built websites and lead systems for service businesses where they started receiving consistent inquiries instead of relying only on referrals.
          </p>
          <motion.div 
             whileHover={{ x: 5 }}
             className="p-5 border-l-4 border-accent-blue bg-accent-blue/5 mt-4 rounded-r-xl transition-transform cursor-pointer"
          >
            <p className="text-lg font-bold text-gray-100 drop-shadow-sm">
              Every inquiry is captured and organized instantly.
            </p>
          </motion.div>
        </motion.div>

        {/* Right side floating complex mockups */}
        <div className="relative h-[550px] w-full mt-10 lg:mt-0 perspective-1000">
           {/* CRM Mockup */}
           <motion.div 
             initial={{ opacity: 0, x: 50, y: -20, rotateY: 10 }}
             whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 50 }}
             whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
             className="absolute right-0 top-10 w-[90%] md:w-[80%] rounded-[2rem] p-6 border border-white/10 bg-[#12121a]/90 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-10 hover:shadow-[0_40px_80px_rgba(29,78,216,0.15)] transition-all duration-500 cursor-[zoom-in]"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[2rem] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shadow-inner">
                   <LineChart className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 text-base">Lead CRM Pipeline</h3>
                  <p className="text-xs text-gray-400 font-medium">Active Opportunities</p>
                </div>
              </div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.2 + 0.5 }}
                     className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple opacity-80" />
                       <div className="space-y-2">
                          <div className="w-28 h-3 bg-gray-400/50 rounded-sm" />
                          <div className="w-16 h-2 bg-gray-500/50 rounded-sm" />
                       </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-lg font-bold text-[10px] uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                       New Lead
                    </div>
                  </motion.div>
                ))}
              </div>
           </motion.div>

           {/* Notification Pop-up Mockup */}
           <motion.div 
             initial={{ opacity: 0, x: -50, scale: 0.9 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
             animate={{ y: [0, -8, 0] }}
             className="absolute left-0 bottom-10 w-[85%] md:w-[75%] rounded-[1.5rem] p-6 border border-white/10 bg-[#16161e]/95 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:border-white/20 transition-colors"
             style={{ animationDuration: '6s', animationIterationCount: 'infinite' }}
           >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)] rounded-[1.5rem] pointer-events-none" />
              <div className="relative flex items-start gap-5">
                 <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.6)] relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/20 hover:bg-transparent transition-colors" />
                   <Bell className="w-7 h-7 text-white fill-white relative z-10" />
                 </div>
                 <div className="pt-1">
                   <h4 className="font-bold text-white text-lg mb-1 drop-shadow-md">New Inquiry Received</h4>
                   <p className="text-sm font-medium text-gray-300 mb-2">Project: Full Home Renovation</p>
                   <p className="text-xs font-bold text-accent-cyan uppercase tracking-wider">Budget: $50k+ • Architect needed</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
