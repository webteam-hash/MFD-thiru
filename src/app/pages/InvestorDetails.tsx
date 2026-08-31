import { useState, useRef } from 'react'
import { Link, useSearchParams } from 'react-router'
import { motion, useInView } from 'motion/react'
import { CheckCircle, ArrowRight, ShieldCheck, Send, MessageCircle } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { BackButton } from '../components/BackButton'
import { SEO } from '../components/SEO'
import { GoogleAdsEvents } from '../utils/gtag'

const TEAL = '#35858E'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function InvestorDetails() {
  const [searchParams] = useSearchParams()
  const optionParam = searchParams.get('option')

  const getHeadingInfo = () => {
    if (!optionParam) {
      return { prefix: 'Share Your Details for ', target: 'Personalised Guidance' }
    }

    const opt = optionParam.trim().toLowerCase()

    if (opt.includes('building wealth') || opt.includes('build wealth')) {
      return { prefix: 'Share Your Details for ', target: 'Building Wealth' }
    }
    if (opt.includes('preparing for retirement') || opt.includes('prepare for retirement') || opt.includes('retirement')) {
      return { prefix: 'Share Your Details for ', target: 'Preparing for Retirement' }
    }
    if (opt.includes('already retired') || opt.includes('cash flow') || opt.includes('organize')) {
      return { prefix: 'Share Your Details for ', target: 'Creating Inflation-Adjusted Cash Flow' }
    }
    if (opt.includes('achieve life goals') || opt.includes('life goals') || opt.includes('goal')) {
      return { prefix: 'Share Your Details for ', target: 'Achieving Life Goals' }
    }

    return { prefix: 'Share Your Details for ', target: optionParam }
  }

  const headingInfo = getHeadingInfo()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const err: Record<string, string> = {}
    if (!form.name.trim()) err.name = 'Full name is required'
    if (!form.phone.trim()) err.phone = 'Contact number is required'
    else if (!/^\+?[0-9]{10,13}$/.test(form.phone.replace(/\s/g, ''))) err.phone = 'Enter a valid 10-digit contact number'
    if (!form.email.trim()) err.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Enter a valid email address'
    if (!form.city.trim()) err.city = 'City / Location is required'
    return err
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    GoogleAdsEvents.leadSubmitted('investor_details_form')
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: `1.5px solid ${errors[field] ? '#ef4444' : 'rgba(136,189,164,0.45)'}`,
    fontSize: 15,
    color: '#303733',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
    background: '#ffffff',
  })

  return (
    <div style={{ overflowX: 'hidden', background: '#FAFCFA', color: '#2B332F', minHeight: '100vh' }}>
      <SEO
        title="Get Started | Investor Details — MFDThiru (ARN 26890)"
        description="Share your investment requirements with J. C. Thirumurugan, AMFI-Registered Mutual Fund Distributor (ARN 26890). Tailored mutual fund planning."
        canonical="/get-started"
      />

      {/* Header */}
      <section style={{ background: 'linear-gradient(180deg, rgba(230,242,221,0.55) 0%, rgba(250,252,250,1) 100%)', padding: '40px 24px 48px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={420} h={320} color="#B1D3B9" op={0.45} blur={70} r="55% 45% 35% 65% / 50% 48% 52% 50%" />
        <SectionBlob x="85%" y="10%" w={340} h={280} color="#88BDA4" op={0.32} blur={65} r="40% 60% 58% 42% / 56% 40% 60% 40%" />

        <div style={{ maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <BackButton />
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <FadeUp>
              <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 800, color: '#232926', marginBottom: 12, lineHeight: 1.2 }}>
                {headingInfo.prefix}<span style={{ color: TEAL }}>{headingInfo.target}</span>
              </h1>
              <p style={{ fontSize: 16.5, color: '#555D58', lineHeight: 1.7, margin: 0 }}>
                Please provide your contact information below. J. C. Thirumurugan (AMFI-Registered MFD) will personally reach out to assist with your investment requirements.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section style={{ padding: '32px 24px 88px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="88%" y="15%" w={360} h={300} color="#B1D3B9" op={0.30} blur={65} r="38% 62% 48% 52% / 55% 44% 56% 44%" />
        <SectionBlob x="-4%" y="50%" w={300} h={260} color="#88BDA4" op={0.25} blur={60} r="60% 40% 44% 56% / 40% 62% 38% 60%" />

        <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <div style={{
              background: '#ffffff',
              borderRadius: 28,
              padding: '48px 40px',
              boxShadow: '0 16px 56px rgba(53,133,142,0.09)',
              border: '1px solid rgba(136,189,164,0.3)',
            }} className="details-form-card">

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #E6F2DD, #C8E6D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <CheckCircle size={44} color={TEAL} />
                    </div>
                  </motion.div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, color: '#232926', marginBottom: 12 }}>Details Submitted Successfully!</h2>
                  <p style={{ fontSize: 16.5, color: '#555D58', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 28px' }}>
                    Thank you, <strong>{form.name}</strong>. Your details have been received. Our team will contact you at <strong>{form.phone}</strong> shortly.
                  </p>
                  
                  <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/919940574602?text=${encodeURIComponent(`Hello, I submitted my contact details. Name: ${form.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '14px 28px', borderRadius: 12, background: '#25D366', color: '#fff',
                        textDecoration: 'none', fontSize: 15.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8,
                        boxShadow: '0 4px 16px rgba(37,211,102,0.3)', transition: 'all 0.2s'
                      }}
                    >
                      <MessageCircle size={18} /> Connect on WhatsApp
                    </a>
                    <Link
                      to="/"
                      style={{
                        padding: '14px 28px', borderRadius: 12, background: TEAL, color: '#fff',
                        textDecoration: 'none', fontSize: 15.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8,
                        boxShadow: '0 4px 16px rgba(53,133,142,0.25)', transition: 'all 0.2s'
                      }}
                    >
                      Back to Home <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
                    {/* Full Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#303733', marginBottom: 6 }}>
                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.name ? '#ef4444' : 'rgba(136,189,164,0.45)'}
                        placeholder="e.g. Rajesh Kumar"
                        style={inputStyle('name')}
                      />
                      {errors.name && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.name}</p>}
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#303733', marginBottom: 6 }}>
                        Contact Number <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.phone ? '#ef4444' : 'rgba(136,189,164,0.45)'}
                        placeholder="e.g. +91 9940574602"
                        style={inputStyle('phone')}
                      />
                      {errors.phone && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.phone}</p>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-grid">
                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#303733', marginBottom: 6 }}>
                        Email Address <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.email ? '#ef4444' : 'rgba(136,189,164,0.45)'}
                        placeholder="your@email.com"
                        style={inputStyle('email')}
                      />
                      {errors.email && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.email}</p>}
                    </div>

                    {/* City / Location */}
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#303733', marginBottom: 6 }}>
                        City / Location <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.city ? '#ef4444' : 'rgba(136,189,164,0.45)'}
                        placeholder="e.g. Chennai, Bangalore, Singapore"
                        style={inputStyle('city')}
                      />
                      {errors.city && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.city}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: 10 }}>
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '16px 28px',
                        borderRadius: 14,
                        background: TEAL,
                        color: '#ffffff',
                        border: 'none',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: 16.5,
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        boxShadow: '0 6px 24px rgba(53,133,142,0.3)',
                        opacity: loading ? 0.8 : 1,
                        transition: 'all 0.2s',
                      }}
                    >
                      {loading ? 'Submitting Details...' : <>Submit Details <Send size={18} /></>}
                    </button>
                  </div>

                  {/* Regulatory Disclaimer */}
                  <div style={{
                    marginTop: 12,
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: '#F6FAF7',
                    border: '1px solid rgba(136,189,164,0.25)',
                    fontSize: 13,
                    color: '#555D58',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    <ShieldCheck size={18} color={TEAL} style={{ flexShrink: 0 }} />
                    <span>Your privacy is protected. MFDThiru is an AMFI-Registered Mutual Fund Distributor (ARN 26890).</span>
                  </div>

                </form>
              )}

            </div>
          </FadeUp>
        </div>
      </section>

      <style>{`.details-form-card { @media (max-width: 640px) { padding: 28px 20px !important; } } .form-grid { @media (max-width: 640px) { grid-template-columns: 1fr !important; gap: 16px !important; } }`}</style>
    </div>
  )
}
