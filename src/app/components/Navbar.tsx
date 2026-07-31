import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import logoImg from '../../imports/Untitled_design_1.png'

const calcLinks = [
  { label: 'Retirement Corpus', path: '/calculators/retirement' },
  { label: 'Cash Flow Solution', path: '/calculators/cash-flow' },
  { label: "Children's Education Goal", path: '/calculators/education' },
  { label: 'Goal-Based', path: '/calculators/goal-based' },
  { label: 'SIP Investments', path: '/calculators/sip' },
  { label: 'Lump-Sum', path: '/calculators/lump-sum' },
  { label: 'Flexible Investments', path: '/calculators/flexible' },
]

const navLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setCalcOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCalcOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (path: string) => location.pathname === path
  const isCalcActive = location.pathname.startsWith('/calculators')

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
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img
              src={logoImg}
              alt="MFDThiru"
              style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'contain', display: 'block', boxShadow: '0 2px 8px rgba(53,133,142,0.22)' }}
            />
            <span style={{ fontSize: 22, fontWeight: 700, color: '#303733', letterSpacing: '-0.3px' }}>MFDThiru</span>
          </Link>

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

            {/* Calculators Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setCalcOpen(!calcOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 4, padding: '8px 16px', borderRadius: 8,
                  border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 500,
                  color: isCalcActive ? '#35858E' : '#303733',
                  background: isCalcActive ? '#E6F2DD' : 'transparent',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { if (!isCalcActive) (e.target as HTMLElement).style.background = '#f5faf5' }}
                onMouseLeave={e => { if (!isCalcActive) (e.target as HTMLElement).style.background = isCalcActive ? '#E6F2DD' : 'transparent' }}
              >
                Calculators
                <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: calcOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              <AnimatePresence>
                {calcOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
                      width: 280, background: '#fff', borderRadius: 16, padding: 8,
                      boxShadow: '0 8px 40px rgba(53,133,142,0.15)', border: '1px solid rgba(136,189,164,0.3)',
                    }}
                  >
                    {calcLinks.map(link => (
                      <Link key={link.path} to={link.path} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', color: '#303733', fontSize: 14, fontWeight: 500, transition: 'all 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#E6F2DD'; (e.currentTarget as HTMLElement).style.color = '#35858E' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#303733' }}
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
              position: 'fixed', top: 70, left: 0, right: 0, zIndex: 99,
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

              {/* Mobile Calculators Accordion */}
              <div>
                <button onClick={() => setMobileCalcOpen(!mobileCalcOpen)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 16, fontWeight: 500, color: isCalcActive ? '#35858E' : '#303733',
                  borderBottom: '1px solid #f0f0f0',
                }}>
                  Calculators
                  <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobileCalcOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                <AnimatePresence>
                  {mobileCalcOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                      {calcLinks.map(link => (
                        <Link key={link.path} to={link.path} style={{
                          display: 'block', padding: '10px 16px', textDecoration: 'none',
                          fontSize: 14, color: '#555D58', borderBottom: '1px solid #f5f5f5',
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
