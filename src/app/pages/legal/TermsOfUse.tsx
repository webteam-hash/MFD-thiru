import { FileCheck, Shield, Scale, MapPin } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

export function TermsOfUse() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fcfdfe', color: '#303733' }}>
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: '#fff', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16, boxShadow: '0 2px 10px rgba(53,133,142,0.1)' }}>
            <FileCheck size={16} /> Terms & Conditions
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.25 }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: 17, color: '#555D58', maxWidth: 740, margin: '0 auto 20px', lineHeight: 1.6 }}>
            Terms and conditions governing your access and usage of the MFDThiru website and services.
          </p>
          <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(53,133,142,0.08)', borderRadius: 12, fontSize: 14, color: TEAL, fontWeight: 600 }}>
            MFDThiru | J. C. Thirumurugan (ARN – 26890)
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section style={{ padding: '48px 24px 80px', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(136,189,164,0.25)', padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 24 }}>
            
            {/* Overview */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>1. Brand Registration & Distributor Scope</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                MFDThiru is the brand name under which mutual fund distribution services are offered by <strong>J. C. Thirumurugan</strong>, AMFI Registered Mutual Fund Distributor (ARN – 26890).
              </p>
            </div>

            {/* Content Scope */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>2. Website Content & Investor Education</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                The content on this website is provided for general information and investor education only. It should not be construed as investment, legal, tax or financial advice, or as a recommendation to invest in any specific mutual fund scheme or financial product.
              </p>
            </div>

            {/* Investor Responsibility */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>3. Investor Responsibility</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Investment decisions should be made after considering your financial goals, investment horizon and risk appetite. Investors are advised to read all scheme-related documents carefully before investing.
              </p>
            </div>

            {/* Intellectual Property */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>4. Intellectual Property Rights</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                All content, text, graphics, logos and other materials on this website are the property of MFDThiru or are used with appropriate permission. They may not be copied, reproduced or distributed without prior written consent.
              </p>
            </div>

            {/* Third-Party Links */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>5. Third-Party Links</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                This website may contain links to third-party websites. We do not control or endorse their content, products or privacy practices and shall not be responsible for them.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>6. Limitation of Liability</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                While reasonable care has been taken to ensure the accuracy of the information on this website, J. C. Thirumurugan and MFDThiru shall not be liable for any direct or indirect loss arising from the use of this website or reliance on its contents.
              </p>
            </div>

            {/* Modifications */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>7. Modifications</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                These Terms of Use may be amended at any time without prior notice. Continued use of the website constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>8. Governing Law & Jurisdiction</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                These Terms of Use shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>
            </div>

            {/* Mandatory Risk Warning */}
            <div style={{
              background: 'linear-gradient(135deg, #1e4a4f, #35858E)',
              borderRadius: 14, padding: '24px', color: '#fff', textAlign: 'center', marginTop: 12
            }}>
              <p style={{ fontSize: 16, fontWeight: 700, margin: 0, lineHeight: 1.6 }}>
                Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
