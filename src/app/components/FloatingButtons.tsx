import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 24, zIndex: 200, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919940574602"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        style={{
          width: 52, height: 52, borderRadius: '50%', background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)', cursor: 'pointer',
          textDecoration: 'none', color: '#fff',
        }}
      >
        <MessageCircle size={24} fill="#fff" />
      </motion.a>

      {/* Contact */}
      <motion.a
        href="tel:+919940574602"
        title="Call Us"
        whileHover={{ scale: 1.1 }}
        style={{
          width: 52, height: 52, borderRadius: '50%', background: '#35858E',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(53,133,142,0.4)', cursor: 'pointer',
          textDecoration: 'none', color: '#fff',
        }}
      >
        <PhoneCall size={22} />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            title="Back to top"
            style={{
              width: 44, height: 44, borderRadius: '50%', background: '#fff',
              border: '2px solid #88BDA4', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              color: '#35858E',
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
