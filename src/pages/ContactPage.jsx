import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Thika Road, off Kamiti Road', 'Nairobi, Kenya'],
    action: { label: 'Get Directions', href: 'https://maps.google.com' },
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+254 712 345 678', '+254 733 456 789'],
    action: { label: 'Call Now', href: 'tel:+254712345678' },
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@euphratesacademy.ac.ke', 'admissions@euphratesacademy.ac.ke'],
    action: { label: 'Email Us', href: 'mailto:info@euphratesacademy.ac.ke' },
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Fri: 7:30 AM – 5:00 PM', 'Sat: 8:00 AM – 1:00 PM (Term time)'],
    action: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We're always happy to hear from you. Reach out by phone, email, or visit us in person."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map(({ icon: Icon, title, lines, action }) => (
              <div key={title} className="card-lift bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-base text-emerald-950 mb-3">{title}</h3>
                {lines.map((line, i) => (
                  <p key={i} className="text-sm text-slate-600 leading-relaxed">{line}</p>
                ))}
                {action && (
                  <a
                    href={action.href}
                    className="mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div>
              <SectionTitle eyebrow="Find Us" title="How to Reach Us" centered={false} />
              <div className="rounded-2xl overflow-hidden border border-emerald-100 h-80 bg-emerald-50 flex items-center justify-center relative mb-5">
                <div className="absolute inset-0"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d1fae5 1px, transparent 0)', backgroundSize: '28px 28px' }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-3" aria-hidden="true" />
                  <p className="text-emerald-800 font-semibold mb-1">Euphrates Academy</p>
                  <p className="text-slate-500 text-sm mb-4">Thika Road, off Kamiti Road, Nairobi</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-700 text-white hover:bg-emerald-600 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="bg-emerald-900 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Directions from CBD</h3>
                <ol className="space-y-2 text-sm text-emerald-200/80 list-decimal list-inside">
                  <li>Head north on Thika Road (A2) from the city centre</li>
                  <li>Turn left onto Kamiti Road after the GSU roundabout</li>
                  <li>Euphrates Academy is 500m on the left, behind the green gate</li>
                </ol>
                <p className="text-emerald-300/60 text-xs mt-4">School transport available on select routes — contact us for details.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionTitle eyebrow="Send a Message" title="Get in Touch" centered={false} />
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-emerald-950 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Thank you for reaching out. We'll respond within one business day. For urgent matters, please call us directly at <strong>+254 712 345 678</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-emerald-100 rounded-2xl p-7 shadow-sm" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input
                        id="c-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                    <select
                      id="c-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a topic...</option>
                      <option>Admissions Enquiry</option>
                      <option>Fee Information</option>
                      <option>Transport Query</option>
                      <option>Academic Query</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <CTAButton variant="primary" size="lg" className="w-full justify-center">
                    Send Message
                  </CTAButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
