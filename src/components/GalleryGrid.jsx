const PLACEHOLDER_IMAGES = [
  { id: 1, label: 'Morning Assembly', color: 'from-emerald-600 to-emerald-800', aspect: 'tall' },
  { id: 2, label: 'Science Lab', color: 'from-teal-600 to-teal-800', aspect: 'normal' },
  { id: 3, label: 'Sports Day', color: 'from-emerald-700 to-green-900', aspect: 'normal' },
  { id: 4, label: 'Art & Craft', color: 'from-emerald-500 to-emerald-700', aspect: 'wide' },
  { id: 5, label: 'Library', color: 'from-teal-700 to-emerald-800', aspect: 'normal' },
  { id: 6, label: 'Computer Lab', color: 'from-green-700 to-emerald-900', aspect: 'normal' },
]

function GalleryItem({ item }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-pointer
      ${item.aspect === 'tall' ? 'row-span-2' : item.aspect === 'wide' ? 'col-span-2' : ''}`}
    >
      {/* Placeholder gradient bg */}
      <div className={`w-full h-full min-h-[200px] bg-gradient-to-br ${item.color} flex items-end p-4
        group-hover:brightness-90 transition-all duration-300`}
      >
        {/* Faux image texture */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="relative z-10 text-white text-sm font-medium">{item.label}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function GalleryGrid({ items = PLACEHOLDER_IMAGES, preview = false }) {
  const displayItems = preview ? items.slice(0, 6) : items

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
      {displayItems.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  )
}
