import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import TekLanceXHero from "@/components/TekLanceXHero";
import TekLanceXProblems from "@/components/TekLanceXProblems";
import TekLanceXFeatures from "@/components/TekLanceXFeatures";
import TekLanceXTechnology from "@/components/TekLanceXTechnology";
import TekLanceXResults from "@/components/TekLanceXResults";
import SectionDivider from "@/components/SectionDivider";
import FooterSection from "@/components/FooterSection";

const ProductNav = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-4 left-1/2 z-[100] w-fit"
    >
      <div className="relative group p-0">
        <div className="absolute -inset-1 bg-primary/10 blur-xl opacity-20 pointer-events-none" />
        <div className="relative bg-[#050505] px-8 py-3 rounded-full flex items-center gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all">
          <div className="absolute inset-0 -m-[1px] rounded-full overflow-hidden pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ 
                background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #6abf00 340deg, transparent 360deg)" 
              }}
              className="absolute inset-[-200%] opacity-80"
            />
          </div>
          <div className="absolute inset-[1px] bg-[#050505] rounded-full z-[1]" />
          
          <div className="relative z-10 flex items-center gap-4">
            <h2 className="text-white font-black text-sm uppercase tracking-wider">TekLanceX</h2>
            <div className="w-px h-6 bg-white/10" />
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/70 hover:text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 px-3 py-1.5 rounded-full transition-all"
            >
              <ArrowLeft size={12} />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const TekLanceX = () => (
  <>
    <ParticleBackground />
    <ProductNav />
    <main>
      <TekLanceXHero />
      <SectionDivider />
      <TekLanceXProblems />
      <SectionDivider />
      <TekLanceXFeatures />
      <SectionDivider />
      <TekLanceXTechnology />
      <SectionDivider />
      <TekLanceXResults />
    </main>
    <FooterSection />
  </>
);

export default TekLanceX;
