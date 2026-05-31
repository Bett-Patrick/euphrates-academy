export default function FeatureCard({ icon: Icon, title, description, accent = false }) {
  return (
    <div className={`card-lift rounded-2xl p-6 border transition-all duration-300
      ${accent
        ? 'bg-emerald-700 border-emerald-600 text-white'
        : 'bg-white border-emerald-100 hover:border-emerald-200'}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
        ${accent ? 'bg-emerald-600' : 'bg-emerald-50'}`}
      >
        <Icon className={`w-6 h-6 ${accent ? 'text-white' : 'text-emerald-700'}`} aria-hidden="true" />
      </div>
      <h3 className={`font-display font-semibold text-lg mb-2
        ${accent ? 'text-white' : 'text-emerald-950'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed
        ${accent ? 'text-emerald-100/80' : 'text-slate-500'}`}>
        {description}
      </p>
    </div>
  )
}
