import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ navigateTo }) {
  const handleNav = (view, hash) => {
    if (navigateTo) {
      navigateTo(view, hash);
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <footer className="bg-[#11181C] text-stone-400 text-sm border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src="/images/17_kadlag_facility_management_log.webp"
                alt="KADLAG Facility Management Logo"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-sm"
              />
              <div>
                <span className="text-base font-black tracking-wider text-white uppercase block leading-tight">
                  KADLAG
                </span>
                <span className="text-[11px] text-stone-400 font-semibold tracking-wider block">
                  FACILITY MANAGEMENT
                </span>
              </div>
            </div>

            <p className="text-xs font-black tracking-widest text-[#E6E726] uppercase">
              CLEAN. CARE. COMFORT.
            </p>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Professional housekeeping, manpower supply, and facility hygiene solutions for businesses and facilities in Sangamner, Maharashtra.
            </p>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', '#hero')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', '#about-us')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services', '#services-page')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact', '#contact-us')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services (Span 3) */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Our Services
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', '#services')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Housekeeping Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', '#services')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Skilled Manpower Supply
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', '#services')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Facility Hygiene Management
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', '#services')}
                  className="hover:text-white transition-colors cursor-pointer border-0 bg-transparent p-0 text-left text-xs"
                >
                  Eco-Friendly Cleaning Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information (Span 3) */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Information
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#E6E726] flex-shrink-0" />
                <a href="tel:+919975317474" className="hover:text-white transition-colors">
                  +91 9975317474
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#E6E726] flex-shrink-0" />
                <a href="mailto:mayur.kadlag@gmail.com" className="hover:text-white transition-colors">
                  mayur.kadlag@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#E6E726] flex-shrink-0 mt-0.5" />
                <span>Sangamner, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© 2026 KADLAG Facility Management. All rights reserved.</p>
          <p className="mt-3 sm:mt-0 flex items-center space-x-1">
            <span>Tagline:</span>
            <span className="text-[#E6E726] font-semibold">CLEAN. CARE. COMFORT.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
