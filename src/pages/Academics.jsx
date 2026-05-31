import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import { programs } from "../data/content";
import { CheckCircle, Clock, BookOpen } from "lucide-react";

const subjects = [
  { grade: "PP1 & PP2", list: ["Language Activities", "Mathematical Activities", "Environmental Activities", "Psychomotor & Creative Activities", "Religious Education Activities", "Physical Health Activities"] },
  { grade: "Grade 1–3", list: ["Literacy Activities", "Kiswahili Language Activities", "Mathematical Activities", "Environmental Activities", "Indigenous Language", "Creative Arts & Crafts", "Religious Education", "Physical & Health Education"] },
  { grade: "Grade 4–6", list: ["English", "Kiswahili", "Mathematics", "Integrated Science", "Social Studies & Citizenship", "Religious Education (CRE)", "Computer Studies", "Home Science", "Agriculture", "Creative Arts"] },
];

export default function Academics() {
  return (
    <main>
      <PageBanner
        title="CBC Academic Programmes"
        subtitle="A fully compliant, learner-centred curriculum from PP1 through Grade 6, designed to develop competent, confident young Kenyans."
        breadcrumb="Home › Academics"
      />

      {/* CBC intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle tag="Kenya CBC" title="What is the Competency Based Curriculum?" center={false} />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Competency Based Curriculum (CBC) replaced the 8-4-4 system in Kenya and focuses on nurturing skills, values, and competencies rather than rote memorization. The CBC develops the whole child — intellectually, socially, and creatively.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              At Euphrates Academy, we fully embrace the CBC framework, using project-based learning, group activities, and formative assessments to develop practical competencies in every learner.
            </p>
            <ul className="space-y-2">
              {["Learner-centred pedagogy", "Practical skills and competencies", "Continuous assessment over exams", "Holistic development approach", "Regular parent progress reports"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=700&q=75"
            alt="Students engaged in CBC learning activities"
            className="rounded-2xl object-cover w-full h-80 shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Our Programmes" title="Three Learning Pathways" subtitle="Each pathway is calibrated to the developmental needs and CBC requirements of the learner's age group." />
          <div className="space-y-6">
            {programs.map((p, i) => (
              <div key={p.level} className={`rounded-2xl p-7 grid md:grid-cols-2 gap-7 items-center ${i % 2 === 1 ? "bg-amber-50 border border-amber-100" : "bg-emerald-50 border border-emerald-100"}`}>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${i % 2 === 1 ? "text-amber-600" : "text-emerald-600"}`}>{p.level}</span>
                  <h2 className="font-display font-bold text-2xl text-gray-900 mt-1 mb-1">{p.grades}</h2>
                  <p className={`text-sm font-medium mb-4 ${i % 2 === 1 ? "text-amber-500" : "text-emerald-500"}`}>{p.ages}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-3">Key Learning Areas:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i % 2 === 1 ? "bg-amber-400" : "bg-emerald-500"}`} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Learning Areas" title="Subjects by Grade Level" subtitle="A comprehensive view of the CBC learning areas offered at each level of Euphrates Academy." />
          <div className="grid md:grid-cols-3 gap-6">
            {subjects.map(({ grade, list }) => (
              <div key={grade} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-emerald-800 px-5 py-4">
                  <h3 className="font-semibold text-white text-sm">{grade}</h3>
                </div>
                <ul className="p-5 space-y-2">
                  {list.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <BookOpen size={13} className="text-emerald-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School hours */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Clock size={28} className="text-amber-400 mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">School Hours</h2>
          <p className="text-emerald-200 mb-6 text-sm">Our structured day is designed for maximum learning engagement and healthy routines.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["Morning Prep", "6:30 AM"], ["School Start", "7:45 AM"], ["Break & Lunch", "10:20 AM / 1:00 PM"], ["School End", "3:45 PM"]].map(([label, time]) => (
              <div key={label} className="bg-emerald-700/40 rounded-xl p-4">
                <p className="font-bold text-amber-400 text-lg">{time}</p>
                <p className="text-emerald-200 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
