import { motion } from "framer-motion";
import { Quote, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const TestimonialsSection = () => (
  <section id="testimonials" className="section-light relative py-12 lg:py-16 overflow-hidden bg-white">
    {/* Global Background Grid */}
    <div className="grid-bg absolute inset-0 opacity-10" />
    
    <div className="container relative z-10 mx-auto px-6 max-w-7xl">
      {/* Header (Matching Features/UseCases style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 lg:mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
            <MessageSquare size={10} className="text-primary animate-pulse" />
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Operational Merit Logs</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-black">
              Voices  <br />
              <span className="text-primary italic italic-font">of Our Customers</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pl-10 lg:border-l border-black/10">
            <p className="text-black/40 text-sm md:text-base leading-relaxed font-medium">
              Global operators and tactical leads share their performance reports. Reliable data points for mission-critical collaboration.
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Stagger Testimonials Component */}
      <div className="relative -mx-6 md:mx-0">
         <StaggerTestimonials />
      </div>

      {/* Global Status Footer inside section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-6 gap-6">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <ShieldCheck size={14} className="text-primary/60" />
               <span className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Identity_Vetted</span>
            </div>
            <div className="flex items-center gap-2">
               <Zap size={14} className="text-primary/60" />
               <span className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">System_Verified</span>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
               <span className="text-[8px] font-mono text-black/20 uppercase">Global_Trust_Score</span>
               <span className="text-xl font-black text-primary italic tracking-tight uppercase tabular-nums">98.4/100</span>
            </div>
            <div className="h-10 w-[1px] bg-black/10" />
            <div className="w-12 h-12 rounded bg-primary/5 border border-primary/20 flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1] }} 
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-2 h-2 rounded-full bg-primary" 
               />
            </div>
         </div>
      </div>
    </div>

    {/* Decorative Perspective Gradients */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
  </section>
);

export default TestimonialsSection;
