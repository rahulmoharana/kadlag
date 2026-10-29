import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

export default function AboutSection({ onOpenBooking, onNavigateToAbout }) {
  const checklists = [
    'Trained, verified, and well-groomed manpower for daily operations.',
    'Comprehensive ESI, PF, and statutory documentation support.',
    'Eco-friendly and responsible cleaning practices aligned with your facility.',
  ];

  const metrics = [
    { value: 'Wagholi, Pune', label: 'Headquartered in MH' },
    { value: '100%', label: 'Verified & Trained Staff' },
    { value: 'ESI / PF', label: 'Compliance & Documentation' },
    { value: 'Reliable', label: 'Daily Operational Support' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#E6E8EB]/60" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#11181C] space-x-1.5 bg-[#F8F8F5] px-3.5 py-1.5 rounded-full border border-[#E6E8EB]">
         
              <span>About Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#11181C]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-[1.2]">
              Your Trusted Partner for Housekeeping and Facility Management
            </h2>

           
            <p className="text-[#687076] text-sm sm:text-base leading-relaxed">
              KADLAG Facility Management helps businesses manage their housekeeping and manpower requirements through structured service delivery and a customer-focused approach.
            </p>

          
            <p className="text-[#687076] text-sm sm:text-base leading-relaxed">
              Our approach emphasizes trained staff, operational reliability, documentation support, and service standards aligned with each facility's needs.
            </p>

            

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              {checklists.map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#11181C]">{text}</span>
                </div>
              ))}
            </div>

            {/* Learn More CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigateToAbout ? onNavigateToAbout() : (window.location.hash = '#about-us')}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-sm font-semibold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onOpenBooking('About Us Enquiry')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-300 hover:border-black text-stone-800 hover:text-black text-sm font-medium transition-all cursor-pointer"
              >
                Discuss Facility Needs
              </button>
            </div>
          </div>

          {/* Editorial Image with Floating Social Proof Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:max-w-none group">
              <img
                alt="KADLAG Facility Management specialist on-site delivering housekeeping service"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src={aboutImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Pill Card 'Trusted By our customer' */}
            <div className="absolute -bottom-6 left-4 sm:left-10 bg-white/95 backdrop-blur-md border border-[#E6E8EB] rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center space-x-4 transition-transform hover:-translate-y-1">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  alt="Customer avatar"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/04_customer_avatar.webp"
                />
                <img
                  alt="Customer avatar"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/05_customer_avatar.webp"
                />
                <img
                  alt="Customer avatar"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/06_customer_avatar.webp"
                />
                <img
                  alt="Customer avatar"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/07_customer_avatar.webp"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#687076] font-medium">Trusted By Our Clients</p>
                <p className="text-sm font-bold text-[#11181C]">
                  Wagholi, Pune &amp; MH <span className="text-xs font-normal text-[#687076]">Businesses</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Counter Strip with dividers */}
        <div className="mt-24 pt-12 border-t border-[#E6E8EB]/70 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {metrics.map((item, index) => (
            <div
              key={index}
              className={`${
                index < metrics.length - 1 ? 'border-r-0 sm:border-r border-[#E6E8EB]/60 pr-4' : ''
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#11181C]">
                {item.value}
              </h3>
              <p className="text-xs sm:text-sm text-[#687076] mt-1 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
