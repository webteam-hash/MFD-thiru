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
              {[
                ['800+', 'Global Clients'],
                ['20+ Yrs', 'Experience'],
                ['3 Gens', 'Family Trust'],
                ['Goal-Based', 'Personalised Support'],
                ['5★', 'Digital Convenience'],
              ].map(([num, label]) => (
                <div key={label} style={{ background: '#ffffff', padding: '10px 18px', borderRadius: 14, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: TEAL }}>{num}</span>
                  <span style={{ fontSize: 13, color: '#555D58', marginLeft: 8 }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Story & Founder Journey */}
      <section style={{ padding: '80px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="20%" w={300} h={260} color="#B1D3B9" op={0.35} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="60%" w={260} h={220} color="#E6F2DD" op={0.75} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }} className="about-grid">
          <FadeUp>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Our Journey & Leadership</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 8, marginBottom: 18, lineHeight: 1.25 }}>
                20+ Years of Dedicated Service & Multi-Generational Trust
              </h2>
              <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.7, marginBottom: 20 }}>
                Founded by <strong>J. C. Thirumurugan</strong>, AMFI-registered Mutual Fund Distributor (ARN – 26890), MFDThiru offers personal guidance combined with modern digital convenience. Over two decades, we have guided investors through every market cycle with clarity and discipline.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '16px', background: '#F8FDF9', borderRadius: 14, border: '1px solid rgba(136,189,164,0.25)' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: TEAL }}>800+ Clients</div>
                  <div style={{ fontSize: 13, color: '#555D58', marginTop: 2 }}>In India & Overseas</div>
                </div>
                <div style={{ padding: '16px', background: '#F8FDF9', borderRadius: 14, border: '1px solid rgba(136,189,164,0.25)' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: TEAL }}>3 Generations</div>
                  <div style={{ fontSize: 13, color: '#555D58', marginTop: 2 }}>Family Relationship</div>
                </div>
              </div>

              <div style={{ padding: '18px 22px', background: '#F8FDF9', borderRadius: 16, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: TEAL, margin: 0, lineHeight: 1.5 }}>
                  “Invest with Confidence. Stay Invested with Discipline.”
                </p>
                <p style={{ fontSize: 13, color: '#555D58', margin: '4px 0 0 0' }}>— Our Core Investment Philosophy</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ background: 'linear-gradient(135deg, rgba(230,242,221,0.6), rgba(230,238,201,0.6))', borderRadius: 24, padding: '32px', border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 8px 32px rgba(53,133,142,0.06)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#303733', marginBottom: 20 }}>Why Investors Choose MFDThiru</h3>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { icon: <Clock size={20} color={TEAL} />, title: '20+ Years Experience', desc: 'Navigated multiple market cycles with patient guidance.' },
                  { icon: <Users size={20} color={TEAL} />, title: '800+ Global Investors', desc: 'Serving professionals, retirees & NRIs worldwide.' },
                  { icon: <Heart size={20} color={TEAL} />, title: '3-Generation Family Trust', desc: 'Guiding grandparents, parents, and children alike.' },
                  { icon: <Laptop size={20} color={TEAL} />, title: 'Digital Convenience', desc: 'Online onboarding, paperless setup & 24/7 access.' },
                  { icon: <ShieldCheck size={20} color={TEAL} />, title: 'Transparent & Compliant', desc: 'AMFI Registered Distributor (ARN 26890).' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: '#303733', margin: 0 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: '#555D58', margin: '2px 0 0 0', lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '80px 24px', background: 'rgba(230,242,221,0.3)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="10%" w={320} h={260} color="#88BDA4" op={0.30} blur={58} r="42% 58% 52% 48% / 60% 38% 62% 38%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Foundational Pillars</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6 }}>Our Vision & Mission</h2>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {/* Vision */}
            <FadeUp delay={0.1}>
              <div style={{ borderRadius: 24, padding: '36px 32px', background: '#ffffff', border: '1px solid rgba(136,189,164,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🔭</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 14 }}>OUR VISION</h3>
                <p style={{ fontSize: 16, color: '#4E5652', lineHeight: 1.7, margin: 0 }}>
                  To be a trusted multi-generational mutual fund distribution brand—helping families build long-term wealth through disciplined, goal-focused investing.
                </p>
              </div>
            </FadeUp>

            {/* Mission */}
            <FadeUp delay={0.2}>
              <div style={{ borderRadius: 24, padding: '36px 32px', background: '#ffffff', border: '1px solid rgba(136,189,164,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: PASTEL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🎯</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 14 }}>OUR MISSION</h3>
                <div style={{ display: 'grid', gap: 10 }}>
                  {[
                    'Goal-Aligned Investments: Tailor portfolios to life goals.',
                    'Disciplined Investing: Promote SIP, STP & SWP strategies.',
                    'Digital Convenience: Enable instant 24/7 online portfolio access.',
                    'Dependable Support: Deliver personal service across generations.'
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
      <section style={{ padding: '80px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="30%" w={280} h={240} color="#B1D3B9" op={0.38} blur={58} r="55% 45% 60% 40% / 42% 60% 40% 60%" />
        <SectionBlob x="88%" y="60%" w={300} h={240} color="#E6F2DD" op={0.70} blur={62} r="40% 60% 45% 55% / 58% 40% 60% 40%" />
        
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Structured Journey</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 10 }}>How We Work</h2>
              <p style={{ fontSize: 16, color: '#555D58', maxWidth: 580, margin: '0 auto' }}>
                A simple 8-step process built around personal guidance and digital ease.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { num: 1, title: 'Understand Requirements', desc: 'Discuss your goals, current portfolio, time horizon & commitments.' },
              { num: 2, title: 'Identify Specific Goals', desc: 'Define targets like retirement, education, or wealth creation.' },
              { num: 3, title: 'Assess Risk Profile', desc: 'Evaluate risk tolerance and cash flow needs.' },
              { num: 4, title: 'Present Options', desc: 'Share suitable fund categories with full clarity on risk & horizon.' },
              { num: 5, title: 'Investor Choice', desc: 'You make the final scheme selections with complete transparency.' },
              { num: 6, title: 'Paperless Execution', desc: 'Complete KYC and online onboarding quickly & securely.' },
              { num: 7, title: '24/7 Digital Access', desc: 'Monitor investments online anytime with ongoing support.' },
              { num: 8, title: 'Periodic Reviews', desc: 'Regular review to ensure investments stay aligned with goals.' }
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.05}>
                <div style={{ background: '#F8FDF9', borderRadius: 16, padding: '20px', border: '1px solid rgba(136,189,164,0.22)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ width: 28, height: 28, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>{step.num}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: MINT, textTransform: 'uppercase' }}>Step {step.num}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#303733', marginBottom: 6 }}>{step.title}</h3>
                    <p style={{ fontSize: 13, color: '#555D58', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section style={{ padding: '80px 24px', background: 'rgba(230,242,221,0.35)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={320} h={260} color="#88BDA4" op={0.35} blur={62} r="55% 45% 40% 60% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={280} h={240} color="#659287" op={0.18} blur={50} r="40% 60% 58% 42% / 60% 40% 58% 42%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, textTransform: 'uppercase', letterSpacing: '1px' }}>Target Communities</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#303733', marginTop: 6, marginBottom: 10 }}>Who We Serve</h2>
              <p style={{ fontSize: 16, color: '#555D58' }}>Mutual fund solutions across all key life stages and goals.</p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {[
              { icon: '🌱', title: 'First-Time Investors', desc: 'Guidance on SIPs, scheme selection, and building investment discipline.' },
              { icon: '💼', title: 'Young Professionals', desc: 'Disciplined monthly SIPs for long-term wealth creation.' },
              { icon: '🏢', title: 'Business Owners', desc: 'Deploy periodic surplus capital with flexible investment options.' },
              { icon: '🎓', title: 'Parents', desc: 'Plan and build dedicated corpuses for children’s education.' },
              { icon: '🏖️', title: 'Retirement Builders', desc: 'Accumulate retirement wealth based on target timelines.' },
              { icon: '👴', title: 'Retirees (FD to MF)', desc: 'Deploy corpuses for inflation-aware, regular cash flow via SWP.' },
              { icon: '👨‍👩‍👧‍👦', title: '3-Generation Families', desc: 'Life-stage mutual fund guidance for the whole family.' },
              { icon: '📈', title: 'Wealth Builders', desc: 'Diversified portfolios tailored for long-term growth.' },
              { icon: '🌍', title: 'NRIs & Overseas Clients', desc: 'Hassle-free India mutual fund investing with compliant KYC support.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.04}>
                <div style={{ background: '#ffffff', borderRadius: 16, padding: '20px 18px', border: '1px solid rgba(136,189,164,0.22)', height: '100%', transition: 'all 0.25s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(53,133,142,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#555D58', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
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
