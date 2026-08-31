import React from 'react'
import { motion } from 'framer-motion'
import { BackButton } from '../components/BackButton'
import { SectionBlob } from '../components/WatercolorBg'
import { SEO } from '../components/SEO'
import { SIPCalc } from './calculators/SIPCalc'
import { GoalBasedCalc } from './calculators/GoalBasedCalc'
import { RetirementCalc } from './calculators/RetirementCalc'
import { CashFlowCalc } from './calculators/CashFlowCalc'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { TEAL, BUSINESS_INFO } from '../constants/theme'
import { GoogleAdsEvents } from '../utils/gtag'
import { Link } from 'react-router'

interface ServicePageProps {
  title: string
  subtitle?: string
  path: string
}

export function ServicePage({ title, subtitle, path }: ServicePageProps) {
  const getServiceDetails = () => {
    if (path.includes('build-wealth') || path.includes('sip') || path.includes('lump-sum')) {
      return {
        heroTitle: title || 'Build Long-Term Wealth',
        defaultSubtitle: 'Disciplined SIPs and strategic lump-sum mutual fund distribution tailored for long-term compounding.',
        CalcComp: SIPCalc,
      }
    }
    if (path.includes('achieve-life-goals') || path.includes('goal-based') || path.includes('education')) {
      return {
        heroTitle: title || 'Achieve Life Goals',
        defaultSubtitle: 'Turn major family aspirations like higher education and property purchase into structured target goals.',
        CalcComp: GoalBasedCalc,
      }
    }
    if (path.includes('prepare-for-retirement') || path.includes('retirement')) {
      return {
        heroTitle: title || 'Prepare for Retirement',
        defaultSubtitle: 'Build an inflation-adjusted retirement corpus during your earning years to secure lifelong financial independence.',
        CalcComp: RetirementCalc,
      }
    }
    // Default: Organize Existing Investments / Cash flow
    return {
      heroTitle: title || 'Organize Existing Investments',
      defaultSubtitle: 'Review, consolidate, and optimize your existing mutual fund portfolio for clean, regular cash flow.',
      CalcComp: CashFlowCalc,
    }
  }

  const details = getServiceDetails()
  const displaySubtitle = subtitle || details.defaultSubtitle
  const CalcComp = details.CalcComp

  return (
    <div style={{ overflowX: 'hidden', minHeight: '80vh', background: '#F8FAF8' }}>
      <SEO title={`${details.heroTitle} | MFDThiru`} canonical={path} />

      <section style={{ 
        background: 'linear-gradient(180deg, rgba(230,242,221,0.40) 0%, rgba(248,250,248,1) 100%)', 
        padding: '36px 24px 60px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <SectionBlob x="-5%" y="-15%" w={380} h={300} color="#B1D3B9" op={0.4} blur={66} r="56% 44% 36% 64% / 50% 46% 54% 50%" />
        <SectionBlob x="85%" y="15%" w={320} h={260} color="#88BDA4" op={0.25} blur={60} r="40% 60% 56% 44% / 56% 40% 60% 40%" />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <BackButton />
          </div>

          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, color: '#232926', marginBottom: 14, lineHeight: 1.2 }}
            >
              {details.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#555D58', margin: '0 auto 28px', lineHeight: 1.6 }}
            >
              {displaySubtitle}
            </motion.p>
          </div>

          {/* Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 12px 40px rgba(53,133,142,0.10)',
              border: '1px solid rgba(136,189,164,0.35)',
              marginTop: 12,
            }}
          >
            <CalcComp />
          </motion.div>

          {/* Minimal Quick Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 36 }}>
            <Link
              to={`/get-started?option=${encodeURIComponent(details.heroTitle)}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 12,
                background: TEAL, color: '#ffffff',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(53,133,142,0.22)',
                transition: 'all 0.2s ease',
              }}
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace(/[^0-9]/g, '')}?text=${BUSINESS_INFO.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => GoogleAdsEvents.whatsappClicked('service_page')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 20px', borderRadius: 12,
                background: 'rgba(37,211,102,0.10)', color: '#16A34A',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                border: '1px solid rgba(37,211,102,0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageCircle size={16} fill="#16A34A" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
