import { Link } from 'react-router'
import { ShieldCheck, Info, FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const PASTEL = '#E6EEC9'

export function CalculatorPolicy() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fcfdfe', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: '#fff', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16, boxShadow: '0 2px 10px rgba(53,133,142,0.1)' }}>
            <Scale size={16} /> Compliance & Regulatory Basis
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.25 }}>
            MFDTHIRU Regulatory Basis for Using Calculators and Goal-Based Mutual Fund Investing
          </h1>
          <p style={{ fontSize: 17, color: '#555D58', maxWidth: 740, margin: '0 auto 20px', lineHeight: 1.6 }}>
            A concise reference note for responding to regulatory or compliance objections.
          </p>
          <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(53,133,142,0.08)', borderRadius: 12, fontSize: 14, color: TEAL, fontWeight: 600 }}>
            J. C. Thirumurugan | AMFI Registered Mutual Fund Distributor (ARN – 26890)
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '48px 24px 80px', position: 'relative' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          
          {/* Executive Summary / Conclusion Callout */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(230,242,221,0.9), rgba(255,255,255,0.95))',
            borderRadius: 20, border: `2px solid ${MINT}`, padding: '32px', marginBottom: 40,
            boxShadow: '0 8px 30px rgba(53,133,142,0.08)', backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <ShieldCheck size={28} color={TEAL} />
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, margin: 0 }}>Regulatory Conclusion</h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#2C332E', margin: 0, fontWeight: 500 }}>
              An AMFI-registered Mutual Fund Distributor may use educational investment calculators and may assist clients with goal-based SIP or lump-sum mutual fund investments, provided the activity remains limited to mutual funds and incidental to distribution. MFDThiru should describe the service as <strong>“Goal-Based Mutual Fund Investing”</strong> and not as <strong>“Financial Planning”</strong>.
            </p>
          </div>

          {/* Section 1 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(136,189,164,0.25)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>1</span>
              What the Regulator Permits
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', marginBottom: 20 }}>
              The regulatory position rests on two express permissions:
            </p>

            <div style={{ display: 'grid', gap: 20 }}>
              {/* Item A */}
              <div style={{ background: '#f8fdf9', padding: '24px', borderRadius: 14, borderLeft: `4px solid ${TEAL}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>
                  A. AMFI Expressly Permits Goal-Based Mutual Fund Investments
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444C47', marginBottom: 14 }}>
                  AMFI’s official “FAQs on Do’s & Don’ts for MFDs” states in FAQ 4 that MFDs may assist mutual fund clients with goal-based SIP or lump-sum investments for specific goals, provided the guidance and recommendation are restricted to mutual fund schemes.
                </p>
                <div style={{ background: '#fff', padding: '14px 18px', borderRadius: 10, border: '1px solid rgba(53,133,142,0.2)', fontSize: 14, fontStyle: 'italic', color: '#2a4448' }}>
                  <strong>DIRECT AMFI REFERENCE — FAQ 4:</strong><br />
                  “MFDs may provide incidental advice to assist the MF clients to make specific Goal-based investments.”
                  <div style={{ marginTop: 8, fontSize: 12, fontWeight: 600, color: TEAL, fontStyle: 'normal' }}>
                    Official source: AMFI – FAQs on Do’s & Don’ts for MFDs, FAQ 4 (page 2)
                  </div>
                </div>
              </div>

              {/* Item B */}
              <div style={{ background: '#f8fdf9', padding: '24px', borderRadius: 14, borderLeft: `4px solid ${MINT}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>
                  B. SEBI Permits Incidental Mutual Fund Guidance by an MFD
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444C47', marginBottom: 14 }}>
                  SEBI’s FAQs for Registered Investment Advisers states that an AMFI-registered MFD does not require Investment Adviser registration when the guidance is incidental to mutual fund distribution. SEBI describes this as basic guidance limited to mutual fund schemes or products.
                </p>
                <div style={{ background: '#fff', padding: '14px 18px', borderRadius: 10, border: '1px solid rgba(136,189,164,0.3)', fontSize: 14, fontStyle: 'italic', color: '#2a4448' }}>
                  <strong>DIRECT SEBI REFERENCE — FAQ 19:</strong><br />
                  An AMFI-registered MFD providing guidance incidental to its distribution activity is not required to obtain IA registration.
                  <div style={{ marginTop: 8, fontSize: 12, fontWeight: 600, color: TEAL, fontStyle: 'normal' }}>
                    Official source: SEBI – FAQs for Registered Investment Advisers, FAQ 19 (pages 6–7)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(136,189,164,0.25)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>2</span>
              Why Calculators are Permissible
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', marginBottom: 20 }}>
              A SIP, lump-sum, goal-value or flexible-investment calculator is a mathematical illustration. It estimates a possible future value or the contribution required for a goal using amounts, dates, time periods, inflation and assumed rates entered by the user.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', marginBottom: 24 }}>
              The calculator does not itself provide financial planning or recommend a security. It is a supporting tool for the goal-based mutual fund activity that AMFI expressly permits. Therefore, its use is consistent with the MFD framework when the following safeguards are applied:
            </p>

            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'The calculator is described as educational and illustrative.',
                'Return and inflation figures are clearly labelled as assumptions, not forecasts or assurances.',
                'The calculator does not automatically recommend a specific mutual fund scheme to an anonymous visitor.',
                'Any scheme-level recommendation is given only after risk profiling and suitability assessment.',
                'The activity and recommendation remain restricted to mutual fund schemes.',
                'The statutory mutual fund risk warning and calculator disclaimer are displayed.',
              ].map((safeguard, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(230,242,221,0.3)', borderRadius: 10 }}>
                  <CheckCircle2 size={18} color={TEAL} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#333D37', lineHeight: 1.6, fontWeight: 500 }}>{safeguard}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(220,53,69,0.2)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#A93226', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <AlertTriangle size={24} color="#A93226" />
              3. What Must Not Be Claimed (Regulatory Boundary)
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', marginBottom: 16 }}>
              AMFI distinguishes permissible goal-based mutual fund investing from detailed “Financial Planning” and holistic investment advice. A non-RIA MFD should therefore not market calculators or goal-based mutual fund support as <strong>“Financial Planning”</strong>, <strong>“Investment Advisory”</strong>, <strong>“IFA”</strong> or <strong>“Wealth Advisory”</strong>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', marginBottom: 16 }}>
              AMFI FAQ 2 states that detailed financial planning and holistic investment advice are reserved for SEBI-registered Investment Advisers. AMFI’s nomenclature guidance also prohibits MFDs from using names that create the impression of performing an unregistered advisory role.
            </p>
            <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>
              Official sources: AMFI MFD FAQs, FAQ 2 &nbsp;|&nbsp; AMFI Guidance on MFD Nomenclature
            </div>
          </div>

          {/* Section 4 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(136,189,164,0.25)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>4</span>
              Recommended MFDThiru Terminology Position
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 12, overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: TEAL, color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '14px 20px', fontSize: 15, fontWeight: 700 }}>Use This Terminology</th>
                    <th style={{ padding: '14px 20px', fontSize: 15, fontWeight: 700 }}>Avoid This Terminology</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Goal-Based Mutual Fund Investing', 'Financial Planning'],
                    ['Mutual Fund Investment Calculators', 'Investment Advisory'],
                    ['Flexible Investment Calculator', 'Independent Financial Adviser / IFA'],
                    ['Incidental mutual fund guidance', 'Wealth Adviser / Wealth Manager'],
                  ].map(([useText, avoidText], idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8fdf9' : '#fff', borderBottom: '1px solid rgba(136,189,164,0.15)' }}>
                      <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, color: TEAL }}>
                        ✓ {useText}
                      </td>
                      <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, color: '#A93226' }}>
                        ✕ {avoidText}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(136,189,164,0.25)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FileText size={22} color={TEAL} />
              5. Short Defence Statement for Production
            </h2>
            <div style={{ background: '#f4fbf7', border: '1px border-dashed #88BDA4', borderRadius: 14, padding: '24px', fontSize: 15, lineHeight: 1.8, color: '#2D3833' }}>
              “MFDThiru uses calculators only as educational mathematical tools. Goal-based investment assistance is restricted to mutual fund schemes and is provided as incidental support to mutual fund distribution. This is consistent with AMFI FAQ 4, which expressly permits MFDs to assist clients with goal-based SIP and lump-sum mutual fund investments, and SEBI IA FAQ 19, which permits basic mutual fund guidance incidental to distribution without separate IA registration. MFDThiru does not represent this service as comprehensive financial planning or holistic investment advice.”
            </div>
          </div>

          {/* Section 6 */}
          <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(136,189,164,0.25)', padding: '32px', marginBottom: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>6</span>
              Disclaimer to Accompany Every Calculator
            </h2>
            <div style={{ background: '#fefefe', padding: '20px', borderRadius: 12, borderLeft: `4px solid ${TEAL}`, fontSize: 14, lineHeight: 1.7, color: '#444C47', marginBottom: 20 }}>
              “This calculator is an educational mathematical illustration based on user-selected inputs and assumptions. It does not constitute financial planning or investment advice, recommend any mutual fund scheme, or guarantee any return or achievement of a goal. Actual results may vary. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.”
            </div>
            
            <div style={{ background: 'rgba(230,242,221,0.5)', padding: '20px', borderRadius: 12, fontSize: 13, lineHeight: 1.7, color: '#4A554F' }}>
              <strong>Important Note:</strong> No SEBI or AMFI publication located expressly “approves” calculators by name. The defensible basis is that calculators are neutral mathematical tools supporting goal-based mutual fund investing expressly permitted by AMFI, within the incidental-distribution scope recognised by SEBI. This note is an operational regulatory reference and not a formal legal opinion.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
