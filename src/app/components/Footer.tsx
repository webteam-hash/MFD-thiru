import { Link } from 'react-router'
import { Instagram, Linkedin, Youtube, Send } from 'lucide-react'
import { useState } from 'react'
import logoDarkImg from '../../imports/mfd_logo_dark.png'

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Blog', path: '/blog' },
]

const serviceLinks = [
  { label: 'Retirement Corpus', path: '/calculators/retirement' },
  { label: 'Cash Flow', path: '/calculators/cash-flow' },
  { label: "Children's Educational Planning", path: '/calculators/education' },
  { label: 'Goal-Based Mutual Fund Planning', path: '/calculators/goal-based' },
  { label: 'Systematic Investment Planning [SIP]', path: '/calculators/sip' },
  { label: 'Lump Sums', path: '/calculators/lump-sum' },
  { label: 'Personal Plans', path: '/calculators/flexible' },
]

const legalLinks = [
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Use', path: '/terms-of-use' },
  { label: 'Calculator Policy', path: '/calculator-policy' },
  { label: 'Investor Grievance', path: '/investor-grievance' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer style={{ background: '#1e4a4f', color: '#e0f0f2', paddingTop: 64 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 20 }}>
              <img
                src={logoDarkImg}
                alt="MFD Thiru Logo"
                style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#a8c8cc', marginBottom: 12 }}>
              Your trusted partner for goal-oriented mutual fund investments. We help families across India build a better financial future.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: '#88BDA4', fontWeight: 600, marginBottom: 20 }}>
              MFDThiru is the brand name under which mutual fund distribution services are offered by J. C. Thirumurugan, AMFI Registered Mutual Fund Distributor (ARN 26890).
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
                { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a8c8cc',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#35858E'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = '#a8c8cc' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map(link => (
                <li key={link.path} style={{ marginBottom: 10 }}>
                  <Link to={link.path} style={{ color: '#a8c8cc', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#88BDA4'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#a8c8cc'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculators & Services */}
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Calculators & Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {serviceLinks.map(link => (
                <li key={link.path} style={{ marginBottom: 10 }}>
                  <Link to={link.path} style={{ color: '#a8c8cc', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#88BDA4'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#a8c8cc'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies + Newsletter */}
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Legal & Policies</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
              {legalLinks.map(link => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <Link to={link.path} style={{ color: '#a8c8cc', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#88BDA4'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#a8c8cc'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Stay Updated</h3>
            {subscribed ? (
              <p style={{ color: '#88BDA4', fontSize: 14 }}>✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Your email" required
                  style={{
                    flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(136,189,164,0.3)',
                    background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 14, outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  padding: '10px 14px', borderRadius: 10, background: '#35858E', border: 'none',
                  cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center',
                }}>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Statutory Mutual Fund Risk Warning Banner */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, paddingBottom: 32 }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px 20px', borderRadius: 12, borderLeft: '4px solid #88BDA4', marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: '#e0f0f2', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
              Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <p style={{ fontSize: 13, color: '#6a9499' }}>© 2026 MFDThiru. All rights reserved.</p>
            <p style={{ fontSize: 13, color: '#6a9499' }}>AMFI Registered Mutual Fund Distributor | ARN 26890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
