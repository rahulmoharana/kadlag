import React from 'react';
import {
  Building,
  Monitor,
  HeartPulse,
  Warehouse,
  Home,
  Store,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

export default function IndustriesSection({ onOpenBooking }) {
  const industries = [
    {
      icon: Building,
      title: 'Corporate Offices',
      description:
        'Support a clean, organized, and professional working environment for employees, visitors, and business partners.',
      tag: 'Office Hygiene',
    },
    {
      icon: Monitor,
      title: 'MNCs and IT Companies',
      description:
        'Maintain workplace cleanliness and routine facility upkeep in modern office environments.',
      tag: 'Modern Workspaces',
    },
    {
      icon: HeartPulse,
      title: 'Hospitals and Healthcare Facilities',
      description:
        'Support routine housekeeping and hygiene requirements in healthcare environments, subject to the facility’s protocols and applicable standards.',
      tag: 'Healthcare Protocols',
    },
    {
      icon: Warehouse,
      title: 'Warehouses and High-Footfall Spaces',
      description:
        'Help maintain cleaner, more organized spaces where regular upkeep is important for daily operations.',
      tag: 'Operations & Logistics',
    },
    {
      icon: Home,
      title: 'Residential Societies',
      description:
        'Support common-area cleaning and routine upkeep to help maintain comfortable residential surroundings.',
      tag: 'Gated Communities',
    },
    {
      icon: Store,
      title: 'Retail Showrooms',
      description:
        'Maintain clean, presentable customer-facing spaces that reflect your business’s professional image.',
      tag: 'Commercial Spaces',
    },
  ];

  return (
    <section className="py-24 bg-[#F8F8F5] border-t border-[#E6E8EB]/80" id="industries">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-600 space-x-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#E6E8EB] mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-tight">
            Housekeeping and Facility Support for Different Industries
          </h2>

          <p className="text-[#687076] text-sm sm:text-base mt-4 leading-relaxed">
            Different facilities have different cleanliness, staffing, and maintenance requirements. KADLAG Facility Management aims to provide suitable housekeeping and manpower support for a range of business environments.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#E6E8EB]/80 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F8F5] group-hover:bg-[#E6E726] flex items-center justify-center text-black transition-colors duration-300 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#11181C] group-hover:text-black transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-[#687076] mt-2.5 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => onOpenBooking(ind.title)}
                    className="text-xs font-bold text-[#11181C] group-hover:text-black inline-flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Industry Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking('Industry Tailored Service')}
            id="industry-cta-btn"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span>Find the Right Service for Your Facility</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

