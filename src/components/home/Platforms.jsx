import { useEffect, useRef, useState } from 'react'

const platforms = [
  {
    num: '01',
    title: 'Macro Intelligence & Quantitative Structuring',
    desc: 'Systematic macroeconomic analysis of African sovereign economies, translating causal models into transaction-level pricing, risk allocation, and payoff design.',
    tags: ['Causal Modelling', 'Risk Pricing', 'FX Structuring'],
  },
  {
    num: '02',
    title: 'Private Equity & Capital Deployment',
    desc: 'Three thematic verticals — infrastructure & energy, industrialization & manufacturing, and intra-African trade & logistics — targeting USD 150–250M in committed capital.',
    tags: ['Infrastructure', 'Industrialization', 'Trade & Logistics'],
  },
  {
    num: '03',
    title: 'Global Advisory',
    desc: 'Independent corporate and sovereign advisory on M&A, capital raising, restructuring, fiscal transformation, and government SPV partnerships.',
    tags: ['Corporate M&A', 'Sovereign Advisory', 'SPV Partnerships'],
  },
  {
    num: '04',
    title: 'Institutional Capital Management',
    desc: 'Fixed income, NPRA-licensed pension fund management, private wealth, and Sovereign Wealth Management-as-a-Service — the only integrated turnkey offering on the continent.',
    tags: ['Pension Management', 'Private Wealth', 'SWF-as-a-Service'],
  },
  {
    num: '05',
    title: 'Capital Markets Infrastructure',
    desc: 'Brokerage, debt capital markets, structured product origination, and market-making — building exit pathways, benchmarks, and pricing references.',
    tags: ['Debt Markets', 'Structured Products', 'Market Infrastructure'],
  },
  {
    num: '06',
    title: 'Data & Analytics Licensing',
    desc: 'Risk analytics dashboards, transaction pricing tools, sovereign risk assessments, and compliance-grade reporting modules licensed to pension funds, DFIs, and institutional investors.',
    tags: ['Risk Analytics', 'Data Licensing', 'SaaS Revenue'],
  },
]

export default function Platforms() {
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
    <section className="bg-navy-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 py-14">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
              Integrated Architecture
            </span>
            <h2 className="mt-4 font-serif text-2xl font-medium text-white leading-tight"
            >
              Four Platforms.<br />One Operating System.
            </h2>
          </div>
          <p className={`font-sans text-sm font-light leading-relaxed text-white/65 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            No existing African-owned institution combines systematic 
            macro intelligence, quantitative transaction structuring, 
            sovereign advisory, private equity, and capital markets 
            infrastructure into a single platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-600/15">
          {platforms.map((platform, i) => (
            <div
              key={platform.num}
              className={`bg-ink/90 p-10 hover:bg-navy-800 transition-all duration-300 group relative overflow-hidden ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: i * 100 + 'ms' }}
            >
              {/* Top border line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-navy-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Number */}
              <div className="font-serif text-6xl font-light text-navy-600/10 leading-none mb-4 select-none">
                {platform.num}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-light text-white leading-snug mb-4">
                {platform.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs font-light leading-relaxed text-white/60">
                {platform.desc}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {platform.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[0.62rem] font-medium tracking-[0.1em] uppercase text-navy-600 border border-navy-600/30 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
