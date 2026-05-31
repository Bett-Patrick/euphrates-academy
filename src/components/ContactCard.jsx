export default function ContactCard({ icon: Icon, title, lines, href, cta }) {
  const content = (
    <div className="card-lift bg-white rounded-2xl p-6 border border-emerald-100 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-emerald-700" aria-hidden="true" />
      </div>
      <h3 className="font-display font-semibold text-base text-emerald-950 mb-2">{title}</h3>
      {lines.map((line, i) => (
        <p key={i} className="text-sm text-slate-500 leading-relaxed">{line}</p>
      ))}
      {cta && (
        <span className="mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
          {cta} →
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl">
        {content}
      </a>
    )
  }
  return content
}
