import { Link } from 'react-router'
import { ArrowRight, Info } from 'lucide-react'
import { SectionBlob } from './WatercolorBg'
import { BackButton } from './BackButton'
import { SEO } from './SEO'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

interface Props {
  title: string
  subtitle: string
  ctaText: string
  ctaLink?: string
  howItWorks: string[]
  disclaimer?: string
  embedded?: boolean
  children: React.ReactNode
}

export function CalculatorLayout({ title, subtitle, ctaText, ctaLink = '/contact', howItWorks, disclaimer, embedded = false, children }: Props) {
  if (embedded) {
    return (
      <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 8px 48px rgba(53,133,142,0.12)', border: '1px solid rgba(136,189,164,0.25)', overflow: 'hidden', backdropFilter: 'blur(8px)' }}>
        {children}
      </div>
    )
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title={`${title} | MFDThiru Mutual Fund Calculators`}
        description={`${subtitle} AMFI-registered Mutual Fund Distributor (ARN 26890) led by J. C. Thirumurugan.`}
      />
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.42)', padding: '40px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BackButton />
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Calculator</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: '#303733', marginBottom: 14, lineHeight: 1.2 }}>{title}</h1>
            <p style={{ fontSize: 17, color: '#555D58', lineHeight: 1.7, maxWidth: 600, margin: '0 auto' }}>{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Calculator Card */}
      <section style={{ padding: '0 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="85%" y="10%" w={340} h={280} color="#B1D3B9" op={0.38} blur={62} r="40% 60% 52% 48% / 56% 42% 60% 40%" />
        <SectionBlob x="-4%" y="40%" w={260} h={220} color="#E6F2DD" op={0.72} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 60%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.82)', borderRadius: 24, boxShadow: '0 8px 48px rgba(53,133,142,0.1)', border: '1px solid rgba(136,189,164,0.22)', overflow: 'hidden', backdropFilter: 'blur(8px)' }}>
            {children}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '48px 24px', background: 'rgba(255,255,255,0.42)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="15%" w={280} h={240} color="#88BDA4" op={0.30} blur={55} r="55% 45% 42% 58% / 42% 58% 40% 60%" />
        <SectionBlob x="88%" y="40%" w={260} h={220} color="#B1D3B9" op={0.38} blur={52} r="40% 60% 58% 42% / 60% 38% 60% 40%" />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#303733', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Info size={22} color={TEAL} /> How This Calculator Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {howItWorks.map((step, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1px solid rgba(136,189,164,0.2)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${MINT})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontSize: 14, color: '#555D58', lineHeight: 1.6, margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 24px', background: 'rgba(230,242,221,0.50)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="10%" w={260} h={220} color="#88BDA4" op={0.32} blur={52} r="56% 44% 42% 58% / 40% 58% 40% 60%" />
        <SectionBlob x="85%" y="20%" w={240} h={200} color="#659287" op={0.18} blur={46} r="40% 60% 56% 44% / 58% 40% 56% 44%" />
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#303733', marginBottom: 12 }}>Ready to Take Action?</h2>
          <p style={{ fontSize: 16, color: '#555D58', marginBottom: 28 }}>Talk to our team and turn these numbers into a real investment plan.</p>
          <Link to={ctaLink} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: 12,
            background: TEAL, color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 700,
            boxShadow: '0 8px 24px rgba(53,133,142,0.3)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
          >
            {ctaText} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Calculator Disclaimer & Regulatory Link */}
      <section style={{ padding: '28px 24px', background: '#f4fbf7', borderTop: '1px solid rgba(136,189,164,0.2)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#4A554F', lineHeight: 1.7, margin: '0 0 12px 0' }}>
            <strong style={{ color: TEAL }}>Mandatory Disclaimer:</strong> {disclaimer || 'This calculator is an educational mathematical illustration based on user-selected inputs and assumptions. It does not constitute financial planning or investment advice, recommend any mutual fund scheme, or guarantee any return or achievement of a goal. Actual results may vary. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.'}
          </p>
          <Link to="/calculator-policy" style={{ fontSize: 13, fontWeight: 700, color: TEAL, textDecoration: 'underline' }}>
            Read Regulatory Basis for Using Calculators (AMFI FAQ 4 & SEBI IA FAQ 19) →
          </Link>
        </div>
      </section>
    </div>
  )
}

export function InputField({ label, value, onChange, min, max, step, format, inputMin, inputMax }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string;
  inputMin?: number; inputMax?: number;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <label style={{ fontSize: 15, fontWeight: 600, color: '#303733' }}>{label}</label>
        <input
          type="number" value={value}
          onChange={e => { const v = Number(e.target.value); if (v >= (inputMin ?? min) && v <= (inputMax ?? max)) onChange(v) }}
          style={{ width: 110, padding: '4px 10px', borderRadius: 8, border: '1px solid rgba(136,189,164,0.4)', fontSize: 14, fontWeight: 700, color: TEAL, textAlign: 'right', outline: 'none', background: '#f9fdf9' }}
        />
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: TEAL, height: 6, cursor: 'pointer' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontSize: 12, color: '#7B827E' }}>{format(min)}</span>
        <span style={{ fontSize: 12, color: '#7B827E' }}>{format(max)}</span>
      </div>
    </div>
  )
}

export function ResultCard({ label, value, color, large }: { label: string; value: string; color?: string; large?: boolean }) {
  return (
    <div style={{ padding: '16px 20px', borderRadius: 14, background: large ? LIGHT : '#f8fdf8', border: large ? `1px solid ${MINT}` : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: '#555D58', fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: large ? 22 : 17, fontWeight: large ? 800 : 700, color: color || (large ? TEAL : '#303733') }}>{value}</span>
    </div>
  )
}
