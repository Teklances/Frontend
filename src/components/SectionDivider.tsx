import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="w-full py-8 lg:py-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative h-1 flex items-center justify-center">
        {/* The Base Terminal Line */}
        <div className="w-full h-[1px] bg-primary/10 relative bg-gradient-to-r from-transparent via-primary/30 to-transparent">
          
          {/* Main Integrated Glow Pulse (The 'Data Node' moving) */}
          <motion.div 
            animate={{ 
              left: ["-10%", "110%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 h-[2px] w-64 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2"
          />

          {/* Core Leading Edge (The bright part) */}
           <motion.div 
            animate={{ 
              left: ["-10%", "110%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0
            }}
            className="absolute top-0 h-[3px] w-12 bg-primary -translate-y-1/2 blur-[2px] shadow-[0_0_20px_rgba(var(--primary),1)]"
          />

          {/* Sub-pulses trailing behind/ahead */}
           {[...Array(3)].map((_, i) => (
             <motion.div 
                key={i}
                animate={{ 
                  left: ["-20%", "120%"],
                  opacity: [0, 0.4, 0.4, 0]
                }}
                transition={{ 
                  duration: 2.5 + i, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 0.8
                }}
                className="absolute top-0 h-[1px] w-16 bg-primary/40 -translate-y-1/2"
              />
           ))}

          {/* Vertical Tactical Ticks */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-10 pointer-events-none opacity-30">
             {[...Array(11)].map((_, i) => (
               <div key={i} className={`w-[1px] ${i % 5 === 0 ? 'h-4' : 'h-2'} bg-primary`} />
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
