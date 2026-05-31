import { Link } from 'react-router-dom'
import {
  BookOpen, Users, Shield, Star, Heart, Monitor,
  Phone, MapPin, Mail, ArrowRight, Play, CheckCircle,
  GraduationCap, Mic, Palette, Leaf, Trophy, ChevronRight
} from 'lucide-react'

import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import FeatureCard from '../components/FeatureCard'
import ProgramCard from '../components/ProgramCard'
import ActivityCard from '../components/ActivityCard'
import TestimonialCard from '../components/TestimonialCard'
import GalleryGrid from '../components/GalleryGrid'
import ContactCard from '../components/ContactCard'

import { programs, whyChooseUs, activities, testimonials } from '../data/content'

const featureIcons = [BookOpen, Users, Shield, Star, Heart, Monitor]
const activityIcons = [Trophy, Mic, Monitor, Mic, Palette, Leaf]

const stats = [
  { value: '500+', label: 'Enrolled Learners' },
  { value: '30+', label: 'Qualified Teachers' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '95%', label: 'Parent Satisfaction' },
]

const programIcons = [GraduationCap, BookOpen, Monitor]

export default function Homepage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        aria-label="Hero section"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-emerald-900">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/85 to-emerald-800/80" />
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)', backgroundSize: '36px 36px' }}
            aria-hidden="true"
          />
          {/* Gold accent orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #d4a017 0%, transparent 70%)' }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700/50 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-300 text-xs font-medium tracking-wide">Admissions Open · 2025</span>
              </div>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
                Where Every Child
                <span className="block" style={{ color: '#d4a017' }}>Discovers Their</span>
                Greatest Potential
              </h1>

              <p className="text-emerald-100/80 text-lg leading-relaxed mb-10 max-w-lg">
                Euphrates Academy offers CBC-compliant, faith-based education for PP1 to Grade 6. A nurturing environment where academic excellence meets holistic character development.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <CTAButton to="/admissions" variant="gold" size="lg">
                  Apply for Admissions →
                </CTAButton>
                <CTAButton to="/about" variant="white-outline" size="lg">
                  Discover Our School
                </CTAButton>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                    <div className="text-emerald-300/70 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — school info card */}
            <div className="animate-fade-up animate-delay-200 hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'CBC Compliant', icon: CheckCircle },
                      { label: 'Faith-Based', icon: Heart },
                      { label: 'Computer Studies', icon: Monitor },
                      { label: 'School Transport', icon: Shield },
                    ].map(({ label, icon: Icon }) => (
                      <div key={label} className="bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                        <Icon className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                        <span className="text-white text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-800/60 rounded-2xl p-5 border border-emerald-700/50">
                    <div className="text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-2">School Hours</div>
                    <div className="text-white font-medium">Monday – Friday</div>
                    <div className="text-emerald-200/80 text-sm">7:30 AM – 4:30 PM</div>
                    <div className="mt-3 pt-3 border-t border-emerald-700/50">
                      <a href="tel:+254712345678" className="flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition-colors">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        +254 712 345 678
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950 text-sm">Top-Rated School</div>
                    <div className="text-slate-500 text-xs">Nairobi Region 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Euphrates Academy"
            title="A School That Puts Your Child First"
            subtitle="We combine Kenya's CBC curriculum with faith-based values and modern facilities to give every learner the best possible start in life."
            id="why-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={featureIcons[i] || BookOpen}
                title={feature.title}
                description={feature.description}
                accent={i === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────────── */}
      <section className="py-24 pattern-bg" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="CBC Programs"
            title="Learning Pathways for Every Stage"
            subtitle="Our CBC-aligned programs are designed to nurture curiosity, build competencies, and develop the whole child at every level."
            id="programs-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {programs.map((prog, i) => (
              <ProgramCard
                key={i}
                icon={programIcons[i] || BookOpen}
                {...prog}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/academics" variant="primary" size="lg">
              Explore Full Curriculum
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── CO-CURRICULAR ─────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="activities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Beyond the Classroom"
            title="Co-Curricular Activities"
            subtitle="We believe a child's education extends far beyond textbooks. Our rich programme of activities builds talent, resilience, and joy."
            id="activities-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, i) => (
              <ActivityCard
                key={i}
                icon={activityIcons[i] || Star}
                title={activity.title}
                description={activity.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/school-life" variant="ghost" size="lg">
              Explore School Life →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-emerald-900" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Parent Stories"
            title="What Our Families Say"
            subtitle="The trust of Kenyan families is our greatest achievement. Here's what parents have to say about the Euphrates experience."
            light={true}
            id="testimonials-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ──────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionTitle
              eyebrow="School Life"
              title="A Glimpse into Euphrates"
              centered={false}
            />
            <CTAButton to="/gallery" variant="ghost" size="md" className="self-start sm:self-auto flex-shrink-0">
              View Full Gallery →
            </CTAButton>
          </div>
          <GalleryGrid preview />
        </div>
      </section>

      {/* ── ADMISSIONS CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 to-emerald-900 relative overflow-hidden" aria-label="Admissions call to action">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #d4a017 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gold-500/20 text-gold-300 text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-2 mb-6"
            style={{ background: 'rgba(212,160,23,0.2)', color: '#f0cc5e' }}>
            2025 Intake — Limited Places
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Give Your Child the<br />
            <span style={{ color: '#d4a017' }}>Education They Deserve</span>
          </h2>
          <p className="text-emerald-200/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Admissions are now open for PP1 through Grade 6. Book a school tour, speak to our team, or apply online today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton to="/admissions" variant="gold" size="lg">
              Apply Online Now
            </CTAButton>
            <CTAButton href="tel:+254712345678" variant="white-outline" size="lg">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us: +254 712 345 678
            </CTAButton>
          </div>
          <p className="text-emerald-300/60 text-sm mt-8">
            Or visit us at: Thika Road, off Kamiti Road, Nairobi · Mon–Fri, 8am–5pm
          </p>
        </div>
      </section>

      {/* ── CONTACT PREVIEW ──────────────────────────────────────── */}
      <section className="py-24 pattern-bg" aria-labelledby="contact-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Reach Us"
            title="We'd Love to Hear From You"
            subtitle="Our admissions team is available Monday to Friday. Stop by, call, or email — we're always happy to welcome new families."
            id="contact-preview-heading"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <ContactCard
              icon={MapPin}
              title="Our Location"
              lines={['Thika Road, off Kamiti Road', 'Nairobi, Kenya']}
              href="https://maps.google.com"
              cta="Get Directions"
            />
            <ContactCard
              icon={Phone}
              title="Call Us"
              lines={['+254 712 345 678', '+254 733 456 789']}
              href="tel:+254712345678"
              cta="Call Now"
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              lines={['info@euphratesacademy.ac.ke', 'admissions@euphratesacademy.ac.ke']}
              href="mailto:info@euphratesacademy.ac.ke"
              cta="Send Email"
            />
            <ContactCard
              icon={GraduationCap}
              title="School Hours"
              lines={['Mon – Fri: 7:30am – 4:30pm', 'Sat: Closed (Except Events)']}
              cta="Book a Visit"
            />
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-emerald-100 h-64 bg-emerald-50 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d1fae5 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />
            <div className="relative z-10 text-center">
              <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-3" aria-hidden="true" />
              <p className="text-emerald-800 font-semibold mb-1">Euphrates Academy</p>
              <p className="text-slate-500 text-sm mb-4">Thika Road, off Kamiti Road, Nairobi</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
