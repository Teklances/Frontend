import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-light relative py-16 lg:py-24 overflow-hidden bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: IMAGE WITH OVERLAY */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Main Image */}
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl skew-y-0 group">
             <img 
               src="/assets/about.png" 
               alt="Technical Command Node" 
               className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Curved Neon Overlay using SVG - DIAGONAL WAVE */}
             <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end pointer-events-none">
                {/* The Diagonal Wave SVG */}
                <svg
                  className="absolute inset-x-0 bottom-0 w-full h-[70%] fill-primary pointer-events-auto"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="none"
                >
                  <path d="M0,150 C180,150 320,380 450,500 L0,500 L0,150 Z" />
                </svg>

                <div className="relative z-20 text-black max-w-[200px] mb-4 pointer-events-none">
                   <div className="flex items-center gap-2 mb-3">
                      <Award size={20} className="text-black" strokeWidth={2.5} />
                      <span className="text-[8px] font-mono uppercase bg-black text-white px-2 py-0.5 rounded-sm tracking-widest flex items-center gap-1.5">
                         <span className="w-1 h-1 rounded-full bg-primary animate-pulse" /> Verified Node
                      </span>
                   </div>
                   <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter leading-[0.9]">
                      Elite Level<br />
                      Micro-Task<br />
                      Platform
                   </h3>
                </div>
             </div>
          </div>
          
          {/* Decorative Square behind image */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/2 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex flex-col"
        >
           {/* Section Header */}
           <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/60 font-mono">
                 // MISSION_OVERVIEW
              </p>
           </div>

           <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-black mb-8">
              Why you should<br />
              <span className="text-primary italic italic-font">choose TekLances</span>
            </h2>

           {/* Features List */}
           <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6 group">
                 <div className="flex-shrink-0 w-14 h-14 bg-primary flex items-center justify-center rounded shadow-[4px_4px_0px_black] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                    <img src="/assets/icon1.svg" alt="" className="w-10 h-10" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-black uppercase tracking-tighter text-black mb-1.5 leading-none">
                       Intelligent Talent Matching
                    </h4>
                    <p className="text-black/60 text-xs font-medium leading-relaxed max-w-sm">
                       AI-driven systems connect tasks with the most suitable specialists instantly.
                    </p>
                 </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 group">
                 <div className="flex-shrink-0 w-14 h-14 bg-primary flex items-center justify-center rounded shadow-[4px_4px_0px_black] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                    <img src="/assets/icon2.svg" alt="" className="w-10 h-10" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-black uppercase tracking-tighter text-black mb-1.5 leading-none">
                       Real-Time Execution Visibility
                    </h4>
                    <p className="text-black/60 text-xs font-medium leading-relaxed max-w-sm">
                       Track progress, performance, and timelines through a centralized live dashboard.
                    </p>
                 </div>
              </div>
              
              {/* Feature 3 (Optional extra for balance) */}
              <div className="flex gap-6 group">
                 <div className="flex-shrink-0 w-14 h-14 bg-primary flex items-center justify-center rounded shadow-[4px_4px_0px_black] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                    <img src="/assets/icon3.svg" alt="" className="w-10 h-10" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-black uppercase tracking-tighter text-black mb-2 leading-none">
                        Faster Task Completion
                    </h4>
                    <p className="text-black/60 text-sm font-medium leading-relaxed max-w-sm">
                       Eliminate delays with on-demand talent ready to execute tasks immediately.
                    </p>
                 </div>
              </div>
           </div>

        </motion.div>

        {/* Floating crosshair accents around the section */}
        <div className="absolute top-[20%] right-[5%] flex items-center justify-center w-8 h-8 opacity-20 pointer-events-none hidden lg:flex">
           <div className="absolute w-full h-[1px] bg-black" />
           <div className="absolute h-full w-[1px] bg-black" />
        </div>
        <div className="absolute bottom-[10%] left-[45%] flex items-center justify-center w-4 h-4 opacity-20 pointer-events-none hidden lg:flex">
           <div className="absolute w-full h-[1px] bg-black" />
           <div className="absolute h-full w-[1px] bg-black" />
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
