import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero({ onOpenBooking }) {

  return (
    <section
      className="relative w-full min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)] flex items-center overflow-hidden bg-[#F8F8F5] py-6 sm:py-12"
      id="hero"
    >
      {/* Full-screen background hero image (Edge-to-Edge) */}
      <div className="absolute inset-0 -top-px z-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Professional Housekeeping & Facility Management Services in Wagholi, Pune - KADLAG"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Main Content Grid spanning full screen (Desktop 100% Intact) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-16 py-6 sm:py-10 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
        {/* Floating vibrant green gradient rounded rectangle card on left */}
        <div className="max-w-xl lg:max-w-lg w-full">
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-3xl border border-white/50"
            style={{
              background:
                'linear-gradient(135deg, rgba(247,255,158,0.96) 0%, rgba(174,248,59,0.94) 45%, rgba(34,230,122,0.94) 100%)',
            }}
          >
            {/* Subtle decorative background circle */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/30 rounded-full blur-2xl pointer-events-none" />

            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3 sm:mb-4 bg-white/40 rounded-full">
              <span>PROFESSIONAL FACILITY MANAGEMENT</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] font-normal leading-[1.18] text-[#11181C] tracking-tight">
              Professional Housekeeping &amp; Facility Management Services 
            </h1>

            {/* Lead paragraphs */}
            <p className="mt-3 text-xs sm:text-xs text-[#11181C]/90 leading-relaxed font-medium">
               We provide professional housekeeping, skilled manpower supply, and facility hygiene solutions to help businesses maintain clean, organized, and efficient environments.
            </p>

            {/* CTA Buttons (Desktop unchanged, mobile full-width touch targets) */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenBooking('Free Consultation')}
                id="hero-book-btn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#11181C] text-white hover:bg-black text-xs sm:text-sm font-semibold group shadow-lg transition-all active:scale-95 cursor-pointer text-center"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="tel:+919975317474"
                id="hero-call-btn"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/90 hover:bg-white text-stone-900 text-xs sm:text-sm font-semibold border border-white/60 shadow-md transition-all active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-stone-800" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Mobile Trust Strip */}
            <div className="mt-3.5 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] text-[#11181C]/80 font-semibold sm:hidden">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>100% Verified Manpower</span>
              </div>
              <span>•</span>
              <span>ESI / PF Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
