import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Lock, Shield, Mail, Globe, User, CheckCircle2 } from 'lucide-react'
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

export function PrivacyPolicy() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Lock size={15} /> Privacy & Data Protection
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              At MFDThiru, we value your privacy and are committed to protecting the confidentiality of your personal information.
            </p>
            <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255,255,255,0.9)', borderRadius: 14, fontSize: 14, color: TEAL, fontWeight: 700, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              MFDThiru &nbsp;|&nbsp; J. C. Thirumurugan (ARN 26890)
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
            
            {/* Overview */}
            <FadeUp delay={0.1}>
              <div style={{ borderBottom: '1px solid rgba(136,189,164,0.2)', paddingBottom: 28 }}>
                <p style={{ fontSize: 17, lineHeight: 1.85, color: '#333D37', margin: 0 }}>
                  MFDThiru is the brand under which mutual fund distribution services are offered by <strong>J. C. Thirumurugan</strong>, an AMFI Registered Mutual Fund Distributor (ARN 26890).
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#555D58', marginTop: 14, marginBottom: 0 }}>
                  This Privacy Policy explains how we collect, use, store and protect the information you provide while accessing our website or availing our services.
                </p>
              </div>
            </FadeUp>

            {/* Information We Collect */}
            <FadeUp delay={0.15}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 18 }}>Information We Collect</h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444C47', marginBottom: 18 }}>
                  We may collect personal information including, but not limited to:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 20 }}>
                  {[
                    'Name', 'Mobile Number', 'Email Address', 'City / State',
                    'PAN (where applicable)', 'Investment-related information',
                    'Voluntary enquiry & form submissions'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#F8FDF9', borderRadius: 12, border: '1px solid rgba(136,189,164,0.2)' }}>
                      <CheckCircle2 size={18} color={TEAL} />
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#333D37' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#555D58', margin: 0 }}>
                  We may also automatically collect technical information such as IP Address, Browser Type, Device Information, Operating System, Website usage statistics, Cookies and similar technologies.
                </p>
              </div>
            </FadeUp>

            {/* How We Use Your Information */}
            <FadeUp delay={0.2}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>How We Use Your Information</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Your information may be used to respond to enquiries, facilitate mutual fund investment and related services, complete KYC and regulatory requirements where applicable, share service updates, improve our website and investor experience, and comply with applicable legal and regulatory requirements.
                </p>
              </div>
            </FadeUp>

            {/* Sharing of Information */}
            <FadeUp delay={0.25}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Sharing of Information</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  We do not sell, rent or trade your personal information. Information may be shared only where necessary with AMCs, RTAs, KRAs, payment service providers, technology partners supporting our operations, and regulatory or government authorities where required by law.
                </p>
              </div>
            </FadeUp>

            {/* Data Security */}
            <FadeUp delay={0.3}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Data Security</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Reasonable administrative, technical and physical safeguards are implemented to protect your personal information. However, no method of electronic transmission or storage is completely secure and absolute security cannot be guaranteed.
                </p>
              </div>
            </FadeUp>

            {/* Cookies */}
            <FadeUp delay={0.35}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Cookies</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  Our website may use cookies and similar technologies to improve user experience and analyse website usage. You may disable cookies through your browser settings, though some features may not function properly.
                </p>
              </div>
            </FadeUp>

            {/* Third-Party Websites */}
            <FadeUp delay={0.4}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Third-Party Websites</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  This website may contain links to third-party websites. MFDThiru and J. C. Thirumurugan are not responsible for their privacy practices or content.
                </p>
              </div>
            </FadeUp>

            {/* Your Consent */}
            <FadeUp delay={0.45}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Your Consent</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  By accessing this website or providing your personal information, you consent to this Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* Changes to Policy */}
            <FadeUp delay={0.5}>
              <div style={{ borderTop: '1px solid rgba(136,189,164,0.2)', paddingTop: 28 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 16 }}>Changes to this Privacy Policy</h2>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  This Privacy Policy may be updated from time to time. Changes become effective when published on this website.
                </p>
              </div>
            </FadeUp>

            {/* Contact Information & Regulatory Disclosure */}
            <FadeUp delay={0.55}>
              <div style={{ background: '#F8FDF9', borderRadius: 20, padding: '32px 36px', border: `1px solid ${MINT}`, borderLeft: `6px solid ${TEAL}` }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: TEAL, marginBottom: 18, marginTop: 0 }}>Contact Information & Regulatory Details</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, fontSize: 15, color: '#333D37', marginBottom: 24 }}>
                  <div><strong>Distributor:</strong> J. C. Thirumurugan</div>
                  <div><strong>AMFI Registration:</strong> ARN 26890</div>
                  <div><strong>Registered Business Name:</strong> MFDThiru / J. C. Thirumurugan</div>
                  <div><strong>Email:</strong> <a href="mailto:enquiry@wcms.in" style={{ color: TEAL, textDecoration: 'none', fontWeight: 600 }}>enquiry@wcms.in</a></div>
                </div>

                <div style={{ marginTop: 24, padding: '16px 20px', borderRadius: 12, background: 'rgba(230,242,221,0.5)', border: '1px solid rgba(136,189,164,0.3)', fontSize: 13.5, color: '#4E5652', lineHeight: 1.7 }}>
                  <strong>Regulatory Disclosure:</strong> MFDThiru is the brand name under which mutual fund distribution services are offered by J. C. Thirumurugan, an AMFI Registered Mutual Fund Distributor (ARN 26890). This website is intended solely to facilitate mutual fund distribution services and provide investor education. Nothing contained on this website shall be construed as investment advice, legal advice or a guarantee of returns. This Privacy Policy should be read together with our Disclaimer and Terms of Use.
                </div>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
