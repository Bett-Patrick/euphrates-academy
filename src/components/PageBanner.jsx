export default function PageBanner({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white pt-32 pb-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-700/30 rounded-full -translate-y-1/3 translate-x-1/4 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-amber-500/10 rounded-full translate-y-1/2 blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        {breadcrumb && (
          <p className="text-emerald-300 text-sm mb-3">{breadcrumb}</p>
        )}
        <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-3">{title}</h1>
        {subtitle && <p className="text-emerald-100 text-base md:text-lg max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
