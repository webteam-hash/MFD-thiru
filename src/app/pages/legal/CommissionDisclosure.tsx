import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Coins, Mail, Info, CheckCircle2 } from 'lucide-react'
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

export function CommissionDisclosure() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      <SEO
        title="Commission Disclosure | MFDthiru — J. C. Thirumurugan (ARN 26890)"
        description="Commission Disclosure policy and trail commission details for MFDthiru — AMFI Registered Mutual Fund Distributor ARN 26890."
        canonical="/commission-disclosure"
      />

      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Coins size={15} /> Statutory Disclosure
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Commission Disclosure
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Disclosure explaining how MFDthiru is compensated and considerations for mutual fund investors.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.9)', borderRadius: 14, fontSize: 14, color: TEAL, fontWeight: 700, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              J. C. Thirumurugan &nbsp;|&nbsp; AMFI Registered Mutual Fund Distributor &nbsp;|&nbsp; ARN 26890
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
            
            <FadeUp delay={0.05}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Purpose</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  This disclosure explains how MFDthiru is compensated when investors use its mutual fund distribution services and highlights the related considerations for investors.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>How MFDthiru is Compensated</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  MFDthiru is the mutual fund distribution brand of <strong>J. C. Thirumurugan</strong>, AMFI-registered Mutual Fund Distributor, ARN 26890.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  Investments facilitated through MFDthiru are generally made under <strong>Regular Plans</strong> of mutual fund schemes. Regular Plans have a higher expense ratio than Direct Plans because they include distribution-related expenses.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  For investments made under Regular Plans using ARN 26890, MFDthiru receives trail commission from the respective Asset Management Companies. <strong>No commission is collected directly from the investor.</strong> The commission is paid by the Asset Management Company and is included in the scheme's expense ratio.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Variation in Commission and Conflict of Interest</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  The commission rate may vary depending on the Asset Management Company, mutual fund category, scheme and applicable commission structure. This variation may create a potential conflict of interest.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDthiru is committed to considering the investor's financial objectives, risk profile, investment horizon and product suitability while facilitating mutual fund investments. <strong>Commission alone will not form the basis for suggesting any mutual fund scheme.</strong>
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>Information Investors Should Review</h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: '#444C47', lineHeight: 1.85 }}>
                  <li>The difference between Regular Plans and Direct Plans.</li>
                  <li>The applicable expense ratio and other scheme-related costs.</li>
                  <li>The Scheme Information Document, Key Information Memorandum and Statement of Additional Information.</li>
                  <li>The scheme's investment objective, risk factors and suitability for the investor's needs.</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Commission Information</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Details of the commission received or receivable by MFDthiru across different Asset Management Companies and mutual fund categories are available upon request. Please write to <a href="mailto:enquiry@mfdthiru.in" style={{ color: TEAL, fontWeight: 700, textDecoration: 'underline' }}>enquiry@mfdthiru.in</a> for the applicable information.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Regulatory Status</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDthiru is not a SEBI-registered Investment Adviser. Its services are limited to mutual fund distribution and incidental assistance related to the mutual fund products distributed through MFDthiru.
                </p>
              </div>
            </FadeUp>

            {/* Important Risk Disclosure Banner */}
            <FadeUp delay={0.35}>
              <div style={{
                background: `linear-gradient(135deg, ${TEAL}, #1e4a4f)`,
                borderRadius: 18, padding: '28px 32px', color: '#ffffff', textAlign: 'left', marginTop: 12,
                boxShadow: '0 8px 24px rgba(53,133,142,0.2)'
              }}>
                <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px 0', color: MINT }}>
                  Important Risk Disclosure
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, margin: 0, lineHeight: 1.7 }}>
                  Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing. Past performance is not indicative of future returns. Mutual fund returns and achievement of financial goals are not guaranteed.
                </p>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
