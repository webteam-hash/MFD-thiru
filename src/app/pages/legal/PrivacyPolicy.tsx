import { Lock, Shield, Mail, Globe, User, CheckCircle2 } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

export function PrivacyPolicy() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fcfdfe', color: '#303733' }}>
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: '#fff', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16, boxShadow: '0 2px 10px rgba(53,133,142,0.1)' }}>
            <Lock size={16} /> Privacy & Data Protection
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.25 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 17, color: '#555D58', maxWidth: 740, margin: '0 auto 20px', lineHeight: 1.6 }}>
            At MFDThiru, we value your privacy and are committed to protecting the confidentiality of your personal information.
          </p>
          <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(53,133,142,0.08)', borderRadius: 12, fontSize: 14, color: TEAL, fontWeight: 600 }}>
            MFDThiru | J. C. Thirumurugan (ARN – 26890)
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section style={{ padding: '48px 24px 80px', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(136,189,164,0.25)', padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 32 }}>
            
            {/* Overview */}
            <div style={{ borderBottom: '1px solid rgba(136,189,164,0.2)', paddingBottom: 24 }}>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: '#333D37', margin: 0 }}>
                MFDThiru is the brand under which mutual fund distribution services are offered by <strong>J. C. Thirumurugan</strong>, an AMFI Registered Mutual Fund Distributor (ARN – 26890).
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#555D58', marginTop: 12, marginBottom: 0 }}>
                This Privacy Policy explains how we collect, use, store and protect the information you provide while accessing our website or availing our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Information We Collect</h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444C47', marginBottom: 14 }}>
                We may collect personal information including, but not limited to:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 18 }}>
                {[
                  'Name', 'Mobile Number', 'Email Address', 'City / State',
                  'PAN (where applicable)', 'Investment-related information',
                  'Voluntary enquiry & form submissions'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#f8fdf9', borderRadius: 10, border: '1px solid rgba(136,189,164,0.2)' }}>
                    <CheckCircle2 size={16} color={TEAL} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#333D37' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#555D58', margin: 0 }}>
                We may also automatically collect technical information such as IP Address, Browser Type, Device Information, Operating System, Website usage statistics, Cookies and similar technologies.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>How We Use Your Information</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Your information may be used to respond to enquiries, facilitate mutual fund investment and related services, complete KYC and regulatory requirements where applicable, share service updates, improve our website and investor experience, and comply with applicable legal and regulatory requirements.
              </p>
            </div>

            {/* Sharing of Information */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Sharing of Information</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                We do not sell, rent or trade your personal information. Information may be shared only where necessary with AMCs, RTAs, KRAs, payment service providers, technology partners supporting our operations, and regulatory or government authorities where required by law.
              </p>
            </div>

            {/* Data Security */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Data Security</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Reasonable administrative, technical and physical safeguards are implemented to protect your personal information. However, no method of electronic transmission or storage is completely secure and absolute security cannot be guaranteed.
              </p>
            </div>

            {/* Cookies */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Cookies</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Our website may use cookies and similar technologies to improve user experience and analyse website usage. You may disable cookies through your browser settings, though some features may not function properly.
              </p>
            </div>

            {/* Third-Party Websites */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Third-Party Websites</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                This website may contain links to third-party websites. MFDThiru and J. C. Thirumurugan are not responsible for their privacy practices or content.
              </p>
            </div>

            {/* Your Consent */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Your Consent</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                By accessing this website or providing your personal information, you consent to this Privacy Policy.
              </p>
            </div>

            {/* Changes to Policy */}
            <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Changes to this Privacy Policy</h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                This Privacy Policy may be updated from time to time. Changes become effective when published on this website.
              </p>
            </div>

            {/* Contact Information & Regulatory Disclosure */}
            <div style={{ background: '#f8fdf9', borderRadius: 16, padding: '28px', border: `1px solid ${MINT}`, borderLeft: `6px solid ${TEAL}` }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Contact Information & Regulatory Details</h2>
              <div style={{ display: 'grid', gap: 10, fontSize: 15, color: '#333D37', marginBottom: 20 }}>
                <div><strong>Distributor:</strong> J. C. Thirumurugan</div>
                <div><strong>AMFI Registration:</strong> AMFI Registered Mutual Fund Distributor (ARN – 26890)</div>
                <div><strong>Brand:</strong> MFDThiru</div>
                <div><strong>Email:</strong> info@mfdthiru.in</div>
                <div><strong>Website:</strong> www.mfdthiru.in</div>
              </div>

              <div style={{ borderTop: '1px solid rgba(53,133,142,0.2)', paddingTop: 16, fontSize: 14, color: '#555D58', lineHeight: 1.6 }}>
                <strong>Regulatory Disclosure:</strong> MFDThiru is the brand name under which mutual fund distribution services are offered by J. C. Thirumurugan, an AMFI Registered Mutual Fund Distributor (ARN – 26890). This website is intended solely to facilitate mutual fund distribution services and provide investor education. Nothing contained on this website shall be construed as investment advice, legal advice or a guarantee of returns. This Privacy Policy should be read together with our Disclaimer and Terms of Use.
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
