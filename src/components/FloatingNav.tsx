import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Info, Zap, Briefcase, Monitor, Mail, Terminal, Cpu } from "lucide-react";

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: Info, label: "About" },
  { id: "features", icon: Zap, label: "Features" },
  { id: "usecases", icon: Briefcase, label: "Use Cases" },
  { id: "pricing", icon: Zap, label: "Pricing" },
  { id: "dashboard", icon: Monitor, label: "Dashboard" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-4 left-1/2 z-[100] w-fit max-w-[100vw]"
    >
      <div className="relative group p-0">

        {/* Subtle Outer Glow to lift the dock off the background */}
        <div className="absolute -inset-1 bg-primary/10 blur-xl opacity-20 pointer-events-none" />

        {/* Main Console Panel - SOLID THEME (Non-Glass) for Crystal Clear Visibility */}
        <div className="relative bg-[#050505] px-3 py-2 rounded-full flex items-center gap-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all">
          
          {/* Running Highlight Frame */}
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

          {/* Inner Mask (to keep background solid) */}
          <div className="absolute inset-[1px] bg-[#050505] rounded-full z-[1]" />
          
          <div className="relative z-10 flex items-center gap-1.5 w-full h-full">

          {/* Brand Logo Section */}
          <div className="flex items-center gap-2 pl-3 pr-4 border-r border-white/10 h-9 mr-1">
            <img src="/assets/logo.svg" alt="TekLances" className="h-7 w-auto object-contain" />
          </div>

          {sections.map(({ id, icon: Icon, label }) => (
            <div key={id} className="relative">
              <a
                href={`#${id}`}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-300 relative group/item ${active === id
                    ? "bg-primary text-black"
                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  setActive(id);
                }}
              >
                <div className="flex items-center justify-center shrink-0">
                  <Icon
                    size={14}
                    strokeWidth={active === id ? 3 : 2}
                    className="transition-all duration-300"
                  />
                </div>

                {/* Clear White Text on Solid dark background */}
                <span className={`text-[10px] font-black uppercase tracking-[0.1em] whitespace-nowrap leading-none transition-all duration-200 ${active === id ? "opacity-100" : "opacity-90 active:opacity-100"
                  }`}>
                  {label}
                </span>

                {/* Tactical Active indicator dot */}
                {active === id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-black rounded-full"
                  />
                )}
              </a>
            </div>
          ))}

          {/* Vertical Tactical Divider */}
          <div className="w-px h-7 bg-white/10 mx-1.5 shrink-0" />

          {/* Terminal Quick-Action Hub */}
          <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black hover:bg-white/5 border border-white/5 group/btn transition-all text-gray-500 hover:text-primary shrink-0">
            <Terminal size={15} />
            <span className="text-[10px] font-black uppercase tracking-[0.1em]">Terminal</span>
          </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
