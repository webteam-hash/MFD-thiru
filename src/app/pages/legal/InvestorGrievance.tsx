import { Headphones, Mail, Globe, Shield, AlertCircle, CheckCircle2 } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

export function InvestorGrievance() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fcfdfe', color: '#303733' }}>
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: '#fff', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16, boxShadow: '0 2px 10px rgba(53,133,142,0.1)' }}>
            <Headphones size={16} /> Investor Support & Grievance
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.25 }}>
            Investor Grievance Redressal & Contact Information
          </h1>
          <p style={{ fontSize: 17, color: '#555D58', maxWidth: 740, margin: '0 auto 20px', lineHeight: 1.6 }}>
            At MFDThiru, we are committed to providing prompt, transparent and efficient service to our investors.
          </p>
          <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(53,133,142,0.08)', borderRadius: 12, fontSize: 14, color: TEAL, fontWeight: 600 }}>
            J. C. Thirumurugan | AMFI Registered Mutual Fund Distributor (ARN – 26890)
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '48px 24px 80px', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(136,189,164,0.25)', padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 32 }}>
            
            {/* Distributor Details Card */}
            <div style={{ background: '#f8fdf9', borderRadius: 16, padding: '28px', border: `1px solid ${MINT}`, borderLeft: `6px solid ${TEAL}` }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16, marginTop: 0 }}>Distributor Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <div>
                  <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>DISTRIBUTOR NAME</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginTop: 2 }}>J. C. Thirumurugan</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>AMFI REGISTRATION</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 2 }}>ARN – 26890</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>BRAND NAME</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginTop: 2 }}>MFDThiru</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>EMAIL ADDRESS</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 2 }}>info@mfdthiru.in</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#77827B', fontWeight: 600 }}>WEBSITE</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#303733', marginTop: 2 }}>www.mfdthiru.in</div>
                </div>
              </div>
            </div>

            {/* Grievance Process */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#303733', marginBottom: 20 }}>Grievance Redressal Process</h2>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { step: 1, text: 'Submit your query or grievance by email (info@mfdthiru.in) or through the Contact Us page.' },
                  { step: 2, text: 'We will acknowledge receipt of your communication as soon as reasonably practicable.' },
                  { step: 3, text: 'We will make every reasonable effort to resolve your query or coordinate with the relevant Asset Management Company (AMC), Registrar & Transfer Agent (RTA) or other service provider, wherever applicable.' },
                  { step: 4, text: 'If the matter requires intervention by the AMC or RTA, we will assist you in coordinating the resolution process.' }
                ].map(item => (
                  <div key={item.step} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: '#f8fdf9', borderRadius: 14, border: '1px solid rgba(136,189,164,0.2)', alignItems: 'flex-start' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, flexShrink: 0 }}>
                      {item.step}
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#333D37', margin: 0, fontWeight: 500 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Notice */}
            <div style={{ background: 'rgba(230,242,221,0.4)', borderRadius: 14, padding: '24px', border: '1px solid rgba(136,189,164,0.3)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Scope of Services & Operational Matters</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                MFDThiru acts solely as a Mutual Fund Distributor. Matters relating to scheme operations, NAV declaration, fund management, transaction execution and redemption processing are handled by the respective Asset Management Company and its authorised service providers.
              </p>
            </div>

            {/* Regulatory Escalation */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#303733', marginTop: 0, marginBottom: 10 }}>Regulatory Escalation Mechanism</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#555D58', margin: 0 }}>
                For unresolved grievances, investors may also approach the concerned Asset Management Company, Registrar & Transfer Agent or use the applicable regulatory grievance redressal mechanism available under the Mutual Fund regulatory framework (such as SEBI SCORES portal).
              </p>
            </div>

            {/* Trust Footer */}
            <div style={{ background: TEAL, color: '#fff', borderRadius: 14, padding: '20px 24px', textAlign: 'center', fontSize: 15, fontWeight: 600 }}>
              We value your trust and are committed to supporting you throughout your investment journey.
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
