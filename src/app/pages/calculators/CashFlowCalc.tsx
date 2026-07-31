import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
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

export function CashFlowCalc() {
  const [income, setIncome] = useState(100000)
  const [expenses, setExpenses] = useState(50000)
  const [existingInvestments, setExistingInvestments] = useState(500000)
  const [commitments, setCommitments] = useState(15000)
  const [desiredSavings, setDesiredSavings] = useState(10000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [years, setYears] = useState(10)

  const surplus = income - expenses - commitments
  const investable = Math.max(0, surplus - desiredSavings)
  const r = expectedReturn / 1200

  const futureNewInvestment = investable > 0 ? investable * ((Math.pow(1 + r, years * 12) - 1) / r) * (1 + r) : 0
  const futureExisting = existingInvestments * Math.pow(1 + expectedReturn / 100, years)
  const totalFuture = futureNewInvestment + futureExisting

  const aSurplus = useAnimatedNumber(surplus)
  const aInvestable = useAnimatedNumber(investable)
  const aTotal = useAnimatedNumber(Math.round(totalFuture))

  const chartData = [
    { name: 'Income', value: income, color: TEAL },
    { name: 'Expenses', value: expenses, color: '#EF9A9A' },
    { name: 'Commitments', value: commitments, color: '#FFCC80' },
    { name: 'Savings', value: desiredSavings, color: MINT },
    { name: 'Investable', value: investable, color: SAGE },
  ]

  return (
    <CalculatorLayout
      title="Cash Flow Solution Calculator"
      subtitle="Understand your monthly cash flow and discover how much you can invest to build wealth over time."
      ctaText="Build My Investment Plan"
      howItWorks={[
        'Enter your total monthly income from all sources (salary, business, rent, etc.).',
        'Add your fixed monthly expenses and existing financial commitments (EMIs, insurance, etc.).',
        'Set your desired monthly savings buffer for emergencies and short-term needs.',
        'The calculator identifies your investable surplus and projects its future growth.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Monthly Cash Flow</h2>
          <InputField label="Monthly Income" value={income} onChange={setIncome} min={20000} max={1000000} step={5000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Monthly Expenses" value={expenses} onChange={setExpenses} min={5000} max={500000} step={2000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Monthly Commitments (EMIs etc.)" value={commitments} onChange={setCommitments} min={0} max={200000} step={1000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Existing Investments" value={existingInvestments} onChange={setExistingInvestments} min={0} max={10000000} step={50000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Desired Monthly Savings" value={desiredSavings} onChange={setDesiredSavings} min={0} max={100000} step={1000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Expected Return" value={expectedReturn} onChange={setExpectedReturn} min={6} max={20} step={0.5} format={v => `${v}%`} />
          <InputField label="Investment Period" value={years} onChange={setYears} min={1} max={30} step={1} format={v => `${v} yrs`} />
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Cash Flow Analysis</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#7B827E' }} />
              <YAxis tick={{ fontSize: 10, fill: '#7B827E' }} tickFormatter={v => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v: number) => fmt(v)} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {chartData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <ResultCard label="Monthly Surplus" value={fmt(aSurplus)} color={surplus > 0 ? TEAL : '#EF4444'} />
            <ResultCard label="Potential Monthly Investment" value={fmt(aInvestable)} color={MINT} />
            <ResultCard label={`Projected Growth (${years} yrs)`} value={fmt(aTotal)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
