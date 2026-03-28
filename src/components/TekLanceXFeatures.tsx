import { motion } from "framer-motion";
import { Brain, Zap, TrendingUp, Shield, BarChart3, Users, Database, Radio } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Matching",
    description: "Advanced neural networks analyze task requirements and specialist profiles to find perfect matches",
    details: ["Deep skill analysis", "Experience matching", "Personality fit scoring"]
  },
  {
    icon: Zap,
    title: "Ultra-Fast Processing",
    description: "Lightning-quick decision making powered by GPU acceleration and optimized algorithms",
    details: ["4.2ms latency", "Real-time recommendations", "Instant task assignment"]
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Every completed task improves the AI models for better future matches",
    details: ["Historical analysis", "Pattern recognition", "Performance optimization"]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Built-in verification systems ensure specialist compatibility and project success",
    details: ["Skill verification", "Background checks", "Quality scoring"]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards provide insights into talent trends and project performance",
    details: ["Real-time metrics", "Talent analytics", "ROI tracking"]
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Unified platform connects teams, specialists, and projects in one powerful ecosystem",
    details: ["Real-time communication", "Progress tracking", "Team management"]
  },
  {
    icon: Database,
    title: "Enterprise Data",
    description: "Leverage historical performance data to continuously train and improve matching models",
    details: ["Data aggregation", "Model training", "Performance history"]
  },
  {
    icon: Radio,
    title: "Always-On Availability",
    description: "24/7 availability ensures your team can find specialists whenever needed",
    details: ["Global coverage", "24/7 support", "Instant availability"]
  }
];

const TekLanceXFeatures = () => {
  return (
    <section id="teklancex-features" className="section-dark relative py-16 lg:py-24 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
              <Zap size={10} className="text-primary animate-pulse" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Cutting-Edge Capabilities</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-3xl">
              <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                Powerful Features<br />
                <span className="text-primary italic italic-font">Purpose-Built</span>
              </h2>
            </div>

            <div className="max-w-sm lg:pl-10 lg:border-l border-white/10">
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
                Every feature is engineered to deliver excellence. From matching to management, TekLanceX covers the entire talent acquisition lifecycle.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid - 2x4 Bento Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.01] p-8 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:to-white/5 transition-all duration-300 flex flex-col justify-between ${
                idx % 2 === 0 ? 'lg:col-span-2' : 'lg:col-span-2'
              }`}
            >
              {/* Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all mb-6">
                  <feature.icon size={24} className="text-primary" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium">
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TekLanceXFeatures;
