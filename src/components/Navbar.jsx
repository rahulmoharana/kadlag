import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Sparkles,
  Home,
  Users,
  Sparkle,
  MessageSquare,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

export default function Navbar({ onOpenBooking, currentView = 'home', navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (view, hash) => {
    setMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(view, hash);
    } else {
      window.location.hash = hash;
    }
  };

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      hash: '/',
      view: 'home',
      icon: Home,
      desc: 'Main overview & facility solutions',
    },
    {
      id: 'about',
      label: 'About Us',
      hash: '/about-us',
      view: 'about',
      icon: Users,
      desc: 'Our founding philosophy & dignity standard',
    },
    {
      id: 'services',
      label: 'Services',
      hash: '/services',
      view: 'services',
      icon: Sparkle,
      desc: '6 specialized programs & price calculator',
    },
    {
      id: 'contact',
      label: 'Contact',
      hash: '/contact-us',
      view: 'contact',
      icon: MessageSquare,
      desc: 'Direct dispatch, 15-min SLA & site assessment',
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b border-stone-200/80 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 lg:h-28 flex items-center justify-between">
          {/* Wordmark & Bigger Logo (Unchanged for Desktop) */}
          <button
            type="button"
            onClick={() => handleNavClick('home', '/')}
            className="flex items-center hover:opacity-90 transition-opacity group cursor-pointer border-0 bg-transparent p-0 text-left"
            aria-label="KADLAG Facility Management"
          >
            <img
              src="/images/01_kadlag_facility_management_log.webp"
              alt="KADLAG Facility Management Logo"
              className="h-16 sm:h-20 lg:h-28 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Primary Nav items (DESKTOP: Completely Untouched) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
            <button
              type="button"
              onClick={() => handleNavClick('home', '/')}
              className={`transition-colors cursor-pointer border-0 bg-transparent p-0 py-1 relative ${
                currentView === 'home'
                  ? "text-[#11181C] font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-[#E6E726]"
                  : 'text-stone-700 hover:text-[#11181C]'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about', '/about-us')}
              className={`transition-colors cursor-pointer border-0 bg-transparent p-0 py-1 relative ${
                currentView === 'about'
                  ? "text-[#11181C] font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-[#E6E726]"
                  : 'text-stone-700 hover:text-[#11181C]'
              }`}
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('services', '/services')}
              className={`transition-colors cursor-pointer border-0 bg-transparent p-0 py-1 relative ${
                currentView === 'services'
                  ? "text-[#11181C] font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-[#E6E726]"
                  : 'text-stone-700 hover:text-[#11181C]'
              }`}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact', '/contact-us')}
              className={`transition-colors cursor-pointer border-0 bg-transparent p-0 py-1 relative ${
                currentView === 'contact'
                  ? "text-[#11181C] font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-[#E6E726]"
                  : 'text-stone-700 hover:text-[#11181C]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons (DESKTOP: Completely Untouched) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+919975317474"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-stone-50 hover:bg-stone-100 border border-stone-300 text-[#11181C] text-xs font-semibold tracking-wide transition-all shadow-xs"
              title="Call KADLAG Facility Management"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-stone-700" />
              <span>+91 9975317474</span>
            </a>
            <button
              onClick={() => onOpenBooking('Free Consultation')}
              id="nav-consult-btn"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-black" />
              Get Free Consultation
            </button>
          </div>

          {/* Bespoke Mobile Header Action Bar (MOBILE ONLY: New Design) */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="https://wa.me/919975317474?text=Hi%20KADLAG%20Facility%20Management,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center transition-colors shadow-xs active:scale-95"
              aria-label="WhatsApp Dispatch"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="tel:+919975317474"
              className="w-9 h-9 rounded-full bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center transition-colors shadow-xs active:scale-95"
              aria-label="Call Dispatch"
            >
              <Phone className="w-4 h-4 text-stone-700" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-2xl bg-black text-white hover:bg-stone-800 transition-colors shadow-sm active:scale-95 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* NEW BESPOKE MOBILE SLIDE-OVER SHEET DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          />

          {/* Slide-over Content Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
              <div className="flex items-center space-x-2.5">
                <img
                  src="/images/01_kadlag_facility_management_log.webp"
                  alt="KADLAG"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <span className="text-xs font-black tracking-widest text-black uppercase block leading-none">
                    KADLAG
                  </span>
                  <span className="text-[10px] text-[#5C6300] font-bold tracking-wider uppercase block mt-0.5">
                    Clean. Care. Comfort.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center shadow-xs active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Cards Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-1">
                  Explore Pages
                </p>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.view;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.view, item.hash)}
                      className={`w-full p-3.5 rounded-2xl text-left flex items-center justify-between transition-all border cursor-pointer active:scale-[0.99] ${
                        isActive
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-stone-50/90 text-stone-800 border-stone-200/70 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive
                              ? 'bg-[#E6E726] text-black font-bold'
                              : 'bg-white text-stone-700 border border-stone-200 shadow-2xs'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p
                            className={`text-sm font-bold leading-tight ${
                              isActive ? 'text-white' : 'text-[#11181C]'
                            }`}
                          >
                            {item.label}
                          </p>
                          <p
                            className={`text-[11px] mt-0.5 line-clamp-1 ${
                              isActive ? 'text-stone-300' : 'text-stone-500'
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-[#E6E726]' : 'text-stone-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Direct Support & Hotline Cards */}
              <div className="pt-2 space-y-2.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-1">
                  Immediate Assistance
                </p>

                {/* WhatsApp Priority Dispatch Card */}
                <a
                  href="https://wa.me/919975317474?text=Hi%20KADLAG%20Facility%20Management,%20I%20need%20priority%20dispatch%20for%20my%20facility."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-950">
                        Instant WhatsApp Dispatch
                      </p>
                      <p className="text-[10px] text-emerald-800">
                        15-Minute Response Guarantee
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Hotline */}
                <a
                  href="tel:+919975317474"
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#11181C]">
                        +91 9975317474
                      </p>
                      <p className="text-[10px] text-stone-500">
                        Mon–Sat: 7:00 AM – 9:00 PM
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full font-semibold">
                    Call Desk
                  </span>
                </a>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-5 border-t border-stone-100 bg-stone-50/50 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Free Consultation');
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Get Free Consultation</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-stone-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>100% Verified Manpower • ESI / PF Compliant</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEW BESPOKE FLOATING BOTTOM APP BAR (MOBILE ONLY: Thumb-friendly) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-[0_-6px_20px_rgba(0,0,0,0.06)] px-3 py-2 flex items-center justify-around safe-area-pb"
      >
        <button
          onClick={() => handleNavClick('home', '#hero')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentView === 'home'
              ? 'text-black font-bold'
              : 'text-stone-500 hover:text-black'
          }`}
        >
          <Home
            className={`w-4 h-4 ${
              currentView === 'home' ? 'text-black stroke-[2.5]' : 'text-stone-500'
            }`}
          />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </button>

        <button
          onClick={() => handleNavClick('services', '/services')}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentView === 'services'
              ? 'text-black font-bold'
              : 'text-stone-500 hover:text-black'
          }`}
        >
          <Sparkle
            className={`w-4 h-4 ${
              currentView === 'services' ? 'text-black stroke-[2.5]' : 'text-stone-500'
            }`}
          />
          <span className="text-[10px] mt-0.5 font-medium">Services</span>
        </button>

        <a
          href="https://wa.me/919975317474?text=Hi%20KADLAG%20Facility%20Management,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] mt-0.5 font-medium">WhatsApp</span>
        </a>

        <a
          href="tel:+919975317474"
          className="flex flex-col items-center justify-center py-1 px-2 text-stone-600 hover:text-black transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Call</span>
        </a>

        <button
          onClick={() => onOpenBooking('Free Consultation')}
          className="inline-flex items-center space-x-1 px-3 py-2 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-[11px] font-bold shadow-xs active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-black" />
          <span>Book</span>
        </button>
      </nav>
    </>
  );
}
