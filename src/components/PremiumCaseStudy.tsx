import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PremiumCaseStudy = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0c] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-white/50 uppercase">
              Case Study
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-6">
            Miviz Architects
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            A structured portfolio designed to showcase projects clearly and drive client inquiries
          </p>
        </motion.div>

        {/* content split layout */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left Column Text Content */}
          <div className="w-full lg:w-5/12 flex flex-col gap-14">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">
                Overview
              </h3>
              <p className="text-white/90 font-light leading-relaxed text-lg">
                Miviz Architects had strong projects but no clear digital presence where potential clients could explore their work and take the next step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">
                Problem
              </h3>
              <p className="text-white/90 font-light leading-relaxed text-lg">
                Their work was scattered across different platforms, making it difficult for clients to understand their capabilities and reach out easily.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">
                Solution
              </h3>
              <p className="text-white/90 font-light leading-relaxed text-lg">
                Built a clean and structured website focused on showcasing projects in a clear format while guiding visitors toward making an inquiry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-5">
                Approach
              </h3>
              <ul className="flex flex-col gap-4 text-white/90 font-light text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/40" />
                  Clean and minimal layout
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/40" />
                  Strong visual hierarchy
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/40" />
                  Clear navigation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/40" />
                  Simple inquiry flow
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">
                Result
              </h3>
              <p className="text-white/90 font-light leading-relaxed text-lg mb-8">
                The final website presents their work in a professional and structured way, making it easier for potential clients to explore projects and take action.
              </p>
              
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                <p className="text-base md:text-lg text-white font-medium flex items-center gap-3">
                  👉 <span className="opacity-90">A simple structure that turns interest into action</span>
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

          </div>

          {/* Right Column Imagery container - sticky for nice scrolling effect */}
          <div className="w-full lg:w-7/12 relative lg:sticky lg:top-32" >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-white/[0.02] border border-white/10 p-2 md:p-4 shadow-[0_0_80px_rgba(255,255,255,0.03)] group"
            >
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop" 
                  alt="Miviz Architects Website Preview" 
                  className="w-full h-full object-cover origin-top transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.02]"
                />
                
                {/* subtle linear dark gradient over the image base to blend perfectly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 to-transparent mix-blend-multiply opacity-50" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
