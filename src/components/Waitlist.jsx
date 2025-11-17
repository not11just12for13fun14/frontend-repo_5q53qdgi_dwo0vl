import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // For prelaunch, we just capture locally; hook to backend later
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get early access</h2>
          <p className="mt-3 text-gray-600">Join the waitlist for updates and a chance to be in the first cohort.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button type="submit" className="rounded-lg bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition">
              {submitted ? 'Thanks — You’re on the list!' : 'Join waitlist'}
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  )
}
