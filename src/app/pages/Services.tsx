import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight, CheckCircle2, ShieldCheck, Laptop, Users, Clock, Heart, Scale } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const servicesList = [
  {
    title: 'Retirement Corpus & Cash Flow Solution',
    calcLink: '/calculators/retirement',
    calcText: 'Retirement Calculator',
    desc: 'Build your retirement corpus today through disciplined SIP/lump-sum investments and deploy an existing corpus (or FDs) for inflation-aware, structured periodic cash flow via Systematic Withdrawal Plans (SWP).',
    bullets: [
      'Corpus accumulation through SIP, lump-sum or flexible contributions.',
      'Deploying existing corpus or fixed deposits for periodic cash flow.',
      'Inflation-aware cash-flow structuring considering liquidity & risk tolerance.'
    ]
  },
  {
    title: "Children's Education Goal",
    calcLink: '/calculators/education',
    calcText: 'Education Calculator',
    desc: 'Estimate future higher education costs and identify the required SIP or lump-sum mutual fund investment to work towards your target corpus.',
    bullets: [
      'Future education cost estimation considering inflation.',
      'Customized SIP, lump-sum, or flexible mutual fund plans.',
      'Disciplined timeline tracking for key educational milestones.'
    ]
  },
  {
    title: 'Goal-Based Mutual Fund Solutions',
    calcLink: '/calculators/goal-based',
    calcText: 'Goal Calculator',
    desc: 'Align mutual fund investments with specific financial goals such as buying a home, purchasing a vehicle, marriage, or major family milestones.',
    bullets: [
      'Clear target corpus and time-horizon planning.',
      'Curated mutual fund scheme options based on suitability.',
      'Incidental goal-based mutual fund guidance permitted by AMFI FAQ 4.'
    ]
  },
  {
    title: 'Systematic Investment Plans (SIP)',
    calcLink: '/calculators/sip',
    calcText: 'SIP Calculator',
    desc: 'Start disciplined monthly investing in suitable mutual fund schemes for long-term wealth accumulation.',
    bullets: [
      'Automated monthly or quarterly regular investments.',
      'Rupee cost averaging across market fluctuations.',
      'Flexible options to increase SIP amounts over time.'
    ]
  },
  {
    title: 'Lump-Sum Investments',
    calcLink: '/calculators/lump-sum',
    calcText: 'Lump-Sum Calculator',
    desc: 'Deploy lump-sum capital or surplus business funds into suitable mutual fund scheme categories aligned with your investment horizon.',
    bullets: [
      'Ideal for business owners, property proceeds, or bonus payouts.',
      'Staggered deployment options through Systematic Transfer Plans (STP).',
      'Curated scheme recommendations based on risk profiling.'
    ]
  },
  {
    title: 'Flexible Investment Solution',
    calcLink: '/calculators/flexible',
    calcText: 'Flexible Calculator',
    desc: 'Combine an initial lump-sum investment with irregular surplus contributions whenever business or personal funds become available.',
    bullets: [
      'Initial lump sum + voluntary future surplus additions.',
      'No fixed monthly obligation — ideal for business owners.',
      'Indicative goal-achievement tracking.'
    ]
  },
  {
    title: 'Periodic Mutual Fund Portfolio Review',
    calcLink: '/contact',
    calcText: 'Schedule Review',
    desc: 'Existing mutual fund holdings may be periodically reviewed based on stated goals, investment horizon, risk profile, and scheme suitability.',
    bullets: [
      'Ongoing review of fund category performance & suitability.',
      'Portfolio adjustments within permitted distribution scope.',
      'Consolidated online portfolio reporting.'
    ]
  }
]

export function Services() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="58% 42% 35% 65% / 48% 55% 45% 52%" />
        <SectionBlob x="80%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 60% 40% / 58% 38% 62% 42%" />
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              Our Services & Solutions
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Why Invest Through <span style={{ color: TEAL }}>MFDThiru?</span>
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', lineHeight: 1.8, maxWidth: 760, margin: '0 auto 24px' }}>
              Experienced leadership. Dedicated support. Digital convenience. We guide your mutual fund journey from first SIP to retirement cash flow.
            </p>
            <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', fontSize: 13, color: TEAL, fontWeight: 700 }}>
              <span style={{ padding: '8px 18px', background: '#ffffff', borderRadius: 14, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                AMFI-Registered Mutual Fund Distributor – ARN 26890
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '72px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="20%" w={300} h={260} color="#B1D3B9" op={0.35} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="60%" w={260} h={220} color="#E6F2DD" op={0.75} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Comprehensive Offerings</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 12 }}>
                Goal-Based Mutual Fund Distribution Services
              </h2>
              <p style={{ fontSize: 17, color: '#555D58', maxWidth: 680, margin: '0 auto' }}>
                Every solution is backed by personal understanding, risk profiling, and continuous investor assistance.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {servicesList.map((service, idx) => (
              <FadeUp key={service.title} delay={idx * 0.08}>
                <div style={{ background: '#F8FDF9', borderRadius: 20, padding: '32px 28px', border: '1px solid rgba(136,189,164,0.22)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(53,133,142,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#303733', marginBottom: 12 }}>{service.title}</h3>
                    <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.7, marginBottom: 18 }}>{service.desc}</p>
                    <div style={{ display: 'grid', gap: 8, marginBottom: 24 }}>
                      {service.bullets.map((b, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#333D37' }}>
                          <CheckCircle2 size={16} color={TEAL} style={{ marginTop: 3, flexShrink: 0 }} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={service.calcLink} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 12,
                    background: TEAL, color: '#ffffff', textDecoration: 'none', fontSize: 14, fontWeight: 700, width: 'fit-content'
                  }}>
                    {service.calcText} <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Through MFDThiru Grid */}
      <section style={{ padding: '72px 24px', background: 'rgba(230,242,221,0.35)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={320} h={260} color="#88BDA4" op={0.35} blur={62} r="55% 45% 40% 60% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={280} h={240} color="#659287" op={0.18} blur={50} r="40% 60% 58% 42% / 60% 40% 58% 42%" />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Distributor Value Proposition</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 12 }}>
                13 Reasons to Invest Through MFDThiru
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              ['Experienced Leadership', 'Led by J. C. Thirumurugan with 20+ years of market experience across economic cycles.'],
              ['Over 800 Global Clients', 'Serving investors across India and overseas with personalized attention.'],
              ['Serving 3 Generations', 'Relationships extending across grandparents, parents, and children.'],
              ['Personal Understanding', 'Thorough analysis of goals, horizon, liquidity & risk profile before scheme selection.'],
              ['Goal-Based Approach', 'Aligning investments with education, retirement, marriage & home goals.'],
              ['Dedicated Support Team', 'Assistance with onboarding, documentation, transactions, & service requests.'],
              ['Technology + Personal Care', 'Personal involvement supported by digital platform convenience.'],
              ['Paperless Onboarding', 'Fast, 100% digital KYC and online transaction processing.'],
              ['Online Portfolio Access', 'Consolidated 24/7 portfolio access and tracking reports.'],
              ['Periodic Portfolio Review', 'Regular suitability review of fund holdings based on market conditions.'],
              ['Complete Transaction Help', 'Support for nominations, bank updates, SIP changes, switches & redemptions.'],
              ['Transparent Distribution', 'Facilitated under Regular Plans with full AMC commission disclosure on request.'],
              ['Support Across Life Stages', 'From your first SIP to retirement cash flow, we remain by your side.']
            ].map(([title, desc], idx) => (
              <FadeUp key={title} delay={idx * 0.04}>
                <div style={{ background: '#ffffff', borderRadius: 16, padding: '22px 20px', border: '1px solid rgba(136,189,164,0.22)', height: '100%' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: TEAL, marginBottom: 6 }}>✓ {title}</div>
                  <div style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Notice Banner */}
      <section style={{ padding: '40px 24px', background: '#1e4a4f', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 14, color: '#88BDA4', fontWeight: 700, marginBottom: 8 }}>REGULATORY DISCLOSURE</p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#e0f0f2', margin: '0 0 12px 0' }}>
            MFDThiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-registered Mutual Fund Distributor – ARN 26890. MFDThiru is not a SEBI-registered Investment Adviser.
          </p>
          <p style={{ fontSize: 13, color: '#a8c8cc', margin: 0, fontStyle: 'italic' }}>
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </section>
    </div>
  )
}
