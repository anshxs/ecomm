'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                Get In Touch
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-widest">EMAIL</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:hello@minimal.com" className="hover:opacity-60 transition">
                    hello@minimal.com
                  </a>
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-widest">PHONE</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:opacity-60 transition">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium tracking-widest">HOURS</h3>
                <p className="text-muted-foreground">
                  Monday — Friday: 9:00 AM – 6:00 PM<br />
                  Saturday: 10:00 AM – 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              <div>
                <label className="block text-sm font-medium tracking-widest mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium tracking-widest mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium tracking-widest mb-2">
                  SUBJECT
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="product">Product Question</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium tracking-widest mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 border border-foreground text-sm font-medium tracking-wider hover:bg-foreground hover:text-background transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
