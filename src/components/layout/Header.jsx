import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Our Firm', path: '/about' },
    { label: 'Investment Approach', path: '/approach' },
    { label: 'Strategies', path: '/strategies' },
    { label: 'Insights', path: '/insights' },
    { label: 'Resources', path: '/resources' },
    { label: 'Investor Portal', path: '/investor-portal' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-[2px] no-underline">
          <span className="font-serif text-2xl font-semibold tracking-[0.12em] text-navy-900 leading-none">
            KORBLY
          </span>
          <span className="font-sans text-[0.55rem] font-medium tracking-[0.28em] uppercase text-navy-700">
            Investment Partners
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-sans text-[0.82rem] font-normal tracking-wide no-underline transition-colors duration-150 group
                ${location.pathname === link.path 
                  ? 'text-navy-700' 
                  : 'text-ink hover:text-navy-700'
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-[-4px] left-0 h-[1px] bg-navy-600 transition-all duration-300
                  ${location.pathname === link.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="font-sans text-[0.78rem] font-medium tracking-[0.06em] px-5 py-[0.65rem] bg-navy-900 text-white hover:bg-navy-800 transition-colors duration-200 no-underline"
          >
            Contact Us
          </Link>

          <button
            aria-label="Search"
            className="text-navy-900 hover:text-navy-700 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7"/>
              <path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}
