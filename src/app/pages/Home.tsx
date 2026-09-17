import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { ArrowRight, TrendingUp, Shield, Users, Target, Star, ChevronLeft, ChevronRight, CheckCircle, BookOpen, Layers, HeartHandshake, RefreshCw, Award, Smartphone, UserCheck, Compass, ShieldAlert, X } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { SEO, ORGANIZATION_SCHEMA } from '../components/SEO'
import { SIPCalc } from './calculators/SIPCalc'
import { LumpSumCalc } from './calculators/LumpSumCalc'
import { RetirementCalc } from './calculators/RetirementCalc'
import { EducationCalc } from './calculators/EducationCalc'
import { GoalBasedCalc } from './calculators/GoalBasedCalc'
import { FlexibleCalc } from './calculators/FlexibleCalc'
import { CashFlowCalc } from './calculators/CashFlowCalc'
import alreadyRetiredUserImg from '../../imports/already_retired_user.png'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'

const calculatorOptions = [
  { id: 'sip', name: 'SIP Calculator', icon: '📈', desc: 'Calculate wealth growth from monthly SIP investments', route: '/calculators/sip', Component: SIPCalc },
  { id: 'lump-sum', name: 'Lump-Sum Calculator', icon: '💰', desc: 'Estimate returns on a one-time investment', route: '/calculators/lump-sum', Component: LumpSumCalc },
  { id: 'retirement', name: 'Retirement Corpus', icon: '🌅', desc: 'Plan your retirement target and monthly savings', route: '/calculators/retirement', Component: RetirementCalc },
  { id: 'education', name: "Children's Education", icon: '🎓', desc: 'Calculate funding required for higher education', route: '/calculators/education', Component: EducationCalc },
  { id: 'goal', name: 'Goal-Based SIP', icon: '🎯', desc: 'Plan for specific goals like Home, Travel, Wedding', route: '/calculators/goal-based', Component: GoalBasedCalc },
  { id: 'flexible', name: 'Step-Up / Flexible', icon: '🚀', desc: 'Model annual increases in your monthly SIP', route: '/calculators/flexible', Component: FlexibleCalc },
  { id: 'cash-flow', name: 'Cash Flow / SWP', icon: '💵', desc: 'Manage income, expenses & systematic withdrawals', route: '/calculators/cash-flow', Component: CashFlowCalc },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const testimonials = [
  {
    name: 'Anand',
    type: 'Client Investor',
    city: 'Chennai',
    text: 'Nice approach with our clients. Reg investment any doubts explain very briefly about that immediately. I have great experience with Wcms.'
  },
  {
    name: 'Dhamayanthi',
    type: 'Long-term Client',
    city: 'Chennai',
    text: 'It has been our pleasure to see WCMS grow into a fine boutique investment firm. Really pleased with the way they offer customised financial and investment advice and facilitate in managing investment plans. We wish them the very best in all their future endeavours.'
  },
  {
    name: 'Pavitra SV',
    type: 'Director Internal Audit, BNP Paribas India Solutions Private Limited',
    city: 'Chennai',
    text: `Working with Mr. J.C. Thirumurgan since 2005 has been one of the best financial decisions of my life. Over the past two decades, he has transitioned from a trusted investment adviser to a true family mentor. Thanks to his strategic guidance, insightful market advice, and unwavering availability, I have been able to build a meaningful financial corpus that turned my hard-earned savings into long-term wealth.

His impact on our family goes beyond just managing portfolio growth. Mr. Thirumurgan has guided me through pivotal career moves, supported my husband’s financial goals, and now manages the portfolio of our 18-year-old son. Because of his early planning and vision, my son is already set up for a comfortable retirement by age 45.

Mr. Thirumurgan is a rare professional whose expertise, warmth, and integrity span generations, and our family looks forward to continuing this wonderful journey with him for many years to come.`
  },
  {
    name: 'Danny Steffe',
    type: 'Portfolio & Wealth Client',
    city: 'Chennai',
    text: 'Partnering with Mr. Thirumurugan and WCMS has been an exceptional experience. His deep market insight, prompt responsiveness, and transparent wealth management give us complete confidence in achieving our financial goals.'
  },
  {
    name: 'Abinaya Satish',
    type: 'SIP & Family Wealth Planner',
    city: 'Coimbatore',
    text: 'The team at MFDthiru / WCMS provides unmatched personal attention and financial clarity. They helped structure our family\'s goal-based investments seamlessly. Highly recommended for long-term wealth building.'
  },
  {
    name: 'S Palanivel',
    type: 'Client Investor',
    city: 'Chennai',
    text: `Sir Seen Very detailed subjectwise Explained the features in each types of investments. Very useful Really usable at any point of time from Mobile Excellent and knowledge driven Great God bless.

Thanks and Regards`
  },
]



export function Home() {
  const [selectedCalc, setSelectedCalc] = useState('sip')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const calcRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title="MFDthiru | AMFI Registered Mutual Fund Distributor (ARN 26890)"
        description="MFDthiru — AMFI-registered Mutual Fund Distributor (ARN 26890) led by J. C. Thirumurugan with 20+ years experience. Goal-based Mutual Fund & Retirement Planning."
        canonical="/"
        schema={ORGANIZATION_SCHEMA}
      />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'rgba(255,255,255,0.52)' }}>
        <SectionBlob x="52%" y="-12%" w={580} h={460} color="#B1D3B9" op={0.40} blur={85} r="55% 45% 38% 62% / 50% 42% 58% 50%" />
        <SectionBlob x="72%" y="45%" w={320} h={270} color="#88BDA4" op={0.28} blur={58} r="40% 60% 65% 35% / 62% 38% 58% 42%" />
        <SectionBlob x="8%" y="62%" w={240} h={200} color="#E6F2DD" op={0.72} blur={50} r="62% 38% 48% 52% / 44% 60% 40% 56%" />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }} className="hero-grid">

          {/* Left Text */}
          <div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800, color: '#303733', lineHeight: 1.12, marginBottom: 22 }}>
              Grow Your Wealth<br />
              With <span style={{ color: TEAL }}>Trusted Guidance</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontSize: 17, color: '#555D58', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              Helping individuals and family’s structure mutual fund investments around long-term goals, retirement corpus creation and inflation-adjusted retirement income.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
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
              <Link to="/why-mfd" style={{
                padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.85)', color: TEAL,
                border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 16, fontWeight: 600, transition: 'all 0.2s', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(230,242,221,0.9)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.85)' }}
              >
                Why Invest Through MFD?
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[
                ['800+', 'Global Clients'],
                ['20+', 'Years Experience'],
                ['3 Gens', 'Family Trust'],
                ['Goal-Based', 'Personalised Support'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: TEAL }}>{num}</div>
                  <div style={{ fontSize: 13, color: '#7B827E', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: 500 }}>
              <div style={{
                width: '100%', borderRadius: 28, overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(53,133,142,0.22), 0 8px 32px rgba(0,0,0,0.10)',
                border: '2px solid rgba(136,189,164,0.30)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1714974528703-e5ad41abc259?w=900&q=85"
                  alt="Financial planning consultation with MFDthiru"
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(101,146,135,0.08) 0%, transparent 50%, rgba(230,242,221,0.18) 100%)', pointerEvents: 'none' }} />
              </div>

              {/* Floating popup card 1 */}
              <motion.div
                className="hero-floating-card"
                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: 24, left: -24,
                  background: 'rgba(255,255,255,0.95)', borderRadius: 18, padding: '14px 20px',
                  boxShadow: '0 8px 36px rgba(53,133,142,0.20)', border: '1px solid rgba(136,189,164,0.38)',
                  backdropFilter: 'blur(10px)', maxWidth: 260, zIndex: 2,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: '#303733', lineHeight: 1.4 }}>
                  “We Help You Save, Not Spend Without Purpose. Start Saving Today!”
                </div>
              </motion.div>

              {/* Floating popup card 2 */}
              <motion.div
                className="hero-floating-card"
                animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.8 }}
                style={{
                  position: 'absolute', bottom: 20, right: -20,
                  background: 'rgba(255,255,255,0.95)', borderRadius: 18, padding: '14px 20px',
                  boxShadow: '0 8px 36px rgba(53,133,142,0.20)', border: '1px solid rgba(136,189,164,0.38)',
                  backdropFilter: 'blur(10px)', maxWidth: 260, zIndex: 2,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: TEAL, lineHeight: 1.4 }}>
                  “Your Investment Today Makes Tomorrow’s Goals Achievable. Start Today.”
                </div>
              </motion.div>
            </div>
            
            {/* AMFI Registered Mutual Fund Distributor note under image */}
            <p style={{ fontSize: 14, color: '#555D58', marginTop: 32, textAlign: 'center', fontWeight: 500 }}>
              MFDthiru is a brand of J. C. Thirumurugan | AMFI-Registered Mutual Fund Distributor | ARN-26890
            </p>
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
              <p style={{ fontSize: 17, color: '#555D58', maxWidth: 640, margin: '0 auto' }}>Tailored mutual fund distribution solutions structured to help you build wealth, achieve key milestones, and secure your retirement.</p>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {[
              {
                title: 'Building Wealth',
                description: 'SIP, lump sum, goal-based investing and long-term compounding',
                cta: 'Schedule an Investment Discussion',
                route: '/get-started?option=Building Wealth',
                img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80',
                IconComp: TrendingUp,
              },
              {
                title: 'Preparing for Retirement',
                description: 'Building the required retirement corpus before retirement',
                cta: 'Review My Existing Portfolio',
                route: '/get-started?option=Preparing for Retirement',
                img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
                IconComp: Target,
              },
              {
                title: 'Already Retired',
                description: 'Structuring existing corpus to create inflation-adjusted cash flow',
                cta: 'Plan My Retirement Cash Flow',
                route: '/get-started?option=Already Retired',
                img: alreadyRetiredUserImg,
                IconComp: Shield,
              },
            ].map((card, i) => {
              const Icon = card.IconComp
              return (
                <FadeUp key={card.title} delay={i * 0.15}>
                  <Link
                    to={card.route}
                    style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.92)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(136,189,164,0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      backdropFilter: 'blur(6px)',
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(53,133,142,0.18)'
                    }}
                    onMouseLeave={e => {
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'
                    }}
                  >
                    <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={card.img}
                        alt={card.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onError={e => {
                          ;(e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80'
                        }}
                        onMouseEnter={e => ((e.target as HTMLElement).style.transform = 'scale(1.06)')}
                        onMouseLeave={e => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                      />
                    </div>

                    <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 10, background: 'rgba(230,242,221,0.85)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', color: TEAL, flexShrink: 0,
                          border: '1px solid rgba(136,189,164,0.3)',
                        }}>
                          <Icon size={20} />
                        </div>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#303733', margin: 0, lineHeight: 1.3 }}>
                          {card.title}
                        </h3>
                      </div>

                      <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.65, marginBottom: 28, flexGrow: 1 }}>
                        {card.description}
                      </p>

                      <div style={{ marginTop: 'auto' }}>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            width: '100%',
                            padding: '13px 20px',
                            borderRadius: 12,
                            background: TEAL,
                            color: '#fff',
                            fontSize: 14.5,
                            fontWeight: 700,
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 14px rgba(53,133,142,0.25)',
                            boxSizing: 'border-box',
                          }}
                        >
                          <span>{card.cta}</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINANCIAL CALCULATORS HUB
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }} ref={calcRef}>
        <SectionBlob x="5%" y="10%" w={280} h={240} color="#659287" op={0.18} blur={52} r="55% 45% 62% 38% / 42% 60% 40% 58%" />
        <SectionBlob x="90%" y="30%" w={350} h={280} color="#B1D3B9" op={0.48} blur={68} r="38% 62% 44% 56% / 58% 40% 62% 38%" />
        <SectionBlob x="50%" y="80%" w={500} h={280} color="#E6F2DD" op={0.80} blur={85} r="50% 50% 50% 50%" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>
                Financial Calculators
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>
                Calculate & Plan Your Wealth
              </h2>
              <p style={{ fontSize: 17, color: '#555D58', maxWidth: 640, margin: '0 auto' }}>
                Select any calculator below to model your financial goals and estimate potential returns.
              </p>
            </div>
          </FadeUp>

          {/* Interactive Calculator Selector Control */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            {/* Calculator Option Pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1000 }}>
              {calculatorOptions.map(calc => {
                const isActive = selectedCalc === calc.id
                return (
                  <button
                    key={calc.id}
                    onClick={() => setSelectedCalc(calc.id)}
                    style={{
                      padding: '8px 18px', borderRadius: 24, fontSize: 13, fontWeight: 600,
                      border: isActive ? `2px solid ${TEAL}` : '1px solid rgba(136,189,164,0.3)',
                      background: isActive ? TEAL : 'rgba(255,255,255,0.85)',
                      color: isActive ? '#fff' : '#555D58',
                      cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6,
                      boxShadow: isActive ? '0 4px 14px rgba(53,133,142,0.25)' : 'none',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(230,242,221,0.9)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.85)'
                    }}
                  >
                    <span>{calc.icon}</span>
                    <span>{calc.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Calculator Component View */}
          <div style={{ position: 'relative' }}>
            <motion.div
              key={selectedCalc}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {(() => {
                const activeOpt = calculatorOptions.find(c => c.id === selectedCalc) || calculatorOptions[0]
                const CalcComp = activeOpt.Component
                return <CalcComp embedded />
              })()}
            </motion.div>

          </div>
        </div>
      </section>



      {/* ══════════════════════════════
          TESTIMONIALS
      ══════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="15%" w={360} h={280} color="#88BDA4" op={0.30} blur={62} r="42% 58% 66% 34% / 60% 40% 58% 42%" />
        <SectionBlob x="88%" y="55%" w={320} h={260} color="#B1D3B9" op={0.40} blur={58} r="58% 42% 36% 64% / 44% 60% 40% 60%" />
        <SectionBlob x="42%" y="80%" w={460} h={250} color="#E6F2DD" op={0.72} blur={80} r="50% 50% 50% 50%" />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Loved by Families Across India</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Real stories from real investors who chose MFDthiru for their financial journey.</p>
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
              <p style={{ fontSize: 18, color: '#303733', lineHeight: 1.85, fontStyle: 'italic', marginBottom: 32, maxWidth: 780, margin: '0 auto 32px', position: 'relative', zIndex: 1, whiteSpace: 'pre-line', textAlign: 'left' }}>
                "{testimonials[activeTestimonial].text}"
              </p>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', color: '#fff', fontSize: 20, fontWeight: 700 }}>
                {testimonials[activeTestimonial].name[0]}
              </div>
              <div style={{ fontWeight: 700, fontSize: 17, color: '#303733' }}>{testimonials[activeTestimonial].name}</div>
              <div style={{ fontSize: 13, color: TEAL, marginTop: 3, fontWeight: 500 }}>{testimonials[activeTestimonial].type}{testimonials[activeTestimonial].city ? ` · ${testimonials[activeTestimonial].city}` : ''}</div>
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

            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 360 }}>
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
              <Link to="/about" style={{ padding: '16px 32px', borderRadius: 12, background: 'rgba(255,255,255,0.85)', color: TEAL, border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 16, fontWeight: 600, transition: 'all 0.2s' }}>
                About Us
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


