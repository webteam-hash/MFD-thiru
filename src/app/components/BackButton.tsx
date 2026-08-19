import { useNavigate } from 'react-router'
import { ArrowLeft } from 'lucide-react'

const TEAL = '#35858E'

interface BackButtonProps {
  /** Optional custom fallback route if there's no history (defaults to '/') */
  fallback?: string
  /** Custom inline style override */
  style?: React.CSSProperties
}

export function BackButton({ fallback = '/', style }: BackButtonProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    // If user has previous navigation history in this tab, go back; otherwise use fallback
    if (window.history.length > 2) {
      navigate(-1)
    } else {
      navigate(fallback)
    }
  }

  return (
    <div style={{ marginBottom: 16, display: 'inline-block', ...style }}>
      <button
        onClick={handleBack}
        aria-label="Go Back"
        title="Go Back"
        style={{
          width: 42,
          height: 42,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          background: 'rgba(255, 255, 255, 0.92)',
          border: '1.5px solid rgba(136, 189, 164, 0.40)',
          color: TEAL,
          cursor: 'pointer',
          boxShadow: '0 3px 12px rgba(53, 133, 142, 0.12)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLElement).style.background = TEAL
          ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateX(-3px)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(53, 133, 142, 0.30)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.92)'
          ;(e.currentTarget as HTMLElement).style.color = TEAL
          ;(e.currentTarget as HTMLElement).style.transform = 'translateX(0)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 3px 12px rgba(53, 133, 142, 0.12)'
        }}
      >
        <ArrowLeft size={20} />
      </button>
    </div>
  )
}
