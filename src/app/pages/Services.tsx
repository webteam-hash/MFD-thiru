import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'
const SOFT = '#D4EAD0'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

/* ── Custom SVG Icons ── */

function IconRetirement({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* House shape */}
      <path d="M16 4L4 13V28H12V20H20V28H28V13L16 4Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      {/* Person inside */}
      <circle cx="16" cy="15" r="2" fill={color}/>
      {/* Cash flow drops */}
      <path d="M23 22C23 22 25 20.5 25 19C25 17.9 24.1 17 23 17C21.9 17 21 17.9 21 19C21 20.5 23 22 23 22Z" fill={color} opacity="0.7"/>
      <path d="M27 25C27 25 29 23.5 29 22C29 20.9 28.1 20 27 20C25.9 20 25 20.9 25 22C25 23.5 27 25 27 25Z" fill={color} opacity="0.5"/>
      {/* Flowing line */}
      <path d="M20 28C21 26 22.5 25 24 25C25.5 25 27 26 28 27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

function IconEducation({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Graduation cap top */}
      <path d="M16 6L4 12L16 18L28 12L16 6Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      {/* Cap tassel pole */}
      <line x1="28" y1="12" x2="28" y2="19" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="28" cy="20" r="1.5" fill={color}/>
      {/* Rising bar chart underneath */}
      <rect x="6" y="22" width="4" height="6" rx="1" fill={color} opacity="0.4"/>
      <rect x="12" y="19" width="4" height="9" rx="1" fill={color} opacity="0.6"/>
      <rect x="18" y="16" width="4" height="12" rx="1" fill={color} opacity="0.8"/>
      {/* Trend arrow */}
      <path d="M6 25L11 21.5L17 18.5L22 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19 15L22 16L21 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconGoal({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mountain peak */}
      <path d="M4 26L14 10L20 18L24 14L28 26H4Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      {/* Summit flag */}
      <line x1="14" y1="10" x2="14" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 5L19 7L14 9Z" fill={color}/>
      {/* Step dots on slope */}
      <circle cx="8" cy="23" r="1.4" fill={color} opacity="0.5"/>
      <circle cx="11" cy="18" r="1.4" fill={color} opacity="0.65"/>
      <circle cx="14" cy="13" r="1.4" fill={color} opacity="0.8"/>
    </svg>
  )
}

function IconSIP({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular arrows (systematic) */}
      <path d="M16 5C11 5 7 9 7 14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M5 12L7 14L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 23C21 23 25 19 25 14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M27 16L25 14L23 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Rupee symbol in center */}
      <text x="13" y="18" fontSize="9" fontWeight="bold" fill={color} fontFamily="sans-serif">₹</text>
      {/* Calendar dots below */}
      <rect x="6" y="25" width="4" height="4" rx="1" fill={color} opacity="0.4"/>
      <rect x="12" y="25" width="4" height="4" rx="1" fill={color} opacity="0.6"/>
      <rect x="18" y="25" width="4" height="4" rx="1" fill={color} opacity="0.8"/>
      <line x1="6" y1="24" x2="22" y2="24" stroke={color} strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}

function IconLumpSum({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coin stack */}
      <ellipse cx="16" cy="24" rx="9" ry="3" stroke={color} strokeWidth="1.8" fill="none"/>
      <path d="M7 24V21" stroke={color} strokeWidth="1.8"/>
      <path d="M25 24V21" stroke={color} strokeWidth="1.8"/>
      <ellipse cx="16" cy="21" rx="9" ry="3" stroke={color} strokeWidth="1.8" fill="none"/>
      <path d="M7 21V18" stroke={color} strokeWidth="1.8"/>
      <path d="M25 21V18" stroke={color} strokeWidth="1.8"/>
      <ellipse cx="16" cy="18" rx="9" ry="3" stroke={color} strokeWidth="1.8" fill="none"/>
      {/* Upward arrow */}
      <line x1="16" y1="14" x2="16" y2="5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 8L16 4L20 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconFlexible({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wavy flowing path */}
      <path d="M4 18C7 18 7 14 10 14C13 14 13 18 16 18C19 18 19 14 22 14C25 14 25 18 28 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Plus symbol indicating voluntary add */}
      <circle cx="26" cy="8" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <line x1="26" y1="5.5" x2="26" y2="10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="23.5" y1="8" x2="28.5" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      {/* Dots along wave showing freedom */}
      <circle cx="7" cy="22" r="1.5" fill={color} opacity="0.5"/>
      <circle cx="13" cy="22" r="1.5" fill={color} opacity="0.65"/>
      <circle cx="19" cy="22" r="1.5" fill={color} opacity="0.8"/>
      {/* Dashed lines showing optional */}
      <line x1="7" y1="24" x2="7" y2="27" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 2"/>
      <line x1="13" y1="24" x2="13" y2="27" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 2"/>
      <line x1="19" y1="24" x2="19" y2="27" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1.5 2"/>
    </svg>
  )
}

function IconWealthCreation({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tree trunk */}
      <line x1="16" y1="28" x2="16" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="22" x2="12" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="20" x2="20" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      {/* Canopy layers */}
      <ellipse cx="16" cy="14" rx="8" ry="5" stroke={color} strokeWidth="1.8" fill="none"/>
      <ellipse cx="16" cy="10" rx="6" ry="4" stroke={color} strokeWidth="1.8" fill="none"/>
      <ellipse cx="16" cy="7" rx="4" ry="3" stroke={color} strokeWidth="1.8" fill="none"/>
      {/* Coin leaves */}
      <circle cx="10" cy="13" r="2" fill={color} opacity="0.5"/>
      <circle cx="22" cy="13" r="2" fill={color} opacity="0.5"/>
      <circle cx="16" cy="6" r="2" fill={color} opacity="0.7"/>
      {/* Rupee on top coin */}
      <text x="14.3" y="8" fontSize="3.5" fill="white" fontFamily="sans-serif" fontWeight="bold">₹</text>
    </svg>
  )
}

function IconPortfolioReview({ size = 30, color = TEAL }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clipboard base */}
      <rect x="6" y="7" width="16" height="20" rx="2" stroke={color} strokeWidth="1.8" fill="none"/>
      <rect x="11" y="5" width="6" height="4" rx="1" stroke={color} strokeWidth="1.5" fill="none"/>
      {/* Mini pie chart on clipboard */}
      <circle cx="14" cy="18" r="5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M14 18L14 13" stroke={color} strokeWidth="1.5"/>
      <path d="M14 18L18.3 20.5" stroke={color} strokeWidth="1.5"/>
      <path d="M14 13A5 5 0 0 1 18.3 20.5" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M14 13A5 5 0 0 0 9.7 20.5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15"/>
      {/* Magnifying glass overlapping */}
      <circle cx="23" cy="23" r="5" stroke={color} strokeWidth="1.8" fill="rgba(255,255,255,0.9)"/>
      <line x1="27" y1="27" x2="30" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Checkmark in lens */}
      <path d="M20.5 23L22.5 25L25.5 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const services = [
  {
    icon: <IconRetirement size={30} color={TEAL} />,
    title: 'Retirement Corpus & Cash Flow Solution',
    tag: 'Retirement',
    accent: LIGHT,
    calc: '/calculators/retirement',
    calcLabel: 'Retirement Calculator',
    body: [
      'Build your retirement corpus today and deploy it for an inflation-aware cash flow after retirement. We support corpus creation through SIP, lump-sum or flexible mutual fund investments and the deployment of an existing retirement corpus—including funds presently held in fixed deposits—for structured periodic withdrawals.',
      'The approach considers the available corpus, required cash flow, rising living expenses, liquidity needs, investment horizon and risk profile. Periodic withdrawals may be facilitated through a Systematic Withdrawal Plan, subject to market conditions and the availability of sufficient units.',
    ],
  },
  {
    icon: <IconEducation size={30} color={TEAL} />,
    title: "Children's Education Goal",
    tag: 'Education',
    accent: PASTEL,
    calc: '/calculators/education',
    calcLabel: 'Education Calculator',
    body: [
      "We help parents estimate the potential future cost of education and identify the SIP, lump-sum or flexible mutual fund investment required to work towards the target corpus. Calculations and projections are illustrative, and achievement of the education corpus is not guaranteed.",
    ],
  },
  {
    icon: <IconGoal size={30} color={TEAL} />,
    title: 'Goal-Based Mutual Fund Investing',
    tag: 'Goals',
    accent: LIGHT,
    calc: '/calculators/goal-based',
    calcLabel: 'Goal Calculator',
    body: [
      "We assist investors in aligning mutual fund investments with specific goals such as children's marriage, purchasing a home, creating a future corpus and other important milestones. Scheme suggestions are provided after considering the investor's goal, investment horizon and risk profile.",
    ],
  },
  {
    icon: <IconSIP size={30} color={TEAL} />,
    title: 'SIP Investments',
    tag: 'SIP',
    accent: PASTEL,
    calc: '/calculators/sip',
    calcLabel: 'SIP Calculator',
    body: [
      "Invest systematically through mutual funds to work towards long-term goals. The investment amount and scheme category are considered based on the investor's objectives, investment horizon, financial capacity and risk profile.",
    ],
  },
  {
    icon: <IconLumpSum size={30} color={TEAL} />,
    title: 'Lump-Sum Investments',
    tag: 'Lump-Sum',
    accent: LIGHT,
    calc: '/calculators/lump-sum',
    calcLabel: 'Lump-Sum Calculator',
    body: [
      "Deploy available surplus funds into suitable mutual fund schemes for medium- or long-term goals, based on the investor's investment horizon, liquidity requirements and risk profile.",
    ],
  },
  {
    icon: <IconFlexible size={30} color={TEAL} />,
    title: 'Flexible Investments',
    tag: 'Flexible',
    accent: PASTEL,
    calc: '/calculators/flexible',
    calcLabel: 'Flexible Calculator',
    body: [
      'Begin with a lump-sum investment and add further amounts whenever surplus funds become available, without being restricted to a fixed monthly investment schedule. Additional investments remain voluntary and are subject to scheme suitability at the time of investment.',
    ],
  },
  {
    icon: <IconWealthCreation size={30} color={TEAL} />,
    title: 'Long-Term Wealth Creation',
    tag: 'Wealth',
    accent: SOFT,
    calc: '/calculators/goal-based',
    calcLabel: 'Goal Calculator',
    body: [
      'Build a diversified mutual fund portfolio intended for long-term capital growth, based on the investor\'s objectives, investment horizon and risk profile. Wealth creation and capital appreciation are not assured and remain subject to market performance.',
    ],
  },
  {
    icon: <IconPortfolioReview size={30} color={TEAL} />,
    title: 'Mutual Fund Portfolio Review',
    tag: 'Review',
    accent: PASTEL,
    calc: '/calculators/sip',
    calcLabel: 'SIP Calculator',
    body: [
      'We review existing mutual fund holdings based on the investor\'s stated goals, investment horizon, risk profile and scheme suitability, and may suggest changes where appropriate. The review is restricted to mutual funds and does not constitute comprehensive financial planning or holistic investment advice.',
    ],
  },
]

export function Services() {
  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ── Hero ── */}
      <section style={{ background: 'rgba(230,238,201,0.42)', padding: '80px 24px 72px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={420} h={330} color="#B1D3B9" op={0.42} blur={70} r="58% 42% 32% 68% / 50% 46% 54% 50%" />
        <SectionBlob x="85%" y="20%" w={340} h={280} color="#88BDA4" op={0.30} blur={60} r="40% 60% 58% 42% / 58% 40% 60% 40%" />
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 20, background: 'rgba(255,255,255,0.85)', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18, letterSpacing: '0.3px', border: `1px solid rgba(136,189,164,0.4)` }}>
              MFDThiru
            </span>
            <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, color: '#303733', marginBottom: 18, lineHeight: 1.18 }}>
              Our Services
            </h1>
            <p style={{ fontSize: 20, color: TEAL, fontWeight: 600, lineHeight: 1.6, maxWidth: 640, margin: '0 auto 0' }}>
              Mutual fund investing aligned with every important stage of life.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section style={{ padding: '64px 24px 80px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="90%" y="5%" w={320} h={260} color="#B1D3B9" op={0.38} blur={62} r="38% 62% 50% 50% / 55% 45% 55% 45%" />
        <SectionBlob x="-4%" y="45%" w={280} h={240} color="#88BDA4" op={0.28} blur={55} r="60% 40% 44% 56% / 42% 62% 38% 60%" />
        <SectionBlob x="45%" y="78%" w={440} h={280} color="#E6F2DD" op={0.70} blur={78} r="50% 50% 50% 50%" />

        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {services.map((svc, i) => (
            <FadeUp key={svc.title} delay={i * 0.07}>
              <ServiceCard svc={svc} index={i} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── How to get started ── */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.42)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="20%" w={300} h={250} color="#659287" op={0.18} blur={55} r="55% 45% 60% 40% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="40%" w={280} h={240} color="#B1D3B9" op={0.40} blur={58} r="42% 58% 44% 56% / 60% 38% 62% 38%" />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Start Investing in 3 Simple Steps</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Getting started is easier than you think.</p>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {[
              { step: '01', title: 'Book a Free Consultation', desc: 'Schedule a call or visit our office. We listen to your goals and explain every option clearly, at no charge.', emoji: '📞' },
              { step: '02', title: 'Receive Your Personalised Plan', desc: 'We prepare a specific investment plan aligned with your goal, timeline, financial capacity and risk profile.', emoji: '📋' },
              { step: '03', title: 'Start, Monitor & Grow', desc: 'We handle all onboarding paperwork. You start investing and we monitor your progress at every step.', emoji: '🚀' },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.12}>
                <div style={{ background: 'rgba(255,255,255,0.88)', borderRadius: 20, padding: '36px 28px', border: '1.5px solid rgba(136,189,164,0.22)', textAlign: 'center', position: 'relative', backdropFilter: 'blur(8px)' }}>
                  <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', background: `linear-gradient(135deg, ${TEAL}, #2a6e76)`, color: '#fff', borderRadius: 10, padding: '4px 14px', fontSize: 13, fontWeight: 700, letterSpacing: '0.5px' }}>{item.step}</div>
                  <div style={{ fontSize: 44, marginBottom: 16, marginTop: 8 }}>{item.emoji}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#303733', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '72px 24px', background: 'rgba(230,242,221,0.50)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="10%" w={280} h={240} color="#88BDA4" op={0.35} blur={55} r="58% 42% 45% 55% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="20%" w={260} h={220} color="#659287" op={0.20} blur={48} r="42% 58% 58% 42% / 60% 38% 58% 42%" />
        <div style={{ maxWidth: 580, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 14 }}>Ready to Start Investing?</h2>
            <p style={{ fontSize: 17, color: '#555D58', marginBottom: 36, lineHeight: 1.75 }}>Talk to our team today and take the first step toward your financial goals.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 34px', borderRadius: 12, background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700, boxShadow: '0 8px 24px rgba(53,133,142,0.3)', transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                Contact Us <ArrowRight size={17} />
              </Link>
              <Link to="/calculators/sip" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 34px', borderRadius: 12, background: 'rgba(255,255,255,0.88)', color: TEAL, border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 16, fontWeight: 600, transition: 'all 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = LIGHT}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)'}
              >
                Try SIP Calculator
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}

/* ─── Individual Service Card ─── */
interface SvcData {
  icon: React.ReactNode
  title: string
  tag: string
  accent: string
  calc: string
  calcLabel: string
  body: string[]
}

function ServiceCard({ svc, index }: { svc: SvcData; index: number }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.88)', borderRadius: 24, overflow: 'hidden',
        border: '1.5px solid rgba(136,189,164,0.22)', boxShadow: '0 4px 24px rgba(53,133,142,0.06)',
        transition: 'all 0.30s', backdropFilter: 'blur(8px)',
        display: 'grid', gridTemplateColumns: '260px 1fr',
      }}
      className="svc-card"
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 12px 44px rgba(53,133,142,0.14)'
        el.style.borderColor = 'rgba(136,189,164,0.45)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 4px 24px rgba(53,133,142,0.06)'
        el.style.borderColor = 'rgba(136,189,164,0.22)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Left accent panel */}
      <div style={{
        background: svc.accent,
        padding: '40px 32px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between',
        borderRight: '1.5px solid rgba(136,189,164,0.20)',
        minHeight: 200,
      }}>
        <div>
          <div style={{ width: 62, height: 62, borderRadius: 18, background: 'rgba(255,255,255,0.80)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 4px 16px rgba(53,133,142,0.12)' }}>
            {svc.icon}
          </div>
          <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 16, background: 'rgba(255,255,255,0.70)', color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: '0.3px', marginBottom: 16 }}>
            {svc.tag}
          </span>
        </div>
        <Link
          to={svc.calc}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px',
            borderRadius: 10, background: TEAL, color: '#fff',
            textDecoration: 'none', fontSize: 13, fontWeight: 600, transition: 'all 0.2s',
            boxShadow: '0 4px 14px rgba(53,133,142,0.28)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2a6e76' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = TEAL }}
        >
          {svc.calcLabel} <ArrowRight size={13} />
        </Link>
      </div>

      {/* Right content */}
      <div style={{ padding: '40px 40px' }}>
        <h2 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.3 }}>
          {svc.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {svc.body.map((para, i) => (
            <p key={i} style={{ fontSize: 15, color: '#555D58', lineHeight: 1.82, margin: 0 }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

/* Responsive override */
const _css = `
  @media (max-width: 720px) {
    .svc-card { grid-template-columns: 1fr !important; }
  }
`
if (typeof document !== 'undefined' && !document.getElementById('svc-style')) {
  const s = document.createElement('style')
  s.id = 'svc-style'
  s.textContent = _css
  document.head.appendChild(s)
}
