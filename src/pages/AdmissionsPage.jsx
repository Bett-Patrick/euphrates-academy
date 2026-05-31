import { useState } from 'react'
import { CheckCircle, FileText, Calendar, Phone, Users, Info, AlertCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

const steps = [
  { step: '01', title: 'Submit Enquiry', desc: 'Contact us by phone, email, or fill in the enquiry form on this page to express your interest.' },
  { step: '02', title: 'Book a School Visit', desc: 'Schedule a guided tour with our admissions team. See the facilities, meet teachers, and ask all your questions.' },
  { step: '03', title: 'Complete Application', desc: 'Fill in the official application form and submit all required documents to our admissions office.' },
  { step: '04', title: 'Assessment & Interview', desc: 'Learners sit a brief, age-appropriate placement assessment. Parents meet with the Principal for a brief orientation.' },
  { step: '05', title: 'Offer & Enrolment', desc: 'Receive your offer letter, pay the acceptance fee, and complete the enrolment process. Welcome to Euphrates!' },
]

const requirements = {
  'PP1 & PP2': ['Certified copy of Birth Certificate', 'Two recent passport photos', 'Previous school report (if applicable)', 'Immunisation card (Yellow Card)'],
  'Grade 1 – Grade 3': ['Certified copy of Birth Certificate', 'Previous school leaving certificate/report', 'Two recent passport photos', 'Transfer letter (if transferring)'],
  'Grade 4 – Grade 6': ['Certified copy of Birth Certificate', 'Previous two years\' academic reports', 'Transfer/leaving certificate', 'Two passport photos', 'Placement assessment result'],
}

const feeInfo = [
  { label: 'Application / Registration Fee', value: 'KES 2,000 (non-refundable)' },
  { label: 'Activity & Resource Fee (per term)', value: 'Contact admissions for current rates' },
  { label: 'Transport (optional)', value: 'Available on select routes — enquire for rates' },
  { label: 'Uniform', value: 'Available from the school store at official prices' },
]

export default function AdmissionsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', child: '', grade: '', message: '' })
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
        title="Admissions"
        subtitle="We welcome families who share our vision for excellent, values-driven education. Here's how to join the Euphrates family."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* Banner notice */}
      <div className="bg-emerald-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-white">
            <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span className="font-semibold text-sm">Admissions are currently OPEN for Term 2, 2025 — PP1 to Grade 6</span>
          </div>
          <CTAButton href="tel:+254712345678" variant="white" size="sm">
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Us Now
          </CTAButton>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Admissions Process"
            title="How to Join Euphrates Academy"
            subtitle="Our admissions process is straightforward, transparent, and welcoming. Here are the five steps to enrolling your child."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 h-full flex flex-col items-center text-center card-lift">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm mb-4">
                    {step}
                  </div>
                  <h3 className="font-display font-semibold text-base text-emerald-950 mb-2">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
                {/* connector */}
                {parseInt(step) < 5 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-emerald-200 z-10" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="py-20 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <SectionTitle eyebrow="Checklist" title="Required Documents" centered={false} />
              <div className="space-y-5">
                {Object.entries(requirements).map(([grade, docs]) => (
                  <div key={grade} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden">
                    <div className="bg-emerald-700 px-6 py-3">
                      <h3 className="font-semibold text-white text-sm">{grade}</h3>
                    </div>
                    <ul className="p-5 space-y-2.5">
                      {docs.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <FileText className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees */}
            <div>
              <SectionTitle eyebrow="School Fees" title="Fee Structure Overview" centered={false} />
              <div className="bg-white rounded-2xl border border-emerald-100 overflow-hidden mb-6">
                <div className="bg-emerald-700 px-6 py-3">
                  <h3 className="font-semibold text-white text-sm">2025 Fee Information</h3>
                </div>
                <ul className="divide-y divide-emerald-50">
                  {feeInfo.map(({ label, value }) => (
                    <li key={label} className="px-6 py-4 flex justify-between gap-4">
                      <span className="text-sm text-slate-600">{label}</span>
                      <span className="text-sm font-semibold text-emerald-800 text-right">{value}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-xs text-slate-400 flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    Full fee schedules are provided upon application. Fees are subject to annual review.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-2">Open Day — Every Last Saturday</h3>
                <p className="text-emerald-200/80 text-sm leading-relaxed mb-4">
                  Visit our campus on the last Saturday of each month, 9:00 AM – 12:00 PM. Meet teachers, tour facilities, and get all your admissions questions answered in person.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Next Open Day: Saturday, May 31, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Get in Touch"
            title="Submit an Admissions Enquiry"
            subtitle="Fill in the form below and our admissions team will get back to you within 24 hours."
          />

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-2xl text-emerald-950 mb-3">Enquiry Received!</h3>
              <p className="text-slate-600 leading-relaxed">
                Thank you for your interest in Euphrates Academy. Our admissions team will contact you within 24 hours.
                You can also reach us directly at <strong>+254 712 345 678</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Grace Wanjiku"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="child" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Child's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="child"
                    name="child"
                    type="text"
                    required
                    value={form.child}
                    onChange={handleChange}
                    placeholder="Child's full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Grade Applying For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select grade...</option>
                    <option>PP1</option>
                    <option>PP2</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Any Questions or Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your child or ask any questions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                />
              </div>

              <CTAButton variant="primary" size="lg" className="w-full justify-center">
                Submit Enquiry
              </CTAButton>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
