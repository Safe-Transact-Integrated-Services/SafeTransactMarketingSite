import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl bg-brand-blue overflow-hidden shadow-2xl p-8 sm:p-16 text-center space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-teal/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Catch New Updates Instantly
            </h2>
            <p className="text-slate-300 font-light text-sm sm:text-base">
              Subscribe to our newsletter to receive the latest updates, announcements, and prospects regarding digital payments in Nigeria.
            </p>
          </div>

          <div className="relative z-10 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs sm:text-sm font-semibold animate-pulse">
                🎉 Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-full py-3.5 px-6 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-brand-blue font-bold text-sm rounded-full shadow-lg hover:bg-slate-100 hover:scale-102 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
