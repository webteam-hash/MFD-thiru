import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ShieldAlert, Info, CheckCircle2, Scale } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'
import { LegalNav } from './LegalNav'
import { SEO } from '../../components/SEO'

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

export function Disclaimer() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      <SEO
        title="Disclaimer | MFDThiru — J. C. Thirumurugan (ARN 26890)"
        description="Statutory disclaimer and disclosure note for MFDThiru — AMFI Registered Mutual Fund Distributor ARN 26890."
        canonical="/disclaimer"
      />
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <ShieldAlert size={15} /> Statutory Disclosure
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Disclaimer
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Important disclosures regarding website content, distribution services, and market risks.
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

          <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '44px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 28 }}>
            
            <FadeUp delay={0.1}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>1. General Informational & Educational Purpose</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  The information provided on this website is intended solely for general informational and educational purposes and should not be construed as investment, legal, tax or financial advice.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>2. Distributor Registration & AMC Partnerships</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDThiru is an AMFI Registered Mutual Fund Distributor (ARN 26890) and facilitates the distribution of mutual fund products offered by various Asset Management Companies (AMCs). The information, illustrations and opinions presented on this website are based on sources believed to be reliable; however, no representation or warranty, express or implied, is made regarding their accuracy, completeness or suitability.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>3. Market Risks & Professional Advice</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Mutual fund investments are subject to market risks. The value of investments may fluctuate, and past performance is not indicative of future results. Investors are advised to read all scheme-related documents carefully, evaluate their financial objectives, risk appetite and investment horizon, and seek independent professional advice where appropriate before making any investment decision.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>4. No Assurance of Returns</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Nothing contained on this website should be interpreted as a guarantee, assurance or promise of returns. Investment decisions are solely the responsibility of the investor.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>5. Limitation of Liability</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  While every reasonable effort is made to keep the information on this website accurate and up to date, MFDThiru shall not be liable for any loss or damage arising directly or indirectly from the use of, or reliance on, the information, tools, calculators or materials available on this website.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>6. User Acknowledgement</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  By accessing and using this website, you acknowledge that you have read, understood and agreed to this Disclaimer.
                </p>
              </div>
            </FadeUp>

            {/* Statutory Banner */}
            <FadeUp delay={0.4}>
              <div style={{
                background: `linear-gradient(135deg, ${TEAL}, #1e4a4f)`,
                borderRadius: 18, padding: '28px 32px', color: '#ffffff', textAlign: 'center', marginTop: 12,
                boxShadow: '0 8px 24px rgba(53,133,142,0.2)'
              }}>
                <p style={{ fontSize: 17, fontWeight: 700, margin: 0, lineHeight: 1.6 }}>
                  Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
                </p>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
