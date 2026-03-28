import { motion } from "framer-motion";
import { Zap, Target, BarChart3, Users, Star, Activity, Code, Globe, Shield, Terminal, Search, Lock, Gauge, MoveRight, Radio, Scan, Network, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

// Animated Grid Background Component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 grid-bg animate-[grid-scroll_25s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"]
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
            className="absolute w-60 h-60 bg-primary/10 rounded-full blur-[100px]"
          />
        ))}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [typedCode, setTypedCode] = useState("");
  const fullCode = `POST /v1/deploy {
  "task": "M_102",
  "layer": "ELITE",
  "mode": "SYST_SYNC"
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, i));
      i = (i + 1) % (fullCode.length + 5);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="section-dark relative py-16 lg:py-24 overflow-hidden">
      <AnimatedGrid />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
              <Search size={10} className="text-primary animate-pulse" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Operational Precision Features</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
               Smart Execution Engine <br />
                <span className="text-primary italic italic-font">for Every Task </span>
              </h2>
            </div>

            <div className="max-w-sm lg:pl-10 lg:border-l border-white/10">
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
                A comprehensive command platform for global micro-task execution.
                Connect with vetted specialists instantly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* COMPACT BENTO GRID */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* Card 1: Talent Matching */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative rounded-[2.5rem] overflow-hidden group min-h-[380px] h-[380px] shadow-2xl border border-white/5"
          >
            <img
              src="/assets/features 1.png"
              alt="Talent Matching"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.8)] z-20 pointer-events-none opacity-0 group-hover:opacity-100" />
            <div className="absolute bottom-10 left-10 pr-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-sm bg-primary text-[7px] font-black text-black uppercase tracking-widest">Live_Matching</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-lg">
                Automated<br />
                Talent Matching
              </h3>
            </div>
          </motion.div>

          {/* Middle Column Features */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] p-1 lg:p-1.5 overflow-hidden group cursor-pointer h-[180px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 z-0 bg-transparent group-hover:bg-primary/5 transition-colors duration-500" />
              <div className="absolute inset-0 bg-black rounded-[2.5rem] z-10" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent z-10" />
              <div className="absolute inset-0 z-10 p-8 lg:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap size={16} className="text-primary fill-current shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">High_Frequency</span>
                    </div>
                    <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.4em]">Node_Execution: PENDING</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <MoveRight size={16} strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-4 relative">
                    Accelerate<br />
                    <span className="text-primary italic">Task Delivery</span>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} className="absolute -bottom-1 left-0 h-0.5 bg-primary/40" />
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 z-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "linear" }} className="absolute h-[1px] w-20 bg-primary left-0" style={{ top: 20 + i * 30 + "px" }} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass bg-black/90 rounded-[2.5rem] p-8 flex flex-col justify-between relative h-[180px] group border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {["/assets/t1.svg", "/assets/t2.svg", "/assets/t3.svg"].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 overflow-hidden outline outline-1 outline-white/20 shadow-lg">
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-primary fill-current animate-pulse" />
                    <span className="text-xl font-black text-white italic tracking-tighter tabular-nums">12K+</span>
                  </div>
                  <span className="text-[8px] font-black uppercase text-white/30 tracking-widest leading-none">Global Tasks Verified</span>
                </div>
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between text-[10px] font-black uppercase text-white tracking-widest leading-none">
                  <span className="text-primary font-mono">4.2ms Latency</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: "30%" }} whileInView={{ width: "85%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.6)] rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 relative rounded-[2.5rem] overflow-hidden group min-h-[380px] h-[380px] shadow-2xl border border-white/5"
          >
            <img src="/assets/features 2.png" alt="Micro-Task Protocol" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity">
              <div className="w-48 h-48 border border-primary rounded-full animate-ping" />
            </div>
            <div className="absolute bottom-10 left-10 pr-10">
              <div className="flex items-center gap-2 mb-2">
                <Lock size={10} className="text-primary" />
                <span className="text-[8px] font-mono text-primary uppercase font-black tracking-widest">Encrypted_Layer</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                Secure<br />
                Task Protocols
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass bg-black/60 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group border-white/10 flex flex-col justify-center min-h-[280px]"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center h-full relative z-10">
              <div className="flex flex-col justify-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Terminal size={20} className="text-primary animate-pulse" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-none">
                  Direct-Link<br />
                  API Execution
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed max-w-[240px]">Automate task posting through our REST endpoints.</p>
              </div>
              <div className="bg-[#050505] rounded-[1.2rem] p-5 font-mono text-[9px] border border-white/10 h-[160px] relative overflow-hidden group-hover:border-primary/40 transition-all">
                <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2"><span className="text-white/20 uppercase tracking-widest text-[7px] font-black underline decoration-primary/40">Console_Handshake</span></div>
                <div className="space-y-1">
                  <div className="text-primary font-black uppercase tracking-tighter">Initializing...</div>
                  <pre className="text-white/60 whitespace-pre overflow-hidden h-16">{typedCode}</pre>
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1 }} className="inline-block w-1.5 h-3 bg-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 6 HIGH-FIDELITY GLOBE: Global Node Mesh */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 bg-black rounded-[2.5rem] border border-white/5 p-8 lg:p-10 relative overflow-hidden group min-h-[280px] shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-6 items-center h-full relative z-10">
              {/* LEFT SIDE: Mission Data */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Cpu size={18} className="text-primary" />
                  </div>
                  <span className="text-[8px] font-mono text-primary/60 uppercase">Operational: BALANCED</span>
                </div>

                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-[0.9]">
                  Global<br />
                  Node Mesh
                </h3>

                <p className="text-white/40 text-[12px] font-medium leading-relaxed mb-6 max-w-[180px]">
                  Distributed network with multi-region redundancy.
                </p>

                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 px-2 py-1 bg-primary/10 rounded-lg border border-primary/20 w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[8px] font-black uppercase text-white tracking-widest">124 Nodes Online</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: ENHANCED PRO GLOBE HUD */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Outer Atmosphere Glow */}
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* SURROUNDING HUD RINGS (ENHANCED) */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                        className={`absolute border border-primary/${10 - i * 3} rounded-full`}
                        style={{
                          width: 140 + i * 30 + 'px',
                          height: 140 + i * 30 + 'px',
                          borderStyle: i === 1 ? 'dashed' : 'solid'
                        }}
                      />
                    ))}

                    {/* CORE ENHANCED GLOBE */}
                    <div className="relative group-hover:scale-110 transition-transform duration-700">
                      <Globe size={110} className="text-primary/30 stroke-[0.3]" />

                      {/* Pulsing Connection Nodes on Globe */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                          className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),1)]"
                          style={{
                            top: 30 + Math.random() * 40 + '%',
                            left: 20 + Math.random() * 60 + '%'
                          }}
                        />
                      ))}

                      {/* Curved Arcs (Lat/Long Lines) Decoration */}
                      <div className="absolute inset-0 border border-primary/20 rounded-full rotate-[15deg] scale-[0.85] skew-x-[20deg]" />
                      <div className="absolute inset-0 border border-primary/20 rounded-full rotate-[-15deg] scale-[0.85] skew-y-[20deg]" />
                    </div>
                  </motion.div>

                  {/* Tactical Digital Center Indicator */}
                  <div className="absolute bottom-6 z-20 flex flex-col items-center">
                    <div className="px-2 py-0.5 bg-black/80 border border-primary/30 rounded text-[7px] font-black font-mono text-primary tracking-widest shadow-2xl">
                      LOC_SYNC: ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
