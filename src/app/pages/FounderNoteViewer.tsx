import { SEO } from '../components/SEO'
import { BackButton } from '../components/BackButton'
import { Download, Quote, ShieldAlert } from 'lucide-react'

const TEAL = '#35858E'
const MINT = '#88BDA4'

export function FounderNoteViewer() {
  const handleDownload = async () => {
    try {
      const res = await fetch('/A_Note_From_The_Founder.pdf')
      if (!res.ok) throw new Error('Fetch failed')
      const blob = await res.blob()
      const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }))
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'A_Note_From_The_Founder_MFDthiru.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000)
    } catch {
      window.open('/A_Note_From_The_Founder.pdf', '_blank')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #F4F8F5 0%, #FAFCFA 100%)', padding: '36px 20px 80px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <SEO
        title="A Note From The Founder | MFDthiru"
        description="Read A Note From The Founder J. C. Thirumurugan — What Two Decades with Investors Have Taught Me About Money."
        canonical="/founders-note"
      />

      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        
        {/* Top Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <BackButton fallback="/about" />

          <button
            onClick={handleDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 22px',
              borderRadius: 12,
              background: TEAL,
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(53,133,142,0.25)'
            }}
          >
            <Download size={16} /> Download PDF
          </button>
        </div>

        <article style={{
          background: '#ffffff',
          borderRadius: 24,
          padding: '56px 48px',
          border: '1px solid rgba(136,189,164,0.35)',
          boxShadow: '0 16px 48px rgba(53,133,142,0.07)',
          color: '#2E3632',
          lineHeight: 1.85,
          fontSize: 17
        }}>
            
            {/* Header / Meta */}
            <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(136,189,164,0.25)', paddingBottom: 36, marginBottom: 40 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: TEAL, letterSpacing: '1.8px', textTransform: 'uppercase' }}>MFDthiru • Investor Education & Reflection</span>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, color: '#232926', margin: '12px 0 8px 0', lineHeight: 1.2 }}>
                A NOTE FROM THE FOUNDER
              </h1>
              <p style={{ fontSize: 18, fontWeight: 600, color: TEAL, margin: 0, fontStyle: 'italic' }}>
                "What Two Decades with Investors Have Taught Me About Money"
              </p>

              {/* Callout Box Header */}
              <div style={{
                marginTop: 24,
                padding: '16px 24px',
                borderRadius: 14,
                background: 'rgba(230,242,221,0.6)',
                borderLeft: `4px solid ${TEAL}`,
                fontSize: 16,
                fontWeight: 700,
                color: '#232926',
                display: 'inline-block'
              }}>
                💡 Money Saved Today Is Wealth Created for Your Future.
              </div>

              <div style={{ marginTop: 20, fontSize: 15, fontWeight: 700, color: '#3A4440' }}>
                J. C. Thirumurugan — <span style={{ color: TEAL, fontWeight: 600 }}>Founder, MFDthiru</span>
              </div>
            </div>

            {/* Section 1 */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16 }}>
                What Experience Has Taught Me
              </h2>
              <p style={{ margin: '0 0 16px 0' }}>
                For more than two decades, I have had the opportunity to interact with investors across generations, income levels and different stages of life. During this journey, one thing has become increasingly clear to me:
              </p>

              <div style={{ padding: '18px 24px', background: 'linear-gradient(135deg, rgba(53,133,142,0.06), rgba(136,189,164,0.12))', borderRadius: 14, borderLeft: `4px solid ${TEAL}`, fontWeight: 700, color: '#232926', margin: '20px 0' }}>
                "Most people know they need to save and invest. The real challenge is starting, staying disciplined and making financial decisions at the right time."
              </div>

              <p style={{ margin: '0 0 20px 0' }}>
                I have seen people postpone investing while waiting for a better salary, a better market or simply a better time. But our financial goals do not wait with us. Children's education, retirement and other important responsibilities continue to move closer.
              </p>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: '28px 0 12px 0' }}>
                Save First. Spend Next.
              </h3>
              <p style={{ margin: '0 0 16px 0' }}>
                Income gives us the ability to live today. What we consistently set aside gives us the ability to prepare for tomorrow.
              </p>

              <div style={{ padding: '14px 22px', background: 'rgba(230,242,221,0.7)', borderRadius: 12, fontWeight: 800, color: TEAL, display: 'inline-block', marginBottom: 16 }}>
                Earning – Saving = Spending
              </div>

              <p style={{ margin: 0 }}>
                I prefer this to the conventional approach of spending first and saving whatever remains. Save for your future first, and then plan your spending with what remains. It sounds simple, but over the years I have seen how strongly this behavioural change can influence a person's long-term financial journey.
              </p>
            </section>

            {/* Section 2 */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16 }}>
                Today Is Yesterday's Tomorrow
              </h2>
              <p style={{ margin: '0 0 16px 0' }}>
                We often tell ourselves: <em>"I will start next month"</em>, <em>"I will invest when my income increases"</em>, or <em>"I will start when the market is better."</em> But today is the "tomorrow" we spoke about yesterday.
              </p>

              <p style={{ margin: '0 0 16px 0' }}>
                The cost of waiting is rarely visible immediately. Repeatedly postponing long-term investing can mean losing valuable time for compounding.
              </p>

              <div style={{ padding: '16px 24px', background: '#F8FDF9', borderRadius: 14, borderLeft: `4px solid ${MINT}`, fontWeight: 700, color: '#232926', margin: '20px 0' }}>
                ⏳ Money can be earned again. Time cannot.
              </div>
            </section>

            {/* Section 3 */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16 }}>
                What I Have Observed in Financial Behaviour
              </h2>
              
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: '0 0 12px 0' }}>
                We Commit to EMIs Easily. Why Not to Our Future?
              </h3>
              <p style={{ margin: '0 0 16px 0' }}>
                We are often comfortable committing tomorrow's income today through an EMI — for a car, gadget, holiday or lifestyle upgrade. Immediate gratification makes that decision easier. Yet, when it comes to committing a smaller amount towards a financial goal 10 or 20 years away, we often say, <em>"I will start later."</em>
              </p>

              <p style={{ margin: '0 0 16px 0' }}>
                There is nothing inherently wrong with borrowing. A home, education, business or productive asset may justify the use of credit. The more useful question is whether we are building assets through our commitments or simply bringing tomorrow's consumption into today.
              </p>

              <div style={{ padding: '16px 24px', background: 'rgba(230,242,221,0.6)', borderRadius: 14, borderLeft: `4px solid ${TEAL}`, fontWeight: 700, color: '#232926', margin: '20px 0' }}>
                🎯 Less Unnecessary Debt = Greater Financial Freedom
              </div>

              <p style={{ margin: '0 0 28px 0' }}>
                Before taking an EMI, I believe we should ask: <em>"Am I creating an asset or simply satisfying an immediate desire?"</em>
              </p>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: '0 0 12px 0' }}>
                Do Not Let Someone Else's Lifestyle Decide Yours
              </h3>
              <p style={{ margin: '0 0 16px 0' }}>
                Peer pressure has become a powerful influence on financial behaviour. Someone buys a bigger car, upgrades a home or takes an expensive holiday. Social media continuously shows us what others are buying and enjoying. What we do not see are their liabilities, responsibilities, savings or financial preparedness.
              </p>

              <div style={{ padding: '16px 24px', background: 'linear-gradient(135deg, rgba(53,133,142,0.06), rgba(136,189,164,0.12))', borderRadius: 14, borderLeft: `4px solid ${TEAL}`, fontWeight: 700, color: '#232926', margin: '20px 0' }}>
                Your financial journey should be driven by your goals — not someone else's lifestyle.
              </div>

              <p style={{ margin: 0 }}>
                You do not have to prove your success through spending. Sometimes, the wealth you quietly build for your future may be far more important than the lifestyle you display today.
              </p>
            </section>

            {/* Section 4 */}
            <section style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16 }}>
                What Investors Often Miss
              </h2>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: '0 0 12px 0' }}>
                Markets Test Behaviour More Than Knowledge
              </h3>
              <p style={{ margin: '0 0 16px 0' }}>
                I have seen investors become enthusiastic when markets are rising and anxious when markets fall. One common mistake is to stop an ongoing SIP or redeem a long-term investment merely because markets have fallen.
              </p>

              <p style={{ margin: '0 0 16px 0' }}>
                Predicting both the right time to exit and the right time to re-enter is extremely difficult. An SIP invests systematically across market conditions; the same amount generally buys more units when prices decline and fewer when prices rise.
              </p>

              <div style={{ padding: '16px 24px', background: 'rgba(230,242,221,0.6)', borderRadius: 14, borderLeft: `4px solid ${TEAL}`, fontWeight: 700, color: '#232926', margin: '20px 0' }}>
                📈 Invest by plan, not by market prediction. Markets will move. Your goals remain.
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: '28px 0 12px 0' }}>
                What Long-Term Investors Have Taught Me
              </h3>
              <p style={{ margin: 0 }}>
                Investors who remain committed to their long-term financial journey are not necessarily those who predict markets correctly. They are often the ones who start early, save consistently, invest with discipline, review periodically and give their investments sufficient time.
              </p>
            </section>

            {/* Section 5 & Closing */}
            <section style={{ borderTop: '1px solid rgba(136,189,164,0.25)', paddingTop: 36, marginTop: 40 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 16 }}>
                Three Questions Worth Asking
              </h2>

              <div style={{ background: '#F8FDF9', padding: '20px 24px', borderRadius: 16, border: '1px solid rgba(136,189,164,0.3)', marginBottom: 28 }}>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10, fontWeight: 600, color: '#232926' }}>
                  <li>Am I saving before I spend?</li>
                  <li>Am I building assets as consciously as I am creating expenses?</li>
                  <li>Am I giving tomorrow's goals enough importance in today's financial decisions?</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center', padding: '24px', background: 'linear-gradient(135deg, rgba(230,242,221,0.85), rgba(210,235,220,0.85))', borderRadius: 18, border: '1px solid rgba(136,189,164,0.4)', margin: '28px 0' }}>
                <Quote size={24} color={TEAL} style={{ marginBottom: 8 }} />
                <p style={{ fontSize: 18, fontWeight: 800, color: TEAL, margin: '0 0 6px 0' }}>
                  Save before you spend. | Build assets before lifestyle.
                </p>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#303733', margin: 0 }}>
                  Do not let today's wants compromise tomorrow's goals.
                </p>
              </div>

              {/* Author Signature */}
              <div style={{ marginTop: 36, textAlign: 'right' }}>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: '#232926', margin: 0 }}>J. C. Thirumurugan</h4>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEAL, margin: '4px 0 0 0' }}>Founder — MFDthiru</p>
              </div>

              {/* Statutory Disclaimer */}
              <div style={{ marginTop: 40, padding: '16px 20px', borderRadius: 12, background: 'rgba(245,247,246,0.9)', fontSize: 12.5, color: '#66706B', lineHeight: 1.6, border: '1px solid rgba(136,189,164,0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#303733', marginBottom: 4 }}>
                  <ShieldAlert size={14} color={TEAL} /> Important Disclaimer:
                </div>
                This note reflects general observations and is intended for investor education and awareness. It should not be construed as investment advice, a recommendation, or an assurance of returns. Mutual fund investments are subject to market risks. Read all scheme related documents carefully. Past performance may or may not be sustained in the future.
              </div>
            </section>

          </article>

      </div>
    </div>
  )
}
