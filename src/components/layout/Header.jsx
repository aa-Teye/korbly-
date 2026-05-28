import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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

  const primary = theme === 'navy' ? 'navy' : 'burgundy'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-line transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        <Link to="/" className="leading-tight no-underline">
          <div className={`logo-mark text-${primary}-900 text-lg font-semibold tracking-[0.18em]`}>
            KORBLY
          </div>
          <div className={`text-${primary}-700 uppercase tracking-[0.28em] text-[0.625rem] font-normal`}>
            Investment Partners
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm no-underline transition-colors duration-150
                ${location.pathname === link.path
                  ? `text-${primary}-600`
                  : `text-ink hover:text-${primary}-600`
                }`}
            >
              {link.label}
              <span className={`absolute bottom-[-4px] left-0 h-px bg-${primary}-600 transition-all duration-300
                ${location.pathname === link.path ? 'w-full' : 'w-0 hover:w-full'}`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`text-xs font-medium px-3 py-1.5 border transition-colors duration-200
              ${theme === 'navy'
                ? 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                : 'border-burgundy-900 text-burgundy-900 hover:bg-burgundy-900 hover:text-white'
              }`}
            title="Switch theme"
          >
            {theme === 'navy' ? 'Navy' : 'Burgundy'}
          </button>
          <Link
            to="/contact"
            className={`text-sm px-5 py-2.5 text-white transition-colors duration-200 no-underline
              ${theme === 'navy' ? 'bg-navy-900 hover:bg-navy-800' : 'bg-burgundy-900 hover:bg-burgundy-800'}`}
          >
            Contact Us
          </Link>
          <button aria-label="Search" className="text-ink hover:text-navy-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/>
              <path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
