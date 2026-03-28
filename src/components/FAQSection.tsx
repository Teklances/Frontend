import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, User, Terminal, ChevronRight, Zap } from "lucide-react";

const faqs = [
  { 
    id: "FAQ-01",
    q: "How does the task matching engine work?", 
    a: "Our AI analyses your task requirements — language, framework, complexity, urgency — and matches it with the highest-scoring available specialist in real time. Matching metrics are updated every 500ms." 
  },
  { 
    id: "FAQ-02",
    q: "Who are the specialists?", 
    a: "All specialists are pre-vetted engineers with verified portfolios, code assessments, and track records on the platform. We maintain a quality bar above 4.5 stars and utilize automated code review for every PR." 
  },
  { 
    id: "FAQ-03",
    q: "What's the pricing model?", 
    a: "You pay per task based on scope and complexity. No subscriptions, no commitments. Enterprise-grade volume pricing and custom SLAs are also available for large organizations." 
  },
  { 
    id: "FAQ-04",
    q: "What's the average task turnaround time?", 
    a: "Most micro-tasks are matched within seconds and completed in 2–6 hours depending on scope. Urgent tasks get priority matching and are expedited through our express execution protocol." 
  },
  { 
    id: "FAQ-05",
    q: "Can I integrate TekLances into my existing workflow?", 
    a: "Yes — we offer full-stack integrations with GitHub, Jira, Linear, Slack, and custom webhooks. Tasks can be auto-instantiated from your existing technical infrastructure." 
  },
];

interface ChatMessage {
  id: string;
  role: 'system' | 'user';
  content: string;
}

const FAQSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "system",
      content: "TekLances Intelligence Operational. \nAll knowledge nodes are online. Select a query to access the repository."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom smoothly
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleQuery = (faq: typeof faqs[0]) => {
    if (isTyping) return;

    // Add user question
    const userMsg: ChatMessage = {
      id: Date.now().toString() + '-usr',
      role: 'user',
      content: faq.q
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setIsTyping(false);
      const sysMsg: ChatMessage = {
        id: Date.now().toString() + '-sys',
        role: 'system',
        content: `[ACCESS GRANTED // QUERY: ${faq.id}]\n\n${faq.a}`
      };
      setMessages(prev => [...prev, sysMsg]);
    }, 800);
  };

  return (
    <section id="faq" className="section-dark relative py-20 lg:py-24 overflow-hidden bg-[#050505]">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* HEADER (LEFT SIDE) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sticky top-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                <BookOpen size={10} className="text-primary animate-pulse" />
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Intelligence_Terminal</p>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white">
               Everything You <br />
               <span className="text-primary italic italic-font">Need to Know</span>
            </h2>
            <p className="mt-6 text-white/30 text-[13px] leading-relaxed font-medium max-w-[340px] tracking-wide">
               Interface directly with our proprietary AI matching engine. Select a parameter node to query deployment protocols and technical guidelines.
            </p>
 
            {/* DOSSIER NODE CLUSTER (POWER ENHANCED VERSION) */}
            <div className="mt-12 space-y-5 max-w-md hidden md:block relative">
              {/* Dynamic Connecting Pulse Rail */}
              <div className="absolute -left-6 top-4 bottom-4 w-px bg-white/5 mx-auto">
                 <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent"
                 />
              </div>

              {[
                { val: "3.5K+", label: "Tasks_Completed", meta: "VERIFIED_OPS", id: "01", progress: 85, trend: [20, 40, 30, 60, 40, 80] },
                { val: "4.92", label: "Specialist_Avg", meta: "PEAK_VELOCITY", id: "02", progress: 98, trend: [50, 40, 60, 50, 80, 90] },
                { val: "24/7", label: "Engine_Uptime", meta: "SYNC_PROTO_v4", id: "03", progress: 100, trend: [100, 100, 100, 100, 100, 100] }
              ].map((node, idx) => (
                <motion.div 
                   key={node.id}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   whileHover={{ x: 12, backgroundColor: "rgba(106, 191, 0, 0.04)" }}
                   className="relative p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden group transition-all duration-500 shadow-2xl"
                >
                   {/* Background Scanning Sweep */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                   
                   {/* Corner Visual Brackets */}
                   <div className="absolute top-4 left-4 w-1.5 h-1.5 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />
                   <div className="absolute bottom-4 right-4 w-1.5 h-1.5 border-b-2 border-r-2 border-white/10 group-hover:border-white/30 transition-colors" />

                   <div className="relative z-10 flex flex-col gap-5">
                      {/* Top Row: Meta + Label */}
                      <div className="flex items-center justify-between">
                         <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1.5">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                               <span className="text-[7px] font-mono text-white/30 uppercase tracking-[0.4em] font-bold">{node.meta}</span>
                            </div>
                            <h4 className="text-white text-[13px] font-black uppercase tracking-widest leading-none">{node.label}</h4>
                         </div>
                         <div className="text-3xl font-black text-primary tracking-tighter leading-none">{node.val}</div>
                      </div>

                      {/* Bottom Row: Progress + Sparkline Visual */}
                      <div className="flex items-center gap-6">
                         {/* Mini Sparkline Mock */}
                         <div className="flex items-end gap-1 h-6 pt-1">
                            {node.trend.map((h, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                className="w-[3px] bg-primary/20 rounded-full"
                              />
                            ))}
                         </div>
                         
                         {/* Progress Gauge */}
                         <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between text-[6px] font-mono font-black text-white/20 uppercase tracking-widest">
                               <span>Utilization_Index</span>
                               <span className="text-primary/60">{node.progress}%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${node.progress}%` }}
                                  transition={{ delay: 0.5, duration: 1 }}
                                  className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.4)]"
                               />
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CHAT INTERFACE (RIGHT SIDE: Master OS Version) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col h-[600px] lg:h-[700px] bg-[#050505] border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] relative group"
          >
            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"/>
            
            {/* Master Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60 backdrop-blur-xl z-20">
               <div className="flex items-center gap-5">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500/30 border border-red-500/50" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                     <div className="w-2 h-2 rounded-full bg-green-500/30 border border-green-500/50" />
                  </div>
                  <div className="h-5 w-px bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Matching_OS_v4.2</span>
                    <span className="text-[6px] font-mono text-white/30 uppercase tracking-[0.4em] -mt-0.5">Terminal_ID: PR-X01</span>
                  </div>
               </div>
               
               <div className="hidden xl:flex items-center gap-6">
                  {[
                    { label: "CPU", val: "12%" },
                    { label: "MEM", val: "402MB" },
                    { label: "LAT", val: "4.2ms" }
                  ].map(stat => (
                    <div key={stat.label} className="flex flex-col items-end">
                       <span className="text-[6px] font-mono text-white/20 uppercase tracking-widest">{stat.label}</span>
                       <span className="text-[9px] font-black text-primary leading-none uppercase">{stat.val}</span>
                    </div>
                  ))}
               </div>

               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.6)]" />
                  <span className="text-[9px] font-mono text-primary font-black uppercase tracking-widest">LIVE</span>
               </div>
            </div>
  
            {/* Chat History Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth relative"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
               {/* Background Grid Accent */}
               <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[length:40px_40px]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)' }} />

               <AnimatePresence initial={false}>
                 {messages.map((msg) => (
                   <motion.div
                     key={msg.id}
                     initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20, scale: 0.98 }}
                     animate={{ opacity: 1, x: 0, scale: 1 }}
                     className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                   >
                     <div className={`flex gap-5 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Status Line Indicator */}
                        <div className={`w-0.5 h-full self-stretch rounded-full ${msg.role === 'system' ? 'bg-primary/40' : 'bg-white/10'}`} />

                        <div className="flex flex-col gap-2">
                           <div className={`flex items-center gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                              <span className={`text-[8px] font-mono font-black uppercase tracking-[0.3em] ${msg.role === 'user' ? 'text-white/40' : 'text-primary'}`}>
                                 {msg.role === 'user' ? '[ OPERATOR ]' : '[ SYS_ENGINE ]'}
                              </span>
                              <span className="text-[6px] font-mono text-white/10">09:15:32 AM</span>
                           </div>
                           
                           <div className={`p-5 rounded-sm text-sm leading-relaxed border ${
                             msg.role === 'user' 
                               ? 'bg-white/5 text-white/90 border-white/5 rounded-tr-none' 
                               : 'bg-primary/5 text-white/80 border-primary/20 rounded-tl-none whitespace-pre-line'
                           }`}>
                             {msg.content}
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 ))}
                 
                 {/* Typing Indicator Refined */}
                 {isTyping && (
                   <motion.div
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     className="flex w-full justify-start"
                   >
                     <div className="flex gap-5 max-w-[88%] h-20">
                        <div className="w-0.5 h-full self-stretch rounded-full bg-primary/20 animate-pulse" />
                        <div className="flex flex-col gap-3">
                           <span className="text-[8px] font-mono font-black uppercase tracking-[0.3em] text-primary/40">
                              [ SYS_ENGINE_PROCESS ]
                           </span>
                           <div className="flex items-center gap-2 group">
                              {[0, 1, 2].map(i => (
                                <motion.div 
                                  key={i}
                                  animate={{ opacity: [0.2, 1, 0.2] }}
                                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                                  className="w-1.5 h-1.5 bg-primary"
                                />
                              ))}
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
  
            {/* Input Selection Nodes (Parameters) */}
            <div className="relative border-t border-white/10 bg-black/80 px-8 py-8 z-20">
               <div className="absolute -top-3 left-8 bg-black border border-white/10 px-3 py-1 text-[8px] font-mono font-black uppercase tracking-[0.4em] text-white/40">
                  Select_Parameter_Node
               </div>
               
               <div className="flex flex-wrap gap-2.5">
                 {faqs.map((faq) => (
                   <button
                     key={faq.id}
                     onClick={() => handleQuery(faq)}
                     disabled={isTyping}
                     className="relative flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 rounded-sm text-[11px] font-bold text-white/50 hover:text-primary transition-all text-left disabled:opacity-30 disabled:cursor-not-allowed group/btn overflow-hidden"
                   >
                     {/* Corner Brackets Decorations */}
                     <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover/btn:border-primary/60" />
                     <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover/btn:border-primary/60" />
                     
                     <span className="text-[9px] font-mono text-primary/20 group-hover/btn:text-primary/60 font-black">
                        {faq.id}
                     </span>
                     <span className="uppercase tracking-wide">{faq.q}</span>
                   </button>
                 ))}
               </div>
               
               <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 opacity-40">
                 <div className="flex items-center gap-3 text-[7px] font-mono uppercase font-black text-white/30 tracking-widest">
                    <div className="w-1.5 h-px bg-primary" />
                    Secure_Node_Connection_Established
                 </div>
                 <div className="flex gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-0.5 h-3 bg-white/10" />
                    ))}
                 </div>
               </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
