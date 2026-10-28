import React from 'react';
import { MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LocalSeoSection({ onOpenBooking }) {
  const highlights = [
    'Prompt local response and dedicated site assessment',
    'Customized facility plans for local businesses & societies',
    'Reliable local workforce with full verification & ESI/PF',
  ];

  return (
    <section className="py-24 bg-[#F8F8F5] border-t border-[#E6E8EB]/80" id="local-presence">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E6E8EB]/80 shadow-sm relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E6E726]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-600 space-x-1.5 bg-[#F8F8F5] px-3.5 py-1.5 rounded-full border border-[#E6E8EB]">
                <MapPin className="w-3.5 h-3.5 text-[#E6E726]" />
                <span>Sangamner, Maharashtra</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-tight">
                Facility Management Services in Sangamner, Maharashtra
              </h2>

              <p className="text-[#11181C] text-sm sm:text-base font-medium leading-relaxed">
                If you are looking for housekeeping services, manpower supply, or facility hygiene support in Sangamner, Maharashtra, KADLAG Facility Management is ready to discuss your requirements.
              </p>

              <p className="text-[#687076] text-sm sm:text-base leading-relaxed">
                We understand that every facility has different operational needs. A corporate office may require regular housekeeping, while a warehouse or commercial property may need a different staffing and maintenance arrangement.
              </p>

              <p className="text-[#687076] text-sm sm:text-base leading-relaxed">
                Our goal is to understand those requirements and recommend suitable services.
              </p>

              <p className="text-stone-700 text-xs sm:text-sm italic leading-relaxed pt-1">
                Whether you need housekeeping support for a workplace, manpower for daily operations, or a facility hygiene solution, contact our team to discuss your facility type, location, and service expectations.
              </p>

              {/* Local Points */}
              <div className="space-y-2.5 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-stone-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBooking('Sangamner Facility Enquiry')}
                  id="local-seo-contact-btn"
                  className="inline-flex items-center px-7 py-3 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <a
                  href="tel:+919975317474"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-stone-300 hover:border-black text-stone-800 hover:text-black text-sm font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5 mr-2" />
                  <span>Call +91 9975317474</span>
                </a>
              </div>
            </div>

            {/* Right Column: Location Box Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F5] rounded-3xl p-7 sm:p-9 border border-[#E6E8EB] space-y-6">
                <div className="flex items-center space-x-3 pb-5 border-b border-stone-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6E726] flex items-center justify-center text-black shadow-sm">
                    <MapPin className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#11181C]">Regional Headquarters</h3>
                    <p className="text-xs text-stone-500">KADLAG Facility Management</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                      Service Location
                    </span>
                    <p className="font-semibold text-stone-900">
                      Sangamner, Maharashtra, India
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Serving corporate, industrial, healthcare, and residential properties.
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                      Direct Phone Support
                    </span>
                    <a
                      href="tel:+919975317474"
                      className="font-bold text-black hover:text-[#858700] transition-colors block text-sm"
                    >
                      +91 9975317474
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                      Official Email
                    </span>
                    <a
                      href="mailto:mayur.kadlag@gmail.com"
                      className="font-semibold text-stone-900 hover:underline block"
                    >
                      mayur.kadlag@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 flex items-center justify-between text-xs">
                    <span className="text-stone-600 font-medium">Have specific site specs?</span>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-black hover:underline"
                    >
                      Get Quote →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
