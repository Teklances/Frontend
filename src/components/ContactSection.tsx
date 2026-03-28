import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-dark relative pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-[#050505]">
      {/* Hero Section Style Background Assets */}
      <div className="grid-bg absolute inset-0" />

      {/* Pulsing Gradient orbs exactly like the Hero Section */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[1.5rem] shadow-2xl flex flex-col md:flex-row bg-white">

          {/* Left Column: Side Title & Contact Info panel */}
          <div className="md:w-5/12 bg-primary p-8 md:p-10 flex flex-col justify-center relative overflow-hidden min-h-[500px]">
            {/* HUD Decorative Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-black/10 m-3 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-black/10 m-3 rounded-bl-2xl" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/10 border border-black/5 mb-4">
                <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Active Protocol</p>
              </div>

              <h2 className="font-heading text-3xl md:text-5xl font-black mb-10 leading-[0.95] uppercase tracking-tighter text-black">
                Connect with   <br />Our Experts
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Call Us Now", val1: "+1 900 123 4567" },
                  { icon: Mail, label: "Email Now", val1: "info@teklances.com" },
                  { icon: MapPin, label: "Visit Office", val1: "123, Your Street, Country" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
                      <item.icon className="text-primary w-5 h-5" />
                    </div>
                    <div className="text-black text-left">
                      <p className="text-[9px] font-black opacity-40 uppercase tracking-[0.2em] mb-0.5 leading-none">{item.label}</p>
                      <p className="text-lg font-black tracking-tighter leading-none">{item.val1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Technical Metadata */}
              <div className="mt-12 pt-6 border-t border-black/10 flex gap-8">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-40">System_Status</p>
                  <p className="text-[10px] font-bold text-black font-mono">ONLINE_PRIMARY</p>
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Response_ETA</p>
                  <p className="text-[10px] font-bold text-black font-mono">~12MIN</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: White Form Panel */}
          <div className="md:w-7/12 bg-white p-8 md:p-10 relative overflow-hidden flex items-center min-h-[500px]">

            {/* Professional Man Image - Centre/Top aligned for visibility */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.85, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute right-0 bottom-0 top-0 w-1/2 lg:w-[65%] hidden lg:block pointer-events-none z-0 overflow-hidden"
            >
              <img
                src="/assets/contact.png"
                alt="Professional Executive"
                className="h-full w-full object-cover object-center lg:object-[center_top] saturate-150"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            </motion.div>

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 w-full lg:w-3/5"
            >
              {submitted ? (
                <div className="text-center py-16 bg-primary/10 rounded-2xl border-2 border-primary overflow-hidden relative group">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 text-black">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-3 uppercase tracking-tighter">Transmission Confirmed</h3>
                  <p className="text-black/60 font-medium max-w-xs mx-auto mb-6 text-sm text-center">Protocol initiated. Expect contact shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[10px] font-black uppercase text-black/40 hover:text-black transition-colors underline underline-offset-4 decoration-primary decoration-2">Send another transmission</button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="mb-2">
                    <h3 className="text-xl font-black text-black tracking-tight mb-1 uppercase">Start Your Journey</h3>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.1em]">Operational Support Request</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        required
                        type="text"
                        placeholder="PROTOCOL_OWNER (Full Name)"
                        className="w-full bg-gray-50/80 border-gray-100 border-2 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all font-mono text-xs"
                      />
                      <input
                        required
                        type="email"
                        placeholder="SECURE_CHNL (Email Address)"
                        className="w-full bg-gray-50/80 border-gray-100 border-2 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all font-mono text-xs"
                      />
                    </div>

                    <input
                      required
                      type="text"
                      placeholder="DIRECT_LINE (Phone Optional)"
                      className="w-full bg-gray-50/80 border-gray-100 border-2 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all font-mono text-xs"
                    />

                    <textarea
                      required
                      placeholder="TASK_MANIFEST (Brief Description)"
                      rows={3}
                      className="w-full bg-gray-50/80 border-gray-100 border-2 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all font-mono text-xs resize-none"
                    />

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden bg-black text-white font-black py-4 rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] active:translate-y-0 flex items-center justify-center gap-3 mt-4"
                    >
                      <span className="relative z-10 uppercase tracking-widest text-[10px]">Execute Transmission</span>
                      <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                      <Send className="relative z-10 text-primary group-hover:text-black transition-colors w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                    </button>

                    <p className="text-[9px] text-gray-300 font-mono text-center tracking-tighter pt-4">
                      PROTOCOL: AES-256 // SECURE CHANNEL VERIFIED
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
