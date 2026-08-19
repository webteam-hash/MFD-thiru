import { Outlet, useLocation } from 'react-router'
import { useEffect, Suspense } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingButtons } from './FloatingButtons'
import { WatercolorBg } from './WatercolorBg'

const TEAL = '#35858E'

function PageFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        border: '3px solid rgba(136, 189, 164, 0.25)',
        borderTopColor: TEAL,
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', background: '#fff' }}>
      {/* Global watercolor sage background — fixed, behind everything */}
      <WatercolorBg />

      {/* All content sits above the watercolor layer */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: 84 }}>
          <Suspense fallback={<PageFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  )
}
