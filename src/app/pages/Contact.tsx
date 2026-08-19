import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import { SectionBlob } from '../components/WatercolorBg'
import { BackButton } from '../components/BackButton'
import { SEO } from '../components/SEO'
import { GoogleAdsEvents } from '../utils/gtag'

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

const investmentInterests = ['SIP Investment', 'Lump-Sum Investment', 'Retirement Planning', "Children's Education", 'Goal-Based Investing', 'Portfolio Review', 'General Query']

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^\+?[0-9]{10,13}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    // Fire Google Ads Lead Generation Event
    GoogleAdsEvents.leadSubmitted(form.interest || 'contact_form')
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1000)
  }

  const inputStyle = (field: string) => ({
    width: '100%', padding: '13px 16px', borderRadius: 12, border: `1px solid ${errors[field] ? '#ef4444' : 'rgba(136,189,164,0.4)'}`,
    fontSize: 15, color: '#303733', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit',
    transition: 'border-color 0.2s', background: '#fff',
  })

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO
        title="Contact Us | MFDThiru — Mutual Fund Distributor Chennai"
        description="Get in touch with J. C. Thirumurugan (ARN 26890) for mutual fund consultations, SIP setup, retirement planning, and portfolio reviews in Chennai."
        canonical="/contact"
      />
      {/* Hero */}
      <section style={{ background: 'rgba(230,242,221,0.44)', padding: '48px 24px 56px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="-5%" y="-10%" w={420} h={320} color="#B1D3B9" op={0.42} blur={68} r="56% 44% 35% 65% / 50% 48% 52% 50%" />
        <SectionBlob x="82%" y="15%" w={320} h={270} color="#88BDA4" op={0.30} blur={60} r="40% 60% 58% 42% / 56% 40% 60% 40%" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <BackButton />
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <FadeUp>
              <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: LIGHT, color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Contact Us</span>
              <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, color: '#303733', marginBottom: 16, lineHeight: 1.2 }}>
                Let's Talk About Your<br /><span style={{ color: TEAL }}>Financial Goals</span>
              </h1>
              <p style={{ fontSize: 17, color: '#555D58', lineHeight: 1.8, maxWidth: 560, margin: '0 auto' }}>
                Reach out to our team. We're here to help you understand your investment options and take the next step toward your financial goals.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 24px', position: 'relative', overflow: 'hidden' }}>
        <SectionBlob x="88%" y="5%" w={340} h={280} color="#B1D3B9" op={0.38} blur={62} r="38% 62% 48% 52% / 55% 44% 56% 44%" />
        <SectionBlob x="-4%" y="55%" w={280} h={240} color="#88BDA4" op={0.28} blur={55} r="60% 40% 44% 56% / 40% 62% 38% 60%" />
        <SectionBlob x="42%" y="70%" w={440} h={260} color="#E6F2DD" op={0.72} blur={80} r="50% 50% 50% 50%" />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'start' }} className="contact-grid">
          {/* Form */}
          <FadeUp>
            <div style={{ background: '#fff', borderRadius: 24, padding: '40px', boxShadow: '0 8px 48px rgba(53,133,142,0.08)', border: '1px solid rgba(136,189,164,0.2)' }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#303733', marginBottom: 8 }}>Send Us a Message</h2>
              <p style={{ fontSize: 15, color: '#555D58', marginBottom: 32 }}>Fill in your details and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle size={56} color={TEAL} style={{ marginBottom: 16 }} />
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#303733', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontSize: 15, color: '#555D58', lineHeight: 1.7 }}>Thank you for reaching out. Our team will contact you within 24 hours to discuss your investment goals.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', interest: '', message: '' }) }}
                    style={{ marginTop: 20, padding: '12px 24px', borderRadius: 10, background: TEAL, color: '#fff', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600 }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#303733', marginBottom: 6 }}>Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL} onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.name ? '#ef4444' : 'rgba(136,189,164,0.4)'} placeholder="Your full name" style={inputStyle('name')} />
                      {errors.name && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#303733', marginBottom: 6 }}>Email Address *</label>
                      <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL} onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.email ? '#ef4444' : 'rgba(136,189,164,0.4)'} placeholder="your@email.com" style={inputStyle('email')} />
                      {errors.email && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#303733', marginBottom: 6 }}>Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} onFocus={e => (e.target as HTMLInputElement).style.borderColor = TEAL} onBlur={e => (e.target as HTMLInputElement).style.borderColor = errors.phone ? '#ef4444' : 'rgba(136,189,164,0.4)'} placeholder="+91 9940574602" style={inputStyle('phone')} />
                      {errors.phone && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.phone}</p>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#303733', marginBottom: 6 }}>Investment Interest</label>
                      <select value={form.interest} onChange={e => setForm(f => ({ ...f, interest: e.target.value }))} style={{ ...inputStyle('interest'), appearance: 'none', cursor: 'pointer' }}>
                        <option value="">Select an option</option>
                        {investmentInterests.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#303733', marginBottom: 6 }}>Message / Financial Goal *</label>
                    <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = TEAL} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = errors.message ? '#ef4444' : 'rgba(136,189,164,0.4)'} placeholder="Tell us about your financial goals and how we can help..." rows={4}
                      style={{ ...inputStyle('message'), resize: 'vertical' as const, minHeight: 120 }} />
                    {errors.message && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 4 }}>{errors.message}</p>}
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <button type="submit" disabled={loading} style={{
                      flex: 1, padding: '14px 28px', borderRadius: 12, background: TEAL, color: '#fff', border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer', fontSize: 16, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      opacity: loading ? 0.8 : 1, transition: 'all 0.2s', minWidth: 180,
                    }}>
                      {loading ? 'Sending...' : <><span>Send Enquiry</span><ArrowRight size={16} /></>}
                    </button>
                    <a href="https://wa.me/919940574602" target="_blank" rel="noopener noreferrer" style={{
                      padding: '14px 24px', borderRadius: 12, background: '#25D366', color: '#fff', border: 'none',
                      cursor: 'pointer', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
                    }}>
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <FadeUp delay={0.1}>
              {[
                {
                  icon: <Phone size={22} color={TEAL} />,
                  title: 'Phone',
                  content: '+91 9940574602',
                  link: 'tel:+919940574602',
                  bg: LIGHT,
                },
                {
                  icon: <Mail size={22} color={TEAL} />,
                  title: 'Email Address',
                  content: 'enquiry@wcms.in',
                  link: 'mailto:enquiry@wcms.in',
                  bg: '#E6EEC9',
                },
                {
                  icon: <MapPin size={22} color={TEAL} />,
                  title: 'Office Address',
                  content: 'No 8/1, 3rd Cross Street, Unique Sterling Apartment, Ground Floor, Sterling Road, Nungambakkam, Chennai, Tamil Nadu 600034',
                  link: null,
                  bg: LIGHT,
                },
              ].map(item => (
                <div key={item.title} style={{ background: item.bg, borderRadius: 16, padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 4 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(53,133,142,0.12)' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: TEAL, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>{item.title}</div>
                    {item.link ? (
                      <a href={item.link} style={{ fontSize: 16, fontWeight: 600, color: '#303733', textDecoration: 'none' }}>{item.content}</a>
                    ) : (
                      <p style={{ fontSize: 15, color: '#303733', lineHeight: 1.6, margin: 0 }}>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ background: '#fafafa', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: TEAL, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 14 }}>Follow Us</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: '#E1306C' },
                    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: '#0077B5' },
                    { icon: <Youtube size={20} />, href: '#', label: 'YouTube', color: '#FF0000' },
                    { icon: <MessageCircle size={20} />, href: 'https://wa.me/919940574602', label: 'WhatsApp', color: '#25D366' },
                  ].map(s => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{
                      width: 44, height: 44, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: s.color, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.08)',
                      transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.color; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = s.color }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: '0 24px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ borderRadius: 20, overflow: 'hidden', height: 380, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
              <iframe
                title="MFDThiru Office - Nungambakkam, Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3936836866!2d80.2396!3d13.0604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b5f8b7c409%3A0x0!2sNungambakkam%2C+Sterling+Road%2C+Chennai!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
