import { useState, useEffect, useId } from 'react'
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
  useEffect(() => {
    const start = Date.now(); const from = value; const duration = 700
    const step = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      setValue(Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target])
  return value
}

export function RetirementCalc({ embedded }: { embedded?: boolean } = {}) {
  const uid = useId().replace(/:/g, '')
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(60)
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000)
  const [inflation, setInflation] = useState(6)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)

  const yearsToRetirement = retirementAge - currentAge
  const retirementYears = lifeExpectancy - retirementAge

  const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetirement)
  const realReturn = (expectedReturn - inflation) / 100
  const corpusNeeded = retirementYears > 0 && realReturn !== 0
    ? (futureMonthlyExpenses * 12) * ((1 - Math.pow(1 + realReturn, -retirementYears)) / realReturn)
    : futureMonthlyExpenses * 12 * retirementYears

  const monthlySIP = corpusNeeded > 0 && yearsToRetirement > 0
    ? corpusNeeded * (expectedReturn / 1200) / (Math.pow(1 + expectedReturn / 1200, yearsToRetirement * 12) - 1)
    : 0

  const aCorpus = useAnimatedNumber(Math.round(corpusNeeded))
  const aSIP = useAnimatedNumber(Math.round(monthlySIP))
  const aExpenses = useAnimatedNumber(Math.round(futureMonthlyExpenses))

  const chartData = Array.from({ length: Math.min(yearsToRetirement, 30) + 1 }, (_, i) => ({
    year: `${currentAge + i}`,
    corpus: Math.round(monthlySIP > 0 ? monthlySIP * ((Math.pow(1 + expectedReturn / 1200, i * 12) - 1) / (expectedReturn / 1200)) : 0),
  }))

  return (
    <CalculatorLayout
      embedded={embedded}
      title="Retirement Corpus Calculator"
      subtitle="Estimate the corpus you may need to support a comfortable retirement and calculate how much to invest today."
      ctaText="Plan for Retirement"
      howItWorks={[
        'Enter your current age and target retirement age to determine your investment horizon.',
        'Input your current monthly expenses — this helps estimate your future lifestyle cost.',
        'Set expected inflation rate (typically 5-7% for India) to calculate future expense values.',
        'The calculator estimates your required corpus and the monthly SIP needed to achieve it.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Your Details</h2>
          <InputField label="Current Age" value={currentAge} onChange={setCurrentAge} min={20} max={55} step={1} format={v => `${v} yrs`} />
          <InputField label="Retirement Age" value={retirementAge} onChange={setRetirementAge} min={45} max={70} step={1} format={v => `${v} yrs`} />
          <InputField label="Current Monthly Expenses" value={monthlyExpenses} onChange={setMonthlyExpenses} min={10000} max={500000} step={5000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Expected Inflation Rate" value={inflation} onChange={setInflation} min={3} max={12} step={0.5} format={v => `${v}%`} />
          <InputField label="Expected Return on Investment" value={expectedReturn} onChange={setExpectedReturn} min={6} max={20} step={0.5} format={v => `${v}%`} />
          <InputField label="Life Expectancy" value={lifeExpectancy} onChange={setLifeExpectancy} min={70} max={100} step={1} format={v => `${v} yrs`} />
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Retirement Projections</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`${uid}cGrad`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={TEAL} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={TEAL} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#7B827E' }} interval={Math.floor(yearsToRetirement / 4)} />
              <YAxis tick={{ fontSize: 10, fill: '#7B827E' }} tickFormatter={v => v >= 10000000 ? `${(v / 10000000).toFixed(1)}Cr` : `${(v / 100000).toFixed(0)}L`} />
              <Tooltip formatter={(v: number) => [fmt(v), 'Corpus']} />
              <Area type="monotone" dataKey="corpus" stroke={TEAL} strokeWidth={2.5} fill={`url(#${uid}cGrad)`} />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <ResultCard label="Years to Retirement" value={`${yearsToRetirement} years`} />
            <ResultCard label="Future Monthly Expenses" value={fmt(aExpenses)} />
            <ResultCard label="Required Monthly SIP" value={fmt(aSIP)} color={MINT} />
            <ResultCard label="Estimated Retirement Corpus" value={fmt(aCorpus)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
