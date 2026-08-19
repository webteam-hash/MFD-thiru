import { Link, useLocation } from 'react-router'
import { ShieldAlert, Lock, FileCheck, Scale, Headphones } from 'lucide-react'
import { BackButton } from '../../components/BackButton'
import { SEO } from '../../components/SEO'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

const navItems = [
  { label: 'Disclaimer', path: '/disclaimer', icon: ShieldAlert },
  { label: 'Privacy Policy', path: '/privacy-policy', icon: Lock },
  { label: 'Terms of Use', path: '/terms-of-use', icon: FileCheck },
  { label: 'Calculator Policy', path: '/calculator-policy', icon: Scale },
  { label: 'Investor Grievance', path: '/investor-grievance', icon: Headphones },
]

export function LegalNav() {
  const location = useLocation()
  const currentItem = navItems.find(item => item.path === location.pathname)

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto 30px' }}>
      <SEO
        title={`${currentItem ? currentItem.label : 'Legal Information'} | MFDThiru (ARN 26890)`}
        description={`Statutory disclosures, regulatory policies and regulatory compliance guidelines for MFDThiru — AMFI Registered Mutual Fund Distributor (ARN 26890).`}
        canonical={location.pathname}
      />
      <BackButton />
      <div style={{
        padding: '8px',
        background: 'rgba(255,255,255,0.85)', borderRadius: 18,
        border: '1px solid rgba(136,189,164,0.25)', boxShadow: '0 4px 20px rgba(53,133,142,0.06)',
        backdropFilter: 'blur(10px)', display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center'
      }}>
      {navItems.map(item => {
        const isActive = location.pathname === item.path
        const Icon = item.icon
        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 18px', borderRadius: 12, textDecoration: 'none',
              fontSize: 14, fontWeight: isActive ? 700 : 600,
              background: isActive ? `linear-gradient(135deg, ${TEAL}, #276269)` : 'transparent',
              color: isActive ? '#ffffff' : '#4E5652',
              boxShadow: isActive ? '0 4px 14px rgba(53,133,142,0.25)' : 'none',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Icon size={16} color={isActive ? '#ffffff' : TEAL} />
            <span>{item.label}</span>
          </Link>
        )
      })}
      </div>
    </div>
  )
}
