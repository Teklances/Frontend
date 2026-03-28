import { motion } from "framer-motion";
import { Clock, Target, Users, AlertCircle, TrendingUp, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: Clock,
    problem: "Time-Consuming Hiring",
    solution: "Instant intelligence-powered matching reduces selection time from weeks to seconds",
    stat: "From 2-3 weeks → 4.2 seconds"
  },
  {
    icon: Target,
    problem: "Wrong Specialist Match",
    solution: "Deep NLP analysis understands project nuances and specialist capabilities perfectly",
    stat: "94.2% match accuracy"
  },
  {
    icon: Users,
    problem: "Scaling Bottlenecks",
    solution: "AI-driven system scales from 10 to 10,000 concurrent matches effortlessly",
    stat: "500+ concurrent matches"
  },
  {
    icon: AlertCircle,
    problem: "Quality Inconsistency",
    solution: "Continuous learning ensures every match improves over time",
    stat: "98.7% success rate"
  },
  {
    icon: TrendingUp,
    problem: "Limited Market Insights",
    solution: "Advanced analytics reveal talent market trends and specialist capabilities",
    stat: "Real-time market data"
  },
  {
    icon: Users,
    problem: "Poor Communication",
    solution: "Unified platform enables seamless collaboration from match to completion",
    stat: "100% transparency"
  }
];

const TekLanceXProblems = () => {
  return (
    <section id="teklancex-problems" className="section-light relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/60 font-mono">
              // THE CHALLENGES WE SOLVE
            </p>
          </div>

          <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-black mb-6 max-w-3xl">
            Why Talent Matching<br />
            <span className="text-primary italic italic-font">Struggles Today</span>
          </h2>

          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Traditional talent acquisition is slow, unreliable, and doesn't scale. TekLanceX addresses every pain point with intelligent automation.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="border border-black/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-primary/2 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <item.icon size={24} className="text-primary" strokeWidth={2} />
                  </div>
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-3">
                  {item.problem}
                </h3>

                <p className="text-black/60 text-sm leading-relaxed mb-4">
                  {item.solution}
                </p>

                <div className="pt-4 border-t border-black/10">
                  <div className="text-primary font-black text-sm">{item.stat}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-3">
            Transform Your Talent Acquisition
          </h3>
          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            TekLanceX combines cutting-edge AI models—NVIDIA Merlin for intelligent matching, NeMo for deep understanding, and RAPIDS for lightning-fast data processing—to create the world's most advanced talent recommendation platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TekLanceXProblems;
