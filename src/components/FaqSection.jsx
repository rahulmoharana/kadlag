import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does KADLAG Facility Management provide?',
      answer:
        'KADLAG Facility Management provides professional housekeeping services, skilled manpower supply, facility hygiene management, and eco-friendly cleaning solutions.',
    },
    {
      question: 'Where is KADLAG Facility Management located?',
      answer:
        'KADLAG Facility Management is based in Sangamner, Maharashtra, India. Contact the team to confirm service availability for your location.',
    },
    {
      question: 'Does KADLAG provide housekeeping services for offices?',
      answer:
        'Yes. KADLAG offers housekeeping solutions for business environments, including corporate offices and commercial spaces. Contact the team to discuss the cleaning requirements and service arrangement for your premises.',
    },
    {
      question: 'Can I enquire about manpower supply for my business?',
      answer:
        'Yes. You can contact KADLAG to discuss your staffing requirements, facility type, location, and operational needs.',
    },
    {
      question: 'Does KADLAG provide ESI/PF and documentation support?',
      answer:
        'KADLAG’s company profile lists ESI/PF and documentation support among its service strengths. Contact the company to confirm the specific documentation and compliance responsibilities included in your proposed arrangement.',
    },
    {
      question: 'How can I request a quotation?',
      answer: (
        <span>
          Call{' '}
          <a href="tel:+919975317474" className="font-bold text-black underline">
            +91 9975317474
          </a>
          , email{' '}
          <a
            href="mailto:mayur.kadlag@gmail.com"
            className="font-bold text-black underline"
          >
            mayur.kadlag@gmail.com
          </a>
          , or submit an enquiry through the Contact section with your facility details and service requirements.
        </span>
      ),
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-white border-t border-[#E6E8EB]/70" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-600 space-x-1.5 bg-[#F8F8F5] px-3.5 py-1.5 rounded-full border border-[#E6E8EB] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Questions &amp; Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C]">
            Frequently Asked Questions About Our Services
          </h2>

          <p className="text-[#687076] text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Find quick answers to common queries regarding our housekeeping, manpower solutions, and operational processes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#FBFBF9] border-black/20 shadow-md'
                    : 'bg-white border-[#E6E8EB]/80 hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#11181C] group-hover:text-black transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#E6E726] text-black rotate-180'
                        : 'bg-[#F8F8F5] text-stone-500 group-hover:bg-stone-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#687076] leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F8F8F5] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#11181C]">Have more questions about your premises?</h4>
            <p className="text-xs text-stone-500 mt-1">
              Speak directly with our operations team in Sangamner for personalized advice.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('FAQ Custom Inquiry')}
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#11181C] text-white hover:bg-black text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer flex-shrink-0"
          >
            Ask Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
