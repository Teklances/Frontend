import { motion } from "framer-motion";
import { Cpu, Database, Radio, Zap, Settings, Cloud } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    name: "NVIDIA Merlin",
    category: "Recommender Engine",
    description: "State-of-the-art deep learning framework engineered specifically for talent matching",
    capabilities: [
      "Learns from historical matching data",
      "Understands complex specialist profiles",
      "Predicts compatibility with accuracy",
      "Scales to handle millions of matches"
    ],
    highlight: "The Core Intelligence"
  },
  {
    icon: Zap,
    name: "NVIDIA NeMo",
    category: "Natural Language Processing",
    description: "Advanced LLM framework that deeply understands tasks and specialist descriptions",
    capabilities: [
      "Extracts key requirements from task text",
      "Analyzes specialist experience narratives",
      "Understands domain-specific terminology",
      "Maps skills to organizational needs"
    ],
    highlight: "The Understanding Layer"
  },
  {
    icon: Database,
    name: "NVIDIA RAPIDS",
    category: "Data Processing & Analytics",
    description: "GPU-accelerated analytics platform for processing massive datasets at speed",
    capabilities: [
      "Processes historical performance data",
      "Aggregates specialist metrics",
      "Generates real-time analytics",
      "Prepares training data for AI models"
    ],
    highlight: "The Data Engine"
  },
  {
    icon: Cloud,
    name: "NVIDIA Triton",
    category: "Model Deployment",
    description: "Unified inference server hosting all AI models for production reliability",
    capabilities: [
      "Serves recommendation models",
      "Hosts NLP models for text analysis",
      "Manages model versioning",
      "Ensures 24/7 availability"
    ],
    highlight: "The Production Backbone"
  }
];

const TekLanceXTechnology = () => {
  return (
    <section id="teklancex-technology" className="section-light relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
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
              // TECHNOLOGY FOUNDATION
            </p>
          </div>

          <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-black mb-6 max-w-3xl">
            Powered By<br />
            <span className="text-primary italic italic-font">Enterprise AI</span>
          </h2>

          <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-2xl">
            TekLanceX is built on industry-leading NVIDIA frameworks, combining the world's most advanced AI technologies into a seamless, production-ready talent matching platform.
          </p>
        </motion.div>

        {/* Technology Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group border border-black/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50" />

              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Cpu size={28} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-primary text-xs font-black uppercase tracking-wider mb-1">
                      {tech.highlight}
                    </div>
                    <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                      {tech.name}
                    </h3>
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b border-black/10">
                  <div className="text-black/40 text-xs font-mono uppercase tracking-widest mb-3">
                    {tech.category}
                  </div>
                  <p className="text-black/70 text-base leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {tech.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start gap-3 text-black/60 text-sm">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-4">
            Unified AI Pipeline
          </h3>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-black/70 text-base leading-relaxed mb-6">
              TekLanceX integrates four enterprise-grade NVIDIA technologies into a unified, production-ready system. Here's how they work together:
            </p>

            <div className="grid md:grid-cols-4 gap-4 text-left">
              {[
                { step: "1", label: "Understand", detail: "NeMo analyzes task requirements and specialist profiles" },
                { step: "2", label: "Prepare", detail: "RAPIDS processes historical data at GPU speeds" },
                { step: "3", label: "Match", detail: "Merlin recommends perfect talent-task combinations" },
                { step: "4", label: "Deploy", detail: "Triton serves all models for 24/7 reliability" }
              ].map((item, i) => (
                <div key={i} className="bg-white/50 rounded-lg p-4 border border-primary/20">
                  <div className="text-primary font-black text-xl mb-2">{item.step}</div>
                  <div className="font-black text-black text-sm uppercase tracking-tight mb-2">{item.label}</div>
                  <p className="text-black/60 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { metric: "4.2ms", label: "End-to-End Latency", desc: "From request to match recommendation" },
            { metric: "94.2%", label: "Intelligence Accuracy", desc: "Consistently high-quality matches" },
            { metric: "∞", label: "Scalability", desc: "Handles any volume of concurrent tasks" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left border-t md:border-t-0 md:border-l border-primary/20 pt-8 md:pt-0 md:pl-6">
              <div className="text-4xl font-black text-primary mb-2">{stat.metric}</div>
              <div className="text-black font-black uppercase text-sm tracking-tight mb-1">{stat.label}</div>
              <p className="text-black/60 text-sm">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TekLanceXTechnology;
