import { motion } from 'motion/react'
import { BookOpen, Target, Layers, HeartHandshake, RefreshCw, Award, Users, Smartphone, UserCheck, Compass, ShieldAlert } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { SEO } from '../components/SEO'
import { BackButton } from '../components/BackButton'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

export function WhyMFD() {
  return (
    <div style={{ overflowX: 'hidden', minHeight: '100vh', background: 'rgba(255,255,255,0.50)', position: 'relative' }}>
      <SEO
        title="Why Invest Through a MFD & Why MFDthiru | MFDthiru"
        description="Learn why investing through a Mutual Fund Distributor matters for long-term wealth management and the unique advantages of MFDthiru."
        canonical="/why-mfd"
      />

      {/* Decorative watercolor background blobs matching website theme */}
      <SectionBlob x="-5%" y="10%" w={480} h={380} color="#B1D3B9" op={0.38} blur={75} r="50% 50% 50% 50%" />
      <SectionBlob x="88%" y="40%" w={420} h={340} color="#88BDA4" op={0.28} blur={70} r="60% 40% 50% 50%" />
      <SectionBlob x="10%" y="70%" w={400} h={320} color="#E6F2DD" op={0.75} blur={65} r="50% 50% 50% 50%" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* Standard Website Back Button */}
        <div style={{ marginBottom: 32 }}>
          <BackButton fallback="/" />
        </div>

        {/* ══════════════════════════════
            SECTION 1: WHY INVEST THROUGH A MFD?
        ══════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>
              WHY INVEST THROUGH A MFD?
            </h1>
            <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: TEAL, marginBottom: 18 }}>
              Investing Is Easy. Managing the Journey Is What Matters.
            </h2>
            <p style={{ fontSize: 16.5, color: '#555D58', lineHeight: 1.8, maxWidth: 880, margin: '0 auto' }}>
              Today, investing in mutual funds can be done in just a few clicks. But an investment journey may continue for 10, 20 or even 30 years. During this period, markets change, your financial priorities evolve, investments accumulate and service needs may arise. If you choose to manage your investments independently, these responsibilities are yours to manage. A Mutual Fund Distributor can provide ongoing assistance throughout this journey.
            </p>
          </div>

          {/* What an MFD Adds to Your Journey */}
          <div style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 28, textAlign: 'center' }}>
              What an MFD Adds to Your Journey
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
              {[
                { title: 'Understanding', desc: 'Assistance in understanding mutual fund categories, scheme information and associated risks.', IconComp: BookOpen },
                { title: 'Discipline', desc: 'Helping you stay focused on your investment purpose through changing market cycles.', IconComp: Target },
                { title: 'Organisation', desc: 'Assistance in keeping investments, folios and portfolio information organised.', IconComp: Layers },
                { title: 'Human Support', desc: 'Support for SIPs, transactions, nominations, redemptions and other service requirements.', IconComp: HeartHandshake },
                { title: 'Continuity', desc: 'An ongoing relationship as your financial priorities and investment requirements evolve.', IconComp: RefreshCw },
              ].map(item => {
                const Icon = item.IconComp
                return (
                  <div
                    key={item.title}
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      borderRadius: 18,
                      padding: '26px 22px',
                      border: '1px solid rgba(136,189,164,0.3)',
                      boxShadow: '0 6px 24px rgba(53,133,142,0.06)',
                      backdropFilter: 'blur(8px)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'
                        ; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(53,133,142,0.15)'
                    }}
                    onMouseLeave={e => {
                      ; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                        ; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(53,133,142,0.06)'
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(230,242,221,0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: TEAL,
                        marginBottom: 16,
                        border: '1px solid rgba(136,189,164,0.3)',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 700, color: '#303733', marginBottom: 8 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* What Could You Miss Going Alone? */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(230,242,221,0.95) 0%, rgba(255,255,255,0.95) 100%)',
              borderRadius: 20,
              padding: '32px 36px',
              border: `1.5px solid ${MINT}`,
              boxShadow: '0 8px 30px rgba(53,133,142,0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 12 }}>
              What Could You Miss Going Alone?
            </h3>
            <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.7, marginBottom: 18, fontWeight: 500 }}>
              Ongoing assistance. Portfolio visibility. Investment discipline. Continuity. And a human point of contact when you need support.
            </p>
            <div
              style={{
                padding: '14px 22px',
                borderRadius: 12,
                background: TEAL,
                color: '#fff',
                fontSize: 16,
                fontWeight: 700,
                display: 'inline-block',
                boxShadow: '0 4px 14px rgba(53,133,142,0.25)',
              }}
            >
              A platform can execute your investment. An MFD can support your investment journey.
            </div>
          </div>
        </motion.section>

        {/* Section Divider Line */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(136,189,164,0.3)', margin: '56px 0' }} />

        {/* ══════════════════════════════
            SECTION 2: WHY MFDthiru?
        ══════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#303733', marginBottom: 12 }}>
              WHY MFDthiru?
            </h2>
            <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: TEAL, marginBottom: 18 }}>
              Experience That Stays With You. Relationships That Grow With Generations.
            </h3>
            <p style={{ fontSize: 16.5, color: '#555D58', lineHeight: 1.8, maxWidth: 880, margin: '0 auto' }}>
              For over 20 years, MFDthiru has been associated with investors through different market cycles and stages of their financial lives. Our relationships extend beyond transactions — in several cases, across three generations of families.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              { title: '20+ Years of Experience', desc: 'Experience built through changing markets and investor needs.', IconComp: Award },
              { title: '800+ Investors Served', desc: 'Relationships built with investors in India and overseas.', IconComp: Users },
              { title: '3 Generations', desc: 'Continuing relationships across generations of investor families.', IconComp: HeartHandshake },
              { title: 'Digital Convenience', desc: 'Online investment and portfolio access for ease and transparency.', IconComp: Smartphone },
              { title: 'Dedicated Human Support', desc: 'A familiar point of contact when assistance is required.', IconComp: UserCheck },
              { title: 'Continuity', desc: 'From starting an SIP to organising investments, preparing for goals and retirement, we seek to stay connected through the journey.', IconComp: Compass },
            ].map(adv => {
              const Icon = adv.IconComp
              return (
                <div
                  key={adv.title}
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    borderRadius: 18,
                    padding: '28px 24px',
                    border: '1px solid rgba(136,189,164,0.3)',
                    boxShadow: '0 6px 24px rgba(53,133,142,0.07)',
                    backdropFilter: 'blur(8px)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
                      ; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 36px rgba(53,133,142,0.16)'
                  }}
                  onMouseLeave={e => {
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      ; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(53,133,142,0.07)'
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: 'rgba(230,242,221,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: TEAL,
                      marginBottom: 16,
                      border: '1px solid rgba(136,189,164,0.35)',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: 19, fontWeight: 700, color: '#303733', marginBottom: 8 }}>
                    {adv.title}
                  </h4>
                  <p style={{ fontSize: 14.5, color: '#555D58', lineHeight: 1.65, margin: 0 }}>
                    {adv.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* ══════════════════════════════
            SECTION 3: IMPORTANT DISCLOSURE
        ══════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div
            style={{
              padding: '28px 32px',
              borderRadius: 16,
              background: 'rgba(245,247,246,0.95)',
              borderLeft: `4px solid ${TEAL}`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid rgba(136,189,164,0.25)',
              borderLeftWidth: 5,
              borderLeftColor: TEAL,
              borderLeftStyle: 'solid',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <ShieldAlert size={20} color={TEAL} />
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#303733', margin: 0, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                Important Disclosure
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#555D58', lineHeight: 1.65 }}>
              <p style={{ margin: 0 }}>
                Investments routed through a Mutual Fund Distributor are generally made under Regular Plans. Regular Plans have higher expense ratios than Direct Plans due to distribution expenses/commission. Investors should consider the applicable costs and services while choosing between Regular and Direct Plans.
              </p>
              <p style={{ margin: 0 }}>
                MFDthiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-Registered Mutual Fund Distributor (ARN-26890). Services are offered in the capacity of a Mutual Fund Distributor and not as a SEBI-registered Investment Adviser.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: '#303733' }}>
                Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
