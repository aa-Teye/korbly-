import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const steps = [
  {
    num: '1',
    title: 'Research',
    text: 'We conduct deep, systematic research across African sovereign economies, sectors, and geographies to identify durable trends and compelling opportunities using proprietary causal models.',
  },
  {
    num: '2',
    title: 'Evaluate',
    text: 'We rigorously assess each opportunity against our investment criteria, with a focus on quality, valuation, downside protection, and alignment with our macro intelligence framework.',
  },
  {
    num: '3',
    title: 'Invest',
    text: 'We commit patient capital with the conviction and discipline necessary to support long-term value creation across infrastructure, private equity, and credit markets.',
  },
  {
    num: '4',
    title: 'Partner',
    text: 'We work alongside management teams as engaged partners, offering strategic guidance, operational expertise, and access to our institutional network.',
  },
]

const differentiators = [
  'Independent ownership structure rooted in Africa',
  'Significant principal capital invested alongside clients',
  'Strong alignment through fee and incentive design',
  'Proprietary macro intelligence and quantitative structuring',
  'Deep sector specialisation across investment teams',
  'Continuity of senior investment professionals',
  'Government SPV partnerships for proprietary deal flow',
  'NPRA-licensed institutional asset management',
]

export default function ApproachPage() {
  const { theme } = useTheme()
  const primary = theme === 'navy' ? 'navy' : 'burgundy'

  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(90deg, ${theme === 'navy' ? 'rgba(12,30,54,0.80)' : 'rgba(74,14,31,0.80)'} 0%, ${theme === 'navy' ? 'rgba(12,30,54,0.40)' : 'rgba(74,14,31,0.40)'} 100%)` }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className={`font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-${primary}-600`}>
              Investment Approach
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight text-5xl md:text-6xl"
            >
              Disciplined process.<br />Patient capital.<br />Aligned interests.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed font-light text-white/80 max-w-lg">
              Our approach is built on rigorous research, deep operational 
              insight, and a commitment to long-term partnership with the 
              businesses we back.
            </p>
          </div>
        </div>
      </section>

      {/* Process + Differentiators */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Process */}
          <div>
            <h2 className={`font-serif text-2xl font-medium text-${primary}-900 mb-10`}>
              Our Process
            </h2>
            <ol className="flex flex-col gap-8">
              {steps.map((step) => (
                <li key={step.num} className="flex gap-6">
                  <div className={`font-serif text-4xl text-${primary}-700 w-10 shrink-0 leading-none`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className={`font-sans font-semibold text-${primary}-900 text-sm`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* What sets us apart */}
          <div className="bg-paper p-10">
            <h2 className={`font-serif text-2xl font-medium text-${primary}-900 mb-6`}>
              What Sets Us Apart
            </h2>
            <ul className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`mt-0.5 shrink-0 text-${primary}-600`}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span className="font-sans text-sm font-light text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Risk Management */}
      <section className="bg-paper border-t border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className={`font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-${primary}-700`}>
              Risk Management
            </span>
            <h2 className={`mt-4 font-serif text-2xl font-medium text-${primary}-900 mb-6`}>
              Preserving capital is as important as growing it.
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed text-muted mb-4">
              We believe disciplined risk management is foundational to 
              compounding capital over time. Our approach integrates 
              rigorous quantitative analysis with the judgment that comes 
              from decades of investing experience across market cycles.
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-muted">
              Independent oversight, scenario testing, and continuous 
              portfolio monitoring ensure that we remain vigilant to 
              evolving market conditions and committed to preserving 
              the capital entrusted to us by our institutional partners.
            </p>
          </div>
          
          {/* Right column graphic for balanced layout */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop"
              alt="Rigorous analytical risk modelling"
              className="w-full h-[360px] object-cover border border-line"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
