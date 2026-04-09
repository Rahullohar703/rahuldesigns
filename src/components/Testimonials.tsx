import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    { text: "This helped us get more serious inquiries. Highly professional execution." },
    { text: "The website looks clean and professional. Our clients love the new layout." },
    { text: "Very smooth process and clear communication from start to finish." },
    { text: "This helped us get more serious inquiries. Highly professional execution." },
    { text: "The website looks clean and professional. Our clients love the new layout." }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0c] overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Client success</h2>
      </div>

      <div className="relative flex w-[150%] md:w-[120%] lg:w-full max-w-7xl mx-auto items-center overflow-hidden">
         {/* Edge Gradients */}
         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
         
         {/* Slider */}
         <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] py-4">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div 
                key={i} 
                className="w-[350px] glass-card border border-white/10 rounded-2xl p-8 shrink-0 hover:-translate-y-2 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 font-medium leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple" />
                   <div>
                     <p className="text-sm font-medium text-white">Service Business</p>
                     <p className="text-xs text-gray-400">Verified Client</p>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
