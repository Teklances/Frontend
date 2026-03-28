import { motion } from "framer-motion";
import { Star, TrendingUp, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

const results = [
  {
    metric: "94.2%",
    label: "Match Accuracy Rate",
    description: "AI-powered matching ensures the right specialist for every task",
    icon: CheckCircle2
  },
  {
    metric: "98.7%",
    label: "Project Success Rate",
    description: "High-quality matches lead to consistently successful project completion",
    icon: TrendingUp
  },
  {
    metric: "4.2s",
    label: "Average Match Time",
    description: "From task posting to specialist recommendation in milliseconds",
    icon: Star
  },
  {
    metric: "500+",
    label: "Concurrent Matches",
    description: "Scale your talent operations without platform limitations",
    icon: Users
  }
];

const testimonials = [
  {
    quote: "TekLanceX transformed how we handle talent acquisition. What used to take weeks now happens in seconds.",
    author: "CEO, Tech Startup",
    role: "Founder & CEO",
    company: "Growing Fintech Company"
  },
  {
    quote: "The accuracy of matches is incredible. We stopped wasting time interviewing mismatched candidates.",
    author: "HR Director",
    role: "Head of Talent",
    company: "Enterprise Software Company"
  },
  {
    quote: "Our specialist utilization rates increased by 45% after implementing TekLanceX.",
    author: "Operations Manager",
    role: "VP Operations",
    company: "Digital Services Firm"
  }
];

const TekLanceXResults = () => {
  return (
    <section id="teklancex-results" className="section-dark relative py-16 lg:py-24 overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

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
              <TrendingUp size={10} className="text-primary animate-pulse" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Real-World Impact</p>
          </div>

          <h2 className="font-heading text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white mb-6">
            Proven Results<br />
            <span className="text-primary italic italic-font">That Speak</span>
          </h2>

          <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl">
            Organizations worldwide trust TekLanceX to deliver measurable improvements in hiring efficiency, match quality, and talent utilization.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.01] p-6 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:to-white/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all mb-4">
                  <result.icon size={20} className="text-primary" strokeWidth={2} />
                </div>

                <div className="text-3xl font-black text-primary mb-2">{result.metric}</div>
                <h3 className="text-sm font-black text-white uppercase tracking-tight mb-3">
                  {result.label}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
            What Clients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-white/5 pt-4">
                  <div className="font-black text-white text-sm uppercase tracking-tight">
                    {testimonial.author}
                  </div>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-widest">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10 lg:p-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4">
            Ready to Transform Your Talent Operations?
          </h3>

          <p className="text-black/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Join organizations worldwide that are already using TekLanceX to make smarter, faster hiring decisions.
          </p>

          <motion.a
            href="https://app.teklances.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-black text-primary px-8 py-4 rounded-xl font-black uppercase text-sm tracking-wider hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all"
          >
            Launch TekLanceX Now
            <ArrowUpRight size={18} strokeWidth={3} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TekLanceXResults;
