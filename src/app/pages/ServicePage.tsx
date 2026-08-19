import { BackButton } from '../components/BackButton'
import { SectionBlob } from '../components/WatercolorBg'
import { SEO } from '../components/SEO'

interface ServicePageProps {
  title: string
  subtitle?: string
  path: string
}

export function ServicePage({ title, subtitle = 'Service details and content coming soon.', path }: ServicePageProps) {
  return (
    <div style={{ overflowX: 'hidden', minHeight: '70vh' }}>
      <SEO title={`${title} | MFDThiru Services`} canonical={path} />
      <section style={{ background: 'rgba(230,242,221,0.42)', padding: '48px 24px 72px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.42} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={320} h={260} color="#88BDA4" op={0.28} blur={58} r="40% 60% 56% 44% / 56% 40% 60% 40%" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BackButton />
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <span style={{ display: 'inline-block', padding: '5px 16px', borderRadius: 20, background: '#E6F2DD', color: '#35858E', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14 }}>
              Our Services
            </span>
            <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', fontWeight: 800, color: '#303733', marginBottom: 14, lineHeight: 1.2 }}>
              {title}
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', maxWidth: 600, margin: '0 auto' }}>
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px 96px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '56px 36px',
          borderRadius: 24,
          background: 'rgba(255,255,255,0.9)',
          border: '1.5px dashed rgba(136,189,164,0.4)',
          boxShadow: '0 8px 32px rgba(53,133,142,0.05)',
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#35858E', marginBottom: 8 }}>
            Content Coming Soon
          </h3>
          <p style={{ fontSize: 15, color: '#555D58', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Detailed information for <strong>{title}</strong> will be updated here shortly.
          </p>
        </div>
      </section>
    </div>
  )
}
