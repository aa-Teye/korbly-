import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function CTAStrip() {
  const { theme } = useTheme()
  const primary = theme === 'navy' ? 'navy' : 'burgundy'

  return (
    <section className={`bg-${theme === 'navy' ? 'navy' : 'burgundy'}-900 relative overflow-hidden`}>
      
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-2/5 h-full opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597149700927-7b01f51c0fb7?w=800&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        <div>
          <h2 className="font-serif font-light text-white leading-tight text-2xl"
          >
            Let's build something enduring—together.
          </h2>
          <p className="mt-3 font-sans text-sm font-light text-white/65">
            We welcome the opportunity to connect with institutional 
            investors, sovereigns, and management teams.
          </p>
        </div>

        <Link
          to="/contact"
          className={`inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.08em] uppercase px-8 py-4 bg-white text-ink hover:bg-white/90 transition-colors duration-200 no-underline whitespace-nowrap flex-shrink-0`}
        >
          Contact Our Team
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </Link>

      </div>
    </section>
  )
}
