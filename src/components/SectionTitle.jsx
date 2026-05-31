export default function SectionTitle({ tag, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block text-emerald-600 text-xs font-bold uppercase tracking-[0.15em] mb-3 bg-emerald-50 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className={`font-display font-bold text-3xl md:text-4xl leading-tight mb-3 ${light ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-emerald-100" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
