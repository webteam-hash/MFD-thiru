import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Users, Target, TrendingUp, Shield, Heart, Award, CheckCircle, Smartphone, Laptop, Clock, ShieldCheck, UserCheck, RefreshCw } from 'lucide-react'
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

export function About() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="58% 42% 35% 65% / 48% 55% 45% 52%" />
        <SectionBlob x="80%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 60% 40% / 58% 38% 62% 42%" />
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              About MFDThiru
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Personal Relationships. Generational Trust.<br />
              <span style={{ color: TEAL }}>Digital Convenience.</span>
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', lineHeight: 1.8, maxWidth: 760, margin: '0 auto 24px' }}>
              MFDThiru is the mutual fund distribution brand of <strong>J. C. Thirumurugan</strong>, AMFI-registered Mutual Fund Distributor (ARN – 26890), serving investors with personal care for over two decades.
            </p>
            <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[['20+ Years', 'Experience'], ['800+', 'Global Clients'], ['3 Generations', 'Family Trust']].map(([num, label]) => (
                <div key={label} style={{ background: '#ffffff', padding: '10px 20px', borderRadius: 14, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: TEAL }}>{num}</span>
                  <span style={{ fontSize: 13, color: '#555D58', marginLeft: 8 }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Story & Founder Journey */}
      <section style={{ padding: '72px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="20%" w={300} h={260} color="#B1D3B9" op={0.35} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="60%" w={260} h={220} color="#E6F2DD" op={0.75} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }} className="about-grid">
          <FadeUp>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Our Journey & Leadership</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 8, marginBottom: 20, lineHeight: 1.25 }}>
                More Than Two Decades of Personal Service & Investor Trust
              </h2>
              <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.8, marginBottom: 16 }}>
                Mr. J. C. Thirumurugan has been serving mutual fund investors for more than two decades. His approach is founded on understanding every investor personally, nurturing long-term relationships, and supporting clients through the different stages of their life journey.
              </p>
              <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.8, marginBottom: 16 }}>
                Today, MFDThiru serves over <strong>800 clients across India and overseas</strong>. Several of these relationships extend across <strong>three generations of the same family</strong> — grandparents, parents, and children — reflecting the trust built through consistent service.
              </p>
              <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.8, marginBottom: 24 }}>
                While Mr. Thirumurugan remains personally connected with clients, MFDThiru leverages modern technology to deliver complete convenience — from online onboarding and paperless transactions to instant portfolio reporting.
              </p>

              <div style={{ padding: '20px 24px', background: '#F8FDF9', borderRadius: 16, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: TEAL, margin: 0, lineHeight: 1.6 }}>
                  “Invest with Confidence. Stay Invested with Discipline.”
                </p>
                <p style={{ fontSize: 13, color: '#555D58', margin: '4px 0 0 0' }}>— Our Core Investment Philosophy</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ background: 'linear-gradient(135deg, rgba(230,242,221,0.6), rgba(230,238,201,0.6))', borderRadius: 24, padding: '36px', border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 8px 32px rgba(53,133,142,0.06)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#303733', marginBottom: 20 }}>Why Investors Trust MFDThiru</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { icon: <Clock size={20} color={TEAL} />, title: '20+ Years Experience', desc: 'Navigated multiple market cycles with patient, goal-aligned guidance.' },
                  { icon: <Users size={20} color={TEAL} />, title: '800+ Global Investors', desc: 'Serving working professionals, retirees, business owners & NRIs worldwide.' },
                  { icon: <Heart size={20} color={TEAL} />, title: '3-Generation Family Trust', desc: 'Guiding grandparents, parents, and children within the same families.' },
                  { icon: <Laptop size={20} color={TEAL} />, title: 'Digital Convenience', desc: 'Online onboarding, paperless transactions & 24/7 portfolio access.' },
                  { icon: <ShieldCheck size={20} color={TEAL} />, title: 'Ethical & Transparent', desc: 'AMFI Registered Distributor (ARN 26890) offering Regular Plan distribution.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: '#303733', margin: 0 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: '#555D58', margin: '2px 0 0 0', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '72px 24px', background: 'rgba(230,242,221,0.3)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="10%" w={320} h={260} color="#88BDA4" op={0.30} blur={58} r="42% 58% 52% 48% / 60% 38% 62% 38%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Foundational Pillars</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6 }}>Our Vision & Our Mission</h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {/* Vision */}
            <FadeUp delay={0.1}>
              <div style={{ borderRadius: 24, padding: '36px 32px', background: '#ffffff', border: '1px solid rgba(136,189,164,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🔭</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 14 }}>OUR VISION</h3>
                <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.8, margin: 0 }}>
                  To become a trusted, multi-generational mutual fund distribution brand—helping individuals and families participate confidently in India’s wealth-creation journey through disciplined, informed and goal-based investing.
                </p>
              </div>
            </FadeUp>

            {/* Mission */}
            <FadeUp delay={0.2}>
              <div style={{ borderRadius: 24, padding: '36px 32px', background: '#ffffff', border: '1px solid rgba(136,189,164,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: PASTEL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🎯</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 14 }}>OUR MISSION</h3>
                <p style={{ fontSize: 15, color: '#4E5652', lineHeight: 1.7, marginBottom: 14 }}>
                  To simplify mutual fund investing by combining personal relationships, investor understanding and digital convenience:
                </p>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    'Support investors across every stage of life.',
                    'Align mutual fund investments with goals, horizon and risk profile.',
                    'Promote disciplined SIP, lump-sum and flexible investing.',
                    'Help investors work towards education and retirement corpuses.',
                    'Support retirees in evaluating inflation-aware cash flow options.',
                    'Provide transparent, accessible and dependable service.',
                    'Build lasting relationships that extend across generations.'
                  ].map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#333D37' }}>
                      <CheckCircle size={16} color={TEAL} style={{ marginTop: 3, flexShrink: 0 }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 8-Step Process: How We Work */}
      <section style={{ padding: '72px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="30%" w={280} h={240} color="#B1D3B9" op={0.38} blur={58} r="55% 45% 60% 40% / 42% 60% 40% 60%" />
        <SectionBlob x="88%" y="60%" w={300} h={240} color="#E6F2DD" op={0.70} blur={62} r="40% 60% 45% 55% / 58% 40% 60% 40%" />
        
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Structured Journey</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 12 }}>How We Work</h2>
              <p style={{ fontSize: 17, color: '#555D58', maxWidth: 640, margin: '0 auto' }}>
                A structured mutual fund investment journey supported by personal service and digital convenience.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { num: 1, title: 'Understand Your Requirements', desc: 'Personal discussion to understand your objective, existing investments, horizon, liquidity & commitments.' },
              { num: 2, title: 'Identify Your Investment Goal', desc: 'Pinpoint specific goals: children’s education, retirement corpus, post-retirement cash flow, home purchase, etc.' },
              { num: 3, title: 'Assess Your Risk Profile', desc: 'Evaluate willingness and capacity for market fluctuations, risk profile, and liquidity requirements.' },
              { num: 4, title: 'Present Suitable Options', desc: 'Present a curated list of suitable mutual fund schemes explaining category, risk, horizon & exit load.' },
              { num: 5, title: 'You Make the Final Decision', desc: 'Review options and choose schemes. Facilitated under Regular Plans with AMC commission disclosures.' },
              { num: 6, title: 'Complete the Investment', desc: 'Assistance with KYC, online onboarding, SIP/lump-sum setup, nomination, and paperless processing.' },
              { num: 7, title: 'Online Access & Support', desc: 'Receive 24/7 online portfolio access with ongoing support for modifications, switches & redemptions.' },
              { num: 8, title: 'Periodic Portfolio Review', desc: 'Periodic review of fund holdings based on your stated goals, scheme performance, and suitability.' }
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.06}>
                <div style={{ background: '#F8FDF9', borderRadius: 18, padding: '24px', border: '1px solid rgba(136,189,164,0.2)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800 }}>{step.num}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: MINT, textTransform: 'uppercase' }}>Step {step.num}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <div style={{ marginTop: 36, textAlign: 'center', padding: '20px 24px', background: 'rgba(230,242,221,0.5)', borderRadius: 16, border: '1px solid rgba(136,189,164,0.3)' }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: TEAL, margin: 0 }}>
              Understand &nbsp;•&nbsp; Assess &nbsp;•&nbsp; Select &nbsp;•&nbsp; Invest &nbsp;•&nbsp; Review
            </p>
            <p style={{ fontSize: 13, color: '#555D58', margin: '4px 0 0 0' }}>
              A clear process supported by personal service and digital convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section style={{ padding: '72px 24px', background: 'rgba(230,242,221,0.35)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={320} h={260} color="#88BDA4" op={0.35} blur={62} r="55% 45% 40% 60% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={280} h={240} color="#659287" op={0.18} blur={50} r="40% 60% 58% 42% / 60% 40% 58% 42%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Target Communities</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 12 }}>Who We Serve</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>Mutual fund support across life stages, income profiles and investment requirements.</p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: '🌱', title: 'First-Time Investors', desc: 'Guidance on SIPs, scheme categories, market risks, and long-term investing discipline.' },
              { icon: '💼', title: 'Young Professionals / SIP', desc: 'Disciplined monthly SIP investments for long-term wealth creation and future goals.' },
              { icon: '🏢', title: 'Business Owners / Surplus', desc: 'Deploy periodic surplus funds through lump-sum or flexible mutual fund options.' },
              { icon: '🎓', title: 'Parents (Children Education)', desc: 'Estimate future education costs and build target SIP/lump-sum mutual fund corpuses.' },
              { icon: '🏖️', title: 'Retirement Corpus Builders', desc: 'Build a retirement corpus based on time remaining until retirement and risk profile.' },
              { icon: '👴', title: 'Retired Investors (FD to MF)', desc: 'Deploy existing corpus (or FDs) for inflation-aware, structured periodic cash flow.' },
              { icon: '👨‍👩‍👧‍👦', title: '3-Generation Families', desc: 'Support grandparents, parents, and children with life-stage mutual fund solutions.' },
              { icon: '📈', title: 'Wealth-Creation Investors', desc: 'Diversified mutual fund portfolios intended for long-term capital growth.' },
              { icon: '🌍', title: 'NRIs & Overseas Clients', desc: 'Assistance for eligible NRIs subject to applicable KYC, banking & AMC guidelines.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.05}>
                <div style={{ background: '#ffffff', borderRadius: 18, padding: '24px 20px', border: '1px solid rgba(136,189,164,0.22)', height: '100%', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(53,133,142,0.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Disclosure Footer Banner */}
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

      <style>{`.about-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
