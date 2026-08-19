import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Headphones, Mail, Globe, Shield, AlertCircle, CheckCircle2 } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'
import { LegalNav } from './LegalNav'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function InvestorGrievance() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Headphones size={15} /> Investor Support & Redressal
            </span>
            <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.25 }}>
              Investor Grievance Redressal & Contact Information
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              At MFDThiru, we are committed to providing prompt, transparent and efficient service to our investors.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.9)', borderRadius: 14, fontSize: 14, color: TEAL, fontWeight: 700, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              J. C. Thirumurugan &nbsp;|&nbsp; AMFI Registered Mutual Fund Distributor (ARN 26890)
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '48px 24px 88px', position: 'relative' }}>
        <SectionBlob x="88%" y="25%" w={320} h={280} color="#B1D3B9" op={0.30} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="55%" w={280} h={240} color="#E6F2DD" op={0.70} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />

        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          
          {/* Legal Navigation Sub-Bar */}
          <LegalNav />

          <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '44px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 36 }}>
            
            {/* Distributor Details Card */}
            <FadeUp delay={0.1}>
              <div style={{ background: '#F8FDF9', borderRadius: 20, padding: '32px 36px', border: `1px solid ${MINT}`, borderLeft: `6px solid ${TEAL}` }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 20, marginTop: 0 }}>Distributor Details</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 12, color: '#77827B', fontWeight: 700, letterSpacing: '0.5px' }}>DISTRIBUTOR NAME</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#303733', marginTop: 4 }}>J. C. Thirumurugan</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#77827B', fontWeight: 700, letterSpacing: '0.5px' }}>AMFI REGISTRATION</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginTop: 4 }}>ARN 26890</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#77827B', fontWeight: 700, letterSpacing: '0.5px' }}>BRAND NAME</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#303733', marginTop: 4 }}>MFDThiru</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#77827B', fontWeight: 700, letterSpacing: '0.5px' }}>EMAIL ADDRESS</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginTop: 4 }}>info@mfdthiru.in</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: '#77827B', fontWeight: 700, letterSpacing: '0.5px' }}>WEBSITE</div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#303733', marginTop: 4 }}>www.mfdthiru.in</div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Grievance Process */}
            <FadeUp delay={0.15}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 24 }}>Grievance Redressal Process</h2>
                <div style={{ display: 'grid', gap: 18 }}>
                  {[
                    { step: 1, text: 'Submit your query or grievance by email (info@mfdthiru.in) or through the Contact Us page.' },
                    { step: 2, text: 'We will acknowledge receipt of your communication as soon as reasonably practicable.' },
                    { step: 3, text: 'We will make every reasonable effort to resolve your query or coordinate with the relevant Asset Management Company (AMC), Registrar & Transfer Agent (RTA) or other service provider, wherever applicable.' },
                    { step: 4, text: 'If the matter requires intervention by the AMC or RTA, we will assist you in coordinating the resolution process.' }
                  ].map(item => (
                    <div key={item.step} style={{ display: 'flex', gap: 18, padding: '20px 24px', background: '#F8FDF9', borderRadius: 16, border: '1px solid rgba(136,189,164,0.2)', alignItems: 'flex-start' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, flexShrink: 0 }}>
                        {item.step}
                      </div>
                      <p style={{ fontSize: 16, lineHeight: 1.8, color: '#333D37', margin: 0, fontWeight: 500 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Scope Notice */}
            <FadeUp delay={0.2}>
              <div style={{ background: 'rgba(230,242,221,0.45)', borderRadius: 18, padding: '28px 32px', border: '1px solid rgba(136,189,164,0.3)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>Scope of Services & Operational Matters</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDThiru acts solely as a Mutual Fund Distributor. Matters relating to scheme operations, NAV declaration, fund management, transaction execution and redemption processing are handled by the respective Asset Management Company and its authorised service providers.
                </p>
              </div>
            </FadeUp>

            {/* Regulatory Escalation */}
            <FadeUp delay={0.25}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#303733', marginTop: 0, marginBottom: 12 }}>Regulatory Escalation Mechanism</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#555D58', margin: 0 }}>
                  For unresolved grievances, investors may also approach the concerned Asset Management Company, Registrar & Transfer Agent or use the applicable regulatory grievance redressal mechanism available under the Mutual Fund regulatory framework (such as SEBI SCORES portal).
                </p>
              </div>
            </FadeUp>

            {/* Trust Footer */}
            <FadeUp delay={0.3}>
              <div style={{ background: `linear-gradient(135deg, ${TEAL}, #276269)`, color: '#ffffff', borderRadius: 16, padding: '24px 32px', textAlign: 'center', fontSize: 16, fontWeight: 700, boxShadow: '0 6px 20px rgba(53,133,142,0.2)' }}>
                We value your trust and are committed to supporting you throughout your investment journey.
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
