import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ShieldCheck, Info, FileText, CheckCircle2, AlertTriangle, Scale, ArrowRight, BookOpen, UserCheck, ShieldAlert } from 'lucide-react'
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
              <Scale size={15} /> Regulatory Position & Compliance Note
            </span>
            <h1 style={{ fontSize: 'clamp(28px, 4.2vw, 46px)', fontWeight: 800, color: '#303733', marginBottom: 18, lineHeight: 1.25 }}>
              Regulatory Position on Calculators & Goal-Based Mutual Fund Investing
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 780, margin: '0 auto 24px', lineHeight: 1.7 }}>
              SEBI and AMFI compliance guidance note for the MFDThiru website and digital tools.
            </p>
            <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', fontSize: 13, color: TEAL, fontWeight: 700 }}>
              <span style={{ padding: '6px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                ARN Holder: J. C. Thirumurugan | ARN 26890
              </span>
              <span style={{ padding: '6px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                Updated: 22 July 2026
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '48px 24px 88px', position: 'relative' }}>
        <SectionBlob x="88%" y="25%" w={320} h={280} color="#B1D3B9" op={0.30} blur={60} r="45% 55% 62% 38% / 58% 42% 58% 42%" />
        <SectionBlob x="-4%" y="55%" w={280} h={240} color="#E6F2DD" op={0.70} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 62%" />

        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          
          {/* Sub Navigation */}
          <LegalNav />

          <div style={{ display: 'grid', gap: 36 }}>
            
            {/* Executive Position Callout */}
            <FadeUp delay={0.1}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(230,242,221,0.85), rgba(255,255,255,0.95))',
                borderRadius: 24, border: `2px solid ${MINT}`, padding: '36px 40px',
                boxShadow: '0 8px 32px rgba(53,133,142,0.08)', backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: TEAL }}>Compliance Statement</span>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', margin: 0 }}>EXECUTIVE POSITION</h2>
                  </div>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#2D3531', margin: 0, fontWeight: 500 }}>
                  MFDThiru may provide educational calculators and may assist clients with goal-based SIP, lump-sum and flexible mutual fund investments. The activity must remain limited to mutual funds and incidental to distribution. MFDThiru must not offer detailed financial planning, holistic investment advice or public scheme-specific recommendations as these cross the permitted MFD boundary.
                </p>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(53,133,142,0.18)', fontSize: 13, color: '#555D58', fontStyle: 'italic' }}>
                  Purpose: Internal compliance guidance and website implementation reference. This note is an operational regulatory reference and not a formal legal opinion.
                </div>
              </div>
            </FadeUp>

            {/* Section 1: Purpose & Scope */}
            <FadeUp delay={0.12}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>1</span>
                  Purpose and Scope
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', margin: 0 }}>
                  This note explains the regulatory basis on which an AMFI-registered Mutual Fund Distributor (“MFD”) may provide calculators, goal-oriented illustrations and basic assistance with mutual fund investments without presenting itself as a SEBI-registered Investment Adviser (“RIA”). It also identifies the design, terminology, disclosure and operating controls recommended for the MFDThiru website.
                </p>
              </div>
            </FadeUp>

            {/* Section 2: Regulatory Conclusion */}
            <FadeUp delay={0.15}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>2</span>
                  Regulatory Conclusion: Calculators Are Permitted With Boundaries
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', marginBottom: 24 }}>
                  SEBI and AMFI do not prohibit an MFD from using educational calculators or helping a client make a goal-based mutual fund investment. The controlling question is whether the activity remains basic, mutual-fund-only and incidental to distribution, or becomes detailed financial planning and holistic investment advice.
                </p>
                <div style={{ display: 'grid', gap: 14 }}>
                  {[
                    'Generic SIP, lump-sum, goal-value, retirement-corpus and flexible-contribution calculators may be offered as educational and illustrative tools.',
                    'An MFD may assist a client with a specific goal-based SIP or lump-sum investment, provided the recommendation is restricted to mutual fund schemes.',
                    'Where a mutual fund scheme is recommended, the MFD must assess the investor’s risk profile, investment need, objective, horizon and product suitability, and maintain appropriate records.',
                    'An MFD may provide a curated list of suitable mutual fund schemes to help the client make a choice; this is incidental guidance connected with distribution.',
                    'An MFD must not hold itself out as providing financial planning, holistic investment advice or advice covering securities beyond the permitted mutual fund distribution scope unless separately registered as an IA.'
                  ].map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 20px', background: '#F8FDF9', borderRadius: 14, border: '1px solid rgba(136,189,164,0.2)' }}>
                      <CheckCircle2 size={20} color={TEAL} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 15, color: '#333D37', lineHeight: 1.7, fontWeight: 500 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Section 3 & 4: What SEBI and AMFI Permit */}
            <FadeUp delay={0.2}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 24 }}>3 & 4. SEBI and AMFI Express Regulatory Permissions</h2>
                
                <div style={{ display: 'grid', gap: 24 }}>
                  <div style={{ background: '#F7FAF7', padding: '28px', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>What SEBI Permits (SEBI IA FAQs 16 & 19)</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444C47', marginBottom: 14 }}>
                      SEBI’s FAQs for Registered Investment Advisers clarify that an AMFI-registered mutual fund distributor is exempt from obtaining IA registration when the investment advice is incidental to the distributor’s primary activity. For an MFD, incidental activity means basic advice pertaining to mutual fund schemes and limited to mutual fund products distributed by the MFD.
                    </p>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#555D58', margin: 0, fontStyle: 'italic' }}>
                      Exemption restriction: The exemption does not extend to advice on shares, debentures, bonds, derivatives, AIFs, REITs or InvITs.
                    </p>
                  </div>

                  <div style={{ background: '#F7FAF7', padding: '28px', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.2)' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>What AMFI Permits (AMFI MFD FAQs 1 to 5, 8 to 10 & Master Circular)</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444C47', marginBottom: 14 }}>
                      AMFI expressly permits recommending a curated list of mutual fund schemes based on risk profile and product suitability, providing basic incidental guidance, assisting with goal-based SIP or lump-sum investments (education, home, retirement), and conducting periodic portfolio reviews within the MFD scope.
                    </p>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#B9382C', margin: 0, fontWeight: 600 }}>
                      Nomenclature constraint: MFDs who are not RIAs must not use titles such as “Financial Planning”, “Financial Planner”, “Investment Adviser”, “IFA”, or “Wealth Adviser”.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Section 5: Permitted and Restricted Website Features Table */}
            <FadeUp delay={0.25}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>5</span>
                  Permitted and Restricted Website Features
                </h2>

                <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(136,189,164,0.22)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: `linear-gradient(135deg, ${TEAL}, #276269)`, color: '#ffffff' }}>
                        <th style={{ padding: '16px 20px', fontSize: 15, fontWeight: 700, width: '20%' }}>Area</th>
                        <th style={{ padding: '16px 20px', fontSize: 15, fontWeight: 700, width: '40%' }}>Permitted Approach</th>
                        <th style={{ padding: '16px 20px', fontSize: 15, fontWeight: 700, width: '40%' }}>Restricted / Avoid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Calculators', 'Generic mathematical illustrations based on user-entered amounts, dates, inflation and assumed returns.', 'Promising returns, presenting assumptions as expected scheme returns, or implying goals are guaranteed.'],
                        ['Goal Support', 'Goal-based SIP, lump-sum or flexible mutual fund investing limited to mutual funds.', 'Comprehensive financial planning covering whole client finances or multi-product classes.'],
                        ['Scheme Selection', 'Curated mutual fund list after risk profiling and suitability assessment.', 'Automatic scheme recommendation to anonymous visitors without risk profiling.'],
                        ['Public Content', 'General investor education on mutual funds, concepts and market dynamics.', 'Public scheme-specific recommendations or performance claims designed to solicit investment.'],
                        ['Terminology', '“Goal-Based Mutual Fund Investing”, “Investment Calculators”, “Mutual Fund Distribution”.', '“Financial Planning”, “Financial Planner”, “Investment Adviser”, “IFA”, “Wealth Adviser”.'],
                        ['Product Scope', 'Mutual fund products within MFD distribution activity.', 'Advice on shares, derivatives, bonds, AIFs, REITs, InvITs or holistic asset allocation.']
                      ].map(([area, permitted, restricted], idx) => (
                        <tr key={idx} style={{ background: idx % 2 === 0 ? '#F8FDF9' : '#ffffff', borderBottom: '1px solid rgba(136,189,164,0.15)' }}>
                          <td style={{ padding: '16px 20px', fontSize: 14, fontWeight: 700, color: TEAL }}>{area}</td>
                          <td style={{ padding: '16px 20px', fontSize: 14, lineHeight: 1.7, color: '#333D37' }}>✓ {permitted}</td>
                          <td style={{ padding: '16px 20px', fontSize: 14, lineHeight: 1.7, color: '#B9382C' }}>✕ {restricted}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeUp>

            {/* Section 6: How MFDThiru Calculators Operate */}
            <FadeUp delay={0.3}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800 }}>6</span>
                  How MFDThiru Calculators Operate
                </h2>
                
                <h3 style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginBottom: 12 }}>6.1 Permitted Calculator Suite</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24 }}>
                  {['SIP Calculator', 'Lump-Sum Calculator', 'Goal Value / Target Calculator', 'Education & Retirement Estimators', 'Flexible Investment Calculator'].map((calc, i) => (
                    <div key={i} style={{ padding: '14px 18px', background: '#F8FDF9', borderRadius: 12, border: '1px solid rgba(136,189,164,0.2)', fontSize: 14, fontWeight: 600, color: '#333D37' }}>
                      🧮 {calc}
                    </div>
                  ))}
                </div>

                <div style={{ background: 'linear-gradient(135deg, #F4FBF7, rgba(230,242,221,0.5))', border: `1.5px dashed ${MINT}`, borderRadius: 18, padding: '24px 28px', marginBottom: 24 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>CRITICAL DESIGN RULE FOR CALCULATORS</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: '#2C3530', margin: 0, fontWeight: 500 }}>
                    “The calculator may calculate; it should not advise. It should not select or name a scheme, label an assumed return as 'expected', declare that the goal will be achieved, or convert an anonymous visitor's output into a personalised investment recommendation.”
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Section 7: Scheme Recommendations & Risk Profiling Gate */}
            <FadeUp delay={0.35}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <UserCheck size={24} color={TEAL} />
                  7. Investor Risk-Profiling & Suitability Process
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4E5652', marginBottom: 20 }}>
                  A public calculator can remain anonymous and educational. If the next step involves a specific mutual fund recommendation, MFDThiru completes a mandatory 7-step process:
                </p>
                <div style={{ display: 'grid', gap: 12 }}>
                  {[
                    '1. Collect relevant client information (goal, horizon, financial position, risk appetite).',
                    '2. Complete and record the investor’s risk profile.',
                    '3. Assess suitability and appropriateness of the mutual fund product.',
                    '4. Provide a curated list or incidental recommendation restricted to mutual fund schemes.',
                    '5. Disclose MFD status, ARN 26890 and Regular Plan commission structure.',
                    '6. Record the recommendation, suitability basis and investor consent.',
                    '7. Periodically review and update risk profile and client records.'
                  ].map((step, idx) => (
                    <div key={idx} style={{ padding: '14px 20px', background: '#F8FDF9', borderRadius: 12, border: '1px solid rgba(136,189,164,0.2)', fontSize: 14, fontWeight: 600, color: '#333D37' }}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Section 8 & 9: Disclaimers & Implementation Controls */}
            <FadeUp delay={0.4}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20 }}>8, 9 & 10. Calculator Disclaimer & Implementation Controls</h2>
                
                <div style={{ background: '#F8FDF9', padding: '24px 28px', borderRadius: 16, borderLeft: `6px solid ${TEAL}`, fontSize: 15, lineHeight: 1.85, color: '#333D37', marginBottom: 24, border: '1px solid rgba(136,189,164,0.2)' }}>
                  <strong style={{ color: TEAL }}>DISPLAY BELOW EVERY CALCULATOR:</strong><br />
                  “Illustration only: This calculator provides indicative mathematical results based on the inputs and assumptions selected by the user. It does not constitute financial planning or investment advice, recommend any mutual fund scheme, or guarantee any return or achievement of a financial goal. Actual results may vary. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.”
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                  {[
                    ['Identity Display', 'Display "AMFI-registered MFD - ARN 26890" prominently on all pages.'],
                    ['Calculator Separation', 'Keep generic calculations separate from client recommendations.'],
                    ['No Auto Scheme Listing', 'Do not automatically name schemes based solely on calculator inputs.'],
                    ['Commission Disclosure', 'Disclose Regular Plan commissions received from AMCs.'],
                    ['Records Preservation', 'Preserve risk profiles, suitability assessments, and consent logs.']
                  ].map(([title, desc], i) => (
                    <div key={i} style={{ padding: '18px', background: 'rgba(230,242,221,0.35)', borderRadius: 14, border: '1px solid rgba(136,189,164,0.2)' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: TEAL, marginBottom: 6 }}>{title}</div>
                      <div style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Section 11 & 12: Regulatory References & Final Assessment */}
            <FadeUp delay={0.45}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1px solid rgba(136,189,164,0.22)', padding: '40px', boxShadow: '0 6px 24px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <BookOpen size={24} color={TEAL} />
                  11 & 12. Regulatory References & Compliance Assessment
                </h2>
                
                <div style={{ fontSize: 14, lineHeight: 1.8, color: '#4E5652', display: 'grid', gap: 10, marginBottom: 20 }}>
                  <div>1. <strong>SEBI, FAQs: Registered Investment Advisers (August 2025)</strong>: FAQs 16 & 19 on MFD exemption and incidental activity.</div>
                  <div>2. <strong>AMFI, FAQs on Do’s & Don’ts for MFDs</strong>: FAQs 1 to 5 & 8 to 10 on incidental guidance, goal-based MF investments, risk profiling and advertising.</div>
                  <div>3. <strong>AMFI, Guidance on MFD Nomenclature</strong>: on avoiding unregistered advisory terminology.</div>
                  <div>4. <strong>AMFI, Master Circular for Mutual Fund Distributors (14 January 2026)</strong>: consolidated MFD conduct guidelines.</div>
                </div>

                <div style={{ background: `linear-gradient(135deg, ${TEAL}, #1e4a4f)`, color: '#ffffff', borderRadius: 16, padding: '24px 28px', textAlign: 'center', fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>
                  Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
                </div>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
