import React from 'react';
import { ArrowRight, Sparkles, Building2, Users, ShieldAlert, Leaf } from 'lucide-react';

export default function ServicesSection({ onOpenBooking, onNavigateToServices }) {
  const services = [
    {
      id: 'housekeeping',
      title: 'Professional Housekeeping Services',
      description:
        'Maintain clean, organized, and presentable workplaces with professional housekeeping support. Our housekeeping services are designed for businesses and facilities that require regular cleaning, attention to hygiene, and dependable day-to-day maintenance.',
      suitableFor: [
        'Corporate offices',
        'Commercial establishments',
        'Retail showrooms',
        'Residential societies',
      ],
      buttonText: 'Enquire About Housekeeping',
      image: '/images/08_home_cleaning_specialist_dusti.webp',
      badge: 'Daily & Routine',
      icon: Building2,
    },
    {
      id: 'manpower',
      title: 'Skilled Manpower Supply',
      description:
        'Get support for your staffing requirements through manpower supply solutions tailored to your operational needs. We focus on providing trained personnel and reliable workforce support to help businesses maintain continuity in their daily activities.',
      suitableFor: [
        'Offices',
        'Warehouses',
        'Commercial facilities',
        'Other business environments',
      ],
      buttonText: 'Discuss Your Manpower Requirements',
      image: '/images/13_housekeeping_team_at_work.webp',
      badge: 'Verified Staffing',
      icon: Users,
    },
    {
      id: 'hygiene',
      title: 'Facility Hygiene Management',
      description:
        'Maintain a cleaner and more organized facility with a structured approach to hygiene and routine maintenance. Our facility hygiene management services support businesses seeking consistent cleanliness standards and improved day-to-day facility upkeep.',
      suitableFor: [
        'Corporate workplaces',
        'Healthcare facilities',
        'High-footfall spaces',
        'Commercial properties',
      ],
      buttonText: 'Request Hygiene Management Support',
      image: '/images/09_office_professional_sanitation.webp',
      badge: 'Hygiene & Upkeep',
      icon: ShieldAlert,
    },
    {
      id: 'eco-friendly',
      title: 'Eco-Friendly Cleaning Solutions',
      description:
        'Support a cleaner environment through thoughtful cleaning practices and eco-friendly solutions suited to your facility’s requirements. We aim to incorporate responsible cleaning practices while maintaining practical standards of cleanliness and hygiene.',
      suitableFor: [
        'Offices',
        'Commercial spaces',
        'Residential properties',
        'Environmentally conscious facilities',
      ],
      buttonText: 'Explore Cleaning Solutions',
      image: '/images/10_specialist_with_spray_kit_and_.webp',
      badge: 'Eco-Conscious',
      icon: Leaf,
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="services">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#E6E726]" />
            <span>KADLAG Specialized Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C]">
            Professional Housekeeping and Facility Management Services
          </h2>
          <p className="text-[#687076] text-sm sm:text-base mt-3 leading-relaxed">
            KADLAG Facility Management offers practical housekeeping and manpower solutions designed to support cleaner facilities and more organized business operations.
          </p>
        </div>

        {/* Top Action Button */}
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => onOpenBooking('All Services')}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow cursor-pointer active:scale-95"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>

      {/* Service Card Grid (4 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          return (
            <article
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E6E8EB]/80 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image container */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1">
                  <h3 className="text-lg font-bold text-[#11181C] group-hover:text-black transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#687076] mt-2.5 leading-relaxed line-clamp-4">
                    {service.description}
                  </p>

                  {/* Suitable For */}
                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Suitable For:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.suitableFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#F8F8F5] text-stone-700 px-2.5 py-1 rounded-md border border-stone-200/70 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="pt-5 px-1 mt-4 border-t border-stone-100">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-2.5 px-3 rounded-full bg-[#F8F8F5] hover:bg-[#E6E726] text-[#11181C] hover:text-black text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center space-x-1.5 border border-stone-200 group-hover:border-black/20 cursor-pointer active:scale-95"
                >
                  <span className="truncate">{service.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Explore Full Services & Calculator Bar */}
      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={() => onNavigateToServices ? onNavigateToServices() : (window.location.pathname = '/services')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          <span>Explore All 6 Specialized Solutions &amp; Instant Cost Estimator</span>
          <ArrowRight className="w-4 h-4 text-[#E6E726]" />
        </button>
      </div>
    </section>
  );
}
