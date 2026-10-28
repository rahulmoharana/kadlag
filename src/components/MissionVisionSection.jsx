import React from 'react';
import { Target, Compass, ArrowRight, Award } from 'lucide-react';

export default function MissionVisionSection({ onOpenBooking }) {
  return (
    <section className="py-24 bg-white border-t border-[#E6E8EB]/70" id="mission-vision">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-600 space-x-1.5 bg-[#F8F8F5] px-3.5 py-1.5 rounded-full border border-[#E6E8EB] mb-3">
            <Award className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Mission &amp; Vision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-tight">
            Guiding Principles Behind Every Facility We Manage
          </h2>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="bg-[#FBFBF9] rounded-3xl p-8 sm:p-10 border border-[#E6E8EB]/80 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#E6E726]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#E6E726] flex items-center justify-center text-black mb-6 shadow-sm">
                <Target className="w-7 h-7 stroke-[2]" />
              </div>

              <span className="text-[11px] font-bold tracking-widest uppercase text-stone-500 block mb-2">
                Core Purpose
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#11181C] mb-4">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base text-[#687076] leading-relaxed">
                Our mission is to deliver reliable, professional, and customer-focused housekeeping and facility hygiene solutions that help maintain clean, safe, and organized environments.
              </p>

              <p className="text-sm sm:text-base text-[#687076] leading-relaxed mt-3">
                Through trained manpower, effective processes, and responsible cleaning practices, we aim to support the changing needs of our clients.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-stone-200/60 flex items-center text-xs font-bold text-stone-700">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] mr-2" />
              <span>Dedicated Service Delivery</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#11181C] text-white rounded-3xl p-8 sm:p-10 border border-stone-800 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#E6E726] mb-6 shadow-sm">
                <Compass className="w-7 h-7 stroke-[2]" />
              </div>

              <span className="text-[11px] font-bold tracking-widest uppercase text-[#E6E726] block mb-2">
                Future Ambition
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Our vision is to become a trusted name in housekeeping and facility management by emphasizing service quality, operational reliability, innovation, and sustainable cleaning practices.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-stone-800 flex items-center text-xs font-semibold text-stone-400">
              <span className="w-2 h-2 rounded-full bg-[#E6E726] mr-2" />
              <span>Sustainable &amp; Long-term Excellence</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking('Know More About KADLAG')}
            id="mission-cta-btn"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span>Know More About KADLAG</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

