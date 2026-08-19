import { useState, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'motion/react'
import { Search, ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
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

const articles = [
  { id: 1, title: 'How to Start Your Investment Journey in Your 20s', category: 'Investment Basics', date: 'July 15, 2026', img: 'https://images.unsplash.com/photo-1689799514696-b16af9b53753?w=600&q=80', excerpt: 'Starting early is the most powerful thing you can do for your financial future. Here is a complete guide for young investors in India.', featured: true },
  { id: 2, title: 'SIP vs Lump Sum: Which is Right for You?', category: 'SIP', date: 'July 10, 2026', img: 'https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?w=600&q=80', excerpt: 'Understanding the difference between SIP and lump sum investments and when to use each strategy for your financial goals.' },
  { id: 3, title: 'Planning for Retirement at Every Age', category: 'Retirement', date: 'July 5, 2026', img: 'https://images.unsplash.com/photo-1761839257647-df30867afd54?w=600&q=80', excerpt: 'Retirement planning looks different at 30, 40, and 50. Learn what steps to take at each stage to ensure a comfortable retirement.' },
  { id: 4, title: 'Understanding Mutual Fund Categories in India', category: 'Mutual Funds', date: 'July 28, 2026', img: 'https://images.unsplash.com/photo-1653378972336-103e1ea62721?w=600&q=80', excerpt: "From equity to debt to hybrid, India's mutual fund landscape explained in simple language for first-time investors." },
  { id: 5, title: 'How to Build an Emergency Fund While Investing', category: 'Financial Goals', date: 'July 20, 2026', img: 'https://images.unsplash.com/photo-1647510283846-ed174cc84a78?w=600&q=80', excerpt: 'An emergency fund and an investment portfolio are both essential. Here is how to build both simultaneously without stress.' },
  { id: 6, title: "Children's Education Planning: Start Now", category: 'Financial Goals', date: 'July 12, 2026', img: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?w=600&q=80', excerpt: "Education inflation in India is running at 10-12% per year. Here's how to stay ahead of the curve and fund your child's dreams." },
  { id: 7, title: 'The Power of Compounding: Explained Simply', category: 'Investment Basics', date: 'July 5, 2026', img: 'https://images.unsplash.com/photo-1622610607501-32ac9c927216?w=600&q=80', excerpt: "Albert Einstein called it the eighth wonder of the world. Compounding is the core of every long-term investment strategy and here is how it works." },
]

const ITEMS_PER_PAGE = 4

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  const filtered = rest.filter(a => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title="Investor Knowledge & Insights | MFDThiru Blog"
        description="Educational articles and mutual fund insights by MFDThiru. Learn about SIPs, lump-sum investments, retirement planning, and goal-oriented wealth creation."
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
                onChange={e => { setSearch(e.target.value); setPage(1) }}
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
            <button key={cat} onClick={() => { setActiveCategory(cat); setPage(1) }} style={{
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 48, alignItems: 'center' }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                style={{ width: 40, height: 40, borderRadius: '50%', border: `1px solid ${MINT}`, background: '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === 1 ? 0.5 : 1, color: TEAL }}>
                <ChevronLeft size={18} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} style={{
                  width: 40, height: 40, borderRadius: '50%', border: `1px solid ${MINT}`, cursor: 'pointer',
                  background: page === i + 1 ? TEAL : '#fff', color: page === i + 1 ? '#fff' : TEAL, fontWeight: 600, fontSize: 14,
                }}>{i + 1}</button>
              ))}
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                style={{ width: 40, height: 40, borderRadius: '50%', border: `1px solid ${MINT}`, background: '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === totalPages ? 0.5 : 1, color: TEAL }}>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .featured-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}
