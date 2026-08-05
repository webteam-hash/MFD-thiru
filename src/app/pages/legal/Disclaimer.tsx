import { ShieldAlert, Info, CheckCircle, Scale } from 'lucide-react'
import { SectionBlob } from '../../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

export function Disclaimer() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fcfdfe', color: '#303733' }}>
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.45)', padding: '64px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: '#fff', color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16, boxShadow: '0 2px 10px rgba(53,133,142,0.1)' }}>
            <ShieldAlert size={16} /> Statutory Disclosure
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.25 }}>
            Disclaimer
          </h1>
          <p style={{ fontSize: 17, color: '#555D58', maxWidth: 740, margin: '0 auto 20px', lineHeight: 1.6 }}>
            Important disclosures regarding website content, distribution services, and market risks.
          </p>
          <div style={{ display: 'inline-block', padding: '8px 18px', background: 'rgba(53,133,142,0.08)', borderRadius: 12, fontSize: 14, color: TEAL, fontWeight: 600 }}>
            J. C. Thirumurugan | AMFI Registered Mutual Fund Distributor (ARN – 26890)
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section style={{ padding: '48px 24px 80px', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(136,189,164,0.25)', padding: '36px', boxShadow: '0 4px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 24 }}>
            
            {/* Paragraph 1 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>1. General Informational & Educational Purpose</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                The information provided on this website is intended solely for general informational and educational purposes and should not be construed as investment, legal, tax or financial advice.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>2. Distributor Registration & AMC Partnerships</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                MFDThiru is an AMFI Registered Mutual Fund Distributor (ARN – 26890) and facilitates the distribution of mutual fund products offered by various Asset Management Companies (AMCs). The information, illustrations and opinions presented on this website are based on sources believed to be reliable; however, no representation or warranty, express or implied, is made regarding their accuracy, completeness or suitability.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>3. Market Risks & Professional Advice</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Mutual fund investments are subject to market risks. The value of investments may fluctuate, and past performance is not indicative of future results. Investors are advised to read all scheme-related documents carefully, evaluate their financial objectives, risk appetite and investment horizon, and seek independent professional advice where appropriate before making any investment decision.
              </p>
            </div>

            {/* Paragraph 4 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>4. No Assurance of Returns</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                Nothing contained on this website should be interpreted as a guarantee, assurance or promise of returns. Investment decisions are solely the responsibility of the investor.
              </p>
            </div>

            {/* Paragraph 5 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>5. Limitation of Liability</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                While every reasonable effort is made to keep the information on this website accurate and up to date, MFDThiru shall not be liable for any loss or damage arising directly or indirectly from the use of, or reliance on, the information, tools, calculators or materials available on this website.
              </p>
            </div>

            {/* Paragraph 6 */}
            <div style={{ padding: '20px', background: '#f8fdf9', borderRadius: 12, borderLeft: `4px solid ${MINT}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: TEAL, marginTop: 0, marginBottom: 8 }}>6. User Acknowledgement</h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#444C47', margin: 0 }}>
                By accessing and using this website, you acknowledge that you have read, understood and agreed to this Disclaimer.
              </p>
            </div>

            {/* Statutory Banner */}
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
