import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'vanta',
    client: 'Vanta',
    tag: 'Creative Studio • In Development',
    description: 'Cinematic website designed to create a strong premium brand presence',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    link: 'https://vantastudio.vercel.app/',
    featured: true,
  },
  {
    id: 'miviz',
    client: 'Miviz Architects',
    tag: 'Service Business',
    description: 'Structured website to showcase projects clearly and drive client inquiries',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2564&auto=format&fit=crop',
    link: 'https://mivizarchitects.in',
    featured: false,
  },
  {
    id: 'kalaaakaar',
    client: 'Kalaaakaar Interiors',
    tag: 'Service Business',
    description: 'Designed to present interior work clearly and build client trust',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2564&auto=format&fit=crop',
    link: 'https://www.kalaaakaar.in/',
    featured: false,
  },
  {
    id: 'nexus',
    client: 'Nexus',
    tag: 'AI / Tech • Concept Project',
    description: 'Modern landing page focused on clear messaging and tech presentation',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2564&auto=format&fit=crop',
    link: 'https://nexus-seven-cyan.vercel.app/',
    featured: false,
  },
  {
    id: 'avex',
    client: 'Avex',
    tag: 'Digital Product • Currently Building',
    description: 'Minimal interface built to communicate product value with clarity',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2564&auto=format&fit=crop',
    link: 'https://avex-rho.vercel.app/',
    featured: false,
  }
];

export const SelectedWork = () => {
  return (
    <section id="work" className="relative py-32 bg-[#0a0a0c] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-sm font-medium tracking-widest text-white/60 uppercase">
              Selected work across real and conceptual projects
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-10">
            Selected Work
          </h2>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-4">
              Websites and digital experiences across real and conceptual projects
            </p>
            <p className="text-sm md:text-base text-white/60 flex items-center justify-center font-medium tracking-wide">
              👉 Designed to turn attention into action
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer block ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-[20px] bg-white/[0.02] border border-white/5 flex flex-col h-full transition-all duration-500 ease-out hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.07)]">
                
                {/* Image Container */}
                <div className={`relative overflow-hidden w-full ${project.featured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3] md:aspect-[4/3]'}`}>
                  {/* Dark gradient overlay - stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/40 to-transparent z-10 transition-opacity duration-[600ms] ease-[0.16,1,0.3,1] opacity-70 group-hover:opacity-90" />
                  
                  {/* Image itself with zoom effect */}
                  <img 
                    src={project.image} 
                    alt={project.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[0.16,1,0.3,1] scale-100 group-hover:scale-[1.04]"
                  />
                  
                  {/* Overlay text content */}
                  <div className={`absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end w-full h-full p-8 md:p-12 transition-transform duration-[600ms] ease-[0.16,1,0.3,1] translate-y-4 group-hover:translate-y-0`}>
                    
                    <div className="mt-auto">
                      <span className={`text-xs md:text-sm font-semibold tracking-wide text-white/80 mb-4 block transition-opacity duration-[600ms]`}>
                        {project.tag}
                      </span>
                      
                      <h3 className={`font-serif text-white font-medium mb-3 transition-colors duration-[600ms] group-hover:text-white ${project.featured ? 'text-4xl md:text-6xl bright drop-shadow-md' : 'text-3xl md:text-4xl'}`}>
                        {project.client}
                      </h3>
                      
                      <p className={`text-white/80 text-sm md:text-base font-light max-w-lg transition-opacity duration-[600ms] ${project.featured ? 'md:text-lg' : ''}`}>
                        {project.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="relative overflow-hidden mt-6 h-6 flex items-center">
                         <div className="flex items-center gap-2 text-white text-sm font-semibold opacity-0 translate-y-full transition-all duration-[600ms] ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:translate-y-0">
                          <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            View Project
                          </span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-[600ms] ease-[0.16,1,0.3,1] group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
};
