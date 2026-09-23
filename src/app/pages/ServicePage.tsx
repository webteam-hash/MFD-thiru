import { motion } from 'motion/react'
import { Link, useLocation } from 'react-router'
import { SEO } from '../components/SEO'
import { BackButton } from '../components/BackButton'
import { SectionBlob } from '../components/WatercolorBg'
import {
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  TrendingUp,
  Target,
  Compass,
  Layers,
  Sparkles,
} from 'lucide-react'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'
const DARK = '#303733'

export interface ServiceDetail {
  id: string
  number: string
  header: string
  subtitle: string
  intro: string
  howWeHelp: string
  difference: string
  tagline: string
  ctaText: string
  ctaPath: string
  icon: any
}

export const servicesData: Record<string, ServiceDetail> = {
  'build-wealth': {
    id: 'build-wealth',
    number: '01',
    header: '1. BUILD WEALTH',
    subtitle: 'Start today. Give your money more time to grow.',
    intro:
      'Your income supports your life today. What you save and invest can help support your future. The earlier you begin—and the longer you stay invested—the more time your money has to participate in market growth and benefit from the potential power of compounding.',
    howWeHelp:
      'MFDthiru facilitates SIP and lump-sum mutual fund investments and helps you understand mutual fund categories, scheme information, associated risks and your investment journey.',
    difference:
      "We don't want your SIP to become just another monthly debit. We encourage purposeful, disciplined and long-term investing, supported by portfolio information, digital access and dedicated human assistance.",
    tagline: 'Start today. Give your money more time to grow.',
    ctaText: 'Start My Investment Journey',
    ctaPath: '/contact',
    icon: TrendingUp,
  },
  'achieve-life-goals': {
    id: 'achieve-life-goals',
    number: '02',
    header: '2. ACHIEVE LIFE GOALS',
    subtitle: 'You may delay your decision, but your goals will not wait.',
    intro:
      'Your financial goals will arrive, whether you prepare for them or not. Education, marriage, a home and other milestones may become increasingly expensive with inflation. Starting early and investing with a clear purpose can make the journey more disciplined and manageable.',
    howWeHelp:
      'MFDthiru helps you understand and organise your mutual fund investments in relation to your identified goals. Our calculators can provide illustrative estimates to help you understand the impact of time and inflation on future financial requirements.',
    difference:
      'We encourage you to look beyond “How much have I invested?” and ask “What am I investing for?” The objective is to give your investments a purpose and make your journey easier to understand and track.',
    tagline: 'You may delay your decision, but your goals will not wait.',
    ctaText: 'Start Investing for My Goals',
    ctaPath: '/calculators/goal-based',
    icon: Target,
  },
  'prepare-for-retirement': {
    id: 'prepare-for-retirement',
    number: '03',
    header: '3. PREPARE FOR RETIREMENT',
    subtitle: 'Prepare today to work towards greater financial independence in retirement.',
    intro:
      'One day, your regular salary may stop—but your living expenses will continue. Retirement could last for decades, while inflation steadily increases the cost of maintaining your lifestyle. The earlier you begin preparing, the more time you have to work towards building the required retirement corpus.',
    howWeHelp:
      'MFDthiru helps you understand how mutual funds may be used for long-term retirement corpus creation through systematic investing, inflation awareness and periodic review of your existing mutual fund holdings. The suitability of any mutual fund investment depends on your objectives, investment horizon and risk profile.',
    difference:
      'We encourage you to think beyond “How much have I saved?” and focus on “Am I consistently preparing for my retirement requirement?” We stay connected through your investment journey with information, portfolio access and human support.',
    tagline: 'Prepare today to work towards greater financial independence in retirement.',
    ctaText: 'Explore Mutual Funds for Retirement',
    ctaPath: '/calculators/retirement',
    icon: Compass,
  },
  'organize-existing-investments': {
    id: 'organize-existing-investments',
    number: '04',
    header: '4. ORGANIZE EXISTING INVESTMENTS',
    subtitle: 'Know what you own. Understand why you own it.',
    intro:
      'Before making another investment, pause and understand what you already own. Multiple schemes and folios accumulated over the years can lead to duplication, confusion and investments without a clear purpose. Organising them can provide a clearer picture of your portfolio and how it relates to your financial goals.',
    howWeHelp:
      'MFDthiru helps bring greater visibility through portfolio consolidation, folio organisation, investment tracking, portfolio reports and understanding your investments in relation to identified goals.',
    difference:
      "Our first response need not be “Invest more.” It can begin with “Let's understand what you already have.” Our objective is greater clarity and organisation - not simply adding more schemes.",
    tagline: 'Know what you own. Understand why you own it.',
    ctaText: 'Organize My Mutual Funds',
    ctaPath: '/contact',
    icon: Layers,
  },
}

function getServiceKey(path: string): string {
  if (path.includes('achieve-life-goals') || path.includes('goal-based') || path.includes('education')) {
    return 'achieve-life-goals'
  }
  if (path.includes('prepare-for-retirement') || path.includes('retirement')) {
    return 'prepare-for-retirement'
  }
  if (path.includes('organize-existing-investments') || path.includes('portfolio-health')) {
    return 'organize-existing-investments'
  }
  return 'build-wealth'
}

interface ServicePageProps {
  title?: string
  subtitle?: string
  path: string
}

export function ServicePage({ path }: ServicePageProps) {
  const location = useLocation()
  const activePath = location.pathname || path
  const key = getServiceKey(activePath)
  const service = servicesData[key] || servicesData['build-wealth']
  const IconComponent = service.icon

  return (
    <div style={{ overflowX: 'hidden', minHeight: '100vh', background: '#F8FAF9', position: 'relative' }}>
      <SEO
        title={`${service.header} | MFDthiru`}
        description={`${service.subtitle} - ${service.intro}`}
        canonical={activePath}
      />

      {/* Aesthetic background watercolor blobs */}
      <SectionBlob x="-8%" y="5%" w={540} h={420} color="#B1D3B9" op={0.42} blur={80} r="50% 50% 50% 50%" />
      <SectionBlob x="85%" y="30%" w={480} h={380} color="#88BDA4" op={0.32} blur={75} r="60% 40% 50% 50%" />
      <SectionBlob x="15%" y="60%" w={420} h={340} color="#E6F2DD" op={0.80} blur={70} r="50% 50% 50% 50%" />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 90px', position: 'relative', zIndex: 1 }}>
        
        {/* Navigation Back Button */}
        <div style={{ marginBottom: 32 }}>
          <BackButton fallback="/" />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            SERVICE HERO BANNER
        ════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 40 }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(230,242,221,0.65) 100%)',
              borderRadius: 28,
              padding: '48px 42px',
              border: '1px solid rgba(136, 189, 164, 0.40)',
              boxShadow: '0 16px 48px rgba(53, 133, 142, 0.09)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Badge & Icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  borderRadius: 20,
                  background: 'rgba(53,133,142,0.12)',
                  border: '1px solid rgba(136,189,164,0.45)',
                  color: TEAL,
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                }}
              >
                <Sparkles size={15} />
                SERVICE {service.number}
              </div>

              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  background: 'linear-gradient(135deg, rgba(230,242,221,0.9) 0%, rgba(136,189,164,0.3) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: TEAL,
                  border: '1px solid rgba(136,189,164,0.4)',
                  boxShadow: '0 6px 20px rgba(53,133,142,0.12)',
                }}
              >
                <IconComponent size={30} />
              </div>
            </div>

            {/* Header Title */}
            <h1
              style={{
                fontSize: 'clamp(32px, 4.5vw, 50px)',
                fontWeight: 800,
                color: DARK,
                lineHeight: 1.12,
                marginBottom: 12,
                letterSpacing: '-0.8px',
              }}
            >
              {service.header}
            </h1>

            {/* Subtitle */}
            <h2
              style={{
                fontSize: 'clamp(19px, 2.6vw, 25px)',
                fontWeight: 700,
                color: TEAL,
                marginBottom: 20,
                lineHeight: 1.35,
              }}
            >
              {service.subtitle}
            </h2>

            {/* Intro Paragraph */}
            <p
              style={{
                fontSize: 17,
                color: '#4B534E',
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 940,
                fontWeight: 450,
              }}
            >
              {service.intro}
            </p>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════════════════════════
            HOW WE HELP & THE MFDthiru DIFFERENCE (DUAL CARDS)
        ════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          style={{ marginBottom: 40 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28,
            }}
          >
            {/* Card 1: How We Help */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(53,133,142,0.12)' }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: 24,
                padding: '36px 32px',
                border: '1px solid rgba(136,189,164,0.35)',
                boxShadow: '0 8px 30px rgba(53,133,142,0.06)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: 'rgba(230,242,221,0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: TEAL,
                  marginBottom: 20,
                  border: '1px solid rgba(136,189,164,0.35)',
                }}
              >
                <HelpCircle size={26} />
              </div>

              <h3 style={{ fontSize: 23, fontWeight: 800, color: DARK, marginBottom: 14 }}>
                How We Help
              </h3>

              <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.75, margin: 0 }}>
                {service.howWeHelp}
              </p>
            </motion.div>

            {/* Card 2: The MFDthiru Difference */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(53,133,142,0.16)' }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'linear-gradient(135deg, rgba(230,242,221,0.75) 0%, rgba(255,255,255,0.98) 100%)',
                borderRadius: 24,
                padding: '36px 32px',
                border: `1.5px solid ${MINT}`,
                boxShadow: '0 8px 30px rgba(53,133,142,0.08)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: TEAL,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: 20,
                  boxShadow: '0 6px 18px rgba(53,133,142,0.35)',
                }}
              >
                <ShieldCheck size={26} />
              </div>

              <h3 style={{ fontSize: 23, fontWeight: 800, color: DARK, marginBottom: 14 }}>
                The MFDthiru Difference
              </h3>

              <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.75, margin: 0 }}>
                {service.difference}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════════════════════════════
            TAGLINE & CTA ACTION BANNER
        ════════════════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #35858E 0%, #245F66 100%)',
              borderRadius: 26,
              padding: '40px 44px',
              color: '#ffffff',
              boxShadow: '0 16px 44px rgba(53,133,142,0.32)',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 24,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient glow decoration */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: 320,
                height: 320,
                background: 'rgba(136,189,164,0.22)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ flex: '1 1 340px', position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 'clamp(18px, 2.3vw, 22px)', fontWeight: 700, margin: 0, lineHeight: 1.45, color: '#ffffff' }}>
                {service.tagline}
              </p>
            </div>

            <Link
              to={service.ctaPath}
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '18px 36px',
                borderRadius: 16,
                background: '#ffffff',
                color: TEAL,
                fontSize: 16,
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(0,0,0,0.22)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
              }}
            >
              <span>{service.ctaText} →</span>
            </Link>
          </div>
        </motion.section>

        {/* Consistent Service Page Disclosure Box (Req 8 & 17) */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ marginTop: 40 }}
        >
          {key === 'prepare-for-retirement' && (
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 16,
                background: '#E6F2DD',
                border: `1.5px solid ${MINT}`,
                marginBottom: 20,
              }}
            >
              <p style={{ fontSize: 13.5, color: '#4E5652', lineHeight: 1.65, margin: 0 }}>
                <strong>Retirement Disclosure:</strong> Retirement calculations and corpus illustrations are indicative and based on assumptions. They do not guarantee that the estimated corpus will be sufficient or that a retirement goal will be achieved. Actual outcomes depend on contributions, investment period, inflation, market performance, scheme expenses, taxation and withdrawals.
              </p>
            </div>
          )}

          <div
            style={{
              padding: '20px 24px',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.92)',
              border: '1px solid rgba(136,189,164,0.3)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
            }}
          >
            <p style={{ fontSize: 13.5, color: '#555D58', lineHeight: 1.65, margin: 0 }}>
              <strong>Notice:</strong> MFDthiru provides mutual fund distribution services and incidental assistance limited to mutual fund products distributed through MFDthiru. MFDthiru does not provide comprehensive financial planning, tax advice, legal advice or investment-advisory services.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
