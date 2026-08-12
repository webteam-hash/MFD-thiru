import { useState, useEffect, useId } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CalculatorLayout, InputField, ResultCard } from '../../components/CalculatorLayout'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const SAGE = '#7DA78C'

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

export function FlexibleCalc({ embedded }: { embedded?: boolean } = {}) {
  const uid = useId().replace(/:/g, '')
  const [initial, setInitial] = useState(100000)
  const [monthly, setMonthly] = useState(10000)
  const [annualIncrease, setAnnualIncrease] = useState(10)
  const [years, setYears] = useState(15)
  const [rate, setRate] = useState(12)

  const r = rate / 1200

  let totalContributions = initial
  let futureValue = initial * Math.pow(1 + rate / 100, years)

  const chartData: { year: string; value: number; contributions: number }[] = [{ year: 'Start', value: initial, contributions: initial }]

  let runningContrib = initial
  let runningValue = initial

  for (let y = 1; y <= years; y++) {
    const monthlyThisYear = monthly * Math.pow(1 + annualIncrease / 100, y - 1)
    const monthlyContrib = monthlyThisYear * 12

    runningValue = runningValue * (1 + rate / 100) + monthlyThisYear * ((Math.pow(1 + r, 12) - 1) / r) * (1 + r)
    runningContrib += monthlyContrib

    if (y <= years) {
      chartData.push({ year: `Yr ${y}`, value: Math.round(runningValue), contributions: Math.round(runningContrib) })
    }
  }

  totalContributions = runningContrib
  futureValue = runningValue

  const aContrib = useAnimatedNumber(Math.round(totalContributions))
  const aFuture = useAnimatedNumber(Math.round(futureValue))
  const aGrowth = useAnimatedNumber(Math.round(futureValue - totalContributions))

  return (
    <CalculatorLayout
      embedded={embedded}
      title="Flexible Investment Calculator"
      subtitle="Combine a lump-sum with growing monthly contributions and see how your wealth compounds over time."
      ctaText="Build My Investment Strategy"
      howItWorks={[
        'Start with an optional initial lump-sum investment to give your portfolio a head start.',
        'Add your monthly SIP contribution — this is the amount you will invest every month.',
        'Set an annual increase in contribution (step-up SIP) to account for income growth over time.',
        'The calculator shows compounded growth combining both lump-sum and systematic contributions.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Investment Parameters</h2>
          <InputField label="Initial Lump-Sum Investment" value={initial} onChange={setInitial} min={0} max={10000000} step={10000} format={v => v >= 100000 ? `₹${(v / 100000).toFixed(1)}L` : `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Monthly Contribution" value={monthly} onChange={setMonthly} min={500} max={500000} step={500} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Annual Increase in Contribution" value={annualIncrease} onChange={setAnnualIncrease} min={0} max={30} step={1} format={v => `${v}%`} />
          <InputField label="Investment Duration" value={years} onChange={setYears} min={1} max={40} step={1} format={v => `${v} yrs`} />
          <InputField label="Expected Annual Return" value={rate} onChange={setRate} min={4} max={25} step={0.5} format={v => `${v}%`} />

          <div style={{ marginTop: 16, padding: '16px', borderRadius: 12, background: '#E6EEC9' }}>
            <p style={{ fontSize: 13, color: '#555D58', margin: 0, lineHeight: 1.6 }}>
              📈 <strong>Step-up SIP:</strong> Increasing your contribution by {annualIncrease}% annually means you invest <strong>{fmt(monthly * Math.pow(1 + annualIncrease / 100, years - 1))}</strong> per month in year {years}.
            </p>
          </div>
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Wealth Growth Projection</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`${uid}fvGrad`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={TEAL} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={TEAL} stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id={`${uid}fcGrad`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={MINT} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={MINT} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="year" tick={{ fontSize: 9, fill: '#7B827E' }} interval={Math.floor(years / 4)} />
              <YAxis tick={{ fontSize: 9, fill: '#7B827E' }} tickFormatter={v => v >= 10000000 ? `${(v / 10000000).toFixed(0)}Cr` : v >= 100000 ? `${(v / 100000).toFixed(0)}L` : `${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v: number) => fmt(v)} />
              <Area type="monotone" dataKey="contributions" stroke={MINT} strokeWidth={2} fill={`url(#${uid}fcGrad)`} name="Contributions" />
              <Area type="monotone" dataKey="value" stroke={TEAL} strokeWidth={2.5} fill={`url(#${uid}fvGrad)`} name="Portfolio Value" />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <ResultCard label="Total Contributions" value={fmt(aContrib)} />
            <ResultCard label="Estimated Growth" value={fmt(aGrowth)} color={TEAL} />
            <ResultCard label="Estimated Future Value" value={fmt(aFuture)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
