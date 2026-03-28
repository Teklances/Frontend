import { motion } from "framer-motion";
import { Cpu, Send, Rocket, Radio, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-dark relative pt-10 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-[#050505]">
      {/* HUD Background Architecture */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/2 rounded-full blur-[220px] pointer-events-none" />
      
      {/* Ambient Scanning Light Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent skew-x-12"
         />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
         
         {/* THE TEKLANCES CONSOLE STRIP */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full bg-white/[0.01] border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
         >
            {/* Running Border Highlight */}
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-0 left-0 right-0 h-px bg-white/5 overflow-hidden">
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                    className="absolute top-0 w-64 h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" 
                  />
               </div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-[0.03]" />
            
            <div className="flex flex-col lg:flex-row items-stretch min-h-[160px]">
               
               {/* LEFT UNIT: TALENT PIPELINE (NEWSLETTER) */}
               <div className="lg:w-4/12 p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative group/unit px-10">
                  <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover/unit:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10 flex flex-col gap-4">
                     <div className="flex items-center gap-2">
                        <div className="px-1.5 py-0.5 border border-primary/20 rounded-sm bg-primary/5 text-[7px] font-mono text-primary font-black tracking-widest uppercase">
                           Talent_Feed
                        </div>
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                     </div>
                     
                     <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white leading-none">JOIN THE TALENT NETWORK</h3>

                     <div className="relative max-w-sm">
                        <input 
                           type="email" 
                           placeholder="EMAIL_TALENT_UPLINK" 
                           className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white text-[10px] font-mono placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all uppercase tracking-[0.2em] pr-16"
                        />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-primary text-black font-black uppercase text-[9px] tracking-widest rounded-md hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-md">
                           Sync
                        </button>
                     </div>
                  </div>
               </div>

               {/* MIDDLE UNIT: GEOSPATIAL NODE (GOOGLE MAP EMBED) */}
               <div className="lg:w-3/12 min-h-[160px] relative overflow-hidden group/map border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="absolute inset-0 z-0 grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-700">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.565457497746!2d74.3411!3d31.4707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzE0LjUiTiA3NMKwMjAnMjcuOSJF!5e0!3m2!1sen!2s!4v1234567890" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                     />
                  </div>
                  
                  {/* Map HUD Overlays */}
                  <div className="absolute inset-0 pointer-events-none z-10 border border-white/5">
                     <div className="absolute top-2 left-2 px-2 py-0.5 border border-primary/40 rounded-sm bg-black/60 text-[6px] font-mono text-primary font-black tracking-widest uppercase">
                        Secure_Location_Node: TRK-01
                     </div>
                     <div className="absolute bottom-2 right-2 flex gap-1 items-center opacity-40">
                        <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
                        <span className="text-[6px] font-mono text-white tracking-[0.2em] font-black">LAT: 31.4707 / LON: 74.3411</span>
                     </div>
                  </div>
                  
                  {/* Crosshair Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                     <div className="w-8 h-[1px] bg-primary" />
                     <div className="h-8 w-[1px] bg-primary" />
                  </div>
               </div>

               {/* RIGHT UNIT: TASK DEPLOYMENT (CTA) */}
               <div className="lg:w-5/12 p-8 lg:p-10 flex flex-col justify-center items-center lg:items-start relative group/btn-node hover:bg-primary/[0.01] transition-colors overflow-hidden px-8">
                  <div className="text-left mb-5 hidden lg:block w-full">
                     <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] font-black mb-1">Scale_Technical_Execution</p>
                     <h4 className="text-5xl font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap overflow-visible">Ready To Post?</h4>
                  </div>
                  
                  <button className="group relative w-full lg:w-fit overflow-hidden bg-primary text-black font-black py-3.5 px-12 rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(var(--primary),0.3)] active:translate-y-0 flex items-center justify-center gap-4">
                    <span className="relative z-10 uppercase tracking-[0.2em] text-[12px] font-heading font-black">Post A Task</span>
                    <Rocket size={18} className="relative z-10 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  </button>
               </div>

            </div>
         </motion.div>

         {/* Bottom Extended HUD Analytics (TekLances Specific) */}
         <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 opacity-30 text-[6px] font-mono font-black uppercase tracking-[0.3em] hidden lg:grid">
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
               <div className="w-1 h-1 rounded-full bg-primary" />
               <p>Match_Engine: ACTIVE</p>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
               <div className="w-1 h-1 rounded-full bg-primary" />
               <p>Talent_Nodes: 4,281+</p>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
               <div className="w-1 h-1 rounded-full bg-primary" />
               <p>Task_Uptime: 100%</p>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
               <div className="w-1 h-1 rounded-full bg-primary" />
               <p>Efficiency_Index: 9.8</p>
            </div>
         </div>

      </div>
    </section>
  );
};

export default CTASection;
