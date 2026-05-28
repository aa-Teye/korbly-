import { useState } from 'react'

const resourceCategories = [
  {
    title: 'Corporate & Strategy',
    desc: 'Core overviews, investment frameworks, and operational governance protocols for Korbly Investment Partners.',
    items: [
      { name: 'Korbly Institutional Brochure', type: 'PDF', size: '4.2 MB', date: 'March 2026' },
      { name: 'Systematic Merchant Banking Framework', type: 'PDF', size: '2.8 MB', date: 'January 2026' },
      { name: 'Sovereign Advisory & SPV Guidelines', type: 'PDF', size: '1.9 MB', date: 'February 2026' },
      { name: 'ESG & Sustainable Infrastructure Charter', type: 'PDF', size: '3.1 MB', date: 'March 2026' },
    ]
  },
  {
    title: 'Compliance & Statutory',
    desc: 'Statutory filings, licensing disclosures, pension regulations compliance, and performance audits.',
    items: [
      { name: 'NPRA Tier 2 Pension Compliance Statement', type: 'PDF', size: '1.4 MB', date: 'Q1 2026' },
      { name: 'Audited Performance Track Record Report', type: 'PDF', size: '2.5 MB', date: 'December 2025' },
      { name: 'Anti-Money Laundering (AML) & KYC Pack', type: 'ZIP', size: '5.8 MB', date: 'January 2026' },
      { name: 'Investor Portal Access Protocol', type: 'PDF', size: '820 KB', date: 'March 2026' },
    ]
  },
  {
    title: 'Analytics & Models',
    desc: 'Sovereign risk assessment templates, quantitative modeling spreadsheets, and data dashboards.',
    items: [
      { name: 'Sovereign Debt Risk Template (Accra Model)', type: 'XLSM', size: '8.4 MB', date: 'March 2026' },
      { name: 'Intra-African Trade Liquidity Calculator', type: 'XLSX', size: '3.2 MB', date: 'February 2026' },
      { name: 'Private Credit Covenant Structuring Sheet', type: 'PDF', size: '1.1 MB', date: 'January 2026' },
      { name: 'API Data Licensing Framework Agreement', type: 'PDF', size: '750 KB', date: 'March 2026' },
    ]
  }
]

export default function ResourcesPage() {
  const [requestSent, setRequestSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', firm: '', interest: 'Data Licensing' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setRequestSent(true)
    }
  }

  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(14,35,24,0.80) 0%, rgba(14,35,24,0.40) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-gold">
              Library & Governance
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight text-5xl md:text-6xl"
            >
              Institutional library.<br />Governance protocols.<br />Investor disclosures.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed font-light text-white/80 max-w-lg">
              Access statutory filings, sovereign SPV frameworks, and quantitative modeling tools 
              designed for institutional allocators, governments, and enterprise partners.
            </p>
          </div>
        </div>
      </section>

      {/* Document library grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {resourceCategories.map((category) => (
              <div key={category.title} className="flex flex-col h-full">
                
                {/* Category Header */}
                <div className="border-b border-line pb-6 mb-8">
                  <h2 className="font-serif text-2xl font-medium text-forest-900 mb-3">
                    {category.title}
                  </h2>
                  <p className="font-sans text-xs text-muted font-light leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                {/* Items List */}
                <div className="flex flex-col gap-4 flex-1">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="border border-line/60 bg-cream/[0.15] p-5 hover:bg-cream/40 transition-colors duration-200 group flex items-start gap-4"
                    >
                      {/* Document icon */}
                      <div className="text-forest-700 shrink-0 mt-0.5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>

                      {/* Info and action */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-sans font-semibold text-xs text-forest-900 leading-snug group-hover:text-gold transition-colors duration-200 truncate">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted font-sans font-light">
                          <span>Format: {item.type}</span>
                          <span>•</span>
                          <span>Size: {item.size}</span>
                          <span>•</span>
                          <span>Updated: {item.date}</span>
                        </div>
                      </div>

                      {/* Download Arrow */}
                      <button
                        className="text-forest-700 hover:text-gold shrink-0 self-center transition-colors duration-200"
                        title="Download Document"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>

                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Performance disclosures panel */}
      <section className="bg-parchment border-t border-b border-line">
        <div className="max-w-4xl mx-auto px-8 py-14">
          <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-gold">
            Regulatory Guidance
          </span>
          <h2 className="mt-4 font-serif text-2xl font-medium text-forest-900 mb-8">
            Performance Disclosures & Notes
          </h2>
          
          <div className="space-y-6 font-sans text-xs font-light leading-relaxed text-muted">
            <p>
              <strong>1. Performance Calculations:</strong> Portfolio returns presented throughout Korbly Investment 
              Partners’ platforms are calculated net of management fees, transaction expenses, and incentive allocations, 
              using time-weighted domestic net asset valuations (NAV) unless explicitly noted as gross. Historical returns 
              are compounded annually and correspond to selected composite strategies managed inside Ghana and major international jurisdictions.
            </p>
            <p>
              <strong>2. NPRA Pension Guidelines:</strong> Pension fund management activities are conducted under licenses issued by the 
              National Pensions Regulatory Authority (NPRA) of Ghana, adhering to mandated asset allocation restrictions, debt ratio covenants, 
              and sovereign investment thresholds as defined by the National Pensions Act (Act 766) and subsequent revisions.
            </p>
            <p>
              <strong>3. Sovereign Wealth & SPV Structuring:</strong> Sovereign and government advisory SPV frameworks, including structural debt products, 
              FX allocations, and asset-backed transactions, are executed under customized corporate and statutory partnerships governed by the laws 
              of the host nation and international banking conventions.
            </p>
            <p>
              <strong>4. Capital Preservation Risk:</strong> Subscribing, investing, or licensing quantitative risk tools involves substantial exposure 
              to financial risks, including inflation adjustments, market volatility, liquidity caps, and foreign exchange exposure. Past performance is 
              <strong> not indicative of future results</strong>, and partners risk losing a portion or the entirety of their invested principal.
            </p>
          </div>
        </div>
      </section>

      {/* Private templates gate form */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left text */}
            <div>
              <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-gold">
                Proprietary Access
              </span>
              <h2 className="mt-4 font-serif font-light text-white text-3xl leading-snug mb-4">
                Request Proprietary Templates
              </h2>
              <p className="font-sans text-sm font-light leading-relaxed text-white/70">
                Are you looking to structure custom corporate SPVs or license our systemic sovereign risk dashboards? 
                Provide your details to connect with a senior structuring banker in Accra.
              </p>
            </div>

            {/* Right form */}
            <div className="bg-white/5 border border-white/10 p-8">
              {requestSent ? (
                <div className="text-center py-6 font-sans text-sm text-gold">
                  <h3 className="font-serif text-xl font-light text-white mb-2">Request Submitted</h3>
                  A senior banking officer from our Accra office will contact you within 24 business hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border border-white/20 px-4 py-2.5 text-white placeholder-white/40 text-xs focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border border-white/20 px-4 py-2.5 text-white placeholder-white/40 text-xs focus:outline-none focus:border-gold transition-colors font-sans"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Institutional Firm"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 px-4 py-2.5 text-white placeholder-white/40 text-xs focus:outline-none focus:border-gold transition-colors font-sans"
                  />
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-transparent border border-white/20 px-4 py-2.5 text-white/80 text-xs focus:outline-none focus:border-gold transition-colors font-sans"
                    style={{ backgroundColor: '#0E2318' }}
                  >
                    <option value="Data Licensing" style={{ backgroundColor: '#0E2318' }}>Data Licensing</option>
                    <option value="Sovereign Advisory" style={{ backgroundColor: '#0E2318' }}>Sovereign Advisory & SPV</option>
                    <option value="NPRA Pension Funds" style={{ backgroundColor: '#0E2318' }}>NPRA Pension Management</option>
                    <option value="Private Equity" style={{ backgroundColor: '#0E2318' }}>Private Equity & Trade</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gold text-forest-900 hover:bg-gold-light transition-colors duration-200 text-xs font-semibold tracking-wider uppercase font-sans"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
