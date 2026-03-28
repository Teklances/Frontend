import { motion } from "framer-motion";
import { Activity, Cpu, GitBranch, CheckCircle2, Timer, Radio, Terminal, Zap, Shield, Target } from "lucide-react";

const DashboardSection = () => (
  <section id="dashboard" className="section-dark relative py-20 lg:py-32 overflow-hidden bg-[#050505]">
    <div className="grid-bg absolute inset-0 opacity-40" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

    <div className="container relative z-10 mx-auto px-6 max-w-7xl">
      {/* HEADER SYSTEM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 lg:mb-20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
            <Radio size={10} className="text-primary animate-pulse" />
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Live_Intelligence_Feed</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              Command Your<br />
              <span className="text-primary italic italic-font">Micro-Task Economy</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pl-10 lg:border-l border-white/10">
            <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
               A high-fidelity tactical interface for tracking, matching, and executing mission-critical technical deliverables in real-time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* DASHBOARD MOCKUP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Outer Frame Accents */}
        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />

        <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden shadow-2xl overflow-x-auto lg:overflow-x-visible">
          {/* Dashboard Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0d0d0d]">
             <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="h-6 w-px bg-white/5 mx-2" />
                <div className="flex items-center gap-2">
                   <Terminal size={14} className="text-primary/60" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Command_Center_OS v1.02</span>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                   <span className="text-[9px] font-mono text-primary/80 uppercase">Node_Connected: US-EAST-1</span>
                </div>
                <div className="text-[9px] font-mono text-white/20 uppercase">SEC_LAT: 4.2ms</div>
             </div>
          </div>

          <div className="p-1 min-w-[800px] lg:min-w-0">
             <div className="grid lg:grid-cols-4 gap-1">
                
                {/* 1. TASK VITALITY (Active Tasks) */}
                <div className="bg-[#0f0f0f] p-6 flex flex-col gap-6">
                   <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Task_Vitality</h4>
                      <Activity size={12} className="text-primary/40" />
                   </div>
                   <div className="space-y-4">
                      {[
                        { label: "OAuth_Fix", state: "Active", val: 88, color: "primary" },
                        { label: "CSV_Export", state: "Pending", val: 12, color: "white/10" },
                        { label: "API_Layer", state: "Review", val: 100, color: "primary" }
                      ].map((task) => (
                        <div key={task.label} className="space-y-2">
                           <div className="flex justify-between text-[9px] font-mono uppercase">
                              <span className="text-white/60">{task.label}</span>
                              <span className="text-primary">{task.val}%</span>
                           </div>
                           <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${task.val}%` }}
                                className={`h-full bg-primary`} 
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* 2. MATCHING ENGINE CORE */}
                <div className="bg-[#0d0d0d] p-6 lg:col-span-2 flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
                   <div className="absolute top-4 left-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Engine_Telemetry</h4>
                   </div>
                   
                   {/* Scanning Circle UI */}
                   <div className="relative w-48 h-48 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-4 rounded-full border border-dashed border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-8 rounded-full border border-white/5" />
                      
                      <div className="relative z-10 flex flex-col items-center">
                         <GitBranch size={32} className="text-primary mb-4" />
                         <span className="text-3xl font-black text-white italic tracking-tighter tabular-nums">04</span>
                         <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">Active_Matches</span>
                      </div>

                      {/* Moving Data Points */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.8, 0.2]
                          }}
                          transition={{ 
                            duration: 5 + i, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="absolute w-2 h-2 bg-primary rounded-full blur-[1px]"
                          style={{ 
                            top: `${20 + i * 15}%`,
                            left: `${20 + i * 15}%`,
                            transformOrigin: '96px 96px' 
                          }}
                        />
                      ))}
                   </div>

                   <div className="grid grid-cols-2 gap-8 w-full">
                      <div className="flex flex-col items-center gap-1">
                         <span className="text-[14px] font-black text-white italic uppercase tracking-tighter tabular-nums text-center">4.2s</span>
                         <span className="text-[8px] font-black uppercase tracking-widest text-white/20 text-center">Avg_Sync_Time</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                         <span className="text-[14px] font-black text-white italic uppercase tracking-tighter tabular-nums text-center">99.8%</span>
                         <span className="text-[8px] font-black uppercase tracking-widest text-white/20 text-center">Match_Accuracy</span>
                      </div>
                   </div>
                </div>

                {/* 3. EFFICIENCY LOGS */}
                <div className="bg-[#0f0f0f] p-6 flex flex-col gap-6">
                   <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Efficiency_Logs</h4>
                      <Timer size={12} className="text-primary/40" />
                   </div>
                   <div className="space-y-4">
                      {[
                        { icon: CheckCircle2, label: "Executed", val: "1.2k" },
                        { icon: Zap, label: "Power", val: "Lo-Lat" },
                        { icon: Shield, label: "Secure", val: "100%" },
                        { icon: Target, label: "Quality", val: "4.9/5" }
                      ].map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg group/stat hover:border-primary/20 transition-all">
                           <div className="flex items-center gap-3">
                              <stat.icon size={12} className="text-primary/60 group-hover/stat:text-primary transition-colors" />
                              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{stat.label}</span>
                           </div>
                           <span className="text-[10px] font-black text-white italic tracking-tighter">{stat.val}</span>
                        </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
        </div>

        {/* Global Footer of Mockup */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <div className="flex items-center gap-8">
              <div className="flex gap-2">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className={`w-1 h-3 rounded-full ${i < 8 ? 'bg-primary' : 'bg-white/10'}`} />
                 ))}
              </div>
              <span className="text-[8px] font-mono text-white/60">SYSTEM_LOAD: OPTIMIZED</span>
           </div>
           <div className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em]">
              Authorized_Operator: ADMIN_LEVEL_01 // ACCESS_GRANTED
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
