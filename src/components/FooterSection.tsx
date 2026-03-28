import { motion } from "framer-motion";
import { Terminal, Github, Twitter, Linkedin, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
    {/* Global Background Grid Atmosphere */}
    <div className="grid-bg absolute inset-0 opacity-10" />
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    
    {/* Corner Blueprint Brackets */}
    <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10 m-8 rounded-tl-3xl pointer-events-none" />
    <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/10 m-8 rounded-tr-3xl pointer-events-none" />

    <div className="container relative z-10 mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-6 gap-12 lg:gap-10 mb-20 lg:mb-24">
        
        {/* BRAND COL: TACTICAL IDENTITY */}
        <div className="lg:col-span-2 flex flex-col items-start gap-8">
           <div className="flex items-center gap-3">
              <img src="/assets/logo.svg" alt="TekLances" className="h-10 w-auto object-contain" />
           </div>
           
           <p className="text-white/40 text-sm leading-relaxed font-bold max-w-md opacity-80">
              Authorized platform for on-demand technical execution. Connecting elite specialized nodes with global mission-critical projects through secure terminal protocols.
           </p>

           {/* SYSTEM UPTIME LOG (SCROLLING SIMULATION) */}
           <div className="w-full max-w-sm bg-black/60 border border-white/5 rounded-xl p-4 overflow-hidden relative group/console ring-1 ring-white/5">
              <div className="absolute top-0 left-0 right-0 h-px bg-white/10 w-0 group-hover/console:w-full transition-all duration-700" />
              <div className="flex flex-col gap-1.5 font-mono text-[9px] text-white/20 select-none">
                 <div className="flex justify-between items-center text-primary/40">
                    <span>SYNCH_PROTOCOL_v4.2</span>
                    <span className="animate-pulse text-[10px]">●</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-white/10">10:04:58</span>
                    <span className="text-white/40 tracking-widest">AUTH_UPLINK_SUCCESS</span>
                 </div>
                 <div className="flex gap-2 animate-pulse">
                    <span className="text-white/10">10:05:00</span>
                    <span className="text-primary/60 tracking-widest">LISTENING_FOR_TASKS...</span>
                 </div>
              </div>
           </div>
        </div>

        {/* NAVIGATION NODES */}
        <div className="lg:col-span-1">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10 font-mono flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
             // Operational
           </h4>
           <ul className="space-y-4">
              {['Home', 'Talent', 'Tasks', 'Pricing', 'Security'].map((item) => (
                <li key={item}>
                   <a href={`#${item.toLowerCase()}`} className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-all flex items-center gap-2 group">
                      <div className="w-0 h-px bg-primary group-hover:w-3 transition-all" />
                      {item}
                   </a>
                </li>
              ))}
           </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className="lg:col-span-2">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10 font-mono flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
             // Network_Uplink
           </h4>
           <div className="grid grid-cols-2 gap-3 max-w-[280px]">
              {[
                { name: 'Github', icon: Github },
                { name: 'Twitter', icon: Twitter },
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'Email', icon: Mail }
              ].map((social) => (
                <div key={social.name} className="flex flex-col gap-1 items-start p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:border-primary/20 hover:bg-primary/[0.02] transition-all cursor-pointer group">
                   <social.icon size={14} className="text-white/30 group-hover:text-primary transition-colors mb-1" />
                   <span className="text-[8px] font-mono text-white/20 group-hover:text-white/60 transition-colors uppercase tracking-widest">{social.name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* STATUS TELEMETRY */}
        <div className="lg:col-span-1">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-10 font-mono flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
             // Pulse
           </h4>
           <div className="space-y-6">
              <div className="flex flex-col gap-2 p-4 bg-white/[0.02] border border-white/5 rounded-xl group/stat">
                 <div className="flex items-center justify-between font-mono">
                    <span className="text-[8px] text-white/40 uppercase">Uptime</span>
                    <span className="text-[8px] text-primary uppercase font-black">99.9%</span>
                 </div>
                 <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div animate={{ width: ["0%", "100%", "99%"] }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                 </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                 <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest">Protocol</span>
                 <span className="text-[10px] font-black text-white italic tracking-tighter uppercase whitespace-nowrap">Secure_Term_v8.9</span>
              </div>
           </div>
        </div>

      </div>

      {/* FOOTER TERMINAL BOTTOM BAR */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-12 border-t border-white/5 gap-10">
         <div className="flex items-center gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
            <span className="text-primary/40 font-black">© {new Date().getFullYear()} TEKLANCES_COMMAND_CENTER</span>
            <div className="hidden md:flex items-center gap-8">
               <a href="#" className="hover:text-primary transition-colors">Privacy_Protocol</a>
               <a href="#" className="hover:text-primary transition-colors">Terms_SOP</a>
               <a href="#" className="hover:text-primary transition-colors">CERT: 0x88219</a>
            </div>
         </div>
         
         <div className="flex items-center gap-4 py-2 px-6 bg-white/[0.02] border border-white/5 rounded-full ring-1 ring-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em] leading-none">Status: All_Nodes_Secure</span>
         </div>
      </div>
    </div>
  </footer>
);;

export default FooterSection;
