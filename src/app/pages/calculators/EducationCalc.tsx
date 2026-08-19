import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { CalculatorLayout, InputField, ResultCard } from '../../components/CalculatorLayout'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const PASTEL = '#C2D099'

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

export function EducationCalc({ embedded }: { embedded?: boolean } = {}) {
  const [childAge, setChildAge] = useState(5)
  const [educationAge, setEducationAge] = useState(18)
  const [currentCost, setCurrentCost] = useState(500000)
  const [eduInflation, setEduInflation] = useState(10)
  const [existingSavings, setExistingSavings] = useState(50000)
  const [expectedReturn, setExpectedReturn] = useState(12)

  const years = educationAge - childAge
  const futureCost = currentCost * Math.pow(1 + eduInflation / 100, years)
  const savingsGrowth = existingSavings * Math.pow(1 + expectedReturn / 100, years)
  const fundingGap = Math.max(0, futureCost - savingsGrowth)

  const r = expectedReturn / 1200
  const monthlyRequired = years > 0 && r > 0
    ? fundingGap * r / ((Math.pow(1 + r, years * 12) - 1) * (1 + r))
    : fundingGap / (years * 12)

  const aFutureCost = useAnimatedNumber(Math.round(futureCost))
  const aMonthly = useAnimatedNumber(Math.round(monthlyRequired))
  const aSavingsGrowth = useAnimatedNumber(Math.round(savingsGrowth))
  const aGap = useAnimatedNumber(Math.round(fundingGap))

  const data = [
    { name: 'Savings Growth', value: Math.round(savingsGrowth), color: MINT },
    { name: 'Funding Gap', value: Math.round(fundingGap), color: TEAL },
  ]

  return (
    <CalculatorLayout
      embedded={embedded}
      title="Children's Education Goal Calculator"
      subtitle="Plan ahead for your child's education costs and calculate exactly how much you need to invest today."
      ctaText="Start Planning"
      howItWorks={[
        "Enter your child's current age and the age they will start higher education (typically 18).",
        'Input the current estimated cost of education in today\'s value.',
        'Set the education inflation rate, which is typically 10% to 12% in India.',
        'The calculator accounts for your existing savings growth and shows the monthly SIP needed to bridge the gap.',
      ]}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="calc-inner">
        <div style={{ padding: '40px', borderRight: '1px solid rgba(136,189,164,0.2)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 28 }}>Education Plan Details</h2>
          <InputField label="Child's Current Age" value={childAge} onChange={setChildAge} min={0} max={15} step={1} format={v => `${v} yrs`} />
          <InputField label="Education Starting Age" value={educationAge} onChange={v => setEducationAge(Math.max(v, childAge + 1))} min={childAge + 1} max={25} step={1} format={v => `${v} yrs`} />
          <InputField label="Current Education Cost" value={currentCost} onChange={setCurrentCost} min={100000} max={5000000} step={50000} format={v => `₹${(v / 100000).toFixed(1)}L`} />
          <InputField label="Education Inflation Rate" value={eduInflation} onChange={setEduInflation} min={5} max={20} step={0.5} format={v => `${v}%`} />
          <InputField label="Existing Savings for Education" value={existingSavings} onChange={setExistingSavings} min={0} max={2000000} step={10000} format={v => `₹${v.toLocaleString('en-IN')}`} />
          <InputField label="Expected Investment Return" value={expectedReturn} onChange={setExpectedReturn} min={6} max={20} step={0.5} format={v => `${v}%`} />
        </div>
        <div style={{ padding: '40px', background: 'rgba(250,253,249,0.75)' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#303733', marginBottom: 24 }}>Education Goal Summary</h2>
          <div style={{ textAlign: 'center', padding: '8px 0 16px', borderRadius: 16, background: '#E6F2DD', marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: '#7B827E', marginBottom: 4 }}>Years to Plan</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: TEAL }}>{years}</div>
            <div style={{ fontSize: 13, color: '#555D58' }}>years remaining</div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                {data.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={(v: number) => fmt(v)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            <ResultCard label="Future Education Cost" value={fmt(aFutureCost)} />
            <ResultCard label="Existing Savings Growth" value={fmt(aSavingsGrowth)} color={MINT} />
            <ResultCard label="Funding Gap" value={fmt(aGap)} />
            <ResultCard label="Required Monthly Investment" value={fmt(aMonthly)} large />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .calc-inner { grid-template-columns: 1fr !important; } }`}</style>
    </CalculatorLayout>
  )
}
