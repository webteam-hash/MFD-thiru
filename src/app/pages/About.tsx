import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Users, Target, TrendingUp, Shield, Heart, Award, CheckCircle, Smartphone, Laptop, Clock, ShieldCheck, UserCheck, RefreshCw, Sparkles, Building2, Globe2 } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { BackButton } from '../components/BackButton'
import { SEO } from '../components/SEO'
import thiruPortrait from '../../imports/thiru_portrait.png'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function About() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#2B332F', fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <SEO
        title="About Us | MFDThiru — J. C. Thirumurugan (ARN 26890)"
        description="Learn about MFDThiru & founder J. C. Thirumurugan — AMFI-registered Mutual Fund Distributor (ARN 26890) with 20+ years experience serving 800+ families across 3 generations."
        canonical="/about"
      />
      
      {/* ══════════════════════════════
          HERO SECTION — Heading, Founder Photo Space & Key Headline
      ══════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, rgba(230,242,221,0.55) 0%, rgba(250,252,250,1) 100%)', padding: '48px 24px 72px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={480} h={380} color="#B1D3B9" op={0.50} blur={75} r="58% 42% 35% 65% / 48% 55% 45% 52%" />
        <SectionBlob x="85%" y="5%" w={420} h={340} color="#88BDA4" op={0.38} blur={70} r="40% 60% 60% 40% / 58% 38% 62% 42%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <BackButton />
          
          {/* Main Page Title */}
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 22px', borderRadius: 30, background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(53,133,142,0.25)', boxShadow: '0 4px 16px rgba(53,133,142,0.06)', marginBottom: 18 }}>
                <Sparkles size={16} color={TEAL} />
                <span style={{ fontSize: 14, fontWeight: 800, color: TEAL, letterSpacing: '1.5px', textTransform: 'uppercase' }}>MFDTHIRU BRAND</span>
              </div>
              <h1 style={{ fontSize: 'clamp(42px, 6vw, 64px)', fontWeight: 900, color: '#232926', margin: 0, letterSpacing: '-1px', lineHeight: 1.15 }}>
                About Us
              </h1>
              <div style={{ width: 70, height: 4, background: `linear-gradient(90deg, ${TEAL}, ${MINT})`, borderRadius: 4, margin: '18px auto 0' }} />
            </div>
          </FadeUp>

          {/* 2-Column Layout: Founder Photo Space + Core Headline */}
          <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 56, alignItems: 'center' }} className="about-hero-grid">
            
            {/* Founder Pic Space */}
            <FadeUp delay={0.1}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  maxWidth: 360,
                  borderRadius: 24,
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1px solid rgba(136,189,164,0.35)',
                  boxShadow: '0 16px 44px rgba(53,133,142,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {/* Clean Image without text overlay */}
                  <div style={{ height: 380, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={thiruPortrait}
                      alt="J. C. Thirumurugan - Founder MFDThiru"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
                    />
                  </div>

                  {/* Info Box Below Picture */}
                  <div style={{ padding: '16px 20px', textAlign: 'center', background: 'linear-gradient(180deg, #ffffff 0%, #f8fdf9 100%)' }}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: 0 }}>
                      J. C. Thirumurugan
                    </h3>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Headline Content Next to Pic */}
            <FadeUp delay={0.2}>
              <div>
                <h2 style={{ fontSize: 'clamp(30px, 4.2vw, 46px)', fontWeight: 800, color: '#232926', lineHeight: 1.25, marginBottom: 24, letterSpacing: '-0.5px' }}>
                  Personal Relationships.<br />
                  Generational Trust.<br />
                  <span style={{ background: `linear-gradient(120deg, ${TEAL}, #255F66)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Digital Convenience.
                  </span>
                </h2>
                
                <p style={{ fontSize: 'clamp(18px, 2.2vw, 21px)', color: '#3A4440', lineHeight: 1.85, margin: 0, fontWeight: 450 }}>
                  MFDThiru is the mutual fund distribution brand of <strong>J. C. Thirumurugan</strong>, AMFI-registered Mutual Fund Distributor (ARN 26890), serving investors with personal care for over two decades.
                </p>

                {/* Quick Stats Badges */}
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
                  {[
                    ['20+ Yrs', 'Personal Service'],
                    ['800+', 'Global Clients'],
                    ['3 Gens', 'Family Trust']
                  ].map(([val, lbl]) => (
                    <div key={lbl} style={{ padding: '12px 22px', borderRadius: 16, background: '#ffffff', border: '1px solid rgba(136,189,164,0.35)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20, fontWeight: 900, color: TEAL }}>{val}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#555D58' }}>{lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FULL ABOUT US CONTENT SECTION — Elegant Editorial Box
      ══════════════════════════════ */}
      <section style={{ padding: '72px 24px 96px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="90%" y="15%" w={360} h={300} color="#B1D3B9" op={0.35} blur={70} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="55%" w={320} h={280} color="#E6F2DD" op={0.75} blur={65} r="60% 40% 44% 56% / 40% 62% 38% 62%" />

        <div style={{ maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #F8FDF9 100%)',
              borderRadius: 32,
              padding: '56px 52px',
              border: '1px solid rgba(136,189,164,0.35)',
              boxShadow: '0 20px 60px rgba(53,133,142,0.07)',
              position: 'relative'
            }} className="about-content-card">
              
              {/* Header Badge */}
              <div style={{ marginBottom: 36, borderBottom: '1px solid rgba(136,189,164,0.25)', paddingBottom: 28 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: TEAL, letterSpacing: '1.5px', textTransform: 'uppercase' }}>ORGANIZATIONAL OVERVIEW</span>
                <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 42px)', fontWeight: 800, color: '#232926', marginTop: 6, marginBottom: 12 }}>
                  MFDTHIRU: About Us
                </h2>
                <p style={{ fontSize: 20, fontWeight: 700, color: TEAL, margin: 0, lineHeight: 1.4 }}>
                  Personal relationships. Generational trust. Digital convenience.
                </p>
              </div>

              {/* Main Body Content with Larger, Elegant Typography */}
              <div style={{ display: 'grid', gap: 24, fontSize: 'clamp(17px, 2.1vw, 19px)', color: '#3A4440', lineHeight: 1.88, fontWeight: 400 }}>
                
                <p style={{ margin: 0 }}>
                  <strong>MFDThiru</strong> is the mutual fund distribution brand of <strong>J. C. Thirumurugan</strong>, AMFI-registered Mutual Fund Distributor (ARN 26890).
                </p>

                <p style={{ margin: 0 }}>
                  Mr. Thirumurugan has been serving mutual fund investors for <strong>more than two decades</strong>. His approach is founded on understanding every investor personally, nurturing long-term relationships and supporting clients through the different stages of their investment journey.
                </p>

                <p style={{ margin: 0 }}>
                  Today, MFDThiru serves <strong>over 800 clients across India and overseas</strong>. Several of these relationships extend across <strong>three generations of the same family</strong> (grandparents, parents, and children), reflecting the trust and confidence built through consistent service over the years.
                </p>

                <p style={{ margin: 0 }}>
                  His strength lies in simplifying mutual funds for everyday investors and supporting informed, goal-based investment decisions according to each investor’s objectives, investment horizon and risk profile.
                </p>

                <p style={{ margin: 0 }}>
                  While Mr. Thirumurugan remains personally connected with clients, MFDThiru uses technology to deliver greater convenience through <strong>online onboarding, paperless transactions and easy access to portfolio reports</strong>.
                </p>

                <p style={{ margin: 0 }}>
                  MFDThiru supports first-time investors, working professionals, families, retirees and NRIs, with a strong emphasis on accessibility, transparency and dependable ongoing service.
                </p>

              </div>

              {/* Key Highlights Banner */}
              <div style={{
                marginTop: 44,
                padding: '32px 36px',
                background: 'linear-gradient(135deg, rgba(230,242,221,0.85), rgba(220,236,210,0.85))',
                borderRadius: 24,
                border: '1px solid rgba(136,189,164,0.45)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
                alignItems: 'center',
                boxShadow: '0 8px 24px rgba(53,133,142,0.05)'
              }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <Award size={30} color={TEAL} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 800, color: '#232926', margin: 0 }}>Two Decades of Service</h4>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#4E5652', lineHeight: 1.4 }}>
                      More than two decades of personal service.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <Users size={30} color={TEAL} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 800, color: '#232926', margin: 0 }}>800+ Global Clients</h4>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#4E5652', lineHeight: 1.4 }}>
                      Over 800 clients across the globe. Trusted by three generations.
                    </span>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice Banner */}
              <div style={{
                marginTop: 28,
                padding: '16px 24px',
                borderRadius: 16,
                background: '#ffffff',
                border: '1px solid rgba(136,189,164,0.3)',
                fontSize: 14,
                color: '#4E5652',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <ShieldCheck size={22} color={TEAL} style={{ flexShrink: 0 }} />
                <span><strong>Regulatory Notice:</strong> MFDThiru is an AMFI-registered Mutual Fund Distributor (ARN 26890) and not a SEBI-registered Investment Adviser.</span>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════
          VISION & MISSION SECTION
      ══════════════════════════════ */}
      <section style={{ padding: '88px 24px', background: 'rgba(230,242,221,0.35)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="10%" w={360} h={280} color="#88BDA4" op={0.32} blur={65} r="42% 58% 52% 48% / 60% 38% 62% 38%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', letterSpacing: '1.5px' }}>CORE VALUES</span>
              <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', fontWeight: 800, color: '#232926', marginTop: 6 }}>Our Vision & Mission</h2>
              <div style={{ width: 60, height: 4, background: TEAL, borderRadius: 4, margin: '14px auto 0' }} />
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
            {/* Vision */}
            <FadeUp delay={0.1}>
              <div style={{
                borderRadius: 28,
                padding: '40px 36px',
                background: '#ffffff',
                border: '1px solid rgba(136,189,164,0.3)',
                boxShadow: '0 10px 32px rgba(53,133,142,0.05)',
                height: '100%',
                transition: 'all 0.3s ease-out'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(53,133,142,0.12)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(53,133,142,0.05)' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 18, background: LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 24, boxShadow: '0 4px 14px rgba(53,133,142,0.1)' }}>🔭</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16, letterSpacing: '-0.3px' }}>OUR VISION</h3>
                <p style={{ fontSize: 18, color: '#3A4440', lineHeight: 1.8, margin: 0 }}>
                  To be a trusted multi-generational mutual fund distribution brand helping families build long-term wealth through disciplined, goal-focused investing.
                </p>
              </div>
            </FadeUp>

            {/* Mission */}
            <FadeUp delay={0.2}>
              <div style={{
                borderRadius: 28,
                padding: '40px 36px',
                background: '#ffffff',
                border: '1px solid rgba(136,189,164,0.3)',
                boxShadow: '0 10px 32px rgba(53,133,142,0.05)',
                height: '100%',
                transition: 'all 0.3s ease-out'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(53,133,142,0.12)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(53,133,142,0.05)' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 18, background: PASTEL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 24, boxShadow: '0 4px 14px rgba(53,133,142,0.1)' }}>🎯</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16, letterSpacing: '-0.3px' }}>OUR MISSION</h3>
                <div style={{ display: 'grid', gap: 14 }}>
                  {[
                    'Goal-Aligned Investments: Tailor portfolios to life goals.',
                    'Disciplined Investing: Promote SIP, STP & SWP strategies.',
                    'Digital Convenience: Enable instant 24/7 online portfolio access.',
                    'Dependable Support: Deliver personal service across generations.'
                  ].map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 16, color: '#3A4440', lineHeight: 1.5 }}>
                      <CheckCircle size={20} color={TEAL} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOW WE WORK — 8-Step Process
      ══════════════════════════════ */}
      <section style={{ padding: '88px 24px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="30%" w={320} h={260} color="#B1D3B9" op={0.38} blur={65} r="55% 45% 60% 40% / 42% 60% 40% 60%" />
        <SectionBlob x="88%" y="60%" w={340} h={280} color="#E6F2DD" op={0.70} blur={68} r="40% 60% 45% 55% / 58% 40% 60% 40%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', letterSpacing: '1.5px' }}>STRUCTURED PROCESS</span>
              <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', fontWeight: 800, color: '#232926', marginTop: 6, marginBottom: 12 }}>How We Work</h2>
              <p style={{ fontSize: 18, color: '#555D58', maxWidth: 620, margin: '0 auto' }}>
                A simple 8-step process built around personal guidance and digital ease.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
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
                <div style={{
                  background: 'linear-gradient(145deg, #F8FDF9, #FFFFFF)',
                  borderRadius: 20,
                  padding: '26px 22px',
                  border: '1px solid rgba(136,189,164,0.28)',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.02)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.borderColor = TEAL; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(53,133,142,0.09)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(136,189,164,0.28)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(0,0,0,0.02)' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                      <span style={{ width: 34, height: 34, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 900, boxShadow: '0 4px 10px rgba(53,133,142,0.25)' }}>{step.num}</span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: MINT, textTransform: 'uppercase', letterSpacing: '0.5px' }}>STEP 0{step.num}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: '#232926', marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHO WE SERVE SECTION
      ══════════════════════════════ */}
      <section style={{ padding: '88px 24px', background: 'rgba(230,242,221,0.40)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={360} h={300} color="#88BDA4" op={0.35} blur={68} r="55% 45% 40% 60% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={320} h={280} color="#659287" op={0.20} blur={55} r="40% 60% 58% 42% / 60% 40% 58% 42%" />
        
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', letterSpacing: '1.5px' }}>OUR INVESTOR COMMUNITY</span>
              <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', fontWeight: 800, color: '#232926', marginTop: 6, marginBottom: 12 }}>Who We Serve</h2>
              <p style={{ fontSize: 18, color: '#555D58' }}>Mutual fund solutions across all key life stages and goals.</p>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
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
                <div style={{
                  background: '#ffffff',
                  borderRadius: 20,
                  padding: '24px 22px',
                  border: '1px solid rgba(136,189,164,0.28)',
                  height: '100%',
                  transition: 'all 0.25s',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(53,133,142,0.10)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.02)' }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#232926', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATUTORY DISCLOSURE FOOTER BANNER
      ══════════════════════════════ */}
      <section style={{ padding: '48px 24px', background: '#193F43', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontSize: 14, color: MINT, fontWeight: 800, letterSpacing: '1px', marginBottom: 10 }}>REGULATORY DISCLOSURE</p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: '#E0F0F2', margin: '0 0 14px 0', fontWeight: 400 }}>
            MFDThiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-registered Mutual Fund Distributor (ARN 26890). MFDThiru is not a SEBI-registered Investment Adviser.
          </p>
          <p style={{ fontSize: 13, color: '#A8C8CC', margin: 0, fontStyle: 'italic' }}>
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>
        </div>
      </section>

      <style>{`.about-hero-grid { @media (max-width: 820px) { grid-template-columns: 1fr !important; gap: 36px !important; } } .about-content-card { @media (max-width: 640px) { padding: 32px 24px !important; } } .keynote-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

