import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import { BookOpen, Terminal, ChevronRight, ShieldCheck } from 'lucide-react';

interface FAQ {
  id: string;
  q: string;
  a: string;
}

interface ComponentProps {
  faqs: FAQ[];
}

export const FAQFlipBook = ({ faqs }: ComponentProps) => {
  const book = useRef<any>(null);
  
  // Handling hydration mismatch for media queries
  const [mounted, setMounted] = useState(false);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFlip = (pageNum: number) => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flip(pageNum);
      // Removed flipNext(false) because it's not a standard pageflip method usually needed here
    }
  };

  if (!mounted) return <div className="animate-pulse w-[300px] h-[450px] bg-black/50 rounded-lg" />;

  const smallerDevice = !isSmallScreen;

  return (
    <div className="w-full flex justify-center items-center py-10 relative z-20 perspective-1000">
      <HTMLFlipBook
        ref={book}
        width={350}
        height={500}
        showCover={true}
        usePortrait={smallerDevice}
        onFlip={(e: any) => console.log('Current page: ' + e.data)}
        className="book-container shadow-2xl"
        style={{ margin: "0 auto" }}
        startPage={0}
        size="fixed"
        minWidth={300}
        maxWidth={400}
        minHeight={400}
        maxHeight={600}
        drawShadow={true}
        flippingTime={1000}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        clickEventForward={true}
      >
        {/* PAGE 0: COVER */}
        <div className="relative bg-[#0d0d0d] border-2 border-primary/20 rounded-r-2xl p-8 flex flex-col items-center justify-between shadow-[inset_-10px_0_20px_rgba(0,0,0,0.5)] overflow-hidden cursor-grab">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          
          <div className="flex flex-col items-center mt-10 relative z-10 w-full">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              <BookOpen size={28} className="text-primary" />
            </div>
            <h1 className="text-3xl font-heading font-black text-center text-white uppercase tracking-tighter leading-tight">
              Intelligence<br />
              <span className="text-primary italic">Repository</span>
            </h1>
          </div>

          <div className="w-full relative z-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
            <p className="text-[10px] font-mono text-center uppercase tracking-widest text-white/40">
              TekLances Command Center
              <br />
              Vol. 01 — Protocol Directives
            </p>
          </div>
          
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        {/* PAGE 1: INDEX OVERVIEW */}
        <div className="w-full h-full flex flex-col bg-[#111] border border-white/10 box-border text-white relative shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)] border-l-black">
          <div className="page-front text-left text-[9px] font-mono text-white/30 p-4 border-b border-white/10 uppercase tracking-widest bg-black/40">
            // Table of Contents
          </div>
          <div className="flex flex-col flex-1 p-8 space-y-6 overflow-y-auto">
             <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight text-white/90">
                Index Parameters
             </h3>
             <ul className="space-y-4">
                {faqs.map((faq, index) => (
                  <li 
                    key={faq.id} 
                    onClick={() => handleFlip(index + 2)} 
                    className="flex justify-between items-start text-xs cursor-pointer group hover:text-primary transition-colors"
                  >
                    <div className="flex gap-2">
                      <ChevronRight size={14} className="text-primary/40 group-hover:text-primary shrink-0 translate-y-0.5" />
                      <span className="font-medium text-white/70 group-hover:text-white leading-relaxed line-clamp-2 pr-4">{faq.q}</span>
                    </div>
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-primary shrink-0 opacity-50">PG {index + 2}</span>
                  </li>
                ))}
             </ul>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* PAGES 2+: FAQ CONTENT */}
        {faqs.map((faq, index) => {
           // alternate shadow based on left/right page
           const isLeft = (index + 2) % 2 !== 0; // page 2 is right (0-indexed inside flipbook conceptually, but standard layout cover=0, index=1(left but usually right in flipbook, wait flipbook handles parity).
           
           return (
            <div key={faq.id} className="w-full h-full flex flex-col bg-[#0a0a0a] border border-white/5 box-border cursor-grab relative">
              <div className="page-header flex justify-between text-[9px] font-mono text-white/30 p-4 border-b border-white/5 uppercase tracking-widest bg-black/20">
                 <span>Query_ID: {faq.id}</span>
                 <span>PG {index + 2}</span>
              </div>
              
              <div className="flex-1 flex flex-col p-8">
                <div className="mb-6">
                   <h3 className="text-lg font-heading font-black uppercase text-white tracking-tight leading-tight">
                      {faq.q}
                   </h3>
                   <div className="h-0.5 w-12 bg-primary mt-4" />
                </div>
                
                <div className="text-sm font-medium text-white/50 leading-relaxed font-sans">
                   {faq.a}
                </div>
              </div>

              <div className="p-6 border-t border-white/5 flex justify-between items-center bg-black/20">
                 <Terminal size={14} className="text-primary/40" />
                 <div className="flex gap-1">
                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-white/10" />)}
                 </div>
              </div>
              
              {/* Binder Shadows */}
              <div className={`absolute top-0 bottom-0 ${isLeft ? 'right-0 w-8 bg-gradient-to-l' : 'left-0 w-8 bg-gradient-to-r'} from-black/60 to-transparent pointer-events-none`} />
            </div>
          );
        })}

        {/* FINAL PAGE: END OF LOGS */}
        <div className="relative bg-primary border border-primary/20 rounded-l-2xl p-8 flex flex-col items-center justify-center text-black shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)] overflow-hidden cursor-grab">
          <div className="absolute inset-0 grid-bg opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 text-center">
             <div className="inline-block p-4 bg-black rounded-xl mb-6 shadow-2xl">
                <ShieldCheck size={40} className="text-primary" />
             </div>
             <h1 className="text-4xl font-heading font-black uppercase tracking-tighter mb-4 leading-none">
                End<br />Transmission
             </h1>
             <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold opacity-60">
                All logs reviewed
             </p>
          </div>
          
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
        </div>
        
      </HTMLFlipBook>
    </div>
  );
}
