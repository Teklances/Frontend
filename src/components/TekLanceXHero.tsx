import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Zap, LineChart } from "lucide-react";

const TekLanceXHero = () => {
  return (
    <section id="teklancex-hero" className="section-dark relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-b from-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Tactical Header Line */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-3 h-[1px] bg-white opacity-40" />
          <span className="text-[9px] font-medium tracking-tight text-white/30 uppercase">AI-Powered Talent Engine</span>
        </motion.div>

        {/* Main Headline */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center gap-8 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white uppercase"
          >
            The Intelligent<br />
            <span className="text-primary italic italic-font">Talent Matching Engine</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden xl:block text-right"
          >
            <div className="text-primary text-sm font-black uppercase tracking-wider mb-2">Powered By</div>
            <div className="text-white/60 text-xs font-mono">NVIDIA Merlin • NeMo • RAPIDS</div>
          </motion.div>
        </div>

        {/* Subheading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid lg:grid-cols-12 gap-8 items-start mb-12"
        >
          <div className="lg:col-span-7">
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium mb-8">
              TekLanceX revolutionizes how organizations connect with specialists. Our AI-powered recommendation engine analyzes task requirements and specialist profiles to deliver perfect matches in milliseconds, enabling teams to execute projects faster and with higher quality outcomes.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Match Accuracy", value: "94.2%" },
                { label: "Response Time", value: "4.2ms" },
                { label: "Success Rate", value: "98.7%" }
              ].map((metric, i) => (
                <div key={i} className="border-l border-primary/30 pl-4">
                  <div className="text-2xl font-black text-primary">{metric.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-mono">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={16} className="text-primary" />
                <span className="text-xs font-black uppercase tracking-wider text-primary">Ready to Transform</span>
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-4">Launch Your Recruitment</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Experience the future of talent matching. Deploy TekLanceX today and transform how your organization finds and engages specialists.
              </p>
              <motion.a
                href="https://app.teklances.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-black uppercase text-sm tracking-wider hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all"
              >
                Get Started Now
                <ArrowUpRight size={16} strokeWidth={3} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6 border-t border-white/5 pt-12"
        >
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              text: "Sub-millisecond matching powered by neural networks"
            },
            {
              icon: LineChart,
              title: "Data-Driven",
              text: "Learns from every match to continuously improve results"
            },
            {
              icon: Rocket,
              title: "Always Improving",
              text: "Constantly adapts to market trends and specialist growth"
            }
          ].map((feature, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <feature.icon size={20} className="text-primary" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm uppercase tracking-tight mb-1">{feature.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TekLanceXHero;
