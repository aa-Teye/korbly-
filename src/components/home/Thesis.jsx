import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Thesis() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left - Text */}
        <div className={`transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
            Our Thesis
          </span>
          <h2 className="mt-5 font-serif font-light leading-tight text-forest-900"
            style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3.5rem)' }}
          >
            The missing element is not capital — it is a{' '}
            <em className="italic text-forest-700">
              domestically owned institution
            </em>{' '}
            with the depth to deploy it.
          </h2>
          <p className="mt-7 font-sans text-[0.9rem] font-light leading-relaxed text-forest-900/70">
            Africa possesses approximately $775 billion in institutional 
            investor assets, access to at least $550 billion in available 
            international infrastructure capital, and a combined GDP 
            exceeding $2.97 trillion. Yet 80% of African infrastructure 
            projects fail before reaching financial close.
          </p>
          <p className="mt-5 font-sans text-[0.9rem] font-light leading-relaxed text-forest-900/70">
            Korbly is designed as a systematic merchant bank — the first 
            African institution combining macro intelligence, quantitative 
            structuring, sovereign advisory, private equity, and capital 
            markets infrastructure into a single integrated operating 
            system anchored in Accra, Ghana.
          </p>
          <Link
            to="/approach"
            className="mt-8 inline-flex items-center gap-3 font-sans text-[0.78rem] font-medium tracking-[0.08em] uppercase text-forest-700 border-b border-forest-700 pb-px hover:text-gold hover:border-gold transition-colors duration-200 no-underline"
          >
            Explore our platforms
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Right - Image */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format&fit=crop"
            alt="Accra business district"
            className="w-full object-cover"
            style={{ aspectRatio: '4/5' }}
          />
          {/* Gold accent border */}
          <div
            className="absolute border border-gold z-[-1]"
            style={{
              bottom: '-2rem',
              right: '-2rem',
              width: '60%',
              aspectRatio: '1',
            }}
          />
          {/* Badge */}
          <div className="absolute top-8 -left-8 bg-gold text-forest-900 px-7 py-6 font-sans text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-center leading-relaxed">
            Accra,<br />Ghana<br />Est. 2026
          </div>
        </div>

      </div>
    </section>
  )
}
