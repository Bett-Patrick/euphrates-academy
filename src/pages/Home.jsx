import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, Award, Shield, Heart, Monitor, Users,
  Trophy, Music, Mic, Palette, BookMarked,
  ChevronRight, MapPin, Phone, Mail, Star, Bus, ArrowRight
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { features, programs, activities, testimonials, galleryImages, schoolInfo } from "../data/content";

const iconMap = { BookOpen, Award, Shield, Heart, Monitor, Users, Trophy, Music, Mic, Palette, BookMarked };

function FeatureCard({ icon, title, desc }) {
  const Icon = iconMap[icon] || BookOpen;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
      <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
        <Icon size={22} className="text-emerald-700" />
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 text-base">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ProgramCard({ level, grades, ages, accent, desc, highlights }) {
  const isGold = accent === "gold";
  return (
    <div className={`rounded-2xl p-7 flex flex-col gap-4 ${isGold ? "bg-amber-50 border border-amber-100" : "bg-emerald-50 border border-emerald-100"}`}>
      <div>
        <span className={`text-xs font-bold uppercase tracking-widest ${isGold ? "text-amber-600" : "text-emerald-600"}`}>{level}</span>
        <h3 className="font-display font-bold text-xl text-gray-900 mt-1">{grades}</h3>
        <p className={`text-xs font-medium mt-0.5 ${isGold ? "text-amber-500" : "text-emerald-500"}`}>{ages}</p>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      <ul className="space-y-1.5 mt-1">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isGold ? "bg-amber-400" : "bg-emerald-500"}`} />
            {h}
          </li>
        ))}
      </ul>
      <Link to="/academics" className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${isGold ? "text-amber-600 hover:text-amber-700" : "text-emerald-700 hover:text-emerald-800"} transition-colors`}>
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function ActivityCard({ icon, label, desc }) {
  const Icon = iconMap[icon] || Trophy;
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/20 transition-all duration-200 group">
      <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-3">
        <Icon size={20} className="text-amber-400" />
      </div>
      <h3 className="font-semibold text-white mb-1.5 text-sm">{label}</h3>
      <p className="text-emerald-200 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, role, quote, avatar }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed italic">"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 bg-emerald-700 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 flex items-center overflow-hidden" aria-label="Hero">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-700/30 rounded-full translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700 text-emerald-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              Admissions Open — 2026 Academic Year
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Where Every Child
              <span className="text-amber-400 block">Discovers Their</span>
              <span className="block">Greatness</span>
            </h1>
            <p className="text-emerald-200 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Euphrates Academy is a premier CBC-compliant primary school in Nairobi, nurturing confident, curious, and character-driven learners from PP1 to Grade 6.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton to="/admissions" size="lg" variant="gold">
                Apply for Admission
              </CTAButton>
              <CTAButton href={`tel:${schoolInfo.phone}`} size="lg" variant="outline-white">
                <Phone size={16} /> Call Us Today
              </CTAButton>
            </div>
            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-emerald-800">
              {[["CBC Compliant", "Ministry of Education"], ["PP1–Grade 6", "All School Levels"], ["Safe & Secure", "24/7 Campus Security"]].map(([title, sub]) => (
                <div key={title}>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-emerald-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-emerald-600/20 rounded-3xl rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=75"
              alt="Students learning at Euphrates Academy"
              className="relative rounded-3xl object-cover w-full h-[520px] shadow-2xl"
              loading="eager"
              decoding="async"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                <Award size={18} className="text-emerald-700" />
              </div>
              <div>
                <p className="text-gray-900 text-xs font-bold">Fully CBC Compliant</p>
                <p className="text-gray-400 text-[10px]">Kenya Ministry of Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50" aria-labelledby="why-title">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Why Euphrates Academy"
            title="A School Built Around Your Child"
            subtitle="We combine academic excellence with holistic development — nurturing confident, competent learners who are prepared for a fast-changing world."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="why-title">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* CBC Programs */}
      <section className="py-20 bg-white" aria-labelledby="programs-title">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="CBC Programs"
            title="Learning Pathways for Every Stage"
            subtitle="From early years play-based learning to upper primary critical thinking — we align every stage to Kenya's CBC framework."
          />
          <div id="programs-title" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => <ProgramCard key={p.level} {...p} />)}
          </div>
          <div className="text-center mt-8">
            <CTAButton to="/academics" variant="outline">View Full Curriculum Details</CTAButton>
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden" aria-labelledby="activities-title">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionTitle
            tag="Co-Curricular Activities"
            title="More Than Academics"
            subtitle="We develop the whole child — athletes, artists, debaters, and thinkers — through rich co-curricular programs."
            light
          />
          <div id="activities-title" className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activities.map((a) => <ActivityCard key={a.label} {...a} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" aria-labelledby="testimonials-title">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Parent Testimonials"
            title="Trusted by Families Across Nairobi"
            subtitle="Hear from parents whose children are thriving at Euphrates Academy."
          />
          <div id="testimonials-title" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white" aria-labelledby="gallery-title">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="School Life"
            title="Life at Euphrates Academy"
            subtitle="A glimpse into the vibrant, nurturing environment we have created for our learners."
          />
          <div id="gallery-title" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-md">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton to="/gallery" variant="outline">View Full Gallery</CTAButton>
          </div>
        </div>
      </section>

      {/* Admissions CTA Banner */}
      <section className="py-20 bg-emerald-700 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Admissions Now Open</span>
          <h2 id="cta-title" className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-emerald-100 text-base mb-8 max-w-lg mx-auto">
            Places for the 2026 academic year are limited. Schedule a school tour and start your child's enrollment journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/admissions" size="lg" variant="gold">
              Start Application Process
            </CTAButton>
            <CTAButton href={`tel:${schoolInfo.phone}`} size="lg" variant="outline-white">
              <Phone size={16} /> {schoolInfo.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white" aria-labelledby="contact-preview-title">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <MapPin size={20} className="text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
              <p className="text-gray-500 text-sm">{schoolInfo.address}</p>
            </div>
          </div>
          <a href={`tel:${schoolInfo.phone}`} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <Phone size={20} className="text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <p className="text-emerald-700 text-sm font-medium">{schoolInfo.phone}</p>
            </div>
          </a>
          <a href={`mailto:${schoolInfo.email}`} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <Mail size={20} className="text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-emerald-700 text-sm font-medium">{schoolInfo.email}</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
