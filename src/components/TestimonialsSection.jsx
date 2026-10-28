import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = {
    col1: {
      name: 'Michael T.',
      avatar: '/images/12_michael_t.webp',
      service: 'Booked Kadlag Deep Cleaning Service',
      content:
        '“Their deep cleaning service completely transformed my kitchen. It feels like brand new again; worth every penny!”',
    },
    col2: {
      image: '/images/13_housekeeping_team_at_work.webp',
      name: 'David P.',
      avatar: '/images/14_david_p.webp',
      service: 'Booked Kadlag Office Cleaning Service',
      content:
        '“I loved how eco-friendly their products were. My house smells fresh, and I didn’t have to worry about harsh chemicals.”',
    },
    col3: [
      {
        name: 'Sara L.',
        avatar: '/images/15_sara_l.webp',
        service: 'Booked Kadlag Home Cleaning',
        content:
          '“Booking was super easy, and the cleaners were so polite. I’ll definitely be using their weekly service!”',
      },
      {
        name: 'Amelia R.',
        avatar: '/images/16_amelia_r.webp',
        service: 'Booked Kadlag Deep Cleaning Service',
        content:
          '“I’ve never seen my apartment this clean before! The Kadlag team was punctual, friendly, and incredibly thorough.”',
      },
    ],
  };

  return (
    <section className="py-24 bg-white border-b border-[#E6E8EB]/60" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#F8F8F5] border border-[#E6E8EB] text-stone-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5 text-[#E6E726]" />
            <span>Real Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#11181C]">
            Stories From Happy Homes
          </h2>
          <p className="text-[#687076] text-sm sm:text-base mt-3 leading-relaxed">
            Our customers love how Kadlag makes their spaces shine with professional care, friendly service, and spotless attention to every detail.
          </p>
        </div>

        {/* Grid Layout for Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Testimonial 1 */}
          <article className="bg-[#FBFBF9] p-6 sm:p-7 rounded-3xl border border-[#E6E8EB]/70 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  alt={reviews.col1.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#E6E726]"
                  src={reviews.col1.avatar}
                />
                <div>
                  <h4 className="text-sm font-bold text-[#11181C]">{reviews.col1.name}</h4>
                  <div className="flex text-amber-400 text-xs mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {reviews.col1.content}
              </p>
            </div>
            <p className="text-[11px] font-medium text-stone-400 border-t border-[#E6E8EB]/50 pt-3">
              — {reviews.col1.service}
            </p>
          </article>

          {/* Middle Feature Card with Photo */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-md h-56 relative group">
              <img
                alt="Housekeeping team at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={reviews.col2.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Dedicated On-site Crew
                </span>
              </div>
            </div>

            <article className="bg-[#FBFBF9] p-6 sm:p-7 rounded-3xl border border-[#E6E8EB]/70 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    alt={reviews.col2.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#E6E726]"
                    src={reviews.col2.avatar}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#11181C]">{reviews.col2.name}</h4>
                    <div className="flex text-amber-400 text-xs mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed font-normal">
                  {reviews.col2.content}
                </p>
              </div>
              <p className="text-[11px] font-medium text-stone-400 border-t border-[#E6E8EB]/50 pt-3">
                — {reviews.col2.service}
              </p>
            </article>
          </div>

          {/* Column 3: Two Reviews */}
          <div className="space-y-6">
            {reviews.col3.map((rev, index) => (
              <article
                key={index}
                className="bg-[#FBFBF9] p-6 sm:p-7 rounded-3xl border border-[#E6E8EB]/70 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-[#E6E726]"
                      src={rev.avatar}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#11181C]">{rev.name}</h4>
                      <div className="flex text-amber-400 text-xs mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed font-normal">
                    {rev.content}
                  </p>
                </div>
                <p className="text-[11px] font-medium text-stone-400 border-t border-[#E6E8EB]/50 pt-3">
                  — {rev.service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
