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

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#about-us' || hash === '#about-page') return 'about';
    if (hash === '#services-page' || hash === '#services-portfolio') return 'services';
    if (hash === '#contact-us' || hash === '#contact-page') return 'contact';
    return 'home';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Professional Housekeeping Services');
  const [prefilledEmail, setPrefilledEmail] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-us' || hash === '#about-page') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services-page' || hash === '#services-portfolio') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact-us' || hash === '#contact-page') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '#hero' || hash === '') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view, hash = '') => {
    setCurrentView(view);
    if (hash) {
      window.location.hash = hash;
      if (view === 'home' && hash !== '#hero' && hash !== '#home') {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (view === 'about') window.location.hash = '#about-us';
      else if (view === 'services') window.location.hash = '#services-page';
      else if (view === 'contact') window.location.hash = '#contact-us';
      else window.location.hash = '#home';
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
              onNavigateToAbout={() => navigateTo('about', '#about-us')}
            />

            {/* SECTION 3: OUR SERVICES */}
            <ServicesSection
              onOpenBooking={handleOpenBooking}
              onNavigateToServices={() => navigateTo('services', '#services-page')}
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
