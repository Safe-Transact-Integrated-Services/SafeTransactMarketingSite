import { useState, useEffect } from 'react'
import { contactTopics } from '../data/contactTopics'
import Icon from './Icons'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: '',
  })

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleClose = () => {
    onClose()
    setContactSubmitted(false)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactForm.name.trim() && contactForm.email.includes('@') && contactForm.message.trim()) {
      setContactSubmitted(true)
      setTimeout(() => {
        setContactSubmitted(false)
        setContactForm({
          name: '',
          email: '',
          phone: '',
          topic: 'General Inquiry',
          message: '',
        })
        onClose()
      }, 3000)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-blue/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-white border-b border-slate-100 px-6 py-5 rounded-t-2xl">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">Get in touch</p>
            <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-extrabold text-brand-blue">
              Contact Us
            </h2>
            <p className="text-sm text-slate-500 font-light mt-1">
              Our team typically responds within 1–2 business days.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="shrink-0 w-9 h-9 rounded-full bg-slate-100 text-brand-blue flex items-center justify-center hover:bg-slate-200 transition"
            aria-label="Close contact form"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5">
          {contactSubmitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-2xl">
                ✓
              </div>
              <h3 className="text-lg font-bold text-brand-blue">Message sent!</h3>
              <p className="text-sm text-slate-500 font-light">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                    Phone <span className="text-slate-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-topic" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                  Topic
                </label>
                <select
                  id="contact-topic"
                  value={contactForm.topic}
                  onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal bg-white"
                >
                  {contactTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-brand-blue placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-sm rounded-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
            <span className="font-semibold">📞 Toll Free: +234 1 628 3888</span>
            <span className="font-light">Lagos · Abuja</span>
          </div>
        </div>
      </div>
    </div>
  )
}
