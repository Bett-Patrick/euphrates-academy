export default function ActivityCard({ icon: Icon, title, description, image }) {
  return (
    <div className="card-lift rounded-2xl overflow-hidden bg-white border border-emerald-100 group">
      {/* Image placeholder with gradient */}
      <div className="relative h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
            <Icon className="w-14 h-14 text-white/30" aria-hidden="true" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-emerald-950 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
