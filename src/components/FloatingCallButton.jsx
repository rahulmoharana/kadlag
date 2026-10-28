import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <aside aria-label="Quick Phone Call Assistance">
      <a
        href="tel:+919975317474"
        title="Call KADLAG Facility Management: +91 9975317474"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-bold text-xs sm:text-sm shadow-[0_10px_30px_rgba(230,231,38,0.45)] hover:shadow-[0_12px_36px_rgba(230,231,38,0.6)] border border-black/10 transition-all duration-300 active:scale-95 group cursor-pointer"
      >
        {/* Pulsing Green/Black Live Beacon */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-black" />
        </span>

        {/* Animated Phone Icon */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-[#E6E726] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform shadow-xs">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
        </div>

        {/* Label */}
        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-wider text-black/70 font-extrabold leading-none hidden sm:block">
            24/7 Facility Desk
          </span>
          <span className="leading-tight text-xs sm:text-sm tracking-tight font-black">
            +91 9975317474
          </span>
        </div>
      </a>
    </aside>
  );
}
