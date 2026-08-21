import { useState, useEffect, useId, useRef } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
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
  const animRef = useRef<number | null>(null)
  const valueRef = useRef(value)
  valueRef.current = value

  useEffect(() => {
    const start = Date.now()
    const from = valueRef.current
    const duration = 500

    if (animRef.current) cancelAnimationFrame(animRef.current)

    const step = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const current = Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3)))
      setValue(current)
      if (p < 1) {
        animRef.current = requestAnimationFrame(step)
      }
    }
    animRef.current = requestAnimationFrame(step)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [target])

  return value
}

export function LumpSumCalc({ embedded }: { embedded?: boolean } = {}) {
  const uid = useId().replace(/:/g, '')
  const [amount, setAmount] = useState(500000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  const futureValue = amount * Math.pow(1 + rate / 100, years)
  const gain = futureValue - amount

  const aAmount = useAnimatedNumber(amount)
  const aGain = useAnimatedNumber(Math.round(gain))
  const aFuture = useAnimatedNumber(Math.round(futureValue))

  const chartData = Array.from({ length: years + 1 }, (_, i) => ({
    year: `Yr ${i}`,
    value: Math.round(amount * Math.pow(1 + rate / 100, i)),
    invested: amount,
  }))

  return (
    <CalculatorLayout
      embedded={embedded}
      title="Lump-Sum Investment Calculator"
      subtitle="Calculate how a one-time lump-sum investment can grow over time with compounding returns."
      ctaText="Explore Lump-Sum Investment"
      howItWorks={[
        'Enter your lump-sum investment amount (such as a bonus, inheritance, property sale proceeds, or one-time windfall).',
        'Select the investment duration. The longer you stay invested, the more compounding works in your favour.',
        'Choose the expected annual return rate based on your fund category and risk tolerance.',
        'The calculator shows your investment growth year by year along with the total gain.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Investment Details</h2>
          <InputField label="Investment Amount" value={amount} onChange={setAmount} min={10000} max={50000000} step={10000} format={v => v >= 10000000 ? `₹${(v / 10000000).toFixed(1)}Cr` : `₹${(v / 100000).toFixed(1)}L`} />
          <InputField label="Investment Duration" value={years} onChange={setYears} min={1} max={40} step={1} format={v => `${v} yrs`} />
          <InputField label="Expected Annual Return" value={rate} onChange={setRate} min={4} max={25} step={0.5} format={v => `${v}%`} />

          <div style={{ marginTop: 24, padding: '20px', borderRadius: 14, background: '#E6F2DD' }}>
            <div style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6 }}>
              💡 <strong>Return on Investment:</strong>
              <div style={{ marginTop: 8, fontSize: 24, fontWeight: 800, color: TEAL }}>
                {amount > 0 ? ((gain / amount) * 100).toFixed(1) : 0}%
              </div>
              <div style={{ fontSize: 12, color: '#7B827E' }}>Total return over {years} years</div>
            </div>
          </div>
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Growth Projection</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`${uid}lsGrad`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={TEAL} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={TEAL} stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id={`${uid}invGrad`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={MINT} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={MINT} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#7B827E' }} interval={Math.floor(years / 4)} />
              <YAxis tick={{ fontSize: 10, fill: '#7B827E' }} tickFormatter={v => v >= 10000000 ? `${(v / 10000000).toFixed(0)}Cr` : v >= 100000 ? `${(v / 100000).toFixed(0)}L` : `${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v: number) => fmt(v)} />
              <Area type="monotone" dataKey="invested" stroke={MINT} strokeWidth={2} fill={`url(#${uid}invGrad)`} name="Invested" />
              <Area type="monotone" dataKey="value" stroke={TEAL} strokeWidth={2.5} fill={`url(#${uid}lsGrad)`} name="Value" />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <ResultCard label="Initial Investment" value={fmt(aAmount)} />
            <ResultCard label="Estimated Gain" value={fmt(aGain)} color={TEAL} />
            <ResultCard label="Estimated Future Value" value={fmt(aFuture)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
