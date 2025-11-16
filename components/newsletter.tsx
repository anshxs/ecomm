'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-b border-border">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for new arrivals and exclusive insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-foreground text-background text-sm font-medium tracking-wider hover:opacity-80 transition whitespace-nowrap"
          >
            {submitted ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
