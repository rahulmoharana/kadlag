import React from 'react';
import {
  UserCheck,
  RefreshCw,
  ClipboardCheck,
  FileText,
  Activity,
  Maximize2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function WhyChooseUsSection({ onOpenBooking }) {
  const reasons = [
    {
      icon: UserCheck,
      title: 'Trained and Verified Manpower',
      description:
        'We emphasize trained and verified personnel to support professional service delivery and workplace requirements.',
    },
    {
      icon: RefreshCw,
      title: 'Fast Replacement Support',
      description:
        'Our service approach prioritizes replacement support when staffing changes affect operational continuity, subject to agreed service arrangements.',
    },
    {
      icon: ClipboardCheck,
      title: 'Consistent Quality Checks',
      description:
        'A structured approach to service monitoring helps support cleanliness standards and identify areas requiring attention.',
    },
    {
      icon: FileText,
      title: 'ESI/PF and Documentation Support',
      description:
        'We provide ESI/PF and documentation support as part of our manpower-related service offering, according to applicable requirements and agreed responsibilities.',
    },
    {
      icon: Activity,
      title: 'Smooth Daily Operations',
      description:
        'Our housekeeping and manpower solutions are designed to help businesses manage routine facility requirements more efficiently.',
    },
    {
      icon: Maximize2,
      title: 'Scalable Service Solutions',
      description:
        'We work to align service arrangements with the needs and size of different facilities.',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#E6E8EB]/70" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-600 space-x-1.5 bg-[#F8F8F5] px-3.5 py-1.5 rounded-full border border-[#E6E8EB] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-tight">
            Reliable Housekeeping and Manpower Support for Your Business
          </h2>

          <p className="text-[#687076] text-sm sm:text-base mt-4 leading-relaxed">
            Choosing a facility management partner means finding a team that understands the importance of consistency, accountability, and dependable service. KADLAG Facility Management focuses on helping businesses maintain clean spaces and organized operations through professional housekeeping and manpower support.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FBFBF9] rounded-3xl p-7 border border-[#E6E8EB]/80 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E6E726] flex items-center justify-center text-black mb-5 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#11181C] group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#687076] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center text-xs font-bold text-stone-500 group-hover:text-black">
                  <span>Standard of Excellence</span>
                  <span className="ml-auto text-[#E6E726]">★</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking('Discuss Facility Requirements')}
            id="why-choose-us-btn"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#11181C] text-white hover:bg-black text-sm font-semibold tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Discuss Your Facility Requirements</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

