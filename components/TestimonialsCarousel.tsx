"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fenalt took the fear out of overseas manufacturing. They managed the entire process and delivered a sustainable capsule that exceeded our expectations.",
    author: "INDEPENDENT STUDIO",
  },
  {
    quote:
      "Finding a reliable partner for a 150-unit drop using deadstock fabric felt impossible. Fenalt executed it flawlessly, and the traceability report was a massive win for our marketing.",
    author: "EMERGING LONDON LABEL",
  },
  {
    quote:
      "Zero communication barriers and no midnight supply-chain panic. Their boots-on-the-ground quality control meant our garments arrived perfectly to spec, ready for retail.",
    author: "DTC FOUNDER",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play: start/stop based on hover state
  useEffect(() => {
    if (isHovered || isDragging) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, isDragging, next]);

  // Touch / mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return;
    const delta = dragStartX - clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        next();
      } else {
        prev();
      }
    }
    setIsDragging(false);
  };

  return (
    <section
      className="py-24 lg:py-32 bg-[#F2EFE9] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Mouse drag
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      // Touch swipe
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A882] mb-12">
          Client Stories
        </p>

        {/* Slide area */}
        <div className="relative overflow-hidden">
          {/* Slides wrapper — translate based on current index */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            // Prevent default drag on images/text
            onDragStart={(e) => e.preventDefault()}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-4 sm:px-12"
                aria-hidden={i !== current}
              >
                {/* Quote icon */}
                <Quote
                  size={48}
                  className="text-[#C8A882]/30 mx-auto mb-8"
                  strokeWidth={1}
                />

                {/* Quote text */}
                <blockquote className="font-display text-2xl sm:text-3xl lg:text-5xl font-light text-[#1A1A1A] leading-snug mb-10 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author line */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-[#C8A882]" />
                  <p className="text-sm font-semibold text-[#6B6560] uppercase tracking-widest">
                    {t.author}
                  </p>
                  <div className="h-px w-12 bg-[#C8A882]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "w-8 h-1.5 bg-[#1A1A1A]"
                  : "w-3 h-1.5 bg-[#C8A882]/40 hover:bg-[#C8A882]"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-px bg-[#E5DDD3] overflow-hidden">
          <div
            key={current}
            className={`h-full bg-[#C8A882] ${
              isHovered || isDragging ? "" : "animate-progress"
            }`}
          />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-progress {
          animation: progress ${AUTOPLAY_DELAY}ms linear forwards;
        }
      `}</style>
    </section>
  );
}
