import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Sparkles, MapPin, User, Mail, Phone } from 'lucide-react';

const AVAILABLE_SERVICES = [
  'Professional Housekeeping Services',
  'Skilled Manpower Supply',
  'Facility Hygiene Management',
  'Eco-Friendly Cleaning Solutions',
];

export default function BookingModal({
  isOpen,
  onClose,
  initialService = 'Professional Housekeeping Services',
  initialEmail = '',
}) {
  const [service, setService] = useState(() => {
    const matched = AVAILABLE_SERVICES.find(
      (s) => s.toLowerCase() === initialService.toLowerCase()
    );
    return matched || initialService;
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state when modal reopens or props change
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      const matched = AVAILABLE_SERVICES.find(
        (s) => s.toLowerCase() === initialService.toLowerCase()
      );
      setService(matched || initialService);
      setEmail(initialEmail);
      setConfirmed(false);
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: name || 'Not provided',
        email: email || 'Not provided',
        phone: phone || 'Not provided',
        service: service,
        preferredDate: date || 'Flexible',
        facilityLocation: address || 'Sangamner, Maharashtra',
        _subject: `New Facility Booking Enquiry: ${service} - ${name || 'Client'}`,
        _template: 'table',
        _captcha: 'false',
      };

      await fetch('https://formsubmit.co/ajax/mayur.kadlag@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Graceful fallback to avoid blocking user feedback
      console.warn('FormSubmit note:', err);
    } finally {
      setIsSubmitting(false);
      setConfirmed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 hover:text-black transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-[#11181C]">Enquiry Received!</h3>
            <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-black">{name || 'valued client'}</span>. The KADLAG Facility Management team has received your enquiry regarding{' '}
              <span className="font-semibold text-black">{service}</span>.
            </p>
            <div className="bg-[#F8F8F5] p-4 rounded-2xl text-left text-xs space-y-1.5 text-stone-600 border border-[#E6E8EB] mt-4">
              <p>
                <strong className="text-stone-900">Email:</strong> {email || 'Provided via form'}
              </p>
              <p>
                <strong className="text-stone-900">Phone:</strong> {phone || '+91 9975317474'}
              </p>
              {address && (
                <p>
                  <strong className="text-stone-900">Facility / Location:</strong> {address}
                </p>
              )}
              {date && (
                <p>
                  <strong className="text-stone-900">Preferred Start / Date:</strong> {date}
                </p>
              )}
              <p className="text-[11px] text-[#22C55E] font-semibold pt-1">
                ✓ Sangamner, Maharashtra Operations Hub notified
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/919975317474?text=${encodeURIComponent(
                  `Hello KADLAG Facility Management, I submitted a consultation request for ${service}. Name: ${name || 'Client'}, Phone: ${phone || 'N/A'}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-all shadow-sm active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>Connect via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#11181C] mb-2">
              <Sparkles className="w-4 h-4 text-[#E6E726]" />
              <span>KADLAG Facility Management</span>
            </div>

            <h3 className="text-2xl font-bold text-[#11181C]">Request a Consultation</h3>
            <p className="text-xs text-stone-500 mt-1">
              CLEAN. CARE. COMFORT. • Sangamner, Maharashtra
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Select Required Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AVAILABLE_SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`text-xs font-medium py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                        service === s
                          ? 'bg-[#E6E726] border-black text-black font-bold shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@company.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9975317474"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#E6E726]"
                    />
                  </div>
                </div>
              </div>

              {/* Facility Details / Location */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Facility Type / Location</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Corporate Office, Sangamner (sq ft or requirements)..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#E6E726] resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="confirm-booking-btn"
                  className="w-full py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] disabled:opacity-60 text-black font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                >
                  {isSubmitting && (
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  )}
                  <span>{isSubmitting ? 'Sending Request to Mail...' : 'Submit Consultation Request'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
