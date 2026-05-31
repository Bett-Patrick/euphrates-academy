import { Heart, Target, Eye, Users, Award, BookOpen, CheckCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

const values = [
  { icon: Heart, title: 'Faith & Integrity', desc: 'Rooted in Christian values, we model honesty, compassion, and ethical living in all we do.' },
  { icon: Target, title: 'Academic Excellence', desc: 'High standards and CBC best practices ensure every learner achieves their personal best.' },
  { icon: Users, title: 'Community & Belonging', desc: 'We foster a family-like environment where every child, teacher, and parent feels valued.' },
  { icon: Award, title: 'Holistic Growth', desc: 'Academics, character, sports, and the arts — we develop the complete child.' },
]

const milestones = [
  { year: '2009', event: 'Euphrates Academy founded with 42 learners and a vision to transform education in Nairobi.' },
  { year: '2012', event: 'Expanded to full primary school offering from PP1 through Standard 8 under the 844 system.' },
  { year: '2018', event: 'Opened state-of-the-art computer lab and launched the ICT integration programme.' },
  { year: '2021', event: 'Successfully transitioned to the CBC curriculum and became one of Nairobi\'s first fully CBC-compliant schools.' },
  { year: '2023', event: 'Awarded "Best Private Primary School — CBC Implementation" at the Nairobi Education Excellence Awards.' },
  { year: '2025', event: 'Serving 500+ learners with 30+ qualified staff, continuing to grow and innovate.' },
]

const teamMembers = [
  { name: 'Mrs. Dorothy Kamau', role: 'School Principal', initials: 'DK', desc: 'M.Ed. in Educational Leadership | 18 years in education' },
  { name: 'Mr. Samuel Njeru', role: 'Deputy Principal – Academics', initials: 'SN', desc: 'B.Ed. Mathematics & Science | CBC curriculum champion' },
  { name: 'Mrs. Grace Achieng', role: 'Head of Pre-Primary', initials: 'GA', desc: 'Early Childhood Development specialist | 12 years experience' },
  { name: 'Mr. Joel Mwangi', role: 'Head of ICT & Computer Studies', initials: 'JM', desc: 'BSc. Computer Science | Digital literacy advocate' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Euphrates Academy"
        subtitle="Our story, mission, and the passionate team shaping the next generation of Kenyan leaders."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Mission, Vision, Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <SectionTitle
                eyebrow="Our Story"
                title="15 Years of Shaping Young Minds"
                centered={false}
              />
              <p className="text-slate-600 leading-relaxed mb-5">
                Founded in 2009 by a group of Christian educators with a shared dream, Euphrates Academy was born from a desire to create a school that would go beyond rote learning — a place where every child would be known by name and nurtured in their unique gifting.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Over 15 years, we have grown from a small community school to one of Nairobi's most respected primary institutions, serving over 500 learners from PP1 through Grade 6. Our early and wholehearted adoption of Kenya's Competency Based Curriculum (CBC) has placed us at the forefront of modern primary education.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through it all, our core conviction has never changed: every child deserves an education that builds character as much as it builds knowledge.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Mission', icon: Target, text: 'To provide quality, CBC-compliant, faith-based education that equips every learner with the skills, values, and confidence to excel in a changing world.' },
                { label: 'Vision', icon: Eye, text: 'To be the leading primary school in Kenya, known for holistic excellence, strong character, and a deep love for God and community.' },
                { label: 'Our Faith', icon: Heart, text: 'We are a Christian school. Morning devotion, scripture, and prayer are woven into our daily school life — not as routine, but as genuine conviction.' },
                { label: 'Our Promise', icon: CheckCircle, text: 'Every parent who entrusts us with their child will see consistent growth — academically, socially, and in character — by the end of each term.' },
              ].map(({ label, icon: Icon, text }) => (
                <div key={label} className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                    <span className="font-display font-semibold text-emerald-900 text-sm">{label}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <SectionTitle
            eyebrow="Our Values"
            title="What We Stand For"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-lift bg-white rounded-2xl p-6 border border-emerald-100 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-base text-emerald-950 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <SectionTitle
            eyebrow="Our Journey"
            title="Milestones That Define Us"
          />
          <div className="relative max-w-3xl mx-auto mb-20">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-100" aria-hidden="true" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center z-10 shadow-lg shadow-emerald-700/20">
                    <span className="text-white text-xs font-bold">{year.slice(2)}</span>
                  </div>
                  <div className="flex-1 pt-2 pb-2">
                    <span className="text-xs font-semibold text-emerald-600 tracking-wide">{year}</span>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <SectionTitle
            eyebrow="Leadership"
            title="Meet Our Team"
            subtitle="Our dedicated leadership team brings decades of experience and genuine passion for child development."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map(({ name, role, initials, desc }) => (
              <div key={name} className="card-lift bg-white rounded-2xl border border-emerald-100 overflow-hidden text-center">
                <div className="h-28 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-white">{initials}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base text-emerald-950 mb-1">{name}</h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-3">{role}</p>
                  <p className="text-xs text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Come See Euphrates in Person
          </h2>
          <p className="text-emerald-200/80 mb-8 leading-relaxed">
            The best way to understand our school is to visit. Book a guided tour with our admissions team — no obligation, just a warm welcome.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton to="/admissions" variant="gold" size="lg">Book a School Tour</CTAButton>
            <CTAButton to="/contact" variant="white-outline" size="lg">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
