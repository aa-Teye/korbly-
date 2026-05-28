import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=85&auto=format&fit=crop',
    title: 'Macro Financial Skyline at Dusk',
  },
  {
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85&auto=format&fit=crop',
    title: 'Macro Intelligence & Sovereign Capital',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85&auto=format&fit=crop',
    title: 'Primary Industrial Infrastructure',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=85&auto=format&fit=crop',
    title: 'Sovereign Advisory & SPV Partnerships',
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden bg-navy-900">
      
      {/* Background Images Slideshow with Crossfade */}
      {slides.map((slide, idx) => (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-80' : 'opacity-0'
          } mix-blend-overlay`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
      ))}

      {/* Dynamic light gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(90deg, rgba(12,30,54,0.78) 0%, rgba(12,30,54,0.45) 55%, rgba(12,30,54,0.25) 100%)'
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-full z-[1]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(38,74,130,0.12), transparent)'
        }}
      />

      {/* Slide Navigation Dots (Vertical on absolute right) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[10] hidden md:flex">
        {slides.map((slide, idx) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full border border-navy-600 transition-all duration-300 focus:outline-none ${
              idx === currentSlide ? 'bg-navy-600 h-6' : 'bg-transparent hover:bg-white/40'
            }`}
            title={`Show image for: ${slide.title}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-8xl mx-auto px-10 w-full py-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-[2]">
        
        {/* Left - Main Content */}
        <div className="lg:col-span-7">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-navy-600" />
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
              Africa's First Systematic Merchant Bank
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-white leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl"
          >
            Long-Term Thinking.<br />
            <span className="text-navy-600">Meaningful Outcomes.</span>
          </h1>

          {/* Lead text */}
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed font-light text-white/75">
            Korbly Investment Partners is a private investment firm 
            focused on generating enduring value through discipline, 
            experience, and alignment. Based in Accra, Ghana.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/approach"
              className="inline-flex items-center gap-4 font-sans text-sm px-6 py-3 bg-white text-navy-900 hover:bg-navy-700 hover:text-white transition-all duration-200 no-underline shadow-md"
            >
              Our Approach
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              to="/investor-portal"
              className="inline-flex items-center gap-3 font-sans text-sm px-6 py-3 text-white border border-white/20 hover:border-navy-600 hover:text-navy-600 transition-all duration-200 no-underline"
            >
              Investor Portal
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right - Philosophy Card */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div
            className="p-8 border border-white/10 backdrop-blur bg-navy-900/95 relative overflow-hidden"
          >
            {/* Card eyebrow */}
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-white/70">
              Our Philosophy
            </span>

            {/* Card title */}
            <h2 className="mt-3 font-serif text-xl font-medium text-white leading-snug">
              We partner with exceptional management teams to build great businesses.
            </h2>

            {/* Divider */}
            <div className="my-4 border-t border-white/10" />

            {/* Stats */}
            <div className="flex flex-col gap-0">
              {[
                { label: 'Africa Infrastructure Gap (Annual)', value: '$50–90B', suffix: 'deficit' },
                { label: 'Institutional Assets, Africa', value: '$775B', suffix: 'total' },
                { label: 'Target Net IRR', value: '18–25%', suffix: 'p.a.' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-baseline py-2 border-b border-white/[0.06] last:border-b-0"
                >
                  <span className="font-sans text-xs text-white/55">
                    {stat.label}
                  </span>
                  <span className="font-serif text-base font-medium text-navy-600">
                    {stat.value}
                    <span className="font-sans text-xs text-white/45 ml-1">
                      {stat.suffix}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card link with customized circle-wrapped chevron */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <Link
                to="/approach"
                className="flex items-center justify-between w-full font-sans text-xs text-white/80 hover:text-navy-600 transition-colors duration-200 no-underline group"
              >
                <span>Learn more about our philosophy.</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/20 group-hover:border-navy-600 group-hover:text-navy-600 ml-4 flex-shrink-0 transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-[2]">
        <div className="w-px h-6 bg-gradient-to-b from-navy-600 to-transparent animate-pulse" />
        <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-white/40">
          Scroll
        </span>
      </div>

    </section>
  )
}
