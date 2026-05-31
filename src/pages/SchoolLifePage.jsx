import { Trophy, Mic, Monitor, Palette, Leaf, Book, Heart, Users } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import ActivityCard from '../components/ActivityCard'
import CTAButton from '../components/CTAButton'
import { activities } from '../data/content'

const activityIcons = [Trophy, Mic, Monitor, Mic, Palette, Leaf]

const traditions = [
  { title: 'Morning Devotion', desc: 'Each school day begins with worship, scripture reading, and prayer — setting the tone for a focused, purposeful day.' },
  { title: 'Annual Sports Day', desc: 'A highly anticipated event where learners compete in athletics, team sports, and relay races, culminating in a colourful prize-giving ceremony.' },
  { title: 'Science & Tech Exhibition', desc: 'Learners from Grade 3 upwards present innovative CBC portfolio projects to parents and judges in our annual showcase of young innovators.' },
  { title: 'Cultural Day & Talent Show', desc: 'Celebrating Kenya\'s rich cultural diversity through traditional dress, food, music, and performance. An event the whole school family looks forward to.' },
  { title: 'Termly Prize-Giving', desc: 'Academic achievers, most improved learners, and character award recipients are celebrated at our termly prize-giving events.' },
  { title: 'Community Service Day', desc: 'Every term, learners participate in community outreach activities, from environmental clean-ups to visiting elderly care homes nearby.' },
]

const clubs = [
  { name: 'ICT & Computer Club', members: 'Grade 3–6', meets: 'Every Tuesday & Thursday' },
  { name: 'Drama & Debate Club', members: 'Grade 4–6', meets: 'Every Wednesday' },
  { name: 'Environmental / Green Club', members: 'All Grades', meets: 'Every Friday (lunchtime)' },
  { name: 'School Choir', members: 'All Grades', meets: 'Mondays & Thursdays' },
  { name: 'Athletics Club', members: 'Grade 2–6', meets: 'After school, Tue & Thu' },
  { name: 'Art & Craft Club', members: 'All Grades', meets: 'Every Wednesday' },
  { name: 'Young Scientists Club', members: 'Grade 4–6', meets: 'Every Monday' },
  { name: 'Reading & Library Club', members: 'All Grades', meets: 'Daily (lunchtime)' },
]

export default function SchoolLifePage() {
  return (
    <>
      <PageBanner
        title="School Life"
        subtitle="At Euphrates, school life is vibrant, purpose-filled, and joyful. Here's what makes our community special."
        breadcrumbs={[{ label: 'School Life' }]}
      />

      {/* Co-curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Beyond the Classroom"
            title="Co-Curricular Activities"
            subtitle="Holistic development means nurturing talent, building resilience, and helping children discover their passions beyond academics."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {activities.map((activity, i) => (
              <ActivityCard
                key={i}
                icon={activityIcons[i] || Trophy}
                title={activity.title}
                description={activity.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Clubs & Societies"
            title="Join a Club, Find Your Passion"
            subtitle="Our diverse range of clubs gives every learner the opportunity to explore interests, make friends, and develop new skills."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {clubs.map(({ name, members, meets }) => (
              <div key={name} className="card-lift bg-white rounded-2xl p-5 border border-emerald-100">
                <h3 className="font-display font-semibold text-base text-emerald-950 mb-3">{name}</h3>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>{members}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Book className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>{meets}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Traditions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Traditions"
            title="Events That Define Our Community"
            subtitle="Shared traditions build belonging. These recurring events are highlights of the Euphrates calendar year."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {traditions.map(({ title, desc }) => (
              <div key={title} className="card-lift bg-emerald-50 rounded-2xl p-6 border border-emerald-100 relative pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-l-2xl" aria-hidden="true" />
                <h3 className="font-display font-semibold text-base text-emerald-950 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900 rounded-3xl p-10 text-center">
            <Heart className="w-10 h-10 text-emerald-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              A Community That Cares
            </h2>
            <p className="text-emerald-200/80 max-w-xl mx-auto mb-8 leading-relaxed">
              The Euphrates family extends beyond the school gate. We partner with parents, involve grandparents, and celebrate the community that shapes our children every day.
            </p>
            <CTAButton to="/admissions" variant="gold" size="lg">
              Join Our School Community
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
