import { useState, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'

const TEAL = '#35858E'
const MINT = '#88BDA4'
const LIGHT = '#E6F2DD'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

const faqs = [
  {
    q: 'What is MFDThiru?',
    a: 'MFDThiru is the mutual fund distribution brand of J. C. Thirumurugan, AMFI-registered Mutual Fund Distributor – ARN 26890. We have been serving investors for more than two decades and currently support over 800 clients across India and overseas.',
  },
  {
    q: 'Is MFDThiru a SEBI-registered Investment Adviser?',
    a: 'No. MFDThiru is an AMFI-registered Mutual Fund Distributor and not a SEBI-registered Investment Adviser. We provide mutual fund distribution services and incidental mutual fund guidance based on the investor\'s goals, investment horizon and risk profile. We do not provide comprehensive financial planning or holistic investment advice.',
  },
  {
    q: 'How do you help investors select mutual fund schemes?',
    a: 'We understand the investor\'s objective, investment horizon, liquidity requirements and risk profile before providing a curated list of suitable mutual fund schemes. The final investment decision remains with the investor.',
  },
  {
    q: 'What is goal-based mutual fund investing?',
    a: 'Goal-based mutual fund investing means aligning mutual fund investments with a specific objective, such as children\'s education, marriage, purchasing a home, building long-term wealth or creating a retirement corpus. Achievement of a goal or target corpus is not guaranteed.',
  },
  {
    q: 'How can you help with children\'s education?',
    a: 'We help parents estimate the potential future cost of education and identify the SIP, lump-sum or flexible mutual fund investment required to work towards the target corpus. All projections are illustrative and subject to market performance.',
  },
  {
    q: 'What is the Retirement Corpus & Cash Flow Solution?',
    a: 'This service supports both stages of retirement: building a retirement corpus through SIP, lump-sum or flexible mutual fund investments, and deploying an existing retirement corpus for structured periodic withdrawals after retirement. The approach considers the available corpus, required cash flow, rising living expenses, liquidity requirements, investment horizon and risk profile.',
  },
  {
    q: 'Can fixed deposits be deployed for retirement cash flow through mutual funds?',
    a: 'An investor may consider deploying a portion of funds presently held in fixed deposits into suitable mutual fund schemes, subject to risk profile, liquidity requirements and suitability. Mutual funds and fixed deposits have different risk, return and liquidity characteristics. Mutual fund returns and withdrawals are not guaranteed like fixed-deposit interest.',
  },
  {
    q: 'What does "inflation-aware retirement cash flow" mean?',
    a: 'It means considering the possible impact of rising living expenses while structuring retirement withdrawals. It does not mean that cash flow will automatically increase with inflation or that any payout is assured. Sustainability depends on the corpus, withdrawal rate and market performance.',
  },
  {
    q: 'What is a Systematic Withdrawal Plan?',
    a: 'A Systematic Withdrawal Plan, or SWP, allows an investor to redeem a specified value of mutual fund units periodically. An SWP is not interest, pension or guaranteed income. Withdrawals may include invested capital, and the corpus may reduce depending on the withdrawal rate and market performance.',
  },
  {
    q: 'What is a SIP?',
    a: 'A Systematic Investment Plan allows investors to invest a chosen amount periodically in a mutual fund scheme. It supports disciplined investing but does not guarantee returns or protection from market losses.',
  },
  {
    q: 'Can I invest a lump sum?',
    a: 'Yes. Available surplus funds may be invested as a lump sum into suitable mutual fund schemes after considering the investor\'s goals, investment horizon, liquidity requirements and risk profile.',
  },
  {
    q: 'What is a flexible investment?',
    a: 'A flexible investment allows an investor to begin with a lump sum and make additional investments whenever surplus funds become available, without committing to a fixed monthly schedule.',
  },
  {
    q: 'Do you review existing mutual fund portfolios?',
    a: 'Yes. We review mutual fund holdings based on the investor\'s stated goals, investment horizon, risk profile and scheme suitability and may suggest appropriate changes. The review is restricted to mutual funds and does not constitute comprehensive financial planning or holistic investment advice.',
  },
  {
    q: 'Are mutual fund returns guaranteed?',
    a: 'No. Mutual fund returns, target corpus and periodic withdrawals are neither assured nor guaranteed. Investment values may increase or decrease depending on market conditions.',
  },
  {
    q: 'What is the difference between Regular and Direct Plans?',
    a: 'Regular Plans are accessed through a mutual fund distributor and include distributor support and servicing. The distributor may receive commissions from the Asset Management Company. Direct Plans are purchased directly from the mutual fund without involving a distributor and generally have a lower expense ratio.',
  },
  {
    q: 'Does MFDThiru receive a commission?',
    a: 'Yes. For investments made through MFDThiru under Regular Plans, we may receive commissions, including trail commissions, from Asset Management Companies. Rates may vary across schemes and fund houses. Investors may request details of the applicable commission structure.',
  },
  {
    q: 'Can NRIs invest through MFDThiru?',
    a: 'Eligible NRIs may invest in mutual funds, subject to applicable regulations, KYC requirements, tax provisions, banking arrangements and the acceptance policies of individual Asset Management Companies.',
  },
  {
    q: 'Can I redeem my mutual fund investment at any time?',
    a: 'Most open-ended mutual fund schemes permit redemption on business days. However, exit loads, applicable taxes, settlement timelines, lock-in periods and scheme-specific restrictions may apply. Investors should review the relevant scheme documents.',
  },
  {
    q: 'Will MFDThiru guarantee the achievement of my financial goal?',
    a: 'No. We assist investors in structuring mutual fund investments towards their stated goals, but cannot guarantee returns, target corpus or goal achievement. Outcomes depend on investment discipline, contribution levels, time horizon and market performance.',
  },
  {
    q: 'How can I get started?',
    a: 'Contact MFDThiru to discuss your investment objective, time horizon and risk profile. After completing the required KYC and suitability process, you can make an informed choice from the curated mutual fund schemes presented to you.',
  },
]

function AccordionItem({ faq, index, isOpen, onToggle }: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <FadeUp delay={index * 0.03}>
      <div
        style={{
          background: isOpen ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.82)',
          borderRadius: 16,
          border: isOpen ? `1.5px solid rgba(53,133,142,0.28)` : '1.5px solid rgba(136,189,164,0.22)',
          overflow: 'hidden',
          transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
          boxShadow: isOpen ? '0 6px 28px rgba(53,133,142,0.10)' : '0 2px 10px rgba(53,133,142,0.04)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Question row */}
        <button
          onClick={onToggle}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '22px 28px', background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left', gap: 16,
          }}
        >
          <span style={{
            fontSize: 16, fontWeight: isOpen ? 700 : 600,
            color: isOpen ? TEAL : '#303733',
            lineHeight: 1.5, transition: 'color 0.2s',
            fontFamily: 'Manrope, sans-serif',
          }}>
            {faq.q}
          </span>
          <span style={{
            flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
            background: isOpen ? TEAL : 'rgba(136,189,164,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s',
          }}>
            <ChevronDown
              size={17}
              color={isOpen ? '#fff' : TEAL}
              style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            />
          </span>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                padding: '0 28px 24px',
                borderTop: '1px solid rgba(136,189,164,0.20)',
                paddingTop: 18,
              }}>
                <p style={{
                  fontSize: 15, color: '#555D58', lineHeight: 1.82,
                  margin: 0, fontFamily: 'Manrope, sans-serif',
                }}>
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ── Hero ── */}
      <section style={{ background: 'rgba(230,238,201,0.40)', padding: '80px 24px 72px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <SectionBlob x="-5%" y="-10%" w={400} h={320} color="#B1D3B9" op={0.40} blur={68} r="58% 42% 32% 68% / 50% 46% 54% 50%" />
        <SectionBlob x="82%" y="10%" w={340} h={280} color="#88BDA4" op={0.28} blur={58} r="40% 60% 58% 42% / 58% 40% 60% 40%" />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <span style={{
              display: 'inline-block', padding: '5px 16px', borderRadius: 20,
              background: 'rgba(255,255,255,0.85)', color: TEAL, fontSize: 12,
              fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
              marginBottom: 20, border: '1px solid rgba(136,189,164,0.4)',
            }}>
              FAQ
            </span>
            <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, color: '#1a2c2e', lineHeight: 1.15, marginBottom: 18 }}>
              Answers to common<br />questions
            </h1>
            <p style={{ fontSize: 18, color: '#555D58', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
              Everything you need to know about mutual fund investing with MFDThiru.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section style={{ padding: '60px 24px 80px', background: 'rgba(255,255,255,0.50)', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-4%" y="15%" w={300} h={260} color="#B1D3B9" op={0.35} blur={60} r="55% 45% 60% 40% / 42% 60% 38% 62%" />
        <SectionBlob x="88%" y="50%" w={280} h={240} color="#659287" op={0.18} blur={55} r="42% 58% 44% 56% / 58% 40% 60% 42%" />
        <SectionBlob x="40%" y="80%" w={420} h={260} color="#E6F2DD" op={0.65} blur={75} r="50% 50% 50% 50%" />

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section style={{ padding: '72px 24px', background: 'rgba(230,242,221,0.48)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-3%" y="10%" w={260} h={220} color="#88BDA4" op={0.32} blur={50} r="58% 42% 45% 55% / 42% 60% 38% 62%" />
        <SectionBlob x="86%" y="15%" w={240} h={200} color="#659287" op={0.18} blur={46} r="42% 58% 58% 42% / 60% 38% 58% 42%" />
        <div style={{ maxWidth: 520, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{ fontSize: 44, marginBottom: 16 }}>💬</div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#1a2c2e', marginBottom: 12 }}>
              Still have questions?
            </h2>
            <p style={{ fontSize: 16, color: '#555D58', marginBottom: 32, lineHeight: 1.75 }}>
              Reach out directly — we're happy to answer any questions about your investment journey.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
                borderRadius: 12, background: TEAL, color: '#fff', textDecoration: 'none',
                fontSize: 15, fontWeight: 700, boxShadow: '0 8px 24px rgba(53,133,142,0.28)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
                borderRadius: 12, background: 'rgba(255,255,255,0.88)', color: TEAL,
                border: `2px solid ${MINT}`, textDecoration: 'none', fontSize: 15, fontWeight: 600,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = LIGHT}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)'}
              >
                About Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
