import { Component, ReactNode, ErrorInfo } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

const TEAL = '#35858E'
const MINT = '#88BDA4'

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[MFDThiru App Error]:', error, errorInfo)
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F9FBF8 0%, #E6F2DD 100%)',
          padding: '24px',
          fontFamily: 'Manrope, system-ui, sans-serif',
        }}>
          <div style={{
            maxWidth: 520,
            width: '100%',
            background: '#ffffff',
            borderRadius: 24,
            padding: '40px 32px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(53, 133, 142, 0.08)',
            border: '1px solid rgba(136, 189, 164, 0.3)',
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(53, 133, 142, 0.1)',
              color: TEAL,
              fontSize: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              ⚠️
            </div>

            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#1a2c2e', marginBottom: 12 }}>
              Something went wrong
            </h2>

            <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.6, marginBottom: 28 }}>
              The application encountered a temporary loading error. This can happen when a new update is released or connection drops.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReload}
                style={{
                  padding: '12px 24px',
                  borderRadius: 12,
                  background: TEAL,
                  color: '#ffffff',
                  border: 'none',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(53, 133, 142, 0.25)',
                }}
              >
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                style={{
                  padding: '12px 24px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: TEAL,
                  border: `2px solid ${MINT}`,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Go to Home
              </button>
            </div>

            {this.state.error?.message && (
              <details style={{ marginTop: 24, textAlign: 'left', background: '#F5F7F5', padding: 12, borderRadius: 8, fontSize: 12, color: '#777' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Technical Error Details</summary>
                <p style={{ marginTop: 8, fontFamily: 'monospace', wordBreak: 'break-all' }}>
                  {this.state.error.message}
                </p>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
