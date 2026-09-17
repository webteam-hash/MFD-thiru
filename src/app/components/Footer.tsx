import { Link } from 'react-router'
import { Instagram, Linkedin, Youtube } from 'lucide-react'
import logoDarkImg from '../../imports/mfd_logo_dark.png'
import { BUSINESS_INFO } from '../constants/theme'

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Blog', path: '/blog' },
]

const serviceLinks = [
  { label: 'Build Wealth', path: '/services/build-wealth' },
  { label: 'Achieve Life Goals', path: '/services/achieve-life-goals' },
  { label: 'Prepare for Retirement', path: '/services/prepare-for-retirement' },
  { label: 'Organize Existing Investments', path: '/services/organize-existing-investments' },
]

const legalLinks = [
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Use', path: '/terms-of-use' },
  { label: 'Calculator Policy', path: '/calculator-policy' },
  { label: 'Investor Grievance', path: '/investor-grievance' },
]

export function Footer() {

  return (
    <footer style={{ background: '#1e4a4f', color: '#e0f0f2', paddingTop: 64 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 20 }}>
              <img
                src={logoDarkImg}
                alt="MFDthiru Logo"
                style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#a8c8cc', marginBottom: 12 }}>
              Your trusted partner for goal-oriented mutual fund investments. We help families across India build a better financial future.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: '#88BDA4', fontWeight: 600, marginBottom: 20 }}>
              MFDthiru is the brand name under which mutual fund distribution services are offered by J. C. Thirumurugan, AMFI Registered Mutual Fund Distributor (ARN 26890).
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Instagram size={18} />, href: BUSINESS_INFO.socials.instagram, label: 'Instagram' },
                { icon: <Linkedin size={18} />, href: BUSINESS_INFO.socials.linkedin, label: 'LinkedIn' },
                { icon: <Youtube size={18} />, href: BUSINESS_INFO.socials.youtube, label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
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
            <p style={{ fontSize: 13, color: '#6a9499' }}>© 2026 MFDthiru. All rights reserved.</p>
            <p style={{ fontSize: 13, color: '#6a9499' }}>AMFI Registered Mutual Fund Distributor | ARN 26890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
