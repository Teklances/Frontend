"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "TekLances transformed our task execution - fast, reliable, and responsive.",
    by: "Ethan Carter, Product Lead",
    imgSrc: "/assets/t1.svg"
  },
  {
    tempId: 1,
    testimonial: "TekLances instantly connects us with the right specialists - no more delays.",
    by: "Freya Collins, Startup Founder",
    imgSrc: "/assets/t2.svg"
  },
  {
    tempId: 2,
    testimonial: "TekLances delivers enterprise-grade execution with unmatched reliability.",
    by: "Ryan Mitchell, Technical Lead",
    imgSrc: "/assets/t3.svg"
  },
  {
    tempId: 3,
    testimonial: "Complete visibility and seamless control over every task.",
    by: "Noah Bradley, Operations Manager",
    imgSrc: "/assets/t5.svg"
  },
  {
    tempId: 4,
    testimonial: "Speed, structure, and effortless task execution with TekLances.",
    by: "Isla Morgan, Project Manager",
    imgSrc: "/assets/t6.svg"
  },
  {
    tempId: 5,
    testimonial: "Right experts matched instantly, improving speed and productivity",
    by: "Leo Harrison, Head of Technology",
    imgSrc: "/assets/t4.svg"
  },
  {
    tempId: 6,
    testimonial: "Fast, reliable execution with TekLances every single time.",
    by: "Lucas Bennett, Startup Founder",
    imgSrc: "/assets/t7.svg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-black border-primary" 
          : "z-0 bg-white text-black/60 border-primary/40 shadow-md"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(var(--primary), 0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/10"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 h-14 w-12 bg-muted object-cover object-top transition-all duration-500"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.5)"
        }}
      />
      <h3 className={cn(
        "text-xs sm:text-base font-black uppercase tracking-tighter leading-tight",
        isCenter ? "text-black" : "text-black"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-[8px] font-mono uppercase tracking-widest",
        isCenter ? "text-black/60" : "text-black/30"
      )}>
        // {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(320);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 250);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 500 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white border border-black/10 hover:border-primary hover:text-primary rounded-full",
            "focus-visible:outline-none focus:scale-110 active:scale-95"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white border border-black/10 hover:border-primary hover:text-primary rounded-full",
            "focus-visible:outline-none focus:scale-110 active:scale-95"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
