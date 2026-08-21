import { useState, useEffect, useRef } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { CalculatorLayout, InputField, ResultCard } from '../../components/CalculatorLayout'

const TEAL = '#35858E'
const MINT = '#88BDA4'

const GOALS = ['Home', 'Education', 'Travel', 'Wedding', 'Retirement', 'Vehicle', 'Other']

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

export function GoalBasedCalc({ embedded }: { embedded?: boolean } = {}) {
  const [goalName, setGoalName] = useState('Home')
  const [currentCost, setCurrentCost] = useState(5000000)
  const [timeline, setTimeline] = useState(10)
  const [existingSavings, setExistingSavings] = useState(200000)
  const [inflation, setInflation] = useState(6)
  const [expectedReturn, setExpectedReturn] = useState(12)

  const futureCost = currentCost * Math.pow(1 + inflation / 100, timeline)
  const savingsGrowth = existingSavings * Math.pow(1 + expectedReturn / 100, timeline)
  const fundingGap = Math.max(0, futureCost - savingsGrowth)
  const r = expectedReturn / 1200
  const monthlySIP = timeline > 0 && r > 0 && fundingGap > 0
    ? fundingGap * r / ((Math.pow(1 + r, timeline * 12) - 1) * (1 + r))
    : 0

  const aFutureCost = useAnimatedNumber(Math.round(futureCost))
  const aMonthly = useAnimatedNumber(Math.round(monthlySIP))
  const aGap = useAnimatedNumber(Math.round(fundingGap))

  const goalEmojis: Record<string, string> = { Home: '🏠', Education: '🎓', Travel: '✈️', Wedding: '💍', Retirement: '🌅', Vehicle: '🚗', Other: '🎯' }

  const data = [
    { name: 'Savings', value: Math.round(savingsGrowth), color: MINT },
    { name: 'Gap', value: Math.round(fundingGap), color: TEAL },
  ]

  return (
    <CalculatorLayout
      embedded={embedded}
      title="Goal-Based Investment Calculator"
      subtitle="Set a specific financial goal and calculate exactly how much you need to invest each month to achieve it."
      ctaText="Plan My Goal"
      howItWorks={[
        'Select your financial goal (home, education, wedding, travel, retirement or custom goal).',
        'Enter the current estimated cost of your goal in today\'s value.',
        'Set your goal timeline (years) and expected inflation to calculate future cost.',
        'The calculator shows the future cost, funding gap, and monthly SIP needed to reach your goal.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 20 }}>Define Your Goal</h2>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 15, fontWeight: 600, color: '#303733', marginBottom: 12 }}>Goal Name</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {GOALS.map(g => (
                <button key={g} onClick={() => setGoalName(g)} style={{
                  padding: '8px 16px', borderRadius: 20, border: `2px solid ${goalName === g ? TEAL : 'rgba(136,189,164,0.3)'}`,
                  background: goalName === g ? '#E6F2DD' : '#fff', color: goalName === g ? TEAL : '#555D58',
                  cursor: 'pointer', fontSize: 13, fontWeight: 600, transition: 'all 0.2s',
                }}>
                  {goalEmojis[g]} {g}
                </button>
              ))}
            </div>
          </div>

          <InputField label="Current Goal Cost" value={currentCost} onChange={setCurrentCost} min={100000} max={50000000} step={100000} format={v => v >= 10000000 ? `₹${(v / 10000000).toFixed(1)}Cr` : `₹${(v / 100000).toFixed(1)}L`} />
          <InputField label="Goal Timeline" value={timeline} onChange={setTimeline} min={1} max={30} step={1} format={v => `${v} yrs`} />
          <InputField label="Existing Savings" value={existingSavings} onChange={setExistingSavings} min={0} max={5000000} step={50000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Expected Inflation" value={inflation} onChange={setInflation} min={3} max={12} step={0.5} format={v => `${v}%`} />
          <InputField label="Expected Return" value={expectedReturn} onChange={setExpectedReturn} min={6} max={20} step={0.5} format={v => `${v}%`} />
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 8 }}>
            {goalEmojis[goalName]} {goalName} Goal Summary
          </h2>
          <p style={{ fontSize: 14, color: '#7B827E', marginBottom: 20 }}>In {timeline} years</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value" startAngle={90} endAngle={-270}>
                {data.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => fmt(v)} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <ResultCard label="Future Goal Cost" value={fmt(aFutureCost)} />
            <ResultCard label="Existing Savings Growth" value={fmt(Math.round(savingsGrowth))} color={MINT} />
            <ResultCard label="Funding Gap" value={fmt(aGap)} />
            <ResultCard label="Monthly SIP Estimate" value={fmt(aMonthly)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
