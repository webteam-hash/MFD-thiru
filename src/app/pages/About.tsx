import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Users, Target, TrendingUp, Shield, Heart, Award, CheckCircle } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

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
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="58% 42% 35% 65% / 48% 55% 45% 52%" />
        <SectionBlob x="80%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 60% 40% / 58% 38% 62% 42%" />
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <FadeUp>
            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>About MFDThiru</span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Your Trusted Partner in<br /><span style={{ color: TEAL }}>Wealth Building</span>
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', lineHeight: 1.8, maxWidth: 680, margin: '0 auto' }}>
              MFDThiru is a Chennai-based AMFI Registered Mutual Fund Distributor dedicated to helping individuals and families achieve their financial goals through thoughtful, goal-oriented investing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* About Story */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.50)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="20%" w={300} h={260} color="#B1D3B9" op={0.40} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="60%" w={260} h={220} color="#E6F2DD" op={0.75} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          <FadeUp>
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 20 }}>About MFDThiru</h2>
              <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.8, marginBottom: 16 }}>
                Founded with a deep commitment to making quality financial guidance accessible to every Indian family, MFDThiru brings together expert knowledge and a genuinely personal approach to mutual fund distribution.
              </p>
              <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.8, marginBottom: 24 }}>
                We believe that every investor — whether just starting out or planning for retirement — deserves honest, informed, and goal-aligned advice. We take the time to understand your unique circumstances and build strategies that truly fit your life.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {[['500+', 'Investors'], ['₹50Cr+', 'AUM'], ['7+', 'Years']].map(([num, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '16px 24px', borderRadius: 16, background: LIGHT }}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: TEAL }}>{num}</div>
                    <div style={{ fontSize: 13, color: '#555D58' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', background: 'linear-gradient(135deg, #E6F2DD, #E6EEC9)', padding: 40, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 60 }}>🌱</div>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#303733', marginBottom: 12 }}>Growing Wealth, Nurturing Goals</h3>
                  <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.7 }}>Just as a seed grows into a strong tree with the right care, your investments flourish with the right guidance and consistent nurturing.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Who We Serve */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.42)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="10%" w={320} h={260} color="#88BDA4" op={0.35} blur={62} r="55% 45% 40% 60% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={280} h={240} color="#659287" op={0.18} blur={50} r="40% 60% 58% 42% / 60% 40% 58% 42%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Who We Serve</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>We work with investors at every stage of life across India.</p>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🧑‍💼', title: 'Salaried Professionals', desc: 'Build wealth systematically while managing monthly expenses and future goals.' },
              { icon: '🏢', title: 'Business Owners', desc: 'Diversify business profits into long-term investment vehicles and plans.' },
              { icon: '👨‍👩‍👧', title: 'Families', desc: 'Plan for education, home purchase, marriage, and retirement together.' },
              { icon: '🧓', title: 'Retirees', desc: 'Manage accumulated wealth with low-risk, income-generating investments.' },
              { icon: '🎓', title: 'Young Investors', desc: 'Start early, invest small, and harness the power of long-term compounding.' },
              { icon: '💼', title: 'NRIs', desc: 'Invest in India from abroad with proper guidance and compliance support.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div style={{ background: '#fff', borderRadius: 18, padding: '24px 20px', border: '1px solid rgba(136,189,164,0.2)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(53,133,142,0.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.50)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="90%" y="0%" w={360} h={290} color="#B1D3B9" op={0.42} blur={65} r="38% 62% 50% 50% / 55% 45% 55% 45%" />
        <SectionBlob x="2%" y="55%" w={300} h={240} color="#88BDA4" op={0.28} blur={55} r="60% 40% 42% 58% / 40% 62% 38% 60%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>Why Choose Us</h2>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { icon: <Users size={28} color={TEAL} />, title: 'Personalised Approach', desc: "We don't believe in one-size-fits-all solutions. Every plan is tailored to your unique goals, timeline, and risk profile." },
              { icon: <Target size={28} color={TEAL} />, title: 'Goal-Oriented Planning', desc: 'From your first SIP to retirement planning, we build strategies aligned with specific financial milestones.' },
              { icon: <Shield size={28} color={TEAL} />, title: 'Transparent & Honest', desc: 'We believe in full transparency about costs, risks, and expectations. No hidden charges, no misleading promises.' },
              { icon: <TrendingUp size={28} color={TEAL} />, title: 'Long-Term Partnership', desc: "We're not just a one-time advisor. We stay with you through every life stage, reviewing and adjusting your portfolio." },
              { icon: <Award size={28} color={TEAL} />, title: 'AMFI Registered', desc: 'We are fully compliant, AMFI registered mutual fund distributors following all regulatory guidelines.' },
              { icon: <Heart size={28} color={TEAL} />, title: 'Family-First Values', desc: 'We treat every investor like family, with genuine care for their financial wellbeing and long-term security.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div style={{ background: '#fff', borderRadius: 20, padding: '28px 24px', border: '1px solid rgba(136,189,164,0.2)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(53,133,142,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = MINT }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(136,189,164,0.2)' }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#303733', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.42)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="30%" w={280} h={240} color="#B1D3B9" op={0.38} blur={58} r="55% 45% 60% 40% / 42% 60% 40% 60%" />
        <SectionBlob x="88%" y="60%" w={300} h={240} color="#E6F2DD" op={0.70} blur={62} r="40% 60% 45% 55% / 58% 40% 60% 40%" />
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>How We Work</h2>
              <p style={{ fontSize: 17, color: '#555D58' }}>A simple, transparent process designed around your goals.</p>
            </div>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { step: '01', title: 'Understand Your Goals', desc: 'We begin with a detailed conversation about your financial goals, current situation, income, expenses, and risk appetite.' },
              { step: '02', title: 'Create Your Investment Plan', desc: 'Based on your goals and timeline, we design a personalised investment strategy with specific fund recommendations.' },
              { step: '03', title: 'Execute & Implement', desc: 'We handle all the paperwork and setup so you can start investing quickly and with complete confidence.' },
              { step: '04', title: 'Monitor & Review', desc: 'We regularly review your portfolio performance and make adjustments to ensure you stay on track toward your goals.' },
              { step: '05', title: 'Grow Together', desc: 'As your life evolves, we evolve your plan — celebrating milestones and adapting to new financial chapters with you.' },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 24, padding: '24px 0', borderBottom: i < 4 ? '1px solid rgba(136,189,164,0.2)' : 'none', alignItems: 'flex-start' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#303733', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission + Philosophy */}
      <section style={{ padding: '72px 24px', background: 'rgba(255,255,255,0.48)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="10%" w={320} h={260} color="#88BDA4" op={0.30} blur={58} r="42% 58% 52% 48% / 60% 38% 62% 38%" />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { title: 'Our Vision', emoji: '🔭', text: 'To become the most trusted mutual fund distribution partner for Indian families — making quality financial guidance accessible, affordable, and genuinely life-changing.' },
            { title: 'Our Mission', emoji: '🎯', text: 'To help every investor make informed, goal-aligned investment decisions through personalised planning, transparent advice, and long-term partnership.' },
            { title: 'Investment Philosophy', emoji: '📖', text: 'We believe in the power of disciplined, long-term investing. Consistent contributions, diversified portfolios, and goal-aligned strategies are the foundation of lasting wealth.' },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.15}>
              <div style={{ borderRadius: 20, padding: '32px 28px', background: i % 2 === 0 ? LIGHT : '#E6EEC9', border: '1px solid rgba(136,189,164,0.3)' }}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{item.emoji}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#303733', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px', background: 'rgba(230,238,201,0.55)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="10%" w={280} h={240} color="#88BDA4" op={0.35} blur={55} r="58% 42% 45% 55% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="30%" w={260} h={220} color="#659287" op={0.20} blur={48} r="42% 58% 58% 42% / 60% 38% 58% 42%" />
        <FadeUp>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: '#303733', marginBottom: 16 }}>Ready to Begin Your Journey?</h2>
          <p style={{ fontSize: 17, color: '#555D58', marginBottom: 32 }}>Connect with us today and let's build your wealth plan together.</p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 12,
            background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700,
            boxShadow: '0 8px 24px rgba(53,133,142,0.3)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </FadeUp>
      </section>

      <style>{`.about-grid { @media (max-width: 768px) { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
