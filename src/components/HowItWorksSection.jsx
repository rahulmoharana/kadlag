import React from 'react';
import { Check, ClipboardList, CalendarCheck2, ShieldCheck, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import approachImg from '../assets/approach.jpg';

export default function HowItWorksSection({ onOpenBooking }) {
  const steps = [
    {
      step: 'Phase 1',
      title: 'Understanding Your Requirements',
      description:
        'We begin by understanding your facility type, service needs, staffing requirements, and operational expectations.',
      icon: ClipboardList,
    },
    {
      step: 'Phase 2',
      title: 'Planning Suitable Services',
      description:
        'We work to align housekeeping and manpower arrangements with the nature and requirements of your premises.',
      icon: CalendarCheck2,
    },
    {
      step: 'Phase 3',
      title: 'Supporting Daily Operations',
      description:
        'Our focus is on reliable service delivery, staff coordination, and routine facility maintenance.',
      icon: ShieldCheck,
    },
    {
      step: 'Phase 4',
      title: 'Maintaining Service Standards',
      description:
        'Quality checks and communication help identify issues and support continuous improvement.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-[#EAF087]/50 relative overflow-hidden border-t border-stone-200" id="approach">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] mt-2 leading-tight">
            A Practical, Customer-Focused Approach to Facility Management
          </h2>
          <p className="text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
            Effective housekeeping and manpower support requires more than assigning staff. It requires understanding the facility, clarifying expectations, and maintaining a consistent approach to service delivery. At KADLAG Facility Management, our approach focuses on four key areas.
          </p>
        </div>

        {/* 2-Column Workflow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual with Floating 98% Pill */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[480px] sm:h-[540px] group border border-white/60">
              <img
                alt="KADLAG trained professional housekeeping team on-site"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src={approachImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating 98% Satisfaction badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md border border-[#E6E8EB] rounded-2xl py-3.5 px-5 shadow-2xl flex items-center space-x-3.5 transition-transform hover:-translate-y-1">
              <div>
                <p className="text-2xl font-black text-[#11181C]">98%</p>
                <p className="text-[11px] text-[#687076] font-semibold">Service Consistency</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E6E726] flex items-center justify-center text-black shadow-sm flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Right Step Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#E6E8EB]/80 hover:shadow-md transition-all hover:border-[#11181C]/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest bg-stone-100 px-2.5 py-0.5 rounded-full">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F8F8F5] flex items-center justify-center text-stone-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#11181C] mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687076] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}

            {/* Action CTA Button */}
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('Approach Consultation')}
                id="approach-cta-btn"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#11181C] text-white hover:bg-black text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Tell Us About Your Facility</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
