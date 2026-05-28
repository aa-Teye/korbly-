export default function Ticker() {
  const items = [
    "Africa's First Systematic Merchant Bank",
    "Africa Infrastructure Gap: $50–90B Annually",
    "Institutional Assets Across Africa: $775B",
    "Target Net IRR: 18–25% p.a.",
    "Combined African GDP: $2.97 Trillion",
    "Based in Accra, Ghana — Est. 2026",
    "80% of African Infrastructure Projects Fail Before Financial Close",
    "Korbly: Macro Intelligence · Private Equity · Sovereign Advisory · Capital Markets",
    "GHS 10 Million Capital Raise — Board Confidential",
    "Transforming Africa's Capital Formation System",
  ]

  return (
    <div className="bg-navy-900 border-y border-navy-800 overflow-hidden py-3">
      <div className="flex items-center">
        {/* Label */}
        <div className="bg-navy-600 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1 whitespace-nowrap z-10 shrink-0">
          KORBLY LIVE
        </div>

        {/* Scrolling content */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex items-center gap-0 whitespace-nowrap"
            style={{
              animation: 'ticker 40s linear infinite',
            }}
          >
            {/* Render items twice for seamless loop */}
            {[...items, ...items].map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-white/90 text-sm font-light px-6">
                  {item}
                </span>
                <span className="text-navy-600 text-lg">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
