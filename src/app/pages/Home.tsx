import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight, TrendingUp, Shield, Users, Target, Star, ChevronLeft, ChevronRight, CheckCircle, Eye } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function useAnimatedNumber(target: number, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const start = Date.now(); const duration = 1200
    const step = () => {
      const elapsed = Date.now() - start; const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, trigger])
  return value
}

const testimonials = [
  { name: 'Priya Sharma', type: 'SIP Investor', city: 'Chennai', text: 'MFDThiru helped me start my SIP journey at 24. Their guidance was clear, patient and genuinely focused on my goals. Five years later, I can see real results in my portfolio.' },
  { name: 'Rajesh Kumar', type: 'Retirement Planner', city: 'Bangalore', text: "I was unsure about where to invest for retirement. The team at MFDThiru created a complete plan that actually makes sense for my family's lifestyle and timeline." },
  { name: 'Anitha Nair', type: 'Education Goal Planner', city: 'Coimbatore', text: "Planning my daughter's education seemed overwhelming. MFDThiru broke it down beautifully and helped us start a goal-based SIP. Highly recommend them." },
  { name: 'Vikram Mehta', type: 'Lump-Sum Investor', city: 'Mumbai', text: "I had a lump sum to invest after selling property. MFDThiru advised me on the best approach and I've seen consistent growth with their recommended funds." },
  { name: 'Deepa Krishnan', type: 'Wealth Builder', city: 'Chennai', text: 'What I appreciate most is how they explain things in plain language. No jargon, no pressure. Just honest, thoughtful advice that has helped my family grow our wealth.' },
  { name: 'Suresh Babu', type: 'First-time Investor', city: 'Madurai', text: 'I always thought investing was only for the rich. MFDThiru showed me how even ₹2,000 per month can build meaningful wealth over time. Truly life-changing guidance.' },
  { name: 'Kavitha Rajan', type: 'Home Loan Prepayment Planner', city: 'Trichy', text: 'They helped me balance paying off my home loan faster while also building an investment corpus. A strategy I never would have thought of on my own.' },
  { name: 'Arjun Venkatesh', type: 'NRI Investor', city: 'Singapore', text: 'Investing from abroad felt complicated, but MFDThiru made the entire process smooth and compliant. I can now track my India portfolio with complete confidence.' },
  { name: 'Meenakshi Sundaram', type: 'Homemaker Investor', city: 'Chennai', text: 'As a homemaker, I wanted to start investing independently. MFDThiru helped me take that first step with clarity and confidence. Now I manage my own SIP portfolio.' },
  { name: 'Dinesh Patel', type: 'Business Owner', city: 'Ahmedabad', text: 'Running a business means income fluctuates. MFDThiru helped me create a flexible investment strategy that works with variable cash flows. Excellent personalised service.' },
]

const infoCards = [
  {
    title: 'Who We Serve',
    icon: <Users size={28} color={TEAL} />,
    desc: 'We work with salaried professionals, business owners, homemakers, and retirees who want to make their money work smarter through well-planned mutual fund investments.',
    link: '/about',
    linkLabel: 'Learn About Us',
  },
  {
    title: 'How We Work',
    icon: <Target size={28} color={TEAL} />,
    desc: 'We start with understanding your goals, then create a personalised investment plan. We review and adjust regularly to keep you on track across different life stages.',
    link: '/about',
    linkLabel: 'Our Process',
  },
  {
    title: 'Why Invest?',
    icon: <TrendingUp size={28} color={TEAL} />,
    desc: 'Mutual funds offer the power of compounding, professional management, and diversification — making them one of the most accessible ways to build long-term wealth.',
    link: '/services',
    linkLabel: 'Our Services',
  },
  {
    title: 'Vision & Mission',
    icon: <Shield size={28} color={TEAL} />,
    desc: 'Our vision is to make quality financial guidance accessible to every Indian family. Our mission is to help investors make informed, goal-aligned decisions with confidence.',
    link: '/about',
    linkLabel: 'Know More',
  },
]

export function Home() {
  const [monthly, setMonthly] = useState(10000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const calcRef = useRef(null)
  const calcInView = useInView(calcRef, { once: true })

  const invested = monthly * years * 12
  const returns = Math.round(monthly * (((Math.pow(1 + rate / 1200, years * 12) - 1) / (rate / 1200)) * (1 + rate / 1200)) - invested)
  const future = invested + returns

  const animInvested = useAnimatedNumber(invested, calcInView)
  const animReturns = useAnimatedNumber(returns, calcInView)
  const animFuture = useAnimatedNumber(future, calcInView)

  const chartData = [
    { name: 'Invested', value: invested, color: MINT },
    { name: 'Returns', value: returns, color: TEAL },
  ]

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const fmt = (n: number) => n >= 10000000 ? `₹${(n / 10000000).toFixed(2)} Cr` : n >= 100000 ? `₹${(n / 100000).toFixed(1)} L` : `₹${n.toLocaleString('en-IN')}`

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'rgba(255,255,255,0.52)' }}>
        <SectionBlob x="52%" y="-12%" w={580} h={460} color="#B1D3B9" op={0.40} blur={85} r="55% 45% 38% 62% / 50% 42% 58% 50%" />
        <SectionBlob x="72%" y="45%" w={320} h={270} color="#88BDA4" op={0.28} blur={58} r="40% 60% 65% 35% / 62% 38% 58% 42%" />
        <SectionBlob x="8%" y="62%" w={240} h={200} color="#E6F2DD" op={0.72} blur={50} r="62% 38% 48% 52% / 44% 60% 40% 56%" />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }} className="hero-grid">

          {/* Left Text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: 'rgba(230,242,221,0.9)', color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 20, backdropFilter: 'blur(4px)' }}>
                AMFI Registered Mutual Fund Distributor
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, color: '#303733', lineHeight: 1.12, marginBottom: 22 }}>
              Grow Your Wealth<br />
              With <span style={{ color: TEAL }}>Trusted Guidance</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: 17, color: '#555D58', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              We help investors across India make goal-oriented investment decisions through carefully selected mutual funds, personalised planning and ongoing support.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '14px 28px', borderRadius: 12, background: TEAL, color: '#fff',
                textDecoration: 'none', fontSize: 16, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 6px 20px rgba(53,133,142,0.38)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(53,133,142,0.48)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(53,133,142,0.38)' }}
              >
                Start Investing <ArrowRight size={18} />
              </Link>
              <Link to="/calculators/sip" style={{
                padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.85)', color: TEAL,
                border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 16, fontWeight: 600, transition: 'all 0.2s', backdropFilter: 'blur(4px)',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(230,242,221,0.9)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.85)' }}
              >
                Explore Calculators
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 36, marginTop: 48, flexWrap: 'wrap' }}>
              {[['500+', 'Happy Investors'], ['₹50Cr+', 'AUM Managed'], ['7+', 'Years Experience']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: TEAL }}>{num}</div>
                  <div style={{ fontSize: 13, color: '#7B827E', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Premium Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.25 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hidden md:flex"
          >
            {/* Main image card */}
            <div style={{
              width: '100%', maxWidth: 500, position: 'relative', borderRadius: 28, overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(53,133,142,0.22), 0 8px 32px rgba(0,0,0,0.10)',
              border: '2px solid rgba(136,189,164,0.30)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1714974528703-e5ad41abc259?w=900&q=85"
                alt="Financial planning consultation with MFDThiru"
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              />
              {/* Sage tint overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(101,146,135,0.08) 0%, transparent 50%, rgba(230,242,221,0.18) 100%)', pointerEvents: 'none' }} />
            </div>

            {/* Floating card — SIP Returns */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 24, left: -20,
                background: 'rgba(255,255,255,0.94)', borderRadius: 18, padding: '14px 20px',
                boxShadow: '0 8px 36px rgba(53,133,142,0.20)', border: '1px solid rgba(136,189,164,0.38)',
                backdropFilter: 'blur(10px)', minWidth: 150,
              }}
            >
              <div style={{ fontSize: 11, color: '#7B827E', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>Portfolio Growth</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: TEAL }}>+18.4%</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontSize: 11, color: '#22C55E', fontWeight: 600 }}>Outperforming Index</span>
              </div>
            </motion.div>

            {/* Floating card — Goal achieved */}
            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.8 }}
              style={{
                position: 'absolute', bottom: 30, right: -16,
                background: 'rgba(255,255,255,0.94)', borderRadius: 18, padding: '14px 20px',
                boxShadow: '0 8px 36px rgba(53,133,142,0.20)', border: '1px solid rgba(136,189,164,0.38)',
                backdropFilter: 'blur(10px)', minWidth: 180,
              }}
            >
              <div style={{ fontSize: 11, color: '#7B827E', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px' }}>Retirement Goal</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#303733' }}>₹1.2 Cr</div>
              <div style={{ height: 6, background: '#E6EEC9', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '72%', background: `linear-gradient(90deg, ${TEAL}, ${MINT})`, borderRadius: 3 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 10, color: '#7B827E' }}>72% reached</span>
                <span style={{ fontSize: 10, color: TEAL, fontWeight: 600 }}>On Track ✓</span>
              </div>
            </motion.div>

            {/* Floating badge — Trusted */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: 90, left: -14,
                background: `linear-gradient(135deg, ${TEAL}, #2a6e76)`, borderRadius: 14, padding: '10px 16px',
                boxShadow: '0 6px 24px rgba(53,133,142,0.40)', color: '#fff',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <CheckCircle size={16} />
              <span style={{ fontSize: 12, fontWeight: 700 }}>AMFI Registered</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          INVESTMENT OPTIONS
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.50)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="20%" w={380} h={300} color="#B1D3B9" op={0.40} blur={65} r="45% 55% 60% 40% / 58% 42% 58% 42%" />
        <SectionBlob x="85%" y="60%" w={320} h={260} color="#88BDA4" op={0.32} blur={58} r="62% 38% 44% 56% / 40% 62% 38% 60%" />
        <SectionBlob x="50%" y="-5%" w={440} h={220} color="#E6F2DD" op={0.75} blur={70} r="50% 50% 50% 50%" />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Investment Options for You</h2>
              <p style={{ fontSize: 17, color: '#555D58', maxWidth: 540, margin: '0 auto' }}>Your investment needs evolve at every stage of life. We offer tailored guidance to match exactly where you are today.</p>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {[
              { label: 'Gen Z', tag: 'Ages 18–30', img: 'https://images.unsplash.com/photo-1689799514696-b16af9b53753?w=600&q=80', desc: 'Start early and let compounding work its magic. Low SIPs with high long-term growth potential designed for the next generation.' },
              { label: 'Middle Age', tag: 'Ages 31–55', img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80', desc: 'Balance wealth creation with family responsibilities. Strategic investing across growth and stability-focused funds.' },
              { label: 'Retired', tag: 'Ages 55+', img: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?w=600&q=80', desc: 'Protect and grow your accumulated wealth. Low-risk, income-generating funds that offer stability and regular returns.' },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={i * 0.15}>
                <div style={{ borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,0.88)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', transition: 'all 0.3s', cursor: 'pointer', backdropFilter: 'blur(6px)', border: '1px solid rgba(136,189,164,0.2)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(53,133,142,0.18)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)' }}
                >
                  <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                    <img src={card.img} alt={card.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                      onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.28), transparent)' }} />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: TEAL, background: 'rgba(230,242,221,0.9)', padding: '4px 12px', borderRadius: 20 }}>{card.tag}</span>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#303733', margin: '12px 0 8px' }}>{card.label}</h3>
                    <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, marginBottom: 20 }}>{card.desc}</p>
                    <Link to="/contact" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px',
                      borderRadius: 10, background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2a6e76'; (e.currentTarget as HTMLElement).style.gap = '10px' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = TEAL; (e.currentTarget as HTMLElement).style.gap = '6px' }}
                    >
                      Invest Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FUTURE WEALTH CALCULATOR
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }} ref={calcRef}>
        <SectionBlob x="5%" y="10%" w={280} h={240} color="#659287" op={0.18} blur={52} r="55% 45% 62% 38% / 42% 60% 40% 58%" />
        <SectionBlob x="90%" y="30%" w={350} h={280} color="#B1D3B9" op={0.48} blur={68} r="38% 62% 44% 56% / 58% 40% 62% 38%" />
        <SectionBlob x="50%" y="80%" w={500} h={280} color="#E6F2DD" op={0.80} blur={85} r="50% 50% 50% 50%" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>See Your Future Wealth</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Adjust the values to understand how consistent investing may contribute toward your financial goals.</p>
            </div>
          </FadeUp>
          <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 8px 48px rgba(53,133,142,0.12)', border: '1px solid rgba(136,189,164,0.25)', padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, backdropFilter: 'blur(8px)' }} className="calc-grid">
            <div>
              {[
                { label: 'Monthly Investment', value: monthly, setter: setMonthly, min: 500, max: 200000, step: 500, fmt: (v: number) => `₹${v.toLocaleString('en-IN')}` },
                { label: 'Investment Period (Years)', value: years, setter: setYears, min: 1, max: 40, step: 1, fmt: (v: number) => `${v} yrs` },
                { label: 'Expected Annual Return', value: rate, setter: setRate, min: 4, max: 30, step: 0.5, fmt: (v: number) => `${v}%` },
              ].map(({ label, value, setter, min, max, step, fmt: fmtVal }) => (
                <div key={label} style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <label style={{ fontSize: 15, fontWeight: 600, color: '#303733' }}>{label}</label>
                    <span style={{ fontSize: 15, fontWeight: 700, color: TEAL }}>{fmtVal(value)}</span>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value} onChange={e => setter(Number(e.target.value))} style={{ width: '100%', accentColor: TEAL, cursor: 'pointer' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                    <span style={{ fontSize: 12, color: '#7B827E' }}>{fmtVal(min)}</span>
                    <span style={{ fontSize: 12, color: '#7B827E' }}>{fmtVal(max)}</span>
                  </div>
                </div>
              ))}
              <Link to="/calculators/sip" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 600, boxShadow: '0 6px 20px rgba(53,133,142,0.3)', transition: 'all 0.2s', marginTop: 8 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                Start My SIP <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={4} dataKey="value" startAngle={90} endAngle={-270}>
                    {chartData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(val: number) => fmt(val)} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Invested Amount', value: animInvested, color: MINT },
                  { label: 'Estimated Returns', value: animReturns, color: TEAL },
                  { label: 'Estimated Future Value', value: animFuture, color: '#303733', large: true },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', borderRadius: 12, background: item.large ? 'rgba(230,242,221,0.85)' : 'rgba(248,253,248,0.85)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }} />
                      <span style={{ fontSize: 14, color: '#555D58' }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: item.large ? 18 : 15, fontWeight: item.large ? 800 : 600, color: item.color }}>{fmt(item.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INFO CARDS — strict 2 × 2
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.45)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="92%" y="5%" w={300} h={260} color="#88BDA4" op={0.35} blur={58} r="38% 62% 52% 48% / 60% 38% 62% 40%" />
        <SectionBlob x="3%" y="70%" w={260} h={220} color="#B1D3B9" op={0.42} blur={52} r="62% 38% 44% 56% / 40% 60% 38% 62%" />
        <SectionBlob x="48%" y="45%" w={420} h={280} color="#E6F2DD" op={0.68} blur={75} r="50% 50% 50% 50%" />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Everything You Need to Know</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Understand who we serve, how we work, and why investing matters for your future.</p>
            </div>
          </FadeUp>

          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }} className="info-grid">
            {infoCards.slice(0, 2).map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.12}>
                <InfoCard card={card} hovered={hoveredCard === i} onHover={setHoveredCard} index={i} />
              </FadeUp>
            ))}
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="info-grid">
            {infoCards.slice(2).map((card, i) => (
              <FadeUp key={card.title} delay={(i + 2) * 0.12}>
                <InfoCard card={card} hovered={hoveredCard === i + 2} onHover={setHoveredCard} index={i + 2} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS — 10 cards
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="15%" w={360} h={280} color="#88BDA4" op={0.30} blur={62} r="42% 58% 66% 34% / 60% 40% 58% 42%" />
        <SectionBlob x="88%" y="55%" w={320} h={260} color="#B1D3B9" op={0.40} blur={58} r="58% 42% 36% 64% / 44% 60% 40% 60%" />
        <SectionBlob x="42%" y="80%" w={460} h={250} color="#E6F2DD" op={0.72} blur={80} r="50% 50% 50% 50%" />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Loved by Families Across India</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Real stories from real investors who chose MFDThiru for their financial journey.</p>
            </div>
          </FadeUp>

          {/* Main Featured Testimonial */}
          <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
            <div style={{ background: 'rgba(255,255,255,0.90)', borderRadius: 24, padding: '44px 48px', boxShadow: '0 8px 48px rgba(53,133,142,0.10)', border: '1px solid rgba(136,189,164,0.25)', textAlign: 'center', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden' }}>
              {/* bg accent */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(230,242,221,0.5)', pointerEvents: 'none' }} />

              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <p style={{ fontSize: 18, color: '#303733', lineHeight: 1.85, fontStyle: 'italic', marginBottom: 32, maxWidth: 700, margin: '0 auto 32px', position: 'relative', zIndex: 1 }}>
                "{testimonials[activeTestimonial].text}"
              </p>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#fff', fontSize: 20, fontWeight: 700 }}>
                {testimonials[activeTestimonial].name[0]}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#303733' }}>{testimonials[activeTestimonial].name}</div>
              <div style={{ fontSize: 13, color: TEAL, marginTop: 3, fontWeight: 500 }}>{testimonials[activeTestimonial].type} · {testimonials[activeTestimonial].city}</div>
            </div>
          </motion.div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginTop: 28 }}>
            <button onClick={() => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
              style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.88)', border: `1.5px solid ${MINT}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: TEAL, transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = LIGHT }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: 7 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                  width: i === activeTestimonial ? 28 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                  background: i === activeTestimonial ? TEAL : MINT, transition: 'all 0.3s', padding: 0,
                }} />
              ))}
            </div>

            <button onClick={() => setActiveTestimonial(p => (p + 1) % testimonials.length)}
              style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.88)', border: `1.5px solid ${MINT}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: TEAL, transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = LIGHT }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(230,242,221,0.55)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={320} h={260} color="#88BDA4" op={0.40} blur={60} r="58% 42% 44% 56% / 40% 62% 38% 62%" />
        <SectionBlob x="88%" y="30%" w={280} h={240} color="#659287" op={0.22} blur={52} r="42% 58% 62% 38% / 60% 40% 58% 42%" />
        <SectionBlob x="45%" y="-10%" w={480} h={300} color="#E6F2DD" op={0.85} blur={80} r="50% 50% 50% 50%" />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
              {[1,2,3].map(k => <CheckCircle key={k} size={22} color={TEAL} />)}
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16 }}>Ready to Start Your Investment Journey?</h2>
            <p style={{ fontSize: 17, color: '#555D58', marginBottom: 36, lineHeight: 1.75 }}>Take the next step toward planning your financial goals. Our team is ready to help you create a personalised investment plan.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ padding: '16px 32px', borderRadius: 12, background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(53,133,142,0.35)', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                Start Investing <ArrowRight size={18} />
              </Link>
              <Link to="/services" style={{ padding: '16px 32px', borderRadius: 12, background: 'rgba(255,255,255,0.85)', color: TEAL, border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 16, fontWeight: 600, transition: 'all 0.2s' }}>
                Our Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .calc-grid { grid-template-columns: 1fr !important; }
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

interface CardData {
  title: string
  icon: React.ReactNode
  desc: string
  link: string
  linkLabel: string
}

function InfoCard({ card, hovered, onHover, index }: {
  card: CardData
  hovered: boolean
  onHover: (i: number | null) => void
  index: number
}) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.88)', borderRadius: 22, padding: '32px 30px',
        border: `1.5px solid ${hovered ? 'rgba(136,189,164,0.50)' : 'rgba(136,189,164,0.22)'}`,
        transition: 'all 0.30s', cursor: 'default', backdropFilter: 'blur(8px)',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 44px rgba(53,133,142,0.14)' : 'none',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div style={{ width: 58, height: 58, borderRadius: 18, background: hovered ? '#E6F2DD' : 'rgba(230,242,221,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'all 0.3s', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}>
        {card.icon}
      </div>
      <h3 style={{ fontSize: 21, fontWeight: 700, color: '#303733', marginBottom: 12 }}>{card.title}</h3>
      <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.75, flex: 1, marginBottom: 24 }}>{card.desc}</p>
      <Link
        to={card.link}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px',
          borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
          border: `1.5px solid ${hovered ? '#35858E' : 'rgba(136,189,164,0.45)'}`,
          color: '#35858E', background: hovered ? '#E6F2DD' : 'transparent',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '12px' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '7px' }}
      >
        <Eye size={14} /> {card.linkLabel}
      </Link>
    </div>
  )
}
