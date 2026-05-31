import { Quote } from 'lucide-react'

export default function TestimonialCard({ quote, name, role, initials, stars = 5 }) {
  return (
    <div className="card-lift bg-white rounded-2xl p-7 border border-emerald-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <Quote className="w-8 h-8 text-emerald-200" aria-hidden="true" />
        <div className="flex gap-0.5" role="img" aria-label={`${stars} out of 5 stars`}>
          {Array.from({ length: stars }).map((_, i) => (
            <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#d4a017" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <blockquote className="flex-1 mb-6">
        <p className="text-slate-600 text-sm leading-relaxed italic">"{quote}"</p>
      </blockquote>

      <div className="flex items-center gap-3 pt-5 border-t border-emerald-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-sm text-emerald-950">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
    </div>
  )
}
