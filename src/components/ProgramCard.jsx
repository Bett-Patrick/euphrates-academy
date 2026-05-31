import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProgramCard({ icon: Icon, level, title, ageRange, subjects, color = 'emerald' }) {
  const colors = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      icon: 'bg-emerald-700 text-white',
      badge: 'bg-emerald-100 text-emerald-800',
      title: 'text-emerald-950',
      level: 'text-emerald-600',
    },
    gold: {
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      icon: 'bg-amber-600 text-white',
      badge: 'bg-amber-100 text-amber-800',
      title: 'text-emerald-950',
      level: 'text-amber-600',
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-100',
      icon: 'bg-teal-700 text-white',
      badge: 'bg-teal-100 text-teal-800',
      title: 'text-emerald-950',
      level: 'text-teal-600',
    },
  }
  const c = colors[color] || colors.emerald

  return (
    <div className={`card-lift rounded-2xl p-7 border ${c.bg} ${c.border} flex flex-col h-full`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>

      <div className={`text-xs font-semibold tracking-widest uppercase mb-1 ${c.level}`}>
        {level}
      </div>
      <h3 className={`font-display font-bold text-xl mb-2 ${c.title}`}>{title}</h3>
      <p className={`text-sm font-medium mb-4 ${c.level}`}>{ageRange}</p>

      <ul className="flex-1 space-y-2 mb-6">
        {subjects.map((s, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
            {s}
          </li>
        ))}
      </ul>

      <Link
        to="/academics"
        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${c.level} hover:gap-2.5`}
      >
        Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
