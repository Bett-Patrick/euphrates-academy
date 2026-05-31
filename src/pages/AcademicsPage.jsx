import { BookOpen, Monitor, FlaskConical, Globe, Music, Users, GraduationCap, CheckCircle, ClipboardList, BarChart3 } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'

const cbcPillars = [
  { icon: BookOpen, label: 'Literacy & Communication' },
  { icon: BarChart3, label: 'Numeracy' },
  { icon: FlaskConical, label: 'Science & STEM' },
  { icon: Globe, label: 'Social & Environmental Studies' },
  { icon: Music, label: 'Creative Arts' },
  { icon: Monitor, label: 'Digital Literacy & ICT' },
]

const levels = [
  {
    level: 'Pre-Primary (PP1 & PP2)',
    age: 'Ages 4–6',
    color: 'amber',
    description: 'The foundation years at Euphrates focus on play-based, discovery learning. Children develop language, number sense, creativity, and social skills in a safe, stimulating environment.',
    subjects: [
      'Language Activities (English & Kiswahili)',
      'Mathematical Activities',
      'Environmental Activities',
      'Psychomotor & Creative Arts',
      'Christian Religious Education (CRE)',
      'Movement Education',
    ],
    assessment: 'Continuous observational assessment through portfolios, project work, and teacher observations. No formal exams.',
  },
  {
    level: 'Lower Primary (Grade 1 – Grade 3)',
    age: 'Ages 6–9',
    color: 'emerald',
    description: 'Building on Pre-Primary foundations, Lower Primary learners develop core literacy, numeracy, and inquiry skills. Lessons are activity-based and contextual to Kenya\'s environment.',
    subjects: [
      'English Language Activities',
      'Kiswahili Language Activities',
      'Mathematics',
      'Environmental Studies',
      'Christian Religious Education',
      'Creative Arts (Art & Craft, Music)',
      'Physical & Health Education',
      'Life Skills',
    ],
    assessment: 'Formative assessment through classroom activities, projects, and termly summative reports. Portfolio-based learning evidence.',
  },
  {
    level: 'Upper Primary (Grade 4 – Grade 6)',
    age: 'Ages 9–12',
    color: 'teal',
    description: 'Upper Primary deepens subject knowledge and critical thinking, introducing more specialised learning areas and cross-curricular projects. Learners begin exploring career pathways.',
    subjects: [
      'English',
      'Kiswahili',
      'Mathematics',
      'Integrated Science',
      'Social Studies',
      'Computer Studies & ICT',
      'Creative Arts (Art, Craft, Music, Drama)',
      'Physical & Health Education',
      'Christian Religious Education',
      'Life Skills',
    ],
    assessment: 'Mix of formative and summative assessment, portfolio documentation, project-based learning, and term reports aligned to CBC assessment rubrics.',
  },
]

const colorsMap = {
  amber: { header: 'bg-amber-600', badge: 'bg-amber-100 text-amber-800', bullet: 'bg-amber-500', tag: 'text-amber-700' },
  emerald: { header: 'bg-emerald-700', badge: 'bg-emerald-100 text-emerald-800', bullet: 'bg-emerald-500', tag: 'text-emerald-700' },
  teal: { header: 'bg-teal-700', badge: 'bg-teal-100 text-teal-800', bullet: 'bg-teal-500', tag: 'text-teal-700' },
}

const specialPrograms = [
  {
    icon: Monitor,
    title: 'Computer Studies & ICT',
    desc: 'Every learner from Grade 3 upwards attends weekly computer lab sessions. Curriculum covers digital literacy, typing skills, Microsoft Office basics, internet safety, and introductory coding concepts — preparing learners for a technology-driven future.',
  },
  {
    icon: Globe,
    title: 'Environmental Education',
    desc: 'Euphrates integrates environmental consciousness throughout the curriculum. Our school garden, composting programme, and nature study sessions bring learning to life and instil stewardship of God\'s creation.',
  },
  {
    icon: Users,
    title: 'Life Skills Education',
    desc: 'A structured Life Skills programme runs across all grades, covering personal health, emotional intelligence, peer relationships, and decision-making — skills that extend far beyond the classroom.',
  },
  {
    icon: FlaskConical,
    title: 'STEM Integration',
    desc: 'Science, Technology, Engineering and Mathematics are taught in an integrated, project-based manner. Annual Science & Technology exhibitions showcase learner innovations to the school community and parents.',
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        title="CBC Academic Programmes"
        subtitle="A rigorous, skills-based curriculum aligned to Kenya's Competency Based Curriculum for PP1 through Grade 6."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      {/* CBC Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <SectionTitle eyebrow="Our Curriculum" title="The CBC Difference at Euphrates" centered={false} />
              <p className="text-slate-600 leading-relaxed mb-5">
                Kenya's Competency Based Curriculum (CBC) represents a fundamental shift from content memorisation to skills development. At Euphrates Academy, we embraced CBC early and deeply — our teachers are fully trained, our resources are CBC-aligned, and our assessment approach puts learner growth at the centre.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Rather than measuring a child's worth by an end-of-year exam, we track growth continuously across seven core competencies: communication, critical thinking, creativity, collaboration, digital literacy, learning to learn, and self-efficacy.
              </p>
              <div className="space-y-3">
                {[
                  'TSC-certified, CBC-trained teaching staff',
                  'Portfolio-based assessment and learner documentation',
                  'Project-based and inquiry learning approaches',
                  'Regular formative and summative assessments',
                  'Parental involvement in learner growth tracking',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cbcPillars.map(({ icon: Icon, label }) => (
                <div key={label} className="card-lift bg-emerald-50 rounded-2xl p-5 border border-emerald-100 text-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-medium text-emerald-900 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Levels */}
      <section className="py-20 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Learning Pathways"
            title="Programme Levels"
            subtitle="Each level of learning at Euphrates is thoughtfully designed to meet learners where they are and take them where they need to go."
          />
          <div className="space-y-8">
            {levels.map((lvl) => {
              const c = colorsMap[lvl.color]
              return (
                <div key={lvl.level} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm">
                  <div className={`${c.header} px-8 py-5 flex flex-wrap items-center justify-between gap-4`}>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">{lvl.level}</h3>
                    </div>
                    <span className={`text-sm font-semibold px-4 py-1.5 rounded-full bg-white/20 text-white`}>
                      {lvl.age}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{lvl.description}</p>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <div className="flex items-center gap-2 mb-3">
                            <ClipboardList className="w-4 h-4 text-slate-500" aria-hidden="true" />
                            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Assessment Approach</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{lvl.assessment}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Learning Areas</p>
                        <ul className="space-y-2">
                          {lvl.subjects.map((s, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`}></span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Special Programmes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Signature Programmes"
            title="Special Learning Initiatives"
            subtitle="Beyond the standard CBC framework, Euphrates offers enrichment programmes that set our learners apart."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {specialPrograms.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-lift bg-emerald-50 rounded-2xl p-7 border border-emerald-100 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-emerald-950 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <CTAButton to="/admissions" variant="primary" size="lg">
              Enrol Your Child Today
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
