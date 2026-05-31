import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { activities } from "../data/content";
import { Bus, Utensils, Shield, Wifi, BookOpen, Trophy, Music, Mic, Palette, BookMarked, Monitor } from "lucide-react";

const iconMap = { Trophy, Music, Mic, Palette, BookMarked, Monitor };

const facilities = [
  { icon: BookOpen, title: "Modern Classrooms", desc: "Well-ventilated, brightly lit CBC-configured classrooms with learning resource areas and project display walls." },
  { icon: Monitor, title: "ICT & Computer Lab", desc: "A fully equipped computer lab with internet access, giving every learner hands-on digital literacy skills from Grade 1." },
  { icon: Trophy, title: "Sports Grounds", desc: "A multi-use sports field for football, athletics, and physical education activities for all CBC levels." },
  { icon: BookMarked, title: "School Library", desc: "A growing library with graded readers, CBC reference materials, and a dedicated reading corner for every level." },
  { icon: Utensils, title: "Dining Hall & Nutrition", desc: "Hot, balanced meals served daily in a clean dining hall, with a school dietitian overseeing nutritional standards." },
  { icon: Bus, title: "School Transport", desc: "A fleet of supervised school buses serving key Nairobi routes with GPS tracking and professional drivers." },
  { icon: Shield, title: "Security & Safety", desc: "24/7 CCTV, controlled access gates, trained security, and a child-protection policy for every learner's safety." },
  { icon: Wifi, title: "Connectivity", desc: "Reliable campus Wi-Fi and digital displays in key areas keep learning modern and parents informed." },
];

export default function SchoolLife() {
  return (
    <main>
      <PageBanner
        title="School Life"
        subtitle="Beyond the classroom — discover the rich, nurturing environment we have created at Euphrates Academy."
        breadcrumb="Home › School Life"
      />

      {/* Co-curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Co-Curricular" title="Activities That Shape Great Character" subtitle="We believe the best learners are well-rounded individuals. Our co-curricular programme is designed for every interest and talent." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map(({ icon, label, desc }) => {
              const Icon = iconMap[icon] || Trophy;
              return (
                <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                    <Icon size={22} className="text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Facilities" title="A Campus Designed for Learning" subtitle="Purpose-built facilities that support every dimension of CBC learning and holistic development." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-3">
                  <Icon size={20} className="text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport detail */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 block">School Transport</span>
            <h2 className="font-display font-bold text-3xl mb-4">Safe, Reliable Transport for Your Child</h2>
            <p className="text-emerald-100 text-sm leading-relaxed mb-6">
              Euphrates Academy operates a dedicated fleet of school buses serving the Nairobi metropolitan area. All buses are GPS-tracked, supervised by a trained attendant, and follow strict safety protocols.
            </p>
            <ul className="space-y-2 mb-8">
              {["GPS-tracked fleet", "Trained bus attendants on every route", "WhatsApp drop-off & pick-up notifications", "Routes across Kiambu, Ruaka, Ridgeways, Muthaiga", "Flexible route additions available on request"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-emerald-100 text-sm">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <CTAButton to="/contact" variant="gold">Enquire About Transport</CTAButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["Nairobi Routes", "12+"], ["Students Transported", "200+"], ["On-Time Rate", "98%"], ["Years Operating", "10+"]].map(([label, value]) => (
              <div key={label} className="bg-emerald-700/50 rounded-2xl p-5 text-center">
                <p className="font-display font-bold text-3xl text-amber-400 mb-1">{value}</p>
                <p className="text-emerald-200 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
