import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Headphones, Mail, Phone, Globe, MapPin, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react'
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

export function InvestorGrievance() {
  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#303733' }}>
      <SEO
        title="Investor Grievance Redressal | MFDthiru — J. C. Thirumurugan (ARN 26890)"
        description="Investor Grievance Redressal Mechanism, contact details, escalation steps, SCORES and SMART ODR portal links for MFDthiru."
        canonical="/investor-grievance"
      />
      {/* Hero Header */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '72px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.45} blur={68} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 18 }}>
              <Headphones size={15} /> Investor Support & Redressal
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#303733', marginBottom: 20, lineHeight: 1.2 }}>
              Investor Grievance Redressal
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.7 }}>
              Clear escalation matrix, contact details, and resolution process for queries and complaints.
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
            
            {/* Our Commitment */}
            <FadeUp delay={0.05}>
              <div style={{ padding: '24px 28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 10 }}>Our Commitment</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: 0 }}>
                  MFDthiru is committed to providing investors with transparent, fair and timely service. If you have a query, service request or grievance relating to mutual fund investments facilitated through MFDthiru, please contact us using the details below.
                </p>
              </div>
            </FadeUp>

            {/* Distributor and Grievance Contact Details */}
            <FadeUp delay={0.1}>
              <div style={{ padding: '28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 18 }}>Distributor and Grievance Contact Details</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 20 }}>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Distributor Name</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#303733', marginTop: 2 }}>J. C. Thirumurugan</div>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Brand Name</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: TEAL, marginTop: 2 }}>MFDthiru</div>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>AMFI Registration</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#303733', marginTop: 2 }}>ARN 26890</div>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Grievance Contact</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#303733', marginTop: 2 }}>J. C. Thirumurugan</div>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Email</div>
                    <a href="mailto:enquiry@mfdthiru.in" style={{ fontSize: 15, fontWeight: 700, color: TEAL, textDecoration: 'none', marginTop: 2, display: 'block' }}>enquiry@mfdthiru.in</a>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Telephone</div>
                    <a href="tel:+919841026890" style={{ fontSize: 15, fontWeight: 700, color: '#303733', textDecoration: 'none', marginTop: 2, display: 'block' }}>+91 98410 26890</a>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Website</div>
                    <a href="https://www.mfdthiru.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 700, color: TEAL, textDecoration: 'none', marginTop: 2, display: 'block' }}>www.mfdthiru.in</a>
                  </div>
                  <div style={{ padding: '12px 16px', background: '#ffffff', borderRadius: 12, border: '1px solid rgba(136,189,164,0.25)' }}>
                    <div style={{ fontSize: 12, color: '#7B827E', fontWeight: 600, textTransform: 'uppercase' }}>Location</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#303733', marginTop: 2 }}>Chennai, Tamil Nadu</div>
                  </div>
                </div>

                <div style={{ padding: '14px 18px', borderRadius: 12, background: 'rgba(230,242,221,0.6)', border: '1px solid rgba(136,189,164,0.3)', fontSize: 13.5, color: '#444C47', lineHeight: 1.6 }}>
                  <strong>Information to provide:</strong> Please include your name, registered mobile number, PAN or folio number, concerned mutual fund or AMC, transaction reference and a brief description of the issue. Do not share passwords, OTPs, PINs or other confidential authentication details.
                </div>
              </div>
            </FadeUp>

            {/* Grievance Redressal Process Steps */}
            <FadeUp delay={0.15}>
              <div style={{ padding: '28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 18 }}>Grievance Redressal Process</h3>
                
                <div style={{ display: 'grid', gap: 16 }}>
                  <div style={{ padding: '16px 20px', borderRadius: 14, background: '#ffffff', border: '1px solid rgba(136,189,164,0.22)' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', marginBottom: 4 }}>Step 1: Contact MFDthiru</div>
                    <p style={{ fontSize: 15, color: '#444C47', margin: 0, lineHeight: 1.65 }}>
                      Submit your grievance by email, telephone or through the Contact Us page. We will acknowledge the communication within a reasonable period and review the information provided.
                    </p>
                  </div>

                  <div style={{ padding: '16px 20px', borderRadius: 14, background: '#ffffff', border: '1px solid rgba(136,189,164,0.22)' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', marginBottom: 4 }}>Step 2: Review and Coordination</div>
                    <p style={{ fontSize: 15, color: '#444C47', margin: 0, lineHeight: 1.65 }}>
                      Where the matter falls within MFDthiru's mutual fund distribution or servicing activities, we will make reasonable efforts to address it directly. Where it relates to an AMC, RTA or another authorised service provider, we will assist in coordinating with the relevant organisation.
                    </p>
                  </div>

                  <div style={{ padding: '16px 20px', borderRadius: 14, background: '#ffffff', border: '1px solid rgba(136,189,164,0.22)' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', marginBottom: 4 }}>Step 3: Escalation to the AMC or RTA</div>
                    <p style={{ fontSize: 15, color: '#444C47', margin: 0, lineHeight: 1.65 }}>
                      If the grievance cannot be resolved directly by MFDthiru, the investor may approach the concerned Asset Management Company or its Registrar and Transfer Agent through the grievance details on their official website or in the relevant scheme documents.
                    </p>
                  </div>

                  <div style={{ padding: '16px 20px', borderRadius: 14, background: '#ffffff', border: '1px solid rgba(136,189,164,0.22)' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', marginBottom: 4 }}>Step 4: SEBI SCORES</div>
                    <p style={{ fontSize: 15, color: '#444C47', margin: '0 0 8px 0', lineHeight: 1.65 }}>
                      If the grievance remains unresolved after approaching the concerned intermediary, AMC or RTA, the investor may lodge a complaint through the SEBI Complaints Redress System.
                    </p>
                    <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: TEAL, textDecoration: 'underline' }}>
                      SCORES Portal: https://scores.sebi.gov.in/ <ExternalLink size={14} />
                    </a>
                    <span style={{ fontSize: 13, color: '#7B827E', display: 'block', marginTop: 4 }}>
                      * Investors should retain copies of previous correspondence and supporting documents for submission through the portal.
                    </span>
                  </div>

                  <div style={{ padding: '16px 20px', borderRadius: 14, background: '#ffffff', border: '1px solid rgba(136,189,164,0.22)' }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: TEAL, textTransform: 'uppercase', marginBottom: 4 }}>Step 5: SMART ODR</div>
                    <p style={{ fontSize: 15, color: '#444C47', margin: '0 0 8px 0', lineHeight: 1.65 }}>
                      After exhausting the available grievance-redressal process, an eligible investor may initiate online dispute resolution through the SMART ODR Portal in accordance with the applicable SEBI framework.
                    </p>
                    <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: TEAL, textDecoration: 'underline' }}>
                      SMART ODR Portal: https://smartodr.in/ <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Scope of MFDthiru's Responsibility */}
            <FadeUp delay={0.2}>
              <div style={{ padding: '28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${MINT}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>Scope of MFDthiru's Responsibility</h3>
                <p style={{ fontSize: 16, lineHeight: 1.85, color: '#444C47', margin: '0 0 12px 0' }}>
                  MFDthiru acts as an AMFI-registered Mutual Fund Distributor. MFDthiru does not manage mutual fund schemes, declare Net Asset Values, hold investor funds or securities, or control transaction processing by AMCs, RTAs, banks, exchanges or payment-service providers.
                </p>
                <p style={{ fontSize: 15.5, fontWeight: 600, color: '#303733', margin: '0 0 8px 0' }}>
                  The following matters are generally handled by the respective AMC, RTA or authorised service provider:
                </p>
                <ul style={{ margin: '0 0 14px 0', paddingLeft: 20, fontSize: 15.5, color: '#444C47', lineHeight: 1.85 }}>
                  <li>Allotment or rejection of mutual fund units and application of NAV or transaction cut-off time.</li>
                  <li>SIP registration, modification or cancellation; redemption and payment processing.</li>
                  <li>Statements, nominations, transmission, changes to investor details and KYC validation.</li>
                  <li>Scheme management, portfolio decisions and investment performance.</li>
                </ul>
                <p style={{ fontSize: 15, color: TEAL, fontWeight: 600, margin: 0 }}>
                  MFDthiru will nevertheless provide reasonable assistance in coordinating with the concerned organisation wherever the investment was facilitated or serviced through MFDthiru.
                </p>
              </div>
            </FadeUp>

            {/* Investor Responsibilities */}
            <FadeUp delay={0.25}>
              <div style={{ padding: '28px', background: '#F8FDF9', borderRadius: 18, borderLeft: `5px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 12 }}>Investor Responsibilities</h3>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15.5, color: '#444C47', lineHeight: 1.85 }}>
                  <li>Provide complete and accurate information and quote the relevant folio and transaction details.</li>
                  <li>Attach supporting documents where required and use only official communication channels.</li>
                  <li>Never share passwords, OTPs, PINs or login credentials.</li>
                  <li>Allow the concerned organisation reasonable time to investigate and respond.</li>
                </ul>
              </div>
            </FadeUp>

            {/* Regulatory Disclosure Banner */}
            <FadeUp delay={0.3}>
              <div style={{
                background: `linear-gradient(135deg, ${TEAL}, #1e4a4f)`,
                borderRadius: 18, padding: '28px 32px', color: '#ffffff', textAlign: 'left', marginTop: 12,
                boxShadow: '0 8px 24px rgba(53,133,142,0.2)'
              }}>
                <p style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px 0', color: MINT }}>
                  Regulatory Disclosure
                </p>
                <p style={{ fontSize: 14.5, fontWeight: 500, margin: '0 0 10px 0', lineHeight: 1.7 }}>
                  MFDthiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-registered Mutual Fund Distributor - ARN 26890. MFDthiru is not a SEBI-registered Investment Adviser.
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.65, color: '#e0f0f2' }}>
                  Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing.
                </p>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>
    </div>
  )
}
