import { useState, useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useInView } from 'motion/react'
import { Search, ArrowRight, Calendar, ChevronLeft, ChevronRight, User, Tag } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { BackButton } from '../components/BackButton'
import { SEO } from '../components/SEO'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const categories = ['All', 'Investment Basics', 'SIP', 'Retirement', 'Financial Goals', 'Mutual Funds', 'Market Education']

function RiseAfterFallArticle() {
  const chartData = [
    { period: '2000-01', fall: -50, growth: 247 },
    { period: '2008', fall: -64, growth: 45 },
    { period: '2010-11', fall: -28, growth: 44 },
    { period: '2015-16', fall: -24, growth: 38 },
    { period: '2020', fall: -40, growth: 112 },
  ]

  const tableData = [
    { event: '2000-01', desc: 'Technology bubble', fall: '-50%', time: '4 years', peak: '1,818 to 6,300', growth: '+247%' },
    { event: '2008', desc: 'Global financial crisis', fall: '-64%', time: '2.8 years', peak: '6,287 to 9,100', growth: '+45%' },
    { event: '2010-11', desc: 'Global and domestic uncertainty', fall: '-28%', time: '3 years', peak: '6,338 to 9,100', growth: '+44%' },
    { event: '2015-16', desc: 'Economic and global correction', fall: '-24%', time: '2 years', peak: '8,996 to 12,400', growth: '+38%' },
    { event: '2020', desc: 'COVID-19 crash', fall: '-40%', time: '0.8 years', peak: '12,430 to 26,300', growth: '+112%' },
  ]

  return (
    <div style={{ display: 'grid', gap: 32 }}>
      {/* Intro */}
      <p style={{ fontSize: 18, lineHeight: 1.85, color: '#303733', margin: 0 }}>
        <strong>Wars and geopolitical tensions can unsettle markets, disrupt trade and energy prices, and make investors uncomfortable.</strong> The duration and impact of any conflict cannot be predicted. History, however, shows that equity markets have lived through wars, financial crises, recessions and pandemics, and have subsequently recovered as businesses and economies adapted.
      </p>

      <p style={{ fontSize: 17, lineHeight: 1.8, color: '#3A4440', margin: 0 }}>
        The right response is not blind confidence. It is disciplined investing: align investments with goals, maintain an adequate time horizon, diversify, and avoid turning a temporary market decline into a permanent loss through panic-driven redemption.
      </p>

      {/* Highlight Quote Box */}
      <div style={{
        padding: '24px 32px', borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(230,242,221,0.65) 0%, rgba(136,189,164,0.20) 100%)',
        borderLeft: `6px solid ${TEAL}`, border: '1px solid rgba(136,189,164,0.3)',
        textAlign: 'center', margin: '8px 0',
      }}>
        <p style={{ fontSize: 20, fontWeight: 700, fontStyle: 'italic', color: TEAL, margin: 0, lineHeight: 1.5 }}>
          A fall tests patience. Recovery rewards it. The growth that follows creates wealth.
        </p>
      </div>

      {/* Major Market Falls and Recoveries */}
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 12, marginTop: 0 }}>Major Market Falls and Recoveries</h2>
        <p style={{ fontSize: 16, color: '#555D58', lineHeight: 1.7, margin: 0 }}>
          The Nifty 50 examples below are rounded historical illustrations. They show not only the fall and the time taken to regain the earlier peak, but also the next significant level reached after recovery.
        </p>
      </div>

      {/* Chart Section */}
      <div style={{ background: '#F9FBF8', padding: '28px 24px', borderRadius: 20, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, textAlign: 'center', color: '#303733', marginBottom: 24, marginTop: 0 }}>
          What patient investors experienced after major market falls
        </h3>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap', fontSize: 13, fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 14, height: 14, background: '#E57373', borderRadius: 3 }} />
            <span style={{ color: '#555D58' }}>Fall from previous peak</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 14, height: 14, background: '#2E7D32', borderRadius: 3 }} />
            <span style={{ color: '#555D58' }}>Growth after recovery to next significant peak</span>
          </div>
        </div>

        {/* Chart Rows */}
        <div style={{ display: 'grid', gap: 16, maxWidth: 760, margin: '0 auto' }}>
          {chartData.map(item => (
            <div key={item.period} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 1fr', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#303733', textAlign: 'right' }}>{item.period}</div>
              
              {/* Fall bar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#D32F2F', marginRight: 8 }}>{item.fall}%</span>
                <div style={{
                  height: 28,
                  width: `${Math.min(100, (Math.abs(item.fall) / 70) * 100)}%`,
                  background: '#E57373', borderRadius: '4px 0 0 4px',
                }} />
              </div>

              {/* Growth bar */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{
                  height: 28,
                  width: `${Math.min(100, (item.growth / 250) * 100)}%`,
                  background: '#2E7D32', borderRadius: '0 4px 4px 0',
                }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#2E7D32', marginLeft: 8 }}>+{item.growth}%</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, fontStyle: 'italic', color: '#77827B', textAlign: 'center', marginTop: 24, margin: 0 }}>
          Figure 1 Approximate Nifty 50 price index experience across selected completed market cycles
        </p>
      </div>

      {/* Table Section */}
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 16, marginTop: 0 }}>The Evidence in Numbers</h2>
        
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(136,189,164,0.3)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#1A3C40', color: '#fff' }}>
                <th style={{ padding: '14px 18px', fontWeight: 700 }}>Market event</th>
                <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'center' }}>Approx. fall</th>
                <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'center' }}>Time to regain</th>
                <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'center' }}>Next significant peak</th>
                <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'center' }}>Growth after recovery</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={row.event} style={{ background: i % 2 === 0 ? '#fff' : '#F5F9F6', borderBottom: '1px solid rgba(136,189,164,0.18)' }}>
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ fontWeight: 700, color: '#303733' }}>{row.event}</div>
                    <div style={{ fontSize: 13, color: '#66706B' }}>{row.desc}</div>
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: '#D32F2F', fontWeight: 700 }}>{row.fall}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: '#303733', fontWeight: 500 }}>{row.time}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: '#303733', fontWeight: 500 }}>{row.peak}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: '#2E7D32', fontWeight: 800 }}>{row.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#4E5652', marginTop: 16, margin: '16px 0 0' }}>
          <strong>How to read the table</strong> During the 2008 crisis, for example, the Nifty fell about 64%. It took roughly 2.8 years to regain its previous peak near 6,287. Investors who remained invested then participated in the later rise toward 9,100 - approximately 45% beyond the recovered level.
        </p>
      </div>

      {/* What History Teaches Investors */}
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 16, marginTop: 0 }}>What History Teaches Investors</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 14, fontSize: 16, lineHeight: 1.75, color: '#3A4440' }}>
          <li>
            <strong>Recovery begins before confidence returns.</strong> Waiting for complete certainty may mean returning after a substantial part of the recovery has passed.
          </li>
          <li>
            <strong>A decline is not automatically a permanent loss.</strong> Panic redemption makes the decline permanent and removes the opportunity to participate in recovery.
          </li>
          <li>
            <strong>SIPs support discipline through volatility.</strong> At lower prices, the same instalment purchases more units; this supports accumulation but does not eliminate risk.
          </li>
          <li>
            <strong>Goals matter more than headlines.</strong> Review the time horizon, asset allocation and risk profile before changing a long-term investment.
          </li>
        </ul>
      </div>

      {/* Before You Make a Decision */}
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 14, marginTop: 0 }}>Before You Make a Decision</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#3A4440', margin: 0 }}>
          Do not redeem, stop an SIP, or make a fresh lump-sum investment only because of current news. First review when the money is required, portfolio diversification, emergency reserves, risk capacity and whether the investment still serves its original goal. <strong style={{ color: TEAL }}>When uncertainty rises, speak to your Mutual Fund Distributor before changing a long-term plan.</strong>
        </p>
      </div>

      {/* Investor Note and Disclaimer */}
      <div style={{
        marginTop: 8, padding: '20px 24px', borderRadius: 16,
        background: '#F7FAF8', border: '1px solid rgba(136,189,164,0.3)',
        fontSize: 13, lineHeight: 1.7, color: '#606864',
      }}>
        <h4 style={{ fontSize: 14, fontWeight: 800, color: '#303733', marginTop: 0, marginBottom: 8 }}>Investor Note and Disclaimer</h4>
        Figures are approximate, rounded Nifty 50 Price Index illustrations from selected completed cycles. They do not represent a mutual fund scheme and exclude dividends, expenses and taxation. Results vary by measurement method; future declines may be deeper or take longer to recover. For investor education only - not investment advice, a return projection, or an assurance or guarantee. Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully and invest according to goals, horizon and risk profile.
      </div>
    </div>
  )
}

const articles = [
  {
    id: 8,
    title: 'Rise After a Fall: A Historical Perspective for Investors During Global Uncertainty',
    category: 'Market Education',
    date: 'September 11, 2026',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=85',
    excerpt: 'Wars and geopolitical tensions can unsettle markets, disrupt trade and energy prices, and make investors uncomfortable. History shows that equity markets have lived through wars, financial crises, recessions and pandemics, and have subsequently recovered.',
    featured: true,
    isRiseAfterFall: true,
    content: []
  },
  {
    id: 1,
    title: 'How to Start Your Investment Journey in Your 20s',
    category: 'Investment Basics',
    date: 'July 15, 2026',
    img: 'https://images.unsplash.com/photo-1689799514696-b16af9b53753?w=600&q=80',
    excerpt: 'Starting early is the most powerful thing you can do for your financial future. Here is a complete guide for young investors in India.',
    content: [
      'Starting your investment journey in your 20s provides you with the most valuable asset in financial planning: time. The power of compounding works best over long time horizons, allowing even small, consistent monthly contributions to grow into substantial wealth.',
      'Begin by building an emergency fund covering 3 to 6 months of basic living expenses. Once your safety net is established, start a Systematic Investment Plan (SIP) in mutual funds aligned with your risk tolerance and financial goals.',
      'Focus on discipline rather than market timing. Increasing your SIP contribution by 10% each year as your income grows will compound your wealth significantly over the long term.',
    ]
  },
  {
    id: 2,
    title: 'SIP vs Lump Sum: Which is Right for You?',
    category: 'SIP',
    date: 'July 10, 2026',
    img: 'https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?w=600&q=80',
    excerpt: 'Understanding the difference between SIP and lump sum investments and when to use each strategy for your financial goals.',
    content: [
      'A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (monthly or quarterly) into mutual funds. It brings financial discipline and averages your purchase cost over market cycles (Rupee Cost Averaging).',
      'Lump-sum investing involves deploying a significant one-time sum into mutual funds. It is often suitable when receiving a bonus, property sale proceeds, or windfall gains, especially when you have a long time horizon.',
      'For most salaried individuals, a combination works best: regular SIPs from monthly income, supplemented by lump-sum investments during market corrections or bonus season.',
    ]
  },
  {
    id: 3,
    title: 'Planning for Retirement at Every Age',
    category: 'Retirement',
    date: 'July 5, 2026',
    img: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?w=600&q=80',
    excerpt: 'Retirement planning looks different at 30, 40, and 50. Learn what steps to take at each stage to ensure a comfortable retirement.',
    content: [
      'In your 30s: Focus on aggressive growth. Allocate a major portion of your investments to equity mutual funds for maximum inflation-beating long-term growth.',
      'In your 40s: Consolidate and accelerate. Review your required retirement corpus, step up contributions, and start balancing with conservative hybrid funds.',
      'In your 50s: Transition and capital protection. Gradually shift towards capital preservation and structure your post-retirement cash flow plan using Systematic Withdrawal Plans (SWP).',
    ]
  },
  {
    id: 4,
    title: 'Understanding Mutual Fund Categories in India',
    category: 'Mutual Funds',
    date: 'July 28, 2026',
    img: 'https://images.unsplash.com/photo-1653378972336-103e1ea62721?w=600&q=80',
    excerpt: "From equity to debt to hybrid, India's mutual fund landscape explained in simple language for first-time investors.",
    content: [
      'Equity Funds invest primarily in stocks. They offer higher growth potential over long horizons (5+ years) but experience short-term market volatility.',
      'Debt Funds invest in fixed-income instruments like government bonds and corporate securities, offering relative stability for short-to-medium term goals.',
      'Hybrid Funds combine equity and debt instruments in varying proportions to balance growth with risk mitigation.',
    ]
  },
  {
    id: 5,
    title: 'How to Build an Emergency Fund While Investing',
    category: 'Financial Goals',
    date: 'July 20, 2026',
    img: 'https://images.unsplash.com/photo-1647510283846-ed174cc84a78?w=600&q=80',
    excerpt: 'An emergency fund and an investment portfolio are both essential. Here is how to build both simultaneously without stress.',
    content: [
      'An emergency fund protects your investments from being liquidated prematurely during unforeseen events like job loss or medical emergencies.',
      'Park liquid emergency funds in high-grade liquid mutual funds or savings deposits for instant accessibility.',
      'Split monthly savings: allocate 30% to emergency fund buildup until complete, and 70% to long-term SIP goals.',
    ]
  },
  {
    id: 6,
    title: "Children's Education Planning: Start Now",
    category: 'Financial Goals',
    date: 'July 12, 2026',
    img: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=600&q=80',
    excerpt: "Education inflation in India is running at 10-12% per year. Here's how to stay ahead of the curve and fund your child's dreams.",
    content: [
      'Higher education costs in India and abroad double approximately every 6 to 7 years due to inflation.',
      'Estimate the future cost by factoring in inflation, then calculate the required monthly SIP from your child’s early years.',
      'As higher education approaches (within 2-3 years), systematically de-risk by moving funds from equity to stable liquid/debt funds.',
    ]
  },
  {
    id: 7,
    title: 'The Power of Compounding: Explained Simply',
    category: 'Investment Basics',
    date: 'July 5, 2026',
    img: 'https://images.unsplash.com/photo-1622610607501-32ac9c927216?w=600&q=80',
    excerpt: "Albert Einstein called it the eighth wonder of the world. Compounding is the core of every long-term investment strategy and here is how it works.",
    content: [
      'Compounding happens when the returns generated by your investments start earning returns themselves.',
      'The key ingredient in compounding is time. Doubling your investment horizon can increase final wealth exponentially.',
      'Stay committed during market cycles. Reinvesting earnings consistently creates exponential growth over decades.',
    ]
  },
]

export function Blog() {
  const { id } = useParams<{ id?: string }>()
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  // Single Article Detail View
  if (id) {
    const article = articles.find(a => String(a.id) === id) || articles[0]
    const related = articles.filter(a => a.id !== article.id).slice(0, 3)

    return (
      <div style={{ overflowX: 'hidden' }}>
        <SEO
          title={`${article.title} | MFDthiru Blog`}
          description={article.excerpt}
          canonical={`/blog/${article.id}`}
        />
        <section style={{ background: 'rgba(230,242,221,0.45)', padding: '48px 24px 56px', position: 'relative', overflow: 'hidden' }}>
          <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.42} blur={68} r="56% 44% 35% 65% / 48% 54% 46% 52%" />
          <SectionBlob x="82%" y="10%" w={340} h={270} color="#88BDA4" op={0.30} blur={58} r="40% 60% 58% 42% / 56% 40% 60% 40%" />
          <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <BackButton />
            <div style={{ marginTop: 16 }}>
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
                {article.category}
              </span>
              <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 800, color: '#303733', lineHeight: 1.25, marginBottom: 18 }}>
                {article.title}
              </h1>
              <div style={{ display: 'flex', gap: 20, fontSize: 14, color: '#555D58', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={16} color={TEAL} /> {article.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><User size={16} color={TEAL} /> J. C. Thirumurugan (ARN 26890)</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px 80px', maxWidth: 960, margin: '0 auto' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 40, boxShadow: '0 12px 40px rgba(53,133,142,0.12)', border: '1px solid rgba(136,189,164,0.3)' }}>
            <img src={article.img} alt={article.title} style={{ width: '100%', maxHeight: 440, objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ background: '#fff', borderRadius: 24, padding: '44px 40px', border: '1px solid rgba(136,189,164,0.22)', boxShadow: '0 6px 24px rgba(0,0,0,0.02)', display: 'grid', gap: 24, fontSize: 17, color: '#3A4440', lineHeight: 1.85 }}>
            {article.isRiseAfterFall ? (
              <RiseAfterFallArticle />
            ) : (
              <>
                <p style={{ fontSize: 19, fontWeight: 600, color: TEAL, lineHeight: 1.7, margin: 0, paddingBottom: 16, borderBottom: '1px solid rgba(136,189,164,0.2)' }}>
                  {article.excerpt}
                </p>

                {article.content?.map((paragraph, idx) => (
                  <p key={idx} style={{ margin: 0 }}>{paragraph}</p>
                ))}
              </>
            )}

            <div style={{ marginTop: 24, padding: '28px 32px', background: 'rgba(230,242,221,0.5)', borderRadius: 20, border: `1px solid ${MINT}`, borderLeft: `6px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: TEAL, marginTop: 0, marginBottom: 8 }}>Ready to Start Your Mutual Fund Plan?</h3>
              <p style={{ fontSize: 15, color: '#555D58', marginBottom: 18, lineHeight: 1.6 }}>Talk to J. C. Thirumurugan — AMFI-registered Mutual Fund Distributor (ARN 26890) for goal-aligned guidance.</p>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: TEAL, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: 64 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#303733', marginBottom: 24 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
              {related.map(rel => (
                <Link key={rel.id} to={`/blog/${rel.id}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(136,189,164,0.22)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
                  <img src={rel.img} alt={rel.title} style={{ height: 160, width: '100%', objectFit: 'cover' }} />
                  <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: 'uppercase', marginBottom: 6 }}>{rel.category}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#303733', lineHeight: 1.4, margin: 0 }}>{rel.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  const filtered = rest.filter(a => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const paged = filtered

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title="Investor Knowledge & Insights | MFDthiru Blog"
        description="Educational articles and mutual fund insights by MFDthiru. Learn about SIPs, lump-sum investments, retirement planning, and goal-oriented wealth creation."
        canonical="/blog"
      />
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.42)', padding: '48px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-15%" w={400} h={320} color="#B1D3B9" op={0.42} blur={68} r="56% 44% 35% 65% / 48% 54% 46% 52%" />
        <SectionBlob x="82%" y="10%" w={340} h={270} color="#88BDA4" op={0.30} blur={58} r="40% 60% 58% 42% / 56% 40% 60% 40%" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BackButton />
          <div style={{ textAlign: 'center', marginTop: 8 }}>
          <FadeUp>
            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Blog</span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: '#303733', marginBottom: 20 }}>
              Insights for <span style={{ color: TEAL }}>Smarter Investing</span>
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', lineHeight: 1.8, maxWidth: 580, margin: '0 auto 36px' }}>
              Expert articles on mutual funds, SIP planning, retirement, and building lasting wealth for Indian investors.
            </p>
            <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
              <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#7B827E' }} />
              <input
                type="text" placeholder="Search articles..." value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '14px 16px 14px 48px', borderRadius: 12, border: '1px solid rgba(136,189,164,0.4)',
                  fontSize: 15, color: '#303733', outline: 'none', background: '#fff', boxSizing: 'border-box',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              />
            </div>
          </FadeUp>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{ padding: '24px', borderBottom: '1px solid rgba(136,189,164,0.2)', background: '#fff', position: 'sticky', top: 70, zIndex: 10, backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 0', scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '8px 18px', borderRadius: 20, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
              background: activeCategory === cat ? TEAL : '#f5f5f5',
              color: activeCategory === cat ? '#fff' : '#555D58',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeCategory === 'All' && !search && (
        <section style={{ padding: '48px 24px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <FadeUp>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, borderRadius: 24, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 40px rgba(53,133,142,0.1)', border: '1px solid rgba(136,189,164,0.2)' }} className="featured-grid">
                <div style={{ height: 360, overflow: 'hidden' }}>
                  <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                    <span style={{ padding: '4px 12px', borderRadius: 12, background: LIGHT, color: TEAL, fontSize: 12, fontWeight: 600 }}>FEATURED</span>
                    <span style={{ padding: '4px 12px', borderRadius: 12, background: '#f5f5f5', color: '#555D58', fontSize: 12, fontWeight: 600 }}>{featured.category}</span>
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: '#303733', lineHeight: 1.3, marginBottom: 16 }}>{featured.title}</h2>
                  <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#7B827E' }}><Calendar size={14} /> {featured.date}</span>
                    <Link to={`/blog/${featured.id}`} style={{ display: 'flex', alignItems: 'center', gap: 6, color: TEAL, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section style={{ padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="20%" w={280} h={240} color="#B1D3B9" op={0.35} blur={58} r="55% 45% 42% 58% / 42% 58% 40% 60%" />
        <SectionBlob x="90%" y="55%" w={300} h={250} color="#88BDA4" op={0.28} blur={56} r="40% 60% 58% 42% / 60% 40% 58% 42%" />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {paged.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#7B827E', fontSize: 18 }}>No articles found for your search.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
              {paged.map((article, i) => (
                <FadeUp key={article.id} delay={i * 0.08}>
                  <div style={{
                    borderRadius: 20, overflow: 'hidden', background: '#fff', border: '1px solid rgba(136,189,164,0.2)',
                    transition: 'all 0.3s', cursor: 'pointer', display: 'flex', flexDirection: 'column',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(53,133,142,0.12)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <div style={{ height: 200, overflow: 'hidden' }}>
                      <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                        onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                        onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
                      />
                    </div>
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{ padding: '3px 10px', borderRadius: 10, background: LIGHT, color: TEAL, fontSize: 11, fontWeight: 600, width: 'fit-content', marginBottom: 12 }}>{article.category}</span>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#303733', lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{article.title}</h3>
                      <p style={{ fontSize: 13, color: '#555D58', lineHeight: 1.6, marginBottom: 16 }}>{article.excerpt.substring(0, 100)}...</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#7B827E' }}><Calendar size={12} /> {article.date}</span>
                        <Link to={`/blog/${article.id}`} style={{ color: TEAL, textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                          Read <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .featured-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
