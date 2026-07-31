import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingButtons } from './FloatingButtons'
import { WatercolorBg } from './WatercolorBg'

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
        <main style={{ flex: 1, paddingTop: 70 }}>
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  )
}
