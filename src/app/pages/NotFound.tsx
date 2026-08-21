import { Link } from 'react-router'
import { SEO } from '../components/SEO'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'

export function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 24px',
    }}>
      <SEO title="Page Not Found | MFDThiru" description="The requested page could not be found." />
      <SectionBlob x="-5%" y="-10%" w={380} h={300} color="#B1D3B9" op={0.4} blur={60} r="50%" />
      <SectionBlob x="85%" y="20%" w={320} h={260} color="#88BDA4" op={0.25} blur={50} r="50%" />

      <div style={{
        maxWidth: 540,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.92)',
        borderRadius: 24,
        padding: '48px 32px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(53, 133, 142, 0.08)',
        border: '1.5px solid rgba(136, 189, 164, 0.3)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: TEAL,
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: '-2px',
        }}>
          404
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#1a2c2e', marginBottom: 12 }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.7, marginBottom: 32 }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 28px',
              borderRadius: 12,
              background: TEAL,
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 700,
              boxShadow: '0 8px 24px rgba(53, 133, 142, 0.28)',
            }}
          >
            Back to Home
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 28px',
              borderRadius: 12,
              background: 'transparent',
              color: TEAL,
              border: `2px solid ${MINT}`,
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
