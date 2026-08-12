import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import logoImg from '../../imports/mfd_thiru_logo.png'

const serviceLinks = [
  { label: 'Retirement Corpus', path: '/calculators/retirement' },
  { label: 'Cash Flow', path: '/calculators/cash-flow' },
  { label: "Children's Educational Planning", path: '/calculators/education' },
  { label: 'Goal-Based Mutual Fund Planning', path: '/calculators/goal-based' },
  { label: 'Systematic Investment Planning [SIP]', path: '/calculators/sip' },
  { label: 'Lump Sums', path: '/calculators/lump-sum' },
  { label: 'Personal Plans', path: '/calculators/flexible' },
]

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (path: string) => location.pathname === path
  const isServicesActive = serviceLinks.some(s => location.pathname === s.path)

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255,255,255,0.92)' : '#fff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(53,133,142,0.10)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(136,189,164,0.25)' : '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 120 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoImg}
              alt="MFD Thiru Logo"
              style={{ height: 110, width: 'auto', objectFit: 'contain', display: 'block', transform: 'scale(1.15)', transformOrigin: 'left center' }}
            />
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden lg:flex">
            {navLinks.slice(0, 2).map(link => (
              <Link key={link.path} to={link.path} style={{
                padding: '8px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 500,
                color: isActive(link.path) ? '#35858E' : '#303733',
                background: isActive(link.path) ? '#E6F2DD' : 'transparent',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.background = '#f5faf5' }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.background = 'transparent' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Our Services Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 4, padding: '8px 16px', borderRadius: 8,
                  border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 500,
                  color: isServicesActive ? '#35858E' : '#303733',
                  background: isServicesActive ? '#E6F2DD' : 'transparent',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { if (!isServicesActive) (e.currentTarget as HTMLElement).style.background = '#f5faf5' }}
                onMouseLeave={e => { if (!isServicesActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                Our Services
                <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)',
                      width: 320, background: '#fff', borderRadius: 16, padding: 8,
                      boxShadow: '0 12px 40px rgba(53,133,142,0.18)', border: '1px solid rgba(136,189,164,0.3)',
                      zIndex: 110,
                    }}
                  >
                    {serviceLinks.map(link => (
                      <Link key={link.path} to={link.path} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 14px', borderRadius: 10, textDecoration: 'none',
                        color: location.pathname === link.path ? '#35858E' : '#303733',
                        background: location.pathname === link.path ? '#E6F2DD' : 'transparent',
                        fontSize: 14, fontWeight: 500, transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#E6F2DD'; (e.currentTarget as HTMLElement).style.color = '#35858E' }}
                        onMouseLeave={e => {
                          const isCurrent = location.pathname === link.path
                          ;(e.currentTarget as HTMLElement).style.background = isCurrent ? '#E6F2DD' : 'transparent'
                          ;(e.currentTarget as HTMLElement).style.color = isCurrent ? '#35858E' : '#303733'
                        }}
                      >
                        {link.label}
                        <ArrowRight size={14} style={{ color: '#88BDA4' }} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map(link => (
              <Link key={link.path} to={link.path} style={{
                padding: '8px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 500,
                color: isActive(link.path) ? '#35858E' : '#303733',
                background: isActive(link.path) ? '#E6F2DD' : 'transparent',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.background = '#f5faf5' }}
                onMouseLeave={e => { if (!isActive(link.path)) (e.target as HTMLElement).style.background = 'transparent' }}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/contact" style={{
              marginLeft: 8, padding: '10px 22px', borderRadius: 10, background: '#35858E', color: '#fff',
              textDecoration: 'none', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6,
              transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(53,133,142,0.3)',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2a6e76'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#35858E'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 8, color: '#303733' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 120, left: 0, right: 0, zIndex: 99,
              background: '#fff', borderBottom: '1px solid rgba(136,189,164,0.3)',
              overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ padding: '12px 24px 20px' }}>
              {navLinks.slice(0, 2).map(link => (
                <Link key={link.path} to={link.path} style={{
                  display: 'block', padding: '12px 0', textDecoration: 'none', fontSize: 16,
                  fontWeight: 500, color: isActive(link.path) ? '#35858E' : '#303733',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  {link.label}
                </Link>
              ))}

              {/* Mobile Our Services Accordion */}
              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 16, fontWeight: 500, color: isServicesActive ? '#35858E' : '#303733',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  Our Services
                  <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                      {serviceLinks.map(link => (
                        <Link key={link.path} to={link.path} style={{
                          display: 'block', padding: '10px 16px', textDecoration: 'none',
                          fontSize: 14, color: location.pathname === link.path ? '#35858E' : '#555D58',
                          borderBottom: '1px solid #f5f5f5', fontWeight: location.pathname === link.path ? 600 : 400,
                        }}>
                          → {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map(link => (
                <Link key={link.path} to={link.path} style={{
                  display: 'block', padding: '12px 0', textDecoration: 'none', fontSize: 16,
                  fontWeight: 500, color: isActive(link.path) ? '#35858E' : '#303733',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  {link.label}
                </Link>
              ))}

              <Link to="/contact" style={{
                display: 'block', marginTop: 16, padding: '14px 24px', borderRadius: 12, background: '#35858E',
                color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 600, textAlign: 'center',
              }}>
                Start Investing →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
