import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firm: '',
    entityType: 'Institutional Allocator',
    interest: 'Sovereign Advisory & SPVs',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.firstName && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <div>

      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0"
          style={{ background: 'var(--sub-hero-gradient)' }}
        />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="font-sans text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">
              Contact Us
            </span>
            <h1 className="mt-4 font-serif font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Connect with our bankers.<br />Sovereign structures.<br />Institutional allocators.
            </h1>
            <p className="mt-6 font-sans text-[0.95rem] font-light leading-relaxed text-white/80 max-w-lg">
              Connect with our advisory and transaction structuring partners in Accra, Ghana, 
              to discuss aligned investment opportunities, pension mandates, or sovereign SPVs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="bg-cream/[0.2] border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Coordinates */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              <div>
                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold block mb-4">
                  Flagship Office
                </span>
                <h2 className="font-serif text-3xl font-light text-forest-900 leading-snug mb-6">
                  Accra Headquarters
                </h2>
                
                {/* Physical Coordinates */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-forest-700 mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider">
                      Address
                    </h3>
                    <p className="mt-1 font-sans text-sm font-light leading-relaxed text-muted">
                      Korbly Towers, Liberation Road<br />
                      Airport Residential Area<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-forest-700 mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider">
                      Phone Line
                    </h3>
                    <p className="mt-1 font-sans text-sm font-light text-muted">
                      +233 (0) 302 987 654
                    </p>
                  </div>
                </div>

                {/* Main Email */}
                <div className="flex items-start gap-4">
                  <div className="text-forest-700 mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider">
                      General Email
                    </h3>
                    <p className="mt-1 font-sans text-sm font-light text-muted">
                      accra@korbly.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Departmental Emails */}
              <div className="border-t border-line/60 pt-8">
                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold block mb-4">
                  Advisory Channels
                </span>
                <div className="grid grid-cols-2 gap-6 font-sans text-xs">
                  <div>
                    <h4 className="font-semibold text-forest-900 uppercase tracking-wider">Investor Relations</h4>
                    <p className="mt-1 font-light text-muted">ir@korbly.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-900 uppercase tracking-wider">Sovereign SPVs</h4>
                    <p className="mt-1 font-light text-muted">spv@korbly.com</p>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold text-forest-900 uppercase tracking-wider">Press & Media</h4>
                    <p className="mt-1 font-light text-muted">press@korbly.com</p>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold text-forest-900 uppercase tracking-wider">Statutory / NPRA</h4>
                    <p className="mt-1 font-light text-muted">compliance@korbly.com</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Inquiry Form */}
            <div className="lg:col-span-7 bg-white border border-line p-10">
              
              {submitted ? (
                <div className="text-center py-12 font-sans">
                  <div className="w-16 h-16 bg-cream border border-gold rounded-full flex items-center justify-center mx-auto mb-6 text-forest-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-forest-900 mb-3">
                    Inquiry Registered
                  </h3>
                  <p className="font-sans text-sm font-light leading-relaxed text-muted max-w-md mx-auto">
                    Thank you. Your details have been submitted under our corporate compliance framework. 
                    A senior investment structuring officer will contact you directly within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-forest-900 mb-2">
                      Partnership Inquiry
                    </h3>
                    <p className="font-sans text-xs text-muted font-light leading-relaxed">
                      Sovereign representatives, institutional allocators, and enterprise teams are invited 
                      to request custom consultations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Institutional Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                        placeholder="john.doe@firm.com"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Telephone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                        placeholder="+233 20 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Corporate Entity</label>
                      <input
                        type="text"
                        required
                        value={formData.firm}
                        onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                        className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                        placeholder="Ministry / Pension Fund Name"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Entity Type</label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className="w-full bg-white border border-line px-4 py-3 text-sm text-forest-900 focus:outline-none focus:border-gold transition-colors font-sans"
                      >
                        <option value="Institutional Allocator">Institutional Allocator</option>
                        <option value="Sovereign / Government Agency">Sovereign / Government Agency</option>
                        <option value="Development Finance Institution (DFI)">Development Finance Institution (DFI)</option>
                        <option value="Enterprise / Corporate Team">Enterprise / Corporate Team</option>
                        <option value="Family Office">Family Office</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Primary Advisory Channel</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-white border border-line px-4 py-3 text-sm text-forest-900 focus:outline-none focus:border-gold transition-colors font-sans"
                    >
                      <option value="Sovereign Advisory & SPVs">Sovereign Advisory & SPVs</option>
                      <option value="NPRA Pension Fund Management">NPRA Pension Fund Management (Tier 2/3)</option>
                      <option value="Private Equity & Capital Deployment">Private Equity & Capital Deployment</option>
                      <option value="Quantitative Risk & Data Licensing">Quantitative Risk & Data Licensing</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-wider text-forest-900 block mb-2">Detailed Strategic Brief</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-cream/[0.15] border border-line px-4 py-3 text-sm text-forest-900 placeholder-muted/50 focus:outline-none focus:border-gold transition-colors font-sans"
                      placeholder="Outline the parameters of your sovereign transaction or investment mandate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-forest-900 hover:bg-gold-light transition-colors duration-200 text-xs font-semibold tracking-widest uppercase font-sans flex items-center justify-center gap-3"
                  >
                    Submit Advisory Request
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Global Network Map Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold">
              Capital Network
            </span>
            <h2 className="mt-3 font-serif font-light text-forest-900 text-3xl">
              Our Operational Footprint
            </h2>
            <p className="font-sans text-xs text-muted font-light leading-relaxed mt-2">
              Anchored in West Africa, coordinating sovereign transactions and institutional asset deployment across global capital gateways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Hub 1 */}
            <div className="border border-line/60 p-8 flex flex-col">
              <span className="font-serif text-gold text-4xl leading-none mb-4 font-light">Accra</span>
              <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider mb-3">
                Flagship HQ & Structuring
              </h3>
              <p className="font-sans text-xs font-light leading-relaxed text-muted flex-1">
                Korbly Towers, Liberation Road. Home to our core quantitative analytics desks, NPRA asset management systems, sovereign advisory, and treasury operations.
              </p>
            </div>

            {/* Hub 2 */}
            <div className="border border-line/60 p-8 flex flex-col">
              <span className="font-serif text-gold text-4xl leading-none mb-4 font-light">Abidjan</span>
              <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider mb-3">
                Regional Francophone Gateway
              </h3>
              <p className="font-sans text-xs font-light leading-relaxed text-muted flex-1">
                Coordinating public-private partnerships, infrastructure project pipelines, and regional advisory relations across Senegal, Côte d'Ivoire, and Benin.
              </p>
            </div>

            {/* Hub 3 */}
            <div className="border border-line/60 p-8 flex flex-col">
              <span className="font-serif text-gold text-4xl leading-none mb-4 font-light">London</span>
              <h3 className="font-sans font-semibold text-xs text-forest-900 uppercase tracking-wider mb-3">
                Global Allocator Pipeline
              </h3>
              <p className="font-sans text-xs font-light leading-relaxed text-muted flex-1">
                Providing direct structuring advisory and client relationship operations for European, North American, and Asian institutional allocators.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
