import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { CalculatorLayout, InputField, ResultCard } from '../../components/CalculatorLayout'

const TEAL = '#35858E'
const MINT = '#88BDA4'

function fmt(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target)
  useEffect(() => {
    const start = Date.now(); const from = value; const duration = 600
    const step = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      setValue(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target])
  return value
}

export function SIPCalc({ embedded }: { embedded?: boolean } = {}) {
  const [monthly, setMonthly] = useState(10000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  const invested = monthly * years * 12
  const months = years * 12
  const r = rate / 1200
  const future = Math.round(monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r))
  const returns = future - invested

  const aInvested = useAnimatedNumber(invested)
  const aReturns = useAnimatedNumber(returns)
  const aFuture = useAnimatedNumber(future)

  const data = [
    { name: 'Invested', value: invested, color: MINT },
    { name: 'Returns', value: returns, color: TEAL },
  ]

  return (
    <CalculatorLayout
      embedded={embedded}
      title="SIP Investment Calculator"
      subtitle="Calculate how your monthly SIP investment can grow into substantial wealth over time with the power of compounding."
      ctaText="Start My SIP"
      howItWorks={[
        'Enter your desired monthly SIP amount — even ₹500 can make a significant difference over time.',
        'Set your investment duration. Longer duration dramatically increases the power of compounding.',
        'Adjust the expected annual return rate based on your chosen fund category (equity/debt/hybrid).',
        'The calculator shows your total invested amount, estimated returns, and projected future value.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        {/* Inputs */}
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Investment Details</h2>
          <InputField label="Monthly SIP Amount" value={monthly} onChange={setMonthly} min={500} max={500000} step={500} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Investment Duration" value={years} onChange={setYears} min={1} max={40} step={1} format={v => `${v} yrs`} />
          <InputField label="Expected Annual Return" value={rate} onChange={setRate} min={4} max={30} step={0.5} format={v => `${v}%`} />
          <div style={{ padding: '16px', borderRadius: 12, background: '#E6F2DD', marginTop: 8 }}>
            <p style={{ fontSize: 13, color: '#555D58', margin: 0, lineHeight: 1.6 }}>
              💡 <strong>Note:</strong> Equity mutual funds have historically delivered 10-15% CAGR over long periods. Past performance does not guarantee future returns.
            </p>
          </div>
        </div>

        {/* Results */}
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Projected Results</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={4} dataKey="value" startAngle={90} endAngle={-270}>
                {data.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(val: number) => fmt(val)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            <ResultCard label="Total Amount Invested" value={fmt(aInvested)} />
            <ResultCard label="Estimated Returns" value={fmt(aReturns)} color={TEAL} />
            <ResultCard label="Estimated Future Value" value={fmt(aFuture)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
