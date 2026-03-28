import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket, Star, Terminal, Activity, Radio, Shield, BarChart3, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "$19",
    period: "/month",
    id: "TRX-01",
    description: "For startups & small teams",
    features: [
      "Access to verified tech specialists",
      "Up to 20 task submissions per month",
      "Basic intelligent task matching",
      "Standard task tracking dashboard",
      "Email-based support",
      "Monthly performance summary reports",
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: "Pro",
    price: "$49",
    period: "/month",
    id: "TRX-02",
    description: "For scaling teams & SMEs",
    features: [
      "Priority access to top-rated specialists",
      "Up to 75 task submissions per month",
      "Advanced intelligent matching engine",
      "Real-time execution monitoring dashboard",
      "Team collaboration tools",
      "Priority email & chat support",
    ],
    popular: true,
  },
  {
    icon: Rocket,
    name: "Enterprise",
    price: "$99",
    period: "/month",
    id: "TRX-03",
    description: "For organizations with complex needs",
    features: [
      "Dedicated talent pool access",
      "Unlimited task submissions",
      "Custom intelligent matching configurations",
      "Advanced analytics & performance insights",
      "API access & integrations",
      "Dedicated account manager & 24/7 support",
    ],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-light relative py-16 lg:py-24 overflow-hidden bg-[#f8f9fa]">
    {/* LIGHT THEME BACKGROUND GRID */}
    <div className="grid-bg-light absolute inset-0 opacity-100" />

    {/* PRIMARY SOFT GLOW */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

    <div className="container relative z-10 mx-auto px-6 max-w-7xl">

      {/* COMPACT CENTERED HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 lg:mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
            <Terminal size={10} className="text-primary animate-pulse" />
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Commercial Parameters Sync</p>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-black mb-6 mx-auto max-w-none">
          Flexible  Plans 
 <span className="text-primary italic italic-font"> for  Scaling  Tasks</span>
        </h2>

        <p className="text-black/50 text-sm md:text-base leading-relaxed font-medium italic max-w-2xl mx-auto">
          Choose the plan that fits your execution workflow. Scale your mission as you grow.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map(({ icon: Icon, name, price, period, description, features, popular, id }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative p-8 lg:p-10 flex flex-col rounded-[2.5rem] bg-white/70 backdrop-blur-xl border-2 h-full group transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${popular ? "border-primary shadow-2xl scale-[1.02] z-10" : "border-black/5 hover:border-primary/20 z-0"
              }`}
          >
            {popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-black uppercase tracking-[0.1em] px-6 py-2 rounded-full shadow-lg z-20 whitespace-nowrap">
                MOST POPULAR // MISSION_CRITICAL
              </span>
            )}

            {/* CORNER HUD SCANNING BRACKETS */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-black/5 group-hover:border-primary/40 transition-colors" />
            <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-black/5 group-hover:border-primary/40 transition-colors" />

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 shadow-sm ${popular ? "bg-primary border-primary text-black scale-110" : "bg-black/5 border-black/5 group-hover:bg-primary group-hover:border-primary group-hover:text-black"
                }`}>
                <Icon size={26} className={popular ? "text-black" : "text-black group-hover:text-black"} />
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest border border-black/5 px-3 py-1 rounded-full">{id}</div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div key={dot} className={`w-1 h-1 rounded-full ${i >= 3 - dot ? 'bg-primary' : 'bg-black/10'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <h3 className="font-heading text-3xl font-black text-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">{name}</h3>
              <p className="text-black/50 text-[13px] font-medium leading-relaxed italic border-l-2 border-primary/20 pl-4">{description}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-1 relative z-10">
              <span className="font-heading text-5xl font-black text-black tracking-tighter">{price}</span>
              <span className="text-black/20 text-sm font-mono uppercase tracking-widest">{period}</span>
            </div>

            <div className="flex-1 space-y-4 mb-12 relative z-10">
              <div className="flex justify-between items-center mb-2 border-b border-black/5 pb-2">
                <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.2em] font-mono">Parameters_Analysis</span>
                <Activity size={10} className="text-primary/40 group-hover:text-primary transition-colors" />
              </div>
              <ul className="space-y-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-4 transform transition-transform group-hover:translate-x-1 duration-300">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-black/60 text-sm font-medium leading-[1.4]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10">
              <button
                className="group relative w-full overflow-hidden bg-black text-white font-black h-14 rounded-2xl transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:translate-y-0 flex items-center justify-center gap-3"
              >
                <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">Get Started</span>
                <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <ArrowUpRight size={16} className="relative z-10 text-primary group-hover:text-black transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
              </button>

              <div className="mt-4 flex justify-between items-center text-[8px] font-mono text-black/20 uppercase tracking-[0.3em]">
                <span>Authorized_Access_Only</span>
                <div className="flex gap-1">
                  <Radio size={8} className="text-primary animate-pulse" />
                  <span>Live_Sync</span>
                </div>
              </div>
            </div>

            {/* Architectural Base Accent */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/5 rounded-full overflow-hidden">
              <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
