import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import IndustriesSection from './components/IndustriesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MissionVisionSection from './components/MissionVisionSection';
import LocalSeoSection from './components/LocalSeoSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ContactUsPage from './components/ContactUsPage';
import FloatingCallButton from './components/FloatingCallButton';

const getViewFromLocation = () => {
  const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase();

  if (pathname === '/about-us' || pathname === '/about' || hash === '#about-us' || hash === '#about-page') {
    return 'about';
  }
  if (pathname === '/services' || pathname === '/services-page' || hash === '#services-page' || hash === '#services-portfolio') {
    return 'services';
  }
  if (pathname === '/contact-us' || pathname === '/contact' || hash === '#contact-us' || hash === '#contact-page') {
    return 'contact';
  }
  return 'home';
};

export default function App() {
  const [currentView, setCurrentView] = useState(() => getViewFromLocation());
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Professional Housekeeping Services');
  const [prefilledEmail, setPrefilledEmail] = useState('');

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentView(getViewFromLocation());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Clean up legacy hash if accessed directly (e.g. #about-us -> /about-us)
    const hash = window.location.hash.toLowerCase();
    if (hash === '#about-us' || hash === '#about-page') {
      window.history.replaceState({ view: 'about' }, '', '/about-us');
    } else if (hash === '#services-page' || hash === '#services-portfolio') {
      window.history.replaceState({ view: 'services' }, '', '/services');
    } else if (hash === '#contact-us' || hash === '#contact-page') {
      window.history.replaceState({ view: 'contact' }, '', '/contact-us');
    }

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (view, target = '') => {
    setCurrentView(view);
    let path = '/';
    if (view === 'about') path = '/about-us';
    else if (view === 'services') path = '/services';
    else if (view === 'contact') path = '/contact-us';

    if (window.location.pathname !== path || window.location.hash) {
      window.history.pushState({ view }, '', path);
    }

    if (view === 'home' && target && target.startsWith('#') && target !== '#hero' && target !== '#home') {
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (service = 'Professional Housekeeping Services', email = '') => {
    setSelectedService(service);
    if (email) setPrefilledEmail(email);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#11181C] flex flex-col font-sans selection:bg-[#E6E726] selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        currentView={currentView}
        navigateTo={navigateTo}
      />

      {/* Main Page Content */}
      <main className="flex-1 pb-16 lg:pb-0">
        {currentView === 'about' ? (
          <AboutUsPage
            onOpenBooking={handleOpenBooking}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'services' ? (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'contact' ? (
          <ContactUsPage
            onOpenBooking={handleOpenBooking}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : (
          <>
            {/* SECTION 1: HERO SECTION */}
            <Hero onOpenBooking={handleOpenBooking} />

            {/* SECTION 2: ABOUT US */}
            <AboutSection
              onOpenBooking={handleOpenBooking}
              onNavigateToAbout={() => navigateTo('about', '/about-us')}
            />

            {/* SECTION 3: OUR SERVICES */}
            <ServicesSection
              onOpenBooking={handleOpenBooking}
              onNavigateToServices={() => navigateTo('services', '/services')}
            />

            {/* SECTION 4: WHY CHOOSE US */}
            <WhyChooseUsSection onOpenBooking={handleOpenBooking} />

            {/* SECTION 5: INDUSTRIES WE SERVE */}
            <IndustriesSection onOpenBooking={handleOpenBooking} />

            {/* SECTION 6: OUR APPROACH */}
            <HowItWorksSection onOpenBooking={handleOpenBooking} />

            {/* SECTION 7: OUR MISSION AND VISION */}
            <MissionVisionSection onOpenBooking={handleOpenBooking} />

            {/* SECTION 8: LOCAL SEO SECTION */}
            <LocalSeoSection onOpenBooking={handleOpenBooking} />

            {/* Real Experiences & Client Feedback */}
            <TestimonialsSection />

            {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
            <FaqSection onOpenBooking={handleOpenBooking} />

            {/* SECTION 10: FINAL CALL TO ACTION & SECTION 11: CONTACT INFORMATION */}
            <ContactBanner onOpenBooking={handleOpenBooking} />
          </>
        )}
      </main>

      {/* SECTION 12: FOOTER CONTENT */}
      <Footer navigateTo={navigateTo} />

      {/* Persistent Floating Call CTA Button */}
      <FloatingCallButton />

      {/* Interactive Consultation / Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialEmail={prefilledEmail}
      />
    </div>
  );
}
