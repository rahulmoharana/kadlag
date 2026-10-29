import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  RotateCcw,
} from 'lucide-react';

export default function ContactBanner({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Professional Housekeeping Services',
    facilityType: 'Corporate Office',
    area: '',
    location: 'Wagholi, Pune, Maharashtra',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        facilityType: formData.facilityType,
        area: formData.area || 'N/A',
        location: formData.location || 'Wagholi, Pune, Maharashtra',
        message: formData.message || 'N/A',
        _subject: `New Facility Enquiry: ${formData.service} - ${formData.name}`,
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
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Professional Housekeeping Services',
      facilityType: 'Corporate Office',
      area: '',
      location: 'Wagholi, Pune, Maharashtra',
      message: '',
    });
  };

  const buildWhatsAppText = () => {
    const parts = [
      'Hello KADLAG Facility Management,',
      `I would like to enquire about: ${formData.service}`,
      formData.name ? `Name: ${formData.name}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.email ? `Email: ${formData.email}` : '',
      formData.facilityType ? `Facility Type: ${formData.facilityType}` : '',
      formData.area ? `Area / Requirement: ${formData.area}` : '',
      formData.location ? `Location: ${formData.location}` : '',
      formData.message ? `Notes: ${formData.message}` : '',
    ].filter(Boolean);
    return encodeURIComponent(parts.join('\n'));
  };

  const directWhatsAppUrl = `https://wa.me/919975317474?text=${encodeURIComponent(
    'Hello KADLAG Facility Management, I would like to enquire about your housekeeping and manpower services.'
  )}`;

  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="contact">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6E726]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECTION 10: FINAL CALL TO ACTION */}
        <div className="max-w-4xl pb-16 border-b border-stone-800">
          <span className="text-[#E6E726] text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 inline-flex items-center space-x-1.5 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Ready for Reliable Service</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
            Looking for Reliable Housekeeping or Manpower Services?
          </h2>

          <p className="text-stone-300 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl">
            Keep your workplace cleaner, more organized, and better supported with KADLAG Facility Management.
          </p>

          <p className="text-stone-400 text-sm sm:text-base mt-2 leading-relaxed max-w-3xl">
            Whether you need professional housekeeping, manpower supply, or facility hygiene management, our team is ready to understand your requirements and discuss a suitable service arrangement.
          </p>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary Button */}
            <button
              onClick={() => onOpenBooking('Request a Consultation')}
              id="cta-request-consultation-btn"
              className="px-7 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-semibold text-sm transition-all shadow-lg active:scale-95 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Secondary Button */}
            <a
              href="tel:+919975317474"
              id="cta-call-us-btn"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#E6E726]" />
              <span>Call Us Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-sm transition-all shadow-md active:scale-95 inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat With Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* SECTION 11: CONTACT INFORMATION & COMPREHENSIVE CTA FORM */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[11px] font-extrabold tracking-widest uppercase text-[#E6E726]">
                CLEAN. CARE. COMFORT.
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1.5">
                Let's Discuss Your Facility Management Requirements
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-2">
                Company: <span className="text-white font-semibold">KADLAG Facility Management</span>
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E6E726] flex items-center justify-center text-black flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-white">Wagholi, Pune, Maharashtra, India</p>
                  <p className="text-xs text-stone-400 mt-0.5">Serving Pune, PCMC &amp; Maharashtra regions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E6E726] flex items-center justify-center text-black flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Phone Support
                  </span>
                  <p className="text-sm font-semibold text-white">
                    <a href="tel:+919975317474" className="hover:text-[#E6E726] transition-colors">
                      +91 9975317474
                    </a>
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">Direct manager consultation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#E6E726] flex items-center justify-center text-black flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Email
                  </span>
                  <p className="text-sm font-semibold text-white">
                    <a href="mailto:Support@kadlagfacilitymanagement.com" className="hover:text-[#E6E726] transition-colors">
                      Support@kadlagfacilitymanagement.com
                    </a>
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">Prompt quotation responses</p>
                </div>
              </div>
            </div>

            {/* Quick Benefits Pill Strip */}
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2 text-xs text-stone-300">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#E6E726]" />
                <span>Statutory ESI / PF documentation fully managed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                <span>100% police verified and trained personnel</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#E6E726]" />
                <span>Fast replacement guarantee upon notice</span>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <div className="px-3.5 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#E6E726] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Headquarters Location Map
                </span>
                <span className="text-stone-400 text-[11px]">Wagholi, Pune</span>
              </div>
              <div className="w-full h-48 sm:h-52">
                <iframe
                  title="KADLAG Location - Wagholi, Pune, Maharashtra"
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
            </div>
          </div>

          {/* Comprehensive CTA Form (Span 7) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-9 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-xl font-bold text-white">Request Facility Consultation &amp; Quote</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Fill in your requirements below for a customized facility management proposal.
                </p>
              </div>
              <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#E6E726]/10 border border-[#E6E726]/30 items-center justify-center text-[#E6E726]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {submitted ? (
              <div className="py-6 space-y-5 animate-in fade-in duration-300">
                <div className="flex items-center space-x-3.5 bg-[#22C55E]/15 border border-[#22C55E]/30 p-5 rounded-2xl text-[#22C55E]">
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0 stroke-[2.5]" />
                  <div>
                    <h5 className="text-base font-bold text-white">Enquiry Received Successfully!</h5>
                    <p className="text-xs text-stone-300 mt-0.5">
                      Thank you, <span className="text-[#E6E726] font-semibold">{formData.name}</span>. Our Pune team will review your specs and contact you within 2 hours.
                    </p>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-xs space-y-2 text-stone-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-white/10">
                    <p>
                      <strong className="text-white">Service:</strong> {formData.service}
                    </p>
                    <p>
                      <strong className="text-white">Facility:</strong> {formData.facilityType}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-white/10">
                    <p>
                      <strong className="text-white">Phone:</strong> {formData.phone}
                    </p>
                    <p>
                      <strong className="text-white">Email:</strong> {formData.email}
                    </p>
                  </div>
                  {formData.area && (
                    <p>
                      <strong className="text-white">Area / Staff:</strong> {formData.area}
                    </p>
                  )}
                  {formData.location && (
                    <p>
                      <strong className="text-white">Location:</strong> {formData.location}
                    </p>
                  )}
                  {formData.message && (
                    <p>
                      <strong className="text-white">Message:</strong> {formData.message}
                    </p>
                  )}
                </div>

                {/* Direct Action Options after submit */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919975317474?text=${buildWhatsAppText()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all border border-white/20 active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name <span className="text-[#E6E726]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Phone Number <span className="text-[#E6E726]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9975317474"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Email Address <span className="text-[#E6E726]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Location / City
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Wagholi, Pune, Maharashtra"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>

                {/* Row 3: Service Required & Facility Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Required Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#26282B] border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726] cursor-pointer"
                    >
                      <option value="Professional Housekeeping Services">Professional Housekeeping Services</option>
                      <option value="Skilled Manpower Supply">Skilled Manpower Supply</option>
                      <option value="Facility Hygiene Management">Facility Hygiene Management</option>
                      <option value="Eco-Friendly Cleaning Solutions">Eco-Friendly Cleaning Solutions</option>
                      <option value="Complete Facility Management Package">Complete Facility Management Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Facility / Premises Type
                    </label>
                    <select
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#26282B] border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726] cursor-pointer"
                    >
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="MNCs and IT Companies">MNCs and IT Companies</option>
                      <option value="Hospitals and Healthcare Facilities">Hospitals and Healthcare Facilities</option>
                      <option value="Warehouses and High-Footfall Spaces">Warehouses and High-Footfall Spaces</option>
                      <option value="Residential Societies">Residential Societies</option>
                      <option value="Retail Showrooms">Retail Showrooms</option>
                      <option value="Industrial / Commercial Complex">Industrial / Commercial Complex</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Approx Area / Staff Requirement */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Approx. Floor Area or Manpower Count
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. 5,000 sq ft or 6 Housekeeping Staff required"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                  />
                </div>

                {/* Row 5: Notes & Specific Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Specific Requirements or Message
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention shift timings, special cleaning protocols, start date, or any specific details..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E6E726] resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] disabled:opacity-60 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending to Mail...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Facility Enquiry</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919975317474?text=${buildWhatsAppText()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="pt-1 flex items-center justify-center space-x-4 text-[11px] text-stone-400">
                  <span>✓ 100% Confidential</span>
                  <span>•</span>
                  <span>✓ ESI/PF Documentation Support</span>
                  <span>•</span>
                  <span>✓ Fast Response</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
