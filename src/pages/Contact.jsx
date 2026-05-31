import { useState } from "react";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { schoolInfo } from "../data/content";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to our team for admissions, general enquiries, or to schedule a school visit."
        breadcrumb="Home › Contact"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <SectionTitle tag="Get in Touch" title="We Are Here to Help" center={false} />
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: "Address", value: schoolInfo.address, href: null },
                { icon: Phone, label: "Phone", value: schoolInfo.phone, href: `tel:${schoolInfo.phone}` },
                { icon: Mail, label: "Email", value: schoolInfo.email, href: `mailto:${schoolInfo.email}` },
                { icon: Clock, label: "Office Hours", value: "Monday – Friday: 7:30 AM – 5:00 PM", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-800 text-sm hover:text-emerald-700 transition-colors">{value}</a>
                    ) : (
                      <p className="text-gray-800 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-56 bg-emerald-50 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={28} className="mx-auto mb-2 text-emerald-300" />
                <p className="text-sm">Google Maps</p>
                <p className="text-xs text-gray-300">Kiambu Road, Nairobi</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-emerald-600 underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <CheckCircle size={40} className="text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">Thank you for reaching out. Our team will respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "0712 345 678" },
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
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    id="email" type="email" required placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject" required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject</option>
                    {["Admissions Enquiry", "School Tour Request", "Transport Enquiry", "Fee Structure", "General Enquiry"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message" rows={4} required placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  />
                </div>
                <CTAButton variant="primary" className="w-full">Send Message</CTAButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
