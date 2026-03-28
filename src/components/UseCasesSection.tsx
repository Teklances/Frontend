import { motion, AnimatePresence } from "framer-motion";
import { Box, Cpu, Gauge, Moon, Zap, Sparkles, Layout, Database, Terminal, Shield, Scan, BarChart3, Radio, Plus, Hexagon, Activity, ChevronRight, X, Minus, ArrowUpRight, SignalHigh, Globe, Command } from "lucide-react";
import React, { useState, useEffect } from "react";

const cases = [
  {
    icon: Box,
    title: "Bold Visuals & 3D",
    text: "High-impact graphics designed to dominate and command attention. We build immersive visual layers.",
    id: "U-01",
    tag: "RENDER_CORE",
    stat: "99.2% CLARITY"
  },
  {
    icon: Sparkles,
    title: "Dynamic Experience",
    text: "Fluid interactions that bridge user-interface gap. Life-like motion that feels alive.",
    id: "U-02",
    tag: "UX_ENGINE",
    stat: "0.2s RESPONSE"
  },
  {
    icon: Cpu,
    title: "AI-Driven Engines",
    text: "Task handling powered by our proprietary neural core. Deploy agents that learn and adapt.",
    id: "U-03",
    tag: "NEURAL_LINK",
    stat: "ML_STABLE_V4"
  },
  {
    icon: Gauge,
    title: "Ultra-Fast Speed",
    text: "Sub-ms latency for real-time operational excellence. Built for high-velocity global execution.",
    id: "U-04",
    tag: "ST_PROTOCOL",
    stat: "4.2ms LAT"
  }
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="usecases" className="section-dark relative py-20 lg:py-24 overflow-hidden bg-[#050505]">
      {/* GLOBAL BACKGROUND SYSTEM */}
      <div className="grid-bg absolute inset-0 opacity-100" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* MATCHED HEADER STYLE (From FeaturesSection) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
              <Terminal size={10} className="text-primary animate-pulse" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Mission Versatility Analysis</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                Versatile<br />
                <span className="text-primary italic italic-font">Operations Matrix</span>
              </h2>
            </div>

            <div className="max-w-sm lg:pl-10 lg:border-l border-white/10">
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
                Deploying mission-critical architecture for the next generation of global task execution. Every node is optimized for high-performance delivery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ENHANCED UNIQUE LAYOUT: THE 3D FOCUS CONSOLE */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: THE INTERACTIVE MISSION LIST (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {cases.map((item, i) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-[1.5rem] cursor-pointer group transition-all duration-700 border-l-2 ${active === i
                    ? "bg-white/5 border-primary shadow-[20px_0_40px_rgba(var(--primary),0.05)]"
                    : "bg-transparent border-transparent hover:border-white/10"
                  }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`text-2xl font-black font-mono tracking-tighter transition-all duration-500 ${active === i ? "text-primary italic translate-x-1" : "text-white/10 group-hover:text-white/30"
                    }`}>0{i + 1}</div>
                  <div className="flex flex-col">
                    <h4 className={`text-xl font-black uppercase tracking-tighter transition-colors ${active === i ? "text-white" : "text-white/40 group-hover:text-white/60"
                      }`}>
                      {item.title}
                    </h4>
                    <span className="text-[8px] font-mono text-primary/40 uppercase tracking-widest">{item.tag}</span>
                  </div>
                </div>

                {/* Active Indicator Pin */}
                {active === i && (
                  <motion.div layoutId="pin" className="absolute right-6 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),1)]" />
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT: THE HIGH-FIDELITY 3D DETAIL MODULE (7 Cols) */}
          <div className="lg:col-span-7 perspective-[2000px] h-[380px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.95, z: -100 }}
                animate={{ opacity: 1, rotateY: -8, rotateX: -5, scale: 1, z: 0 }}
                exit={{ opacity: 0, rotateY: -20, rotateX: -10, scale: 0.95, z: -100 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-gradient-to-br from-black via-[#080808] to-black rounded-[2.5rem] border border-white/10 p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] flex flex-col justify-between group overflow-hidden"
              >
                {/* HOLOGRAPHIC SCAN-LINE (Triggers on activation) */}
                <motion.div
                  initial={{ top: "-100%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-primary/10 to-transparent z-10 pointer-events-none"
                />

                {/* ROTATING BACKGROUND DATA-RING */}
                <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-1000">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Hexagon size={500} className="text-primary" strokeWidth={0.5} />
                  </motion.div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-sm bg-primary/10 border border-primary/20">
                          <Activity size={10} className="text-primary animate-pulse" />
                        </div>
                        <span className="text-[9px] font-black font-mono text-primary uppercase tracking-[0.5em]">MISSION_SYNC: OPTIMAL</span>
                      </div>
                      <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full bg-black/40">NODE_TRX_{cases[active].id}</div>
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
                      {cases[active].title}<br />
                      <span className="text-primary italic italic-font text-2xl font-medium lowercase">high-performance logic</span>
                    </h3>

                    <p className="text-white/40 text-[14px] font-medium leading-relaxed max-w-lg mb-6 border-l-2 border-primary/20 pl-6 italic">
                      "{cases[active].text}"
                    </p>
                  </div>

                  {/* TACTICAL METRIC FOOTER */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                    {[
                      { label: "LATENCY", val: cases[active].stat, icon: Radio },
                      { label: "REDUNDANCY", val: "L3_ENCRYPT", icon: Shield },
                      { label: "SYNC_LINK", val: "STABLE", icon: BarChart3 }
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-1.5 group/stat">
                        <div className="flex items-center gap-2">
                          <stat.icon size={10} className="text-primary/40 group-hover/stat:text-primary transition-colors" />
                          <span className="text-[7px] font-black uppercase text-white/20 tracking-widest">{stat.label}</span>
                        </div>
                        <span className="text-[10px] font-black text-white font-mono uppercase tracking-tight">{stat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INDUSTRIAL SCANNING BRACKETS */}
                <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-primary/10 group-hover:border-primary/40 transition-colors" />
                <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-primary/10 group-hover:border-primary/40 transition-colors" />

                {/* DECORATIVE LIVE-PULSE CORNER */}
                <div className="absolute bottom-6 left-6 flex items-center gap-1 opacity-20 group-hover:opacity-60 transition-opacity">
                  {[1, 2, 3, 4].map(j => <div key={j} className="w-[1px] h-3 bg-primary animate-pulse" style={{ animationDelay: `${j * 0.2}s` }} />)}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONSOLE STACK DEPTH */}
            <div className="absolute inset-x-4 inset-y-4 -z-10 bg-primary/2 rounded-[2.5rem] scale-95 blur-xl pointer-events-none" />
            <div className="absolute inset-x-10 inset-y-10 -z-20 bg-primary/1 rounded-[2.5rem] scale-[0.85] blur-2xl pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default UseCasesSection;
