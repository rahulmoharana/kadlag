import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Shield,
  Star,
  PhoneCall,
  Mail,
  Award,
  Sparkles,
  Leaf,
} from 'lucide-react';

import residentialImg from '../assets/services_stitch/services_stitch_2.webp';
import commercialImg from '../assets/services_stitch/services_stitch_3.webp';
import deepCleanImg from '../assets/services_stitch/services_stitch_4.webp';
import moveTurnoverImg from '../assets/services_stitch/services_stitch_5.webp';
import facadeImg from '../assets/services_stitch/services_stitch_6.webp';
import postConstructionImg from '../assets/services_stitch/services_stitch_7.webp';
import workflowImg from '../assets/services_stitch/services_stitch_8.webp';

export default function ServicesPage({ onOpenBooking, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Calculator State
  const [calcType, setCalcType] = useState('residential');
  const [calcSize, setCalcSize] = useState('2');
  const [addonBalcony, setAddonBalcony] = useState(false);
  const [addonKitchen, setAddonKitchen] = useState(false);
  const [bookingToast, setBookingToast] = useState(false);

  // Calculate live estimate
  const calculateTotal = () => {
    let base = 2499;
    if (calcType === 'deep') base = 4499;
    if (calcType === 'office') base = 5999;
    if (calcType === 'move') base = 3899;

    let multiplier = 1.0;
    if (calcSize === '1') multiplier = 0.85;
    if (calcSize === '2') multiplier = 1.0;
    if (calcSize === '3') multiplier = 1.35;
    if (calcSize === '4') multiplier = 1.8;
    if (calcSize === 'commercial_sm') multiplier = 2.2;

    let total = Math.round(base * multiplier);
    if (addonBalcony) total += 499;
    if (addonKitchen) total += 899;
    return total;
  };

  const services = [
    {
      id: 'res-1',
      category: 'residential',
      categoryLabel: 'Residential Care',
      title: 'Residential Home Sanctuary',
      price: 'From ₹2,499',
      desc: 'Keep every living room, master suite, and kitchenette spotless with routine HEPA vacuuming, dusting, mopping, and microfiber air sanitization.',
      checkpoints: [
        'Bedroom linen rotation & upholstery vacuuming',
        'Pet-safe & infant-safe certified organic sprays',
        'High-touch switchboard & fixture sterilization',
      ],
      duration: '3 - 4.5 Hours Duration',
      team: '2 Sanitarians Assigned',
      image: residentialImg,
      imageAlt: 'Residential Sanctuary Cleaning',
    },
    {
      id: 'comm-1',
      category: 'commercial',
      categoryLabel: 'Corporate & Commercial',
      title: 'Corporate & Office Cleaning',
      price: 'Custom SLA',
      desc: 'Discreet off-hours and day-porter sanitization for executive desks, meeting booths, server corridors, and high-footfall pantry hubs.',
      checkpoints: [
        'Nightly workstation keyboard & monitor detailing',
        'Restroom continuous odor & micro-pathogen control',
        'Industrial dual-action floor rotary scrubbing',
      ],
      duration: 'Daily / Weekly Rosters',
      team: 'Dedicated Supervisor',
      image: commercialImg,
      imageAlt: 'Commercial Office Cleaning',
    },
    {
      id: 'res-2',
      category: 'residential',
      categoryLabel: 'Residential Care',
      title: 'Deep Hygiene & Sanitization',
      price: 'From ₹4,999',
      desc: 'An intensive restorative intervention. Heavy grease eradication, grout steam-stripping, exhaust clearing, and total scale dissolution.',
      checkpoints: [
        '180°C pressurized dry-steam grout sanitization',
        'Chimney, hob & oven alkaline degreasing',
        'Hard water stain & limescale bathroom renewal',
      ],
      duration: '6 - 8 Hours Overhaul',
      team: '3-4 Senior Specialists',
      image: deepCleanImg,
      imageAlt: 'Deep Hygiene & Sanitization',
    },
    {
      id: 'res-3',
      category: 'residential',
      categoryLabel: 'Residential Care',
      title: 'Move-In / Move-Out Turnover',
      price: 'From ₹3,899',
      desc: 'Guaranteed landlord & prospective tenant inspection clearance. Total interior sanitization of empty closets, drawers, and fixtures.',
      checkpoints: [
        'Cabinetry interior, shelving & baseboard detailing',
        'Full balcony washdown & window sill scrubbing',
        '100% Security deposit signoff guarantee',
      ],
      duration: 'Inspection Ready Checklist',
      team: 'Instant Handover',
      image: moveTurnoverImg,
      imageAlt: 'Move-In Move-Out Turnover',
    },
    {
      id: 'spec-1',
      category: 'specialized',
      categoryLabel: 'Specialized Surfaces',
      title: 'Facade & Glass Architecture',
      price: 'Custom Survey',
      desc: 'Crystal optical clarity for exterior architectural glass curtain walls, atriums, French windows, and storefront showcases.',
      checkpoints: [
        'Pure deionized water treatment for spot-free drying',
        'Rope access certified & OSHA/IS compliant rigging',
        'Hydrophobic protective sealants against acid rain',
      ],
      duration: 'Certified Riggers',
      team: 'Zero Hazard Record',
      image: facadeImg,
      imageAlt: 'Facade & Glass Window Detailing',
    },
    {
      id: 'comm-2',
      category: 'commercial',
      categoryLabel: 'Corporate & Commercial',
      title: 'Post-Construction Restoration',
      price: 'From ₹7,500',
      desc: 'Eradication of fine silica dust, paint spatter, cement runoff, and adhesive masking residues from newly commissioned estates.',
      checkpoints: [
        'Industrial HEPA air scrubbing & particulate filtration',
        'Specialized non-scratch scrapers for tile & marble',
        'Air vent & duct ingress micro-suction detailing',
      ],
      duration: 'Heavy-Duty Industrial Tools',
      team: 'Move-In Ready',
      image: postConstructionImg,
      imageAlt: 'Post-Construction Restoration',
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const testimonials = [
    {
      quote:
        '“Their deep cleaning transformed our 3 BHK prior to housewarming. Even the toughest grout stains and heavy tile grime were scrubbed out completely without harsh chlorine fumes.”',
      author: 'Meera & Rajesh Nair',
      location: 'Baner, Pune — Deep Sanctuary Clean',
    },
    {
      quote:
        '“Kadlag has handled our 12,000 sq ft office facility for over two years. Incredibly disciplined staff, proactive supervisors, and zero disruption to day shifts. An indispensable vendor partner.”',
      author: 'Vikram Singhania',
      location: 'Operations Head, TechPark Magarpatta',
    },
    {
      quote:
        '“Booked the move-out turnover clean. The landlord inspected and approved our 100% security deposit with zero deductions! Will always use Kadlag for any transition.”',
      author: 'Ananya Deshmukh',
      location: 'Koregaon Park — Turnover Clean',
    },
  ];

  const handleBookService = (serviceTitle) => {
    onOpenBooking(serviceTitle);
  };

  const handleCalculatorSubmit = () => {
    const total = calculateTotal();
    const serviceNameMap = {
      residential: 'Residential Home Clean',
      deep: 'Deep Hygiene & Sanitization',
      office: 'Corporate & Commercial Office',
      move: 'Move-In / Move-Out Turnover',
    };
    const title = `${serviceNameMap[calcType]} (Estimated: ₹${total.toLocaleString('en-IN')})`;
    setBookingToast(true);
    setTimeout(() => setBookingToast(false), 4500);
    onOpenBooking(title);
  };

  return (
    <div className="w-full bg-[#F9F9F6] text-[#11181C] animate-in fade-in duration-300">
      {/* Breadcrumb strip */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-8 pb-2">
        <nav className="flex items-center space-x-2 text-xs font-semibold text-stone-500">
          <button
            onClick={onNavigateHome}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-black font-bold">Services Portfolio</span>
        </nav>
      </div>

      {/* SECTION 1: EDITORIAL HEADER & BRAND PROMISE */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pb-24 px-6 sm:px-12">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E6E726]/15 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-stone-300/30 blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-[1440px] mx-auto">
          {/* Metadata pill */}
          <div className="flex items-center gap-2 mb-6 text-stone-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E8E5] text-stone-900 text-xs uppercase tracking-widest font-bold">
              <Shield className="w-3.5 h-3.5 text-[#5C6300]" />
              Kadlag Solutions Portfolio
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-xs uppercase tracking-wider text-stone-600 font-medium">
              Clean. Care. Comfort.
            </span>
          </div>

          {/* Heading & Summary Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] text-[#11181C] tracking-tight">
                Artisanal Care &amp;{' '}
                <span className="italic font-serif font-bold text-[#5C6300]">
                  Commercial Precision
                </span>{' '}
                for Every Space.
              </h1>
              <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                From serene residential sanctuaries to high-density commercial headquarters, Kadlag Facility Management orchestrates spotless hygiene through vetted personnel, hospital-grade eco-chemistries, and ISO-standardized protocols.
              </p>
            </div>

            {/* Quick Summary Metrics pill */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-xl border border-stone-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Active Operations
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6E726] text-black text-xs font-bold">
                  Sangamner &amp; Maharashtra
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="text-lg font-bold text-[#11181C]">100%</p>
                  <p className="text-[11px] text-stone-500">Eco-Certified</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="text-lg font-bold text-[#5C6300]">4.9/5</p>
                  <p className="text-[11px] text-stone-500">Audit Score</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="text-lg font-bold text-[#11181C]">450+</p>
                  <p className="text-[11px] text-stone-500">Trained Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE FILTER CONTROLS & NAVIGATION */}
      <section className="sticky top-24 z-30 bg-[#F9F9F6]/95 backdrop-blur-md border-y border-stone-200/80 py-4 px-6 sm:px-12 shadow-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-700 hover:text-black hover:bg-stone-300/70'
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setActiveCategory('residential')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'residential'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-700 hover:text-black hover:bg-stone-300/70'
              }`}
            >
              Residential Care
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'commercial'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-700 hover:text-black hover:bg-stone-300/70'
              }`}
            >
              Corporate &amp; Commercial
            </button>
            <button
              onClick={() => setActiveCategory('specialized')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === 'specialized'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-700 hover:text-black hover:bg-stone-300/70'
              }`}
            >
              Specialized Surfaces
            </button>
          </div>

          {/* Quick Action / Guarantee Pill */}
          <div className="hidden lg:flex items-center gap-2 text-stone-600 text-xs font-semibold">
            <Leaf className="w-4 h-4 text-[#5C6300]" />
            <span>Green Seal™ &amp; Non-Carcinogenic Degreasers</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: EDITORIAL SERVICE CARD GRID */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-[#F9F9F6]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80"
              >
                {/* Image Frame with Aspect Ratio and Overlay Button */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[11px] shadow-sm font-bold border border-stone-200/50">
                      <span className="w-2 h-2 rounded-full bg-[#E6E726]" />
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Floating Overlay Button */}
                  <button
                    onClick={() => handleBookService(service.title)}
                    className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#11181C] group-hover:text-[#5C6300] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-bold text-[#5C6300] bg-stone-100 px-2.5 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Service Checkpoints */}
                    <ul className="space-y-2 text-stone-600 text-xs">
                      {service.checkpoints.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-3 -mx-6 -mb-6 p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-stone-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.duration}
                    </span>
                    <span className="font-semibold text-[#11181C]">
                      {service.team}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE KADLAG WORKFLOW & GUARANTEE */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white border-y border-stone-200/80 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Side with Overlapping Trust Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[5/4] bg-stone-100">
                <img
                  src={workflowImg}
                  alt="Kadlag Quality Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Badge 1: 98.6% Satisfaction */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-[#E6E726] flex items-center justify-center text-black flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#11181C] leading-none">
                    98.6%
                  </p>
                  <p className="text-xs text-stone-600 mt-1 font-medium">
                    Audit Score Approval
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge 2: Verified Shield */}
              <div className="hidden sm:flex absolute -top-6 -right-4 bg-black text-white p-4 rounded-2xl shadow-2xl items-center gap-3">
                <Shield className="w-6 h-6 text-[#E6E726]" />
                <div>
                  <p className="text-xs text-white font-bold uppercase tracking-wider">
                    The Kadlag Guarantee
                  </p>
                  <p className="text-[11px] text-stone-300">
                    Free Re-clean within 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content: Step-by-Step Workflow */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#5C6300] font-bold">
                  Standard Operating Protocol
                </span>
                <h2 className="text-3xl sm:text-4xl font-medium text-[#11181C] mt-2 leading-tight">
                  How Kadlag Orchestrates <br className="hidden sm:inline" />
                  Effortless Cleanliness.
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
                  We replace unpredictable domestic labor with standardized hotel-grade protocols, rigorous background verification, and non-intrusive operations.
                </p>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 flex gap-4 items-start shadow-xs">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-stone-300 flex items-center justify-center text-lg font-bold text-[#11181C]">
                    1
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6300] font-bold block">
                      Discovery &amp; Slot Confirmation
                    </span>
                    <h4 className="text-base font-bold text-[#11181C]">
                      Tailor Your Scope &amp; Schedule
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      Select your residential layout or office square footage. Receive upfront transparent pricing without surprise surcharges.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 flex gap-4 items-start shadow-xs">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E6E726] text-black flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6300] font-bold block">
                      Execution Under Checklist
                    </span>
                    <h4 className="text-base font-bold text-[#11181C]">
                      Trained Crew Arrives Fully Equipped
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      Our uniformed, police-verified sanitarians arrive with sealed, single-use color-coded microfibers, vacuums, and eco-chemistries.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60 flex gap-4 items-start shadow-xs">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-stone-300 flex items-center justify-center text-lg font-bold text-[#11181C]">
                    3
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6300] font-bold block">
                      Supervisor Inspection
                    </span>
                    <h4 className="text-base font-bold text-[#11181C]">
                      50-Point Handover &amp; Absolute Serenity
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      Every nook is vetted against our quality assurance index. Relax in spaces infused with natural botanical freshness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INSTANT QUOTE & SERVICE ESTIMATOR INTERACTIVE CARD */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-[#F9F9F6]" id="quote-calculator">
        <div className="max-w-[1200px] mx-auto bg-[#14211D] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Backdrop glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#E6E726]/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Text intro */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E6E726] text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Transparent Quotations
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-white leading-tight">
                Calculate Your Facility Care Investment.
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Configure your space parameters to generate an instant estimate. For custom corporate SLAs or full high-rise estates, our lead surveyor visits on-site within 24 hours.
              </p>
              <div className="pt-4 space-y-2 text-xs sm:text-sm text-stone-300">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#E6E726] flex-shrink-0" />
                  <span>
                    Direct Booking Line:{' '}
                    <a
                      href="tel:+919975317474"
                      className="text-white font-bold hover:underline"
                    >
                      +91 9975317474
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E6E726] flex-shrink-0" />
                  <span>
                    Enterprise Inquiries:{' '}
                    <a
                      href="mailto:mayur.kadlag@gmail.com"
                      className="text-white font-bold hover:underline"
                    >
                      mayur.kadlag@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Widget */}
            <div className="lg:col-span-7 bg-white text-[#11181C] rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-[#11181C]">
                Instant Service Configurator
              </h3>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Property Type */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="space-type"
                    className="text-xs text-stone-600 font-bold uppercase tracking-wider block"
                  >
                    Service Category
                  </label>
                  <select
                    id="space-type"
                    value={calcType}
                    onChange={(e) => setCalcType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm text-[#11181C] focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                  >
                    <option value="residential">Residential Home Clean</option>
                    <option value="deep">Deep Hygiene &amp; Sanitization</option>
                    <option value="office">Corporate &amp; Commercial Office</option>
                    <option value="move">Move-In / Move-Out Turnover</option>
                  </select>
                </div>

                {/* Size Selection */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="space-size"
                    className="text-xs text-stone-600 font-bold uppercase tracking-wider block"
                  >
                    Approximate Area
                  </label>
                  <select
                    id="space-size"
                    value={calcSize}
                    onChange={(e) => setCalcSize(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm text-[#11181C] focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                  >
                    <option value="1">1 BHK / Compact Studio (~600 sq ft)</option>
                    <option value="2">2 BHK / Mid Suite (~1,100 sq ft)</option>
                    <option value="3">3 BHK / Large Suite (~1,650 sq ft)</option>
                    <option value="4">4+ BHK / Penthouse / Villa (2,400+ sq ft)</option>
                    <option value="commercial_sm">Commercial Unit (Under 3,000 sq ft)</option>
                  </select>
                </div>
              </div>

              {/* Add-ons Selection */}
              <div className="pt-1 space-y-2">
                <label className="text-xs text-stone-600 font-bold uppercase tracking-wider block">
                  Specialized Add-ons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#11181C]">
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={addonBalcony}
                      onChange={(e) => setAddonBalcony(e.target.checked)}
                      className="rounded text-black focus:ring-[#E6E726] w-4 h-4 cursor-pointer"
                    />
                    <span>Balcony Jet Scrubbing (+₹499)</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={addonKitchen}
                      onChange={(e) => setAddonKitchen(e.target.checked)}
                      className="rounded text-black focus:ring-[#E6E726] w-4 h-4 cursor-pointer"
                    />
                    <span>Deep Kitchen Degreasing (+₹899)</span>
                  </label>
                </div>
              </div>

              {/* Output Box & CTA Button */}
              <div className="pt-4 mt-2 bg-stone-50 border border-stone-200/80 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold block">
                    Estimated Investment
                  </span>
                  <p className="text-2xl sm:text-3xl font-bold text-[#11181C] leading-none mt-1">
                    ₹{calculateTotal().toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-stone-500">
                      incl. GST
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleCalculatorSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <span>Schedule Service</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>

              {bookingToast && (
                <div className="p-3.5 rounded-xl bg-[#E6E726] text-black text-xs font-bold text-center animate-in fade-in duration-200 shadow-sm">
                  ✓ Preference recorded! Launching consultation desk to confirm your customized allotment.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT SATISFACTION MOSAIC & CORPORATE ENDORSEMENTS */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white border-t border-stone-200/80">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#5C6300] font-bold">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#11181C] mt-2">
              Trusted by Discerning Residents &amp; Workplaces.
            </h2>
          </div>

          {/* Testimonial Mosaic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((rev, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200/70 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex text-[#E6E726] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-[#D4D51E]"
                      />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm italic leading-relaxed">
                    {rev.quote}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-stone-200/60">
                  <div>
                    <p className="text-sm font-bold text-[#11181C]">
                      {rev.author}
                    </p>
                    <p className="text-xs text-stone-500">{rev.location}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}