import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ShieldCheck, Info, FileText, CheckCircle2, AlertTriangle, Scale, ArrowRight } from 'lucide-react'
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

export function CalculatorPolicy() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Scale size={15} /> Regulatory Basis & Compliance Note
            </span>
            <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.25 }}>
              MFDTHIRU Regulatory Basis for Using Calculators and Goal-Based Mutual Fund Investing
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              A concise reference note for responding to regulatory or compliance objections.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.9)', borderRadius: 14, fontSize: 14, color: TEAL, fontWeight: 700, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              J. C. Thirumurugan &nbsp;|&nbsp; AMFI Registered Mutual Fund Distributor (ARN – 26890)
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

          <div style={{ display: 'grid', gap: 36 }}>
            
            {/* Conclusion Box */}
            <FadeUp delay={0.1}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(230,242,221,0.85), rgba(255,255,255,0.95))',
                borderRadius: 24, border: `2px solid ${MINT}`, padding: '36px 40px',
                boxShadow: '0 8px 32px rgba(53,133,142,0.08)', backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: TEAL }}>Executive Summary</span>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', margin: 0 }}>CONCLUSION</h2>
                  </div>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#2D3531', margin: 0, fontWeight: 500 }}>
                  An AMFI-registered Mutual Fund Distributor may use educational investment calculators and may assist clients with goal-based SIP or lump-sum mutual fund investments, provided the activity remains limited to mutual funds and incidental to distribution. MFDThiru should describe the service as <strong>“Goal-Based Mutual Fund Investing”</strong> and not as <strong>“Financial Planning”</strong>.
                </p>
              </div>
            </FadeUp>

            {/* Section 1 */}
            <FadeUp delay={0.15}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>1</span>
                  What the Regulator Permits
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', marginBottom: 28 }}>
                  The regulatory position rests on two express permissions:
                </p>

                <div style={{ display: 'grid', gap: 24 }}>
                  {/* Item A */}
                  <div style={{ background: '#F7FAF7', padding: '28px', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>
                      A. AMFI Expressly Permits Goal-Based Mutual Fund Investments
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444C47', marginBottom: 16 }}>
                      AMFI’s official “FAQs on Do’s & Don’ts for MFDs” states in FAQ 4 that MFDs may assist mutual fund clients with goal-based SIP or lump-sum investments for specific goals, provided the guidance and recommendation are restricted to mutual fund schemes.
                    </p>
                    <div style={{ background: '#ffffff', padding: '18px 22px', borderRadius: 14, border: '1px solid rgba(53,133,142,0.2)', fontSize: 15, fontStyle: 'italic', color: '#274145' }}>
                      <strong style={{ fontStyle: 'normal', color: TEAL }}>DIRECT AMFI REFERENCE — FAQ 4:</strong><br />
                      “MFDs may provide incidental advice to assist the MF clients to make specific Goal-based investments.”
                      <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: TEAL, fontStyle: 'normal' }}>
                        Official source: AMFI – FAQs on Do’s & Don’ts for MFDs, FAQ 4 (page 2)
                      </div>
                    </div>
                  </div>

                  {/* Item B */}
                  <div style={{ background: '#F7FAF7', padding: '28px', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>
                      B. SEBI Permits Incidental Mutual Fund Guidance by an MFD
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444C47', marginBottom: 16 }}>
                      SEBI’s FAQs for Registered Investment Advisers states that an AMFI-registered MFD does not require Investment Adviser registration when the guidance is incidental to mutual fund distribution. SEBI describes this as basic guidance limited to mutual fund schemes or products.
                    </p>
                    <div style={{ background: '#ffffff', padding: '18px 22px', borderRadius: 14, border: '1px solid rgba(136,189,164,0.3)', fontSize: 15, fontStyle: 'italic', color: '#274145' }}>
                      <strong style={{ fontStyle: 'normal', color: TEAL }}>DIRECT SEBI REFERENCE — FAQ 19:</strong><br />
                      An AMFI-registered MFD providing guidance incidental to its distribution activity is not required to obtain IA registration.
                      <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: TEAL, fontStyle: 'normal' }}>
                        Official source: SEBI – FAQs for Registered Investment Advisers, FAQ 19 (pages 6–7)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Section 2 */}
            <FadeUp delay={0.2}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>2</span>
                  Why Calculators Are Permissible
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', marginBottom: 16 }}>
                  A SIP, lump-sum, goal-value or flexible-investment calculator is a mathematical illustration. It estimates a possible future value or the contribution required for a goal using amounts, dates, time periods, inflation and assumed rates entered by the user.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', marginBottom: 28 }}>
                  The calculator does not itself provide financial planning or recommend a security. It is a supporting tool for the goal-based mutual fund activity that AMFI expressly permits. Therefore, its use is consistent with the MFD framework when the following safeguards are applied:
                </p>

                <div style={{ display: 'grid', gap: 16 }}>
                  {[
                    'The calculator is described as educational and illustrative.',
                    'Return and inflation figures are clearly labelled as assumptions, not forecasts or assurances.',
                    'The calculator does not automatically recommend a specific mutual fund scheme to an anonymous visitor.',
                    'Any scheme-level recommendation is given only after risk profiling and suitability assessment.',
                    'The activity and recommendation remain restricted to mutual fund schemes.',
                    'The statutory mutual fund risk warning and calculator disclaimer are displayed.',
                  ].map((safeguard, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 20px', background: 'rgba(230,242,221,0.35)', borderRadius: 14, border: '1px solid rgba(136,189,164,0.18)' }}>
                      <CheckCircle2 size={20} color={TEAL} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 15, color: '#333D37', lineHeight: 1.7, fontWeight: 500 }}>{safeguard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Section 3 */}
            <FadeUp delay={0.25}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(220,53,69,0.2)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#B9382C', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <AlertTriangle size={26} color="#B9382C" />
                  3. What Must Not Be Claimed (Regulatory Boundary)
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4E5652', marginBottom: 20 }}>
                  AMFI distinguishes permissible goal-based mutual fund investing from detailed “Financial Planning” and holistic investment advice. A non-RIA MFD should therefore not market calculators or goal-based mutual fund support as <strong>“Financial Planning”</strong>, <strong>“Investment Advisory”</strong>, <strong>“IFA”</strong> or <strong>“Wealth Advisory”</strong>.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4E5652', marginBottom: 20 }}>
                  AMFI FAQ 2 states that detailed financial planning and holistic investment advice are reserved for SEBI-registered Investment Advisers. AMFI’s nomenclature guidance also prohibits MFDs from using names that create the impression of performing an unregistered advisory role.
                </p>
                <div style={{ padding: '12px 18px', background: 'rgba(185,56,44,0.06)', borderRadius: 12, fontSize: 14, color: '#B9382C', fontWeight: 600, display: 'inline-block' }}>
                  Official sources: AMFI MFD FAQs, FAQ 2 &nbsp;|&nbsp; AMFI Guidance on MFD Nomenclature
                </div>
              </div>
            </FadeUp>

            {/* Section 4 */}
            <FadeUp delay={0.3}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>4</span>
                  Recommended MFDThiru Terminology Position
                </h2>

                <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(136,189,164,0.22)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: `linear-gradient(135deg, ${TEAL}, #276269)`, color: '#ffffff' }}>
                        <th style={{ padding: '18px 24px', fontSize: 16, fontWeight: 700, width: '50%' }}>Use This Terminology</th>
                        <th style={{ padding: '18px 24px', fontSize: 16, fontWeight: 700, width: '50%' }}>Avoid This Terminology</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Goal-Based Mutual Fund Investing', 'Financial Planning'],
                        ['Mutual Fund Investment Calculators', 'Investment Advisory'],
                        ['Flexible Investment Calculator', 'Independent Financial Adviser / IFA'],
                        ['Incidental mutual fund guidance', 'Wealth Adviser / Wealth Manager'],
                      ].map(([useText, avoidText], idx) => (
                        <tr key={idx} style={{ background: idx % 2 === 0 ? '#F8FDF9' : '#ffffff', borderBottom: '1px solid rgba(136,189,164,0.15)' }}>
                          <td style={{ padding: '18px 24px', fontSize: 15, fontWeight: 600, color: TEAL }}>
                            ✓ {useText}
                          </td>
                          <td style={{ padding: '18px 24px', fontSize: 15, fontWeight: 600, color: '#B9382C' }}>
                            ✕ {avoidText}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeUp>

            {/* Section 5 */}
            <FadeUp delay={0.35}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <FileText size={24} color={TEAL} />
                  5. Short Defence Statement for Production
                </h2>
                <div style={{ background: 'linear-gradient(135deg, #F4FBF7, rgba(230,242,221,0.5))', border: `1.5px dashed ${MINT}`, borderRadius: 18, padding: '30px', fontSize: 16, lineHeight: 1.9, color: '#2C3530' }}>
                  “MFDThiru uses calculators only as educational mathematical tools. Goal-based investment assistance is restricted to mutual fund schemes and is provided as incidental support to mutual fund distribution. This is consistent with AMFI FAQ 4, which expressly permits MFDs to assist clients with goal-based SIP and lump-sum mutual fund investments, and SEBI IA FAQ 19, which permits basic mutual fund guidance incidental to distribution without separate IA registration. MFDThiru does not represent this service as comprehensive financial planning or holistic investment advice.”
                </div>
              </div>
            </FadeUp>

            {/* Section 6 */}
            <FadeUp delay={0.4}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800 }}>6</span>
                  Disclaimer to Accompany Every Calculator
                </h2>
                <div style={{ background: '#F8FDF9', padding: '24px 28px', borderRadius: 16, borderLeft: `6px solid ${TEAL}`, fontSize: 15, lineHeight: 1.85, color: '#333D37', marginBottom: 24, border: '1px solid rgba(136,189,164,0.2)' }}>
                  “This calculator is an educational mathematical illustration based on user-selected inputs and assumptions. It does not constitute financial planning or investment advice, recommend any mutual fund scheme, or guarantee any return or achievement of a goal. Actual results may vary. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.”
                </div>
                
                <div style={{ background: 'rgba(230,242,221,0.45)', padding: '24px 28px', borderRadius: 16, fontSize: 14, lineHeight: 1.8, color: '#4E5652', border: '1px solid rgba(136,189,164,0.25)' }}>
                  <strong style={{ color: TEAL }}>Important Note:</strong> No SEBI or AMFI publication located expressly “approves” calculators by name. The defensible basis is that calculators are neutral mathematical tools supporting goal-based mutual fund investing expressly permitted by AMFI, within the incidental-distribution scope recognised by SEBI. This note is an operational regulatory reference and not a formal legal opinion.
                </div>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
