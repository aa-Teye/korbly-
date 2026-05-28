import { Link } from 'react-router-dom'

const strategies = [
  {
    title: 'Global Equity',
    desc: 'Investing in high-quality companies with durable competitive advantages and attractive long-term return potential across global and African markets.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop',
    points: [
      'Concentrated portfolios of 8-12 investments',
      'Bottom-up fundamental research',
      'Long-term investment horizon',
    ],
  },
  {
    title: 'Income Opportunities',
    desc: 'Seeking attractive risk-adjusted income across fixed income and credit markets, with a focus on capital preservation and durable yield.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900&q=80&auto=format&fit=crop',
    points: [
      'Multi-sector approach',
      'Focus on downside protection',
      'Active duration management',
    ],
  },
  {
    title: 'Private Credit',
    desc: 'Providing customised financing solutions to middle-market companies, structured to deliver attractive risk-adjusted returns with strong covenant protection.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&q=80&auto=format&fit=crop',
    points: [
      'Direct origination',
      'Senior-secured focus',
      'Partnership-oriented structuring',
    ],
  },
]

export default function StrategiesPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(12,30,54,0.75) 0%, rgba(12,30,54,0.40) 60%, rgba(12,30,54,0.20) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
              Our Strategies
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight text-4xl md:text-5xl"
            >
              Focused strategies,<br />designed to deliver<br />long-term value.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed font-light text-white/85 max-w-lg">
              We employ a range of investment strategies across public 
              and private markets, each grounded in disciplined research 
              and patient capital.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-14">
          <h2 className="font-serif text-2xl font-medium text-navy-900 mb-10">
            Our Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy) => (
              <article
                key={strategy.title}
                className="bg-white border border-line hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={strategy.image}
                    alt={strategy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-light text-navy-900">
                    {strategy.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted flex-grow">
                    {strategy.desc}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {strategy.points.map((point) => (
                      <li key={point} className="flex gap-2 font-sans text-xs text-muted">
                        <span className="text-navy-700 font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-line/60 pt-4 mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase text-navy-700 hover:text-navy-600 transition-colors duration-200 no-underline"
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Table */}
      <section className="bg-paper border-t border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-14">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
                Track Record
              </span>
              <h2 className="mt-3 font-serif text-2xl font-medium text-navy-900">
                Strategy Performance
              </h2>
              <p className="font-sans text-xs text-muted mt-1">
                As of March 31, 2026
              </p>
            </div>
          </div>
          <div className="bg-white border border-line overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-paper">
                  {['Strategy', 'Q1 2026', '1 Year', '3 Year', '5 Year', 'Since Inception'].map((col, i) => (
                    <th key={col} className={`px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] uppercase text-muted border-b border-line ${i === 0 ? 'text-left' : 'text-right'}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Korbly Global Equity', q1: '4.2%', one: '12.8%', three: '8.7%', five: '10.3%', inc: '9.6%' },
                  { name: 'Korbly Income Opportunities', q1: '1.6%', one: '6.1%', three: '4.3%', five: '5.2%', inc: '5.0%' },
                  { name: 'Korbly Private Credit', q1: '2.1%', one: '8.3%', three: '6.5%', five: '6.9%', inc: '7.1%' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-line last:border-b-0 hover:bg-navy-600/[0.03] transition-colors duration-150">
                    <td className="px-7 py-5 font-sans text-sm font-medium text-navy-900">{row.name}</td>
                    {[row.q1, row.one, row.three, row.five, row.inc].map((val, j) => (
                      <td key={j} className="px-7 py-5 font-serif text-base font-medium text-right text-ink tabular-nums">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 font-sans text-xs text-muted leading-relaxed">
            Performance is net of fees. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p className="font-serif font-light text-white text-2xl leading-snug">
            Looking for a partner with a long-term perspective?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-sans text-sm px-6 py-3 bg-white text-navy-900 hover:bg-paper transition-all duration-200 no-underline whitespace-nowrap"
          >
            Contact Our Team
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
