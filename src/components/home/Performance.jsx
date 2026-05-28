import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const strategies = [
  {
    name: 'Korbly Global Equity',
    q1: '4.2%',
    oneYear: '12.8%',
    threeYear: '8.7%',
    fiveYear: '10.3%',
    inception: '9.6%',
  },
  {
    name: 'Korbly Income Opportunities',
    q1: '1.6%',
    oneYear: '6.1%',
    threeYear: '4.3%',
    fiveYear: '5.2%',
    inception: '5.0%',
  },
  {
    name: 'Korbly Private Credit',
    q1: '2.1%',
    oneYear: '8.3%',
    threeYear: '6.5%',
    fiveYear: '6.9%',
    inception: '7.1%',
  },
]

export default function Performance() {
  const { theme } = useTheme()
  const primary = theme === 'navy' ? 'navy' : 'burgundy'

  return (
    <section className="bg-paper border-t border-b border-line">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className={`font-sans text-[0.7rem] tracking-[0.22em] uppercase font-medium text-${primary}-700`}>
              Track Record
            </span>
            <h2 className={`mt-3 font-serif text-2xl font-medium text-${primary}-900`}
            >
              Strategy Performance
            </h2>
            <p className="font-sans text-xs text-muted mt-1">
              As of March 31, 2026
            </p>
          </div>
          <Link
            to="/resources"
            className={`inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase text-${primary}-700 border-b border-transparent hover:border-${primary}-600 hover:text-${primary}-600 transition-all duration-200 no-underline whitespace-nowrap pb-px`}
          >
            View performance disclosures
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="bg-white border border-line overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-paper">
                {['Strategy', 'Q1 2026', '1 Year', '3 Year', '5 Year', 'Since Inception'].map((col, i) => (
                  <th
                    key={col}
                    className={`px-7 py-4 font-sans text-xs font-semibold tracking-[0.14em] uppercase text-muted border-b border-line ${
                      i === 0 ? 'text-left' : 'text-right'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {strategies.map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-line last:border-b-0 hover:bg-${primary}-900/[0.03] transition-colors duration-150`}
                >
                  <td className={`px-7 py-5 font-sans text-sm font-medium text-${primary}-900`}>
                    {row.name}
                  </td>
                  {[row.q1, row.oneYear, row.threeYear, row.fiveYear, row.inception].map((val, j) => (
                    <td
                      key={j}
                      className="px-7 py-5 font-serif text-[1.05rem] font-medium text-right text-ink tabular-nums"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 font-sans text-xs text-muted leading-relaxed">
          Performance is net of fees. Past performance is not indicative 
          of future results. Please refer to the Performance Disclosures 
          for more information.
        </p>
      </div>
    </section>
  )
}
