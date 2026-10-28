import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Leaf,
  Users,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Headphones,
  GraduationCap,
  Activity,
  Star,
  HeartPulse,
  Shield,
} from 'lucide-react';

import heroImg1 from '../assets/about_stitch/about_stitch_2.webp';
import philosophyImg from '../assets/about_stitch/about_stitch_3.webp';
import academyImg from '../assets/about_stitch/about_stitch_4.webp';
import avatarRajesh from '../assets/about_stitch/about_stitch_5.webp';
import avatarAnanya from '../assets/about_stitch/about_stitch_6.webp';
import avatarVikram from '../assets/about_stitch/about_stitch_7.webp';

export default function AboutUsPage({ onOpenBooking, onNavigateHome }) {
  const metrics = [
    { value: '10K+', label: 'Delighted Clients' },
    { value: '100K+', label: 'Hours Logged' },
    { value: '4.9/5', label: 'Audit Score', highlight: true },
    { value: '15+', label: 'Years Industry Exp.' },
    { value: '250+', label: 'Enterprise Campuses', badge: true },
  ];

  const pillars = [
    {
      num: '01 / Rigor',
      title: 'Impeccable Precision',
      desc: 'Proprietary 48-point quality checklists and digital audit trails. From sub-floor HVAC intake registers to polished stone surfaces, every detail is systematically inspected.',
      audit: 'Standardized SLA Audits',
      icon: ClipboardCheck,
    },
    {
      num: '02 / Ecology',
      title: 'Eco-Conscious Chemistry',
      desc: 'We eliminate harsh petrochemical bleach and volatile organic compounds (VOCs). Exclusively non-toxic, bio-enzymatic agents safe for kids, pets, and staff.',
      audit: 'Biodegradable Formulations',
      icon: Leaf,
      accent: true,
    },
    {
      num: '03 / Human Asset',
      title: 'Vetted Specialists',
      desc: '100% background-verified through municipal police records and civil screening. Trained in modern sanitization protocols, discrete manners, and hazard control.',
      audit: 'Police Background Cleared',
      icon: ShieldCheck,
    },
    {
      num: '04 / Assurance',
      title: 'Direct Oversight',
      desc: 'No faceless support queues. Every corporate and residential account is assigned a dedicated Area Operations Lead reachable 24/7 for instantaneous resolution.',
      audit: 'Dedicated Account Lead',
      icon: Headphones,
    },
  ];

  const testimonials = [
    {
      quote:
        '“Kadlag replaced our prior agency across our 4-story corporate office. The noticeable shift wasn’t just sparkling glass—it was the quiet, punctual professionalism of their technicians and absence of toxic fumes.”',
      author: 'Rajesh Varma',
      role: 'VP Operations, FinEdge Tech Park',
      avatar: avatarRajesh,
    },
    {
      quote:
        '“With two golden retrievers and toddlers at home, finding deep-cleaning teams that avoid harsh industrial detergents seemed impossible. Kadlag’s non-toxic enzymatic approach is pure artisanal perfection.”',
      author: 'Ananya Sen',
      role: 'Architect & Residential Client',
      avatar: avatarAnanya,
    },
    {
      quote:
        '“Their audit responsiveness is unparalleled. The facility coordinator visits weekly, verifies checklist items, and optimizes sanitation cycles proactively. Kadlag truly manages the comfort of our community.”',
      author: 'Vikram Malhotra',
      role: 'Secretary, Oakridge Enclave',
      avatar: avatarVikram,
    },
  ];

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
          <span className="text-black font-bold">About Us</span>
        </nav>
      </div>

      {/* SECTION 1: EDITORIAL ABOUT HERO */}
      <section className="relative w-full overflow-hidden px-6 sm:px-12 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEEEEB] text-stone-700 shadow-xs border border-stone-200/60">
                <span className="w-2 h-2 rounded-full bg-[#E6E726]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900">
                  About Kadlag Facility Management
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-medium leading-[1.08] text-[#11181C] tracking-tight">
                Redefining Facility Care with{' '}
                <span className="italic font-brand-serif font-bold text-[#606800]">
                  Human Touch
                </span>{' '}
                &amp; Rigorous Discipline.
              </h1>

              <p className="text-stone-600 text-base sm:text-lg max-w-2xl pt-2 leading-relaxed font-normal">
                Founded with a commitment to dignity, environmental stewardship, and institutional rigor, Kadlag elevates spaces across residential havens and commercial headquarters through certified, compassionate caretakers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenBooking('Schedule Facility Consultation')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Schedule Facility Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-stone-200 text-stone-800 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-xs font-semibold tracking-wide">
                    ISO 9001:2015 &amp; Green Shield Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Mosaic Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-stone-200 group border border-white">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Kadlag Facility Management Specialist"
                  src={heroImg1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom Card over photo */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between border border-stone-100">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#606800]">
                      Pledge of Integrity
                    </p>
                    <p className="text-sm font-bold text-[#11181C]">
                      Dignified Labor &amp; Zero Toxins
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E6E726] flex items-center justify-center text-black shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Decorative Floating Card */}
              <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white shadow-xl max-w-xs z-20 border border-stone-200/80">
                <div className="w-10 h-10 rounded-full bg-[#E6E726]/30 flex items-center justify-center text-[#606800]">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#11181C]">100% Bio-Enzymatic</p>
                  <p className="text-[11px] text-stone-500">Zero carcinogenic fumes or chlorine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY METRICS STRIP */}
      <section className="w-full bg-[#F4F4F1] py-10 px-6 sm:px-12 border-y border-stone-200/80">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl shadow-xs transition-transform hover:-translate-y-0.5 ${
                  item.badge
                    ? 'col-span-2 md:col-span-1 bg-[#E6E726] text-black'
                    : 'bg-white'
                }`}
              >
                <p
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    item.highlight ? 'text-[#606800]' : 'text-[#11181C]'
                  }`}
                >
                  {item.value}
                </p>
                <p className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE FOUNDING STORY & DIGNITY PILLAR */}
      <section className="w-full px-6 sm:px-12 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Composition */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-stone-200 group border border-white">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="State of the art facility training workshop"
                  src={philosophyImg}
                />
              </div>

              {/* Overlapping Micro Metric Card */}
              <div className="absolute -bottom-8 -right-4 md:right-6 bg-[#11181C] text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-stone-800">
                <div className="flex items-center gap-2 text-[#E6E726] mb-1.5">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    Living Wages
                  </span>
                </div>
                <p className="text-base font-bold text-white">1,200+ Staff Up-skilled</p>
                <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                  Comprehensive health insurance, family educational grants, and certified ergonomic certifications.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEEEB] text-stone-800 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#E6E726]" />
                <span>Our Philosophy &amp; Genesis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] leading-tight">
                Built on the conviction that clean spaces reflect humane, dignified partnerships.
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Kadlag Facility Management Pvt. Ltd. was established to correct an industry disconnect: the commoditization of cleaning workers and reliance on harsh, volatile chemicals that compromised both ambient indoor air quality and human wellbeing.
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We built a service model centered on three non-negotiables:{' '}
                <strong className="text-black font-extrabold">Clean. Care. Comfort.</strong> By treating facility staff as master technicians—equipping them with rigorous multi-stage training, dignified compensation, and plant-based, enzyme-driven detergents—we deliver immaculate precision for high-density tech parks, healthcare centers, luxury residences, and retail flagships throughout Maharashtra and India.
              </p>

              {/* Quote Block */}
              <div className="p-6 bg-white border border-stone-200 rounded-2xl relative shadow-sm">
                <p className="text-base sm:text-lg italic font-brand-serif text-stone-900 leading-relaxed">
                  “True hygiene is not an invisible, chemical-laden facade. It is the peace of mind that every corner was attended to by valued, skilled hands using non-toxic care.”
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#11181C]">S. Kadlag</p>
                    <p className="text-xs text-stone-500">Founder &amp; Managing Director</p>
                  </div>
                  <span className="font-brand-serif italic font-black text-xl text-stone-400">
                    KADLAG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE FOUR CORE PILLARS */}
      <section className="w-full bg-[#EEEEEB]/60 py-20 lg:py-28 px-6 sm:px-12 border-y border-stone-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[#606800]">
                Operating Standards
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] mt-2">
                Our Four Cornerstones of Operational Excellence
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
              Every facility contract operates on standardized multi-point protocols developed over fifteen years of institutional stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl shadow-sm border border-stone-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs ${
                        item.accent ? 'bg-[#E6E726] text-black' : 'bg-[#F4F4F1] text-black'
                      }`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#606800] mb-1">
                      {item.num}
                    </p>

                    <h3 className="text-lg font-bold text-[#11181C] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <span className="inline-flex items-center text-xs font-bold text-stone-900 gap-1.5 group-hover:text-black">
                      <span>{item.audit}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAINING CENTER & LEADERSHIP HIGHLIGHT */}
      <section className="w-full px-6 sm:px-12 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-[#11181C] text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-2xl border border-stone-800">
            {/* Background organic lighting effect */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E6E726]/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E6E726] border border-white/10">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">
                    Kadlag Academy of Facility Excellence
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                  Where Skill Becomes a Matter of Pride.
                </h2>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Before stepping foot onto your property, our team members complete an intensive 120-hour curriculum covering chemical neutrality, delicate architectural surfaces (travertine, teakwood, acoustic glass), and fire safety ergonomics.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Activity className="w-6 h-6 text-[#E6E726]" />
                    <p className="text-lg font-bold text-white mt-2">120 Hours</p>
                    <p className="text-[11px] text-stone-400">Hands-on Lab Simulation</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-6 h-6 text-[#E6E726]" />
                    <p className="text-lg font-bold text-white mt-2">100% Insured</p>
                    <p className="text-[11px] text-stone-400">Full Comprehensive Indemnity</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking('Corporate On-Site Demo')}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Inquire About Corporate On-Site Demos</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Photo of Training Academy */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl bg-stone-800 border border-white/10 group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Corporate training academy demonstration"
                    src={academyImg}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-[#11181C] p-4 rounded-2xl backdrop-blur-md shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#606800]">
                        Maharashtra Training Hubs
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#11181C]">
                        Continuous Certification Modules
                      </p>
                    </div>
                    <Award className="w-6 h-6 text-[#606800]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT STORIES & ACCREDITATIONS */}
      <section className="w-full px-6 sm:px-12 py-20 lg:py-28 bg-[#F9F9F6]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#606800]">
              Endorsement &amp; Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11181C] mt-2">
              Validated by Discerning Spaces
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3">
              From luxury high-rises to multi-acre corporate campuses, here is why operations directors and homeowners entrust us with their sanctums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed italic font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100 border border-stone-200 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.author}
                      src={item.avatar}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#11181C]">{item.author}</p>
                    <p className="text-xs text-stone-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-16 pt-10 border-t border-stone-200/80 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-85">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                ISO 9001:2015 Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-[#606800]" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                Green Business Council
              </span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="w-6 h-6 text-[#11181C]" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                OSHA Compliant
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#11181C]" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                100% Background Screened
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION STRIP */}
      <section className="w-full px-6 sm:px-12 pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-gradient-to-r from-[#EEEEEB] via-[#F4F4F1] to-[#EEEEEB] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-stone-200">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[#606800] font-bold text-xs uppercase tracking-widest">
                <span>Experience The Kadlag Standard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#11181C]">
                Ready to bring certified care &amp; comfort to your environment?
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Connect with our facility assessment team for a complimentary on-premise review and tailored maintenance strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={() => onOpenBooking('Site Assessment')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E6E726] hover:bg-[#D4D51E] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                Book Site Assessment
              </button>
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#11181C] font-semibold text-xs tracking-wider border border-stone-200 transition-all shadow-xs cursor-pointer text-center"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

