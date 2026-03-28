import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Star, CheckCircle2, Search, Zap, Code, Shield, Globe, Cpu, Sparkles, Activity } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [logs, setLogs] = useState<string[]>([
    "[SIGNAL] SCANNING_TALENT_LAYER",
    "[TASK] NEW_REQUEST: API_DEBUG",
    "[STATUS] VELOCITY_PEAK at 4s",
    "[METRIC] UPTIME_VERIFIED: 99.99%"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "[MATCH] DEV_ID_102 matched to T_182",
        "[STATUS] VELOCITY_PEAK at 4.2s",
        "[SIGNAL] SCANNING_TALENT_LAYER",
        "[COMPLETION] TASK_SOLVED: 12.4s",
        "[AUTH] SECURE_HANDSHAKE: [A7-FF]",
        "[D-STREAM] SYNC_PROTO_OK"
      ];
      setLogs(prev => [...prev.slice(-4), messages[Math.floor(Math.random() * messages.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const taskRows = [
    [
      { name: "Mobile App Sprints", count: "142 Active" },
      { name: "Website Engine Patches", count: "89 Active" }
    ],
    [
      { name: "UX/UI Micro-Audits", count: "56 Active" },
      { name: "Graphic System Logic", count: "128 Active" },
      { name: "Digital Strategy Nodes", count: "94 Active" }
    ]
  ];

  return (
    <section id="home" className="section-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="/hero_network.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* Row 1: Tactical Header Line */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-3 h-[1px] bg-white opacity-40" />
          <span className="text-[9px] font-medium tracking-tight text-white/30 uppercase">On-Demand Specialist Engine</span>
        </motion.div>

        {/* Row 2: Headline Increased by 1 Unit & Rotating Badge */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center gap-8 mb-8 overflow-visible">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white uppercase"
          >
            On-Demand Tech Talent<br />
            <span className="text-primary italic italic-font">for Instant Execution</span>
          </motion.h1>

          {/* Rotating Badge on the far right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative hidden xl:flex items-center justify-center shrink-0 lg:ml-auto"
          >
            <div className="absolute -left-6 w-20 h-20 bg-primary rounded-full blur-[1px] opacity-100 shadow-[0_0_20px_rgba(var(--primary),0.4)]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="relative w-36 h-36 flex items-center justify-center border border-white/20 rounded-full bg-black/5"
            >
              <svg className="w-full h-full text-white/40 font-black uppercase text-[9px] tracking-[0.2em] fill-current">
                <path id="badgePath" d="M 18,72 A 54,54 0 0,1 126,72 A 54,54 0 0,1 18,72" fill="transparent" />
                <text>
                  <textPath href="#badgePath" startOffset="0%">DEPLOY SPECIALIST • POST TASK • SCALE FAST •</textPath>
                </text>
              </svg>
              <div className="absolute bg-white/10 backdrop-blur-xl text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border border-white/30 hover:bg-white/20 transition-all cursor-pointer">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Row 3: Reduced Niche-Specific Micro-Task Matrix */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          <motion.div className="lg:col-span-6 space-y-2">
            {taskRows.map((row, idx) => (
              <div key={idx} className="flex flex-wrap gap-2.5">
                {row.map((item, i) => (
                  <div key={i} className="flex flex-col group cursor-crosshair">
                    <div className="px-5 py-1.5 rounded-full border border-white/10 bg-black/40 text-[8px] font-black uppercase tracking-[0.05em] text-white/50 group-hover:text-primary group-hover:border-primary/40 transition-all flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary shadow-none group-hover:shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all" />
                      {item.name}
                    </div>
                    <span className="text-[6px] font-mono text-white/20 uppercase tracking-widest pl-7 mt-0.5 group-hover:text-primary/60 transition-colors">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          <div className="hidden lg:block lg:col-span-1 border-r border-white/15 h-10 mx-auto" />

          <motion.div className="lg:col-span-5">
            <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium text-justify">
              Submit technical tasks and get matched with the right specialists in real time. TekLances enables fast execution, live progress tracking, and seamless collaboration, helping businesses eliminate bottlenecks and improve productivity through a powerful task management platform.

            </p>
          </motion.div>
        </div>

        {/* Row 4: Media & Stats */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch border-t border-white/5 pt-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-9 relative rounded-[40px] overflow-hidden group h-[380px] min-h-[380px]"
          >
            <img src="/assets/hero.png" alt="3D Talent Network Cloud" className="w-full h-full object-cover transition-all duration-1000" />

            <div className="absolute bottom-10 left-10 hidden md:block">
              <div className="glass bg-black/80 p-3 rounded-lg border-white/10 font-mono text-[7px] min-w-[140px]">
                <div className="text-primary font-black mb-1.5 flex items-center gap-2">
                  <Activity size={10} className="animate-pulse" />
                  LIVE_TASK_MATCHING
                </div>
                {logs.map((log, i) => (
                  <div key={i} className="mb-0.5 text-white/30 truncate">{log}</div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary p-3 pr-7 rounded-[18px] flex items-center gap-4 shadow-2xl ring-4 ring-black/30 cursor-crosshair"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-4 border-black/20 bg-black/80 overflow-hidden outline outline-2 outline-black">
                      <img src={`https://i.pravatar.cc/100?img=${i + 44}`} alt="Specialist" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-4 border-black/20 bg-black flex items-center justify-center text-[9px] font-black text-primary outline outline-2 outline-black">+</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Star size={10} className="text-black fill-current" />
                    <span className="text-sm font-black text-black italic tracking-tighter leading-none">4.9 Star</span>
                  </div>
                  <span className="text-[8px] font-black uppercase text-black/50 tracking-[0.1em] whitespace-nowrap">Specialist Approval Rate</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-3 bg-primary rounded-[40px] p-8 lg:p-10 flex flex-col justify-center space-y-10 shadow-[0_30px_60px_rgba(var(--primary),0.2)] h-[380px]"
          >
            {[
              { label: "Tasks Completed", val: "12K+" },
              { label: "Match Speed", val: "4.2s" },
              { label: "Nodes Active", val: "500+" }
            ].map((stat, i) => (
              <div key={i} className="text-left border-b border-black/5 pb-5 last:border-0 last:pb-0">
                <div className="text-4xl lg:text-5xl font-black text-black leading-none mb-1.5 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.1em] text-black/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
