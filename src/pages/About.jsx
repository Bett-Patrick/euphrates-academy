import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Heart, title: "Faith & Integrity", desc: "Rooted in Christian principles, we cultivate honesty, compassion, and moral courage in every learner." },
  { icon: Target, title: "Academic Excellence", desc: "Rigorous CBC-aligned programmes challenge every learner to achieve their highest academic potential." },
  { icon: Eye, title: "Holistic Development", desc: "We nurture the intellectual, social, spiritual, and physical dimensions of each child's development." },
  { icon: CheckCircle, title: "Inclusive Community", desc: "Every family, regardless of background, is welcomed and valued as a full member of our school family." },
];

const team = [
  { name: "Mrs. Margaret Wanjiku", role: "Head Teacher", initials: "MW", exp: "22 years in education" },
  { name: "Mr. Joseph Kariuki", role: "Deputy Head – Academics", initials: "JK", exp: "15 years in education" },
  { name: "Ms. Pauline Achieng", role: "Head of Pre-Primary", initials: "PA", exp: "10 years in early childhood" },
  { name: "Mr. Samuel Mwangi", role: "Head of Upper Primary", initials: "SM", exp: "14 years in education" },
];

export default function About() {
  return (
    <main>
      <PageBanner
        title="About Euphrates Academy"
        subtitle="Nurturing excellence, building character, and shaping Kenya's next generation of leaders since 2008."
        breadcrumb="Home › About Us"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle tag="Our Story" title="Grounded in Purpose Since 2008" center={false} />
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Euphrates Academy was founded with a simple but powerful conviction: every Kenyan child deserves a world-class education delivered with love, structure, and faith. Over fifteen years, we have grown from a small neighbourhood school into one of Nairobi's most respected CBC primary schools.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Our name is drawn from the Euphrates River — one of history's great rivers of life and civilization. Like the river, we exist to nourish, sustain, and give life to every learner who walks through our gates. We are fully compliant with Kenya's Competency Based Curriculum and dedicated to forming learners who are confident, competent, and of strong character.
            </p>
            <CTAButton to="/admissions" variant="primary">Enrol Your Child Today</CTAButton>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=75"
              alt="Students learning at Euphrates Academy"
              className="rounded-2xl object-cover w-full h-96 shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 bg-emerald-700 text-white rounded-2xl px-6 py-4 shadow-xl hidden md:block">
              <p className="font-display font-bold text-3xl">15+</p>
              <p className="text-emerald-200 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-800 text-white rounded-2xl p-8">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 block">Our Mission</span>
            <h2 className="font-display font-bold text-2xl mb-4">Equipping Learners for Life</h2>
            <p className="text-emerald-100 text-sm leading-relaxed">
              To provide a holistic, CBC-aligned education that equips every learner with the knowledge, values, skills, and character needed to thrive as responsible citizens in Kenya and the world.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3 block">Our Vision</span>
            <h2 className="font-display font-bold text-2xl mb-4 text-gray-900">A Centre of Excellence</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be Kenya's leading CBC primary school — recognized for academic excellence, strong Christian values, and the holistic formation of confident, compassionate, and capable young leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Core Values" title="What We Stand For" subtitle="Every decision we make is guided by these foundational values." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Leadership Team" title="Experienced, Passionate Educators" subtitle="Our leadership brings decades of combined experience to create an outstanding learning environment." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map(({ name, role, initials, exp }) => (
              <div key={name} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-3">
                  {initials}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{name}</h3>
                <p className="text-emerald-600 text-xs font-medium mb-1">{role}</p>
                <p className="text-gray-400 text-xs">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
