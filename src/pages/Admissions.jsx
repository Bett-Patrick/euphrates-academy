import { useState } from "react";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { faqs, schoolInfo } from "../data/content";
import { CheckCircle, ChevronDown, ChevronUp, Phone, Mail, Calendar } from "lucide-react";

const steps = [
  { step: "01", title: "Submit Enquiry", desc: "Complete the online enquiry form below or call our admissions office to express your interest." },
  { step: "02", title: "School Tour", desc: "Schedule a visit to tour our facilities, meet the teachers, and experience the Euphrates Academy environment first-hand." },
  { step: "03", title: "Application Form", desc: "Fill out the official application form and submit all required documents including birth certificate and report books." },
  { step: "04", title: "Assessment", desc: "Your child completes a brief, age-appropriate entry assessment to help us place them in the right learning group." },
  { step: "05", title: "Offer & Fees", desc: "Receive your admission offer letter and complete fee payment within the stipulated time to confirm your place." },
  { step: "06", title: "Welcome!", desc: "Receive your welcome pack, uniform list, and booklist. Your child is ready to begin their Euphrates journey!" },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900 text-sm pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-emerald-600 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Admissions() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", grade: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageBanner
        title="Admissions"
        subtitle="We are now enrolling for the 2026 academic year. Places are limited — begin your child's application today."
        breadcrumb="Home › Admissions"
      />

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Admission Process" title="How to Enrol at Euphrates Academy" subtitle="A straightforward six-step process to welcome your child into our school community." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-5xl font-display font-bold text-emerald-50 absolute top-4 right-5 select-none">{step}</span>
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white text-xs font-bold mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form + Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <SectionTitle tag="Get in Touch" title="Admission Enquiry" center={false} />
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <CheckCircle size={40} className="text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Enquiry Received!</h3>
                <p className="text-gray-600 text-sm">Thank you for your interest in Euphrates Academy. Our admissions team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {[
                  { id: "name", label: "Parent / Guardian Name", type: "text", placeholder: "e.g. Grace Wambui" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 0712 345 678" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "e.g. grace@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input
                      id={id} type={type} required placeholder={placeholder}
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                  <select
                    id="grade" required
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select grade level</option>
                    {["PP1", "PP2", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                  <textarea
                    id="message" rows={3} placeholder="Any additional information or questions?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  />
                </div>
                <CTAButton variant="primary" size="md" className="w-full">
                  Submit Admission Enquiry
                </CTAButton>
              </form>
            )}
          </div>

          {/* Requirements + contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-2">
                {["Child's birth certificate (copy)", "Passport-size photographs (x2)", "Most recent school report book", "Transfer letter (if transferring)", "Immunisation records", "Completed application form"].map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-800 text-white rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Speak to Admissions</h3>
              <div className="space-y-3">
                <a href={`tel:${schoolInfo.phone}`} className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors text-sm">
                  <Phone size={15} className="text-amber-400" /> {schoolInfo.phone}
                </a>
                <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-3 text-emerald-100 hover:text-white transition-colors text-sm">
                  <Mail size={15} className="text-amber-400" /> {schoolInfo.email}
                </a>
                <div className="flex items-center gap-3 text-emerald-100 text-sm">
                  <Calendar size={15} className="text-amber-400" /> Mon–Fri: 7:30 AM – 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle tag="FAQ" title="Common Admission Questions" />
          <div className="space-y-3">
            {faqs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
