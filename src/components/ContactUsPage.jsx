import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  Star,
  Home,
  Briefcase,
  Truck,
  Sparkles,
  Lock,
  MessageCircle,
  PhoneCall,
} from 'lucide-react';

import avatarDevika from '../assets/contact_stitch/contact_stitch_3.webp';

export default function ContactUsPage({ onOpenBooking, onNavigateHome }) {
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    serviceType: 'residential',
    propertySize: '1-2bhk',
    bookingDate: new Date().toISOString().split('T')[0],
    timeSlot: 'morning',
    instructions: '',
  }));

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceMap = {
      residential: 'Residential Sanctuary Clean',
      deep: 'Deep Intensive Care',
      commercial: 'Commercial Workspace Management',
      movein: 'Move-In / Handover Deep Clean',
    };

    const sizeMap = {
      '1-2bhk': '1 – 2 BHK',
      '3-4bhk': '3 – 4 BHK',
      villa: 'Villa / Penthouse',
      'commercial-sqft': 'Office (>2,000 sq ft)',
    };

    const serviceTitle = `${serviceMap[formData.serviceType] || 'Facility Enquiry'} (${sizeMap[formData.propertySize] || ''})`;

    // Send Enquiry directly to mail via FormSubmit
    try {
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        locality: formData.location,
        serviceProgram: serviceMap[formData.serviceType] || formData.serviceType,
        propertyScale: sizeMap[formData.propertySize] || formData.propertySize,
        preferredDate: formData.bookingDate,
        preferredTimeSlot: formData.timeSlot,
        specialInstructions: formData.instructions || 'N/A',
        _subject: `New Facility Assessment Request: ${formData.fullName} - ${serviceMap[formData.serviceType]}`,
        _template: 'table',
        _captcha: 'false',
      };

      await fetch('https://formsubmit.co/ajax/Support@kadlagfacilitymanagement.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('FormSubmit note:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    // Open WhatsApp with prefilled message
    const waText = encodeURIComponent(
      `Hello KADLAG Facility Management,\n\nI have requested an on-premise assessment.\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Location:* ${formData.location}\n*Service:* ${serviceMap[formData.serviceType]}\n*Size:* ${sizeMap[formData.propertySize]}\n*Date:* ${formData.bookingDate}\n*Time:* ${formData.timeSlot}\n*Notes:* ${formData.instructions || 'N/A'}`
    );
    window.open(`https://wa.me/919975317474?text=${waText}`, '_blank');

    if (onOpenBooking) {
      onOpenBooking(serviceTitle, formData.email);
    }
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
          <span className="text-black font-bold">Contact &amp; Dispatch</span>
        </nav>
      </div>

      <main className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 pt-6 pb-24 overflow-hidden">
        {/* Decorative Ambient Blobs */}
        <div className="absolute -top-24 right-10 w-96 h-96 bg-[#E6E726]/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-stone-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Section Intro Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8E8E5] text-stone-800 text-xs tracking-widest uppercase mb-4 shadow-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E6E726] inline-block" />
            <span>Get in Touch • Direct Dispatch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-medium text-[#11181C] tracking-tight mb-4 leading-tight">
            Let’s Bring Sparkling Perfection to Your Environment
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Whether you require bespoke sanitization for a multi-story executive suite or precision restorative care for your private residence, our certified stewards are on standby.
          </p>
        </div>

        {/* Main Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Contact Directives & Map (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Quick Emergency & Response SLA Card */}
            <div className="bg-[#14211D] text-white p-7 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#E6E726]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#E6E726] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  15-Minute Response SLA
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#5C6300]/40 text-[#E6E726] text-[11px] font-semibold">
                  Priority Desk
                </span>
              </div>

              <p className="text-xl font-bold text-white mb-2">
                Instant WhatsApp Dispatch
              </p>
              <p className="text-stone-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Need rapid same-day deployment or immediate event turnaround? Chat directly with our senior operations supervisor.
              </p>

              <a
                href="https://wa.me/919975317474?text=Hi%20KADLAG%20Facility%20Management,%20I%20need%20priority%20dispatch%20for%20my%20facility."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Connect via WhatsApp Now
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Headquarters & Direct Lines Bento List */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200/80 space-y-6">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-[#11181C]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-0.5">
                    Corporate Headquarters
                  </p>
                  <h3 className="text-sm font-bold text-[#11181C] mb-1">
                    Kadlag Facility Management Pvt. Ltd.
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Wagholi, Pune, Maharashtra, India. Active operations serving commercial hubs, IT corridors, industrial zones, and residential societies across Pune and Maharashtra.
                  </p>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-[#11181C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-0.5">
                    Hotlines &amp; Emergency Concierge
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:+919975317474"
                      className="text-base font-bold text-[#11181C] hover:text-[#5C6300] transition-colors"
                    >
                      +91 9975317474
                    </a>
                    <p className="text-xs text-stone-500">
                      Direct Facility Desk (Mon–Sat: 7:00 AM – 9:00 PM)
                    </p>
                    <a
                      href="tel:+919975317474"
                      className="text-xs text-[#5C6300] font-semibold hover:underline mt-1"
                    >
                      24/7 Rapid Emergency Response Active
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-[#11181C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-0.5">
                    Digital Inquiries
                  </p>
                  <div className="flex flex-col">
                    <a
                      href="mailto:Support@kadlagfacilitymanagement.com"
                      className="text-xs sm:text-sm text-[#11181C] font-semibold hover:underline"
                    >
                      Support@kadlagfacilitymanagement.com
                    </a>
                    <span className="text-xs text-stone-500">
                      Prompt replies within 60 minutes
                    </span>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-[#11181C]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-0.5">
                    Operational Standard
                  </p>
                  <p className="text-xs font-semibold text-[#11181C]">
                    Monday through Saturday: 07:00 AM – 21:00 PM
                  </p>
                  <p className="text-xs text-stone-500">
                    Sunday: Scheduled deep cleans &amp; emergency teams active.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Live Google Map */}
            <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E6E726] animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-[#11181C] font-bold">
                    Headquarters &amp; Service Radius
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  Wagholi, Pune, Maharashtra
                </span>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-stone-200 relative shadow-inner">
                <iframe
                  title="KADLAG Facility Management Location - Wagholi, Pune, Maharashtra"
                  src="https://www.google.com/maps?q=Wagholi,+Pune,+Maharashtra&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="mt-3 flex items-center justify-between text-xs text-stone-600 px-1 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#5C6300]" />
                  <span>Serving Pune &amp; Maharashtra Commercial &amp; Residential Estates</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Wagholi,+Pune,+Maharashtra,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C6300] hover:underline font-bold"
                >
                  View Directions &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Conversion Interactive Assessment Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-stone-200/80 relative">
              {/* Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-2xl font-bold text-[#11181C] tracking-tight">
                    Request an Assessment
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Receive a bespoke proposal and transparent quote within 60 minutes.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full text-xs font-semibold text-[#11181C]">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  <span>100% Bonded</span>
                </div>
              </div>

              {/* The Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Personal Contact Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="full_name"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="full_name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Radhika Sharma"
                      required
                      type="text"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact_phone"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Direct Phone Number *
                    </label>
                    <input
                      id="contact_phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99753 17474"
                      required
                      type="tel"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Email & City Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email_address"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email_address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="radhika@example.com"
                      required
                      type="email"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="property_location"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Locality / Landmark *
                    </label>
                    <input
                      id="property_location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Wagholi, Pune / Nagar Road / Kharadi"
                      required
                      type="text"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs uppercase tracking-wider text-stone-600 font-bold">
                    Select Service Program *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      {
                        value: 'residential',
                        label: 'Residential Sanctuary',
                        icon: Home,
                      },
                      {
                        value: 'deep',
                        label: 'Deep Intensive Care',
                        icon: Sparkles,
                      },
                      {
                        value: 'commercial',
                        label: 'Commercial Workspace',
                        icon: Briefcase,
                      },
                      {
                        value: 'movein',
                        label: 'Move-In / Handover',
                        icon: Truck,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isChecked = formData.serviceType === item.value;
                      return (
                        <label
                          key={item.value}
                          className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                            isChecked
                              ? 'bg-black text-white border-black shadow-md'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            value={item.value}
                            checked={isChecked}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon
                            className={`w-5 h-5 mb-1.5 ${
                              isChecked ? 'text-[#E6E726]' : 'text-stone-500'
                            }`}
                          />
                          <span className="text-[11px] font-semibold leading-tight">
                            {item.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Property Scale Selector */}
                <div className="space-y-2 pt-1">
                  <label className="block text-xs uppercase tracking-wider text-stone-600 font-bold">
                    Property Scale / Configuration *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { value: '1-2bhk', label: '1 – 2 BHK' },
                      { value: '3-4bhk', label: '3 – 4 BHK' },
                      { value: 'villa', label: 'Villa / Penthouse' },
                      { value: 'commercial-sqft', label: 'Office (>2,000 sq ft)' },
                    ].map((scale) => {
                      const isChecked = formData.propertySize === scale.value;
                      return (
                        <label
                          key={scale.value}
                          className={`cursor-pointer flex items-center justify-center py-2.5 px-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                            isChecked
                              ? 'bg-[#E6E726] text-black border-[#E6E726] shadow-sm font-bold'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="propertySize"
                            value={scale.value}
                            checked={isChecked}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span>{scale.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Preferred Time Slot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking_date"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="booking_date"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      required
                      type="date"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="time_slot"
                      className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                    >
                      Preferred Time Window *
                    </label>
                    <select
                      id="time_slot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-2.5 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all"
                    >
                      <option value="morning">
                        Morning Slot (08:00 AM – 11:30 AM)
                      </option>
                      <option value="midday">
                        Afternoon Slot (12:00 PM – 03:30 PM)
                      </option>
                      <option value="evening">
                        Late Slot (04:00 PM – 07:30 PM)
                      </option>
                      <option value="flexible">
                        Anytime / Flexible Schedule
                      </option>
                    </select>
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="space-y-1.5 pt-1">
                  <label
                    htmlFor="instructions"
                    className="block text-xs uppercase tracking-wider text-stone-600 font-bold"
                  >
                    Special Care Instructions or Architectural Details
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    placeholder="e.g. Italian marble requires chemical-neutral care, security clearance required at gate, urgent same-day inspection..."
                    rows={3}
                    className="w-full bg-stone-50 border border-stone-200 p-3 rounded-xl text-sm text-[#11181C] focus:bg-white focus:ring-2 focus:ring-[#E6E726] focus:outline-none transition-all placeholder:text-stone-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] disabled:opacity-60 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Operations Mail...</span>
                      </span>
                    ) : (
                      <>
                        <span>Schedule Consultation / Book Now</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust micro copy */}
                <p className="text-[11px] text-center text-stone-500 pt-2 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-stone-400" />
                  <span>
                    No hidden charges. All sanitization materials &amp; high-filtration vacuums provided. Zero cancellation fees up to 24 hours prior.
                  </span>
                </p>
              </form>

              {/* Success Notification Alert */}
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium animate-in fade-in duration-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Thank you! Your assessment request has been recorded and transmitted to our dispatch desk.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Assurance & Trust Pillar Section */}
        <div className="mt-20 pt-16 border-t border-stone-200/80">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#5C6300] font-bold block mb-1">
              Our Uncompromising Standard
            </span>
            <h3 className="text-3xl font-medium text-[#11181C] tracking-tight">
              Artisanal Reliability You Can Bank On
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-xs border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E6E726]/40 flex items-center justify-center text-black mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#11181C] mb-2">
                Vetted &amp; Certified Staff
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Every staff steward completes intensive background verification, white-glove etiquette schooling, and precision surface-care certifications.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-xs border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E6E726]/40 flex items-center justify-center text-black mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#11181C] mb-2">
                100% Eco-Certified Botanicals
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We employ plant-based enzymes, zero harsh carcinogens, and child/pet-safe formulations that protect indoor respiratory quality.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-xs border border-stone-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E6E726]/40 flex items-center justify-center text-black mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#11181C] mb-2">
                Comprehensive Damage Cover
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Fully insured and bonded operations protect your rare stones, exotic hardwoods, and architectural investments at every moment.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Client Quote Overlap Section */}
        <div className="mt-16 bg-[#EEEEEB] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-200">
          <div className="flex items-center gap-5">
            <img
              src={avatarDevika}
              alt="Devika Sengupta"
              className="w-16 h-16 rounded-full object-cover shadow-sm shrink-0 border-2 border-white"
            />
            <div>
              <div className="flex text-[#5C6300] text-xs mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#11181C] font-medium italic">
                “Booking with Kadlag was effortless. Their dispatch was at my penthouse within three hours for an emergency post-renovation clean.”
              </p>
              <span className="text-xs text-stone-600 font-bold mt-1 block">
                Devika Sengupta — Resident &amp; Client
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+919975317474"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#11181C] hover:bg-stone-50 text-xs font-semibold transition-colors shadow-xs border border-stone-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak to Coordinator</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}