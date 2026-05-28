import { useState } from 'react'
import { Link } from 'react-router-dom'

const strategies = [
  {
    id: 0,
    name: 'Korbly Global Equity',
    desc: 'Systematic capital growth across premium liquid assets, global equities, and high-growth corporate networks.',
    q1: '+4.2%',
    oneYear: '+12.8%',
    threeYear: '+8.7%',
    fiveYear: '+10.3%',
    inception: '+9.6%',
    assetClass: 'Global Equities',
    targetIrr: '18–25% p.a.',
    risk: 'Moderate-High',
    fee: '1.5% Management',
    liquidity: 'Quarterly Redemptions',
    color: '#264a82',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    )
  },
  {
    id: 1,
    name: 'Korbly Income Opportunities',
    desc: 'Structured yields and stable payoffs generated from primary infrastructure projects, sovereign debt, and secure trade flows.',
    q1: '+1.6%',
    oneYear: '+6.1%',
    threeYear: '+4.3%',
    fiveYear: '+5.2%',
    inception: '+5.0%',
    assetClass: 'Fixed Income & Sovereign Debt',
    targetIrr: '12–15% p.a.',
    risk: 'Low-Moderate',
    fee: '1.0% Management',
    liquidity: 'Bi-Annual Redemptions',
    color: '#13294b',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Korbly Private Credit',
    desc: 'Bespoke, fully-collateralized loans and private debt facilities extended to high-quality domestic corporate operations.',
    q1: '+2.1%',
    oneYear: '+8.3%',
    threeYear: '+6.5%',
    fiveYear: '+6.9%',
    inception: '+7.1%',
    assetClass: 'Secured Private Credit',
    targetIrr: '16–20% p.a.',
    risk: 'Moderate',
    fee: '2.0% Management & 20% Incentive',
    liquidity: 'Closed-end SPV Structure',
    color: '#0c1e36',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  }
]

export default function Performance() {
  const [activeTab, setActiveTab] = useState('dashboard') // 'dashboard' or 'table'
  const [selectedStrategy, setSelectedStrategy] = useState(0)

  const activeStrat = strategies[selectedStrategy]

  return (
    <section className="bg-paper border-t border-line">
      <div className="max-w-8xl mx-auto px-10 py-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-navy-600">
              Track Record
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-medium text-navy-900 leading-tight">
              Strategy Performance
            </h2>
            <p className="font-sans text-xs text-muted mt-2">
              Audited Net Returns as of March 31, 2026
            </p>
          </div>

          {/* Interactive Navigation & View Switcher */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-line/45 p-1 rounded-sm flex items-center border border-line">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === 'dashboard'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-navy-900/60 hover:text-navy-900'
                }`}
              >
                Interactive Dashboard
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === 'table'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-navy-900/60 hover:text-navy-900'
                }`}
              >
                Tabular Grid
              </button>
            </div>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase text-navy-700 hover:text-navy-600 transition-all duration-200 no-underline pb-px border-b border-transparent hover:border-navy-600 shrink-0"
            >
              Audited Disclosures
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {activeTab === 'dashboard' ? (
          /* View 1: Interactive Dashboard */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Side: Strategy Selection Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {strategies.map((strat, idx) => {
                const isActive = idx === selectedStrategy
                return (
                  <button
                    key={strat.id}
                    onClick={() => setSelectedStrategy(idx)}
                    className={`w-full text-left p-6 border transition-all duration-300 flex items-start gap-4 focus:outline-none relative group ${
                      isActive
                        ? 'bg-white border-navy-600 shadow-md translate-x-2'
                        : 'bg-white/80 border-line hover:border-navy-600/50 hover:bg-white hover:translate-x-1 shadow-sm'
                    }`}
                  >
                    {/* Glowing active indicator line */}
                    {isActive && (
                      <div className="absolute left-0 top-0 w-[4px] h-full bg-navy-600" />
                    )}

                    <div className={`p-3 shrink-0 transition-colors ${
                      isActive ? 'bg-navy-900 text-white' : 'bg-paper text-navy-600 group-hover:bg-navy-600/10'
                    }`}>
                      {strat.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-navy-900 leading-snug">
                        {strat.name}
                      </h3>
                      <p className="mt-2 font-sans text-xs font-light text-muted leading-relaxed line-clamp-2">
                        {strat.desc}
                      </p>
                      
                      {/* Compact highlights */}
                      <div className="mt-4 flex items-center justify-between border-t border-line/50 pt-3">
                        <span className="font-sans text-[0.62rem] font-bold tracking-wider text-navy-600 uppercase">
                          Target IRR
                        </span>
                        <span className="font-serif text-sm font-semibold text-navy-900">
                          {strat.targetIrr}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Side: Visual Metrics & Growth Chart (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-line p-8 lg:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
              
              {/* Subtle background brand accent */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-navy-600/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              <div>
                {/* Header Information */}
                <div className="flex flex-wrap justify-between items-start gap-4 border-b border-line/60 pb-6 mb-8">
                  <div>
                    <span className="font-sans text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy-600 block mb-1">
                      {activeStrat.assetClass}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-navy-900">
                      {activeStrat.name}
                    </h3>
                  </div>
                  <div className="bg-navy-600/10 border border-navy-600/20 px-3 py-1 text-center shrink-0">
                    <span className="font-sans text-[0.62rem] font-bold tracking-wider text-navy-700 uppercase block">
                      Risk Level
                    </span>
                    <span className="font-sans text-xs font-semibold text-navy-900">
                      {activeStrat.risk}
                    </span>
                  </div>
                </div>

                {/* Return metrics layout */}
                <p className="font-sans text-sm font-light leading-relaxed text-muted mb-8">
                  {activeStrat.desc}
                </p>

                {/* Animated Growth Charts */}
                <div className="space-y-6">
                  <h4 className="font-sans text-[0.7rem] tracking-[0.2em] uppercase font-bold text-navy-900 mb-4 border-b border-line/30 pb-2">
                    Net Returns Distribution
                  </h4>
                  
                  {[
                    { label: 'Q1 2026', value: activeStrat.q1, width: parseFloat(activeStrat.q1) * 7 },
                    { label: '1 Year', value: activeStrat.oneYear, width: parseFloat(activeStrat.oneYear) * 7 },
                    { label: '3 Year (Ann.)', value: activeStrat.threeYear, width: parseFloat(activeStrat.threeYear) * 7 },
                    { label: '5 Year (Ann.)', value: activeStrat.fiveYear, width: parseFloat(activeStrat.fiveYear) * 7 },
                    { label: 'Since Inception (Ann.)', value: activeStrat.inception, width: parseFloat(activeStrat.inception) * 7 },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-sans text-xs text-navy-900 font-medium">
                          {item.label}
                        </span>
                        <span className="font-serif text-sm font-bold text-navy-900 flex items-center gap-1">
                          <span className="text-[0.65rem] text-[#1B7F52]">↑</span>
                          {item.value}
                        </span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="w-full bg-paper h-2.5 rounded-sm overflow-hidden border border-line/45">
                        <div
                          className="bg-navy-900 h-full rounded-sm transition-all duration-1000 ease-out group-hover:bg-navy-600"
                          style={{
                            width: `${Math.max(5, Math.min(100, item.width))}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line/60 pt-8 mt-10 font-sans text-xs">
                <div className="bg-paper/45 p-4 border border-line/40 rounded-sm">
                  <h5 className="font-bold text-navy-600 uppercase tracking-wider mb-1">Target IRR</h5>
                  <p className="font-serif text-sm font-semibold text-navy-900">{activeStrat.targetIrr}</p>
                </div>
                <div className="bg-paper/45 p-4 border border-line/40 rounded-sm">
                  <h5 className="font-bold text-navy-600 uppercase tracking-wider mb-1">Fee Structure</h5>
                  <p className="font-sans font-light text-navy-900 leading-tight">{activeStrat.fee}</p>
                </div>
                <div className="bg-paper/45 p-4 border border-line/40 rounded-sm">
                  <h5 className="font-bold text-navy-600 uppercase tracking-wider mb-1">Liquidity Option</h5>
                  <p className="font-sans font-light text-navy-900 leading-tight">{activeStrat.liquidity}</p>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* View 2: Redesigned Tabular Grid */
          <div className="bg-white border border-line overflow-hidden shadow-sm animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full text-base border-collapse">
                <thead>
                  <tr className="bg-paper">
                    {['Strategy Portfolio', 'Q1 2026', '1 Year Net', '3 Year Net (Ann.)', '5 Year Net (Ann.)', 'Since Inception'].map((col, i) => (
                      <th
                        key={col}
                        className={`px-8 py-5 font-sans text-xs font-bold tracking-[0.14em] uppercase text-navy-900 border-b border-line ${
                          i === 0 ? 'text-left' : 'text-right'
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {strategies.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-navy-600/[0.02] transition-colors duration-150"
                    >
                      {/* Name & Asset Class */}
                      <td className="px-8 py-6">
                        <span className="font-serif text-base font-semibold text-navy-900 block">
                          {row.name}
                        </span>
                        <span className="font-sans text-[0.62rem] font-bold tracking-wider text-navy-600 uppercase block mt-1">
                          {row.assetClass}
                        </span>
                      </td>

                      {/* Returns */}
                      {[row.q1, row.oneYear, row.threeYear, row.fiveYear, row.inception].map((val, j) => (
                        <td
                          key={j}
                          className="px-8 py-6 text-right font-serif text-base font-medium text-ink tabular-nums"
                        >
                          <span className="inline-flex items-center gap-1.5 justify-end">
                            <span className="text-[0.65rem] text-[#1B7F52]">↑</span>
                            <span className="text-navy-900 font-semibold">{val}</span>
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footnote Disclosures */}
        <div className="mt-8 bg-paper p-6 border border-line/60 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-sans text-xs">
          <p className="text-muted leading-relaxed max-w-3xl">
            Performance figures are net of administrative, advisory, and transaction fees. 
            All results represent audited portfolios under statutory NPRA frameworks. 
            <strong> Past performance is not indicative of future market conditions.</strong>
          </p>
          <Link
            to="/investor-portal"
            className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase px-5 py-3 bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 no-underline whitespace-nowrap shadow-sm"
          >
            Access Investor Portal
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
