import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'

const categories = ['All', 'Classrooms', 'Sports', 'Events', 'Arts', 'Computer Lab', 'Outdoor']

const galleryItems = [
  { id: 1, label: 'Morning Assembly', category: 'Events', color: 'from-emerald-600 to-emerald-800', aspect: 'tall' },
  { id: 2, label: 'Science Lab Session', category: 'Classrooms', color: 'from-teal-600 to-teal-800', aspect: 'normal' },
  { id: 3, label: 'Athletics Day', category: 'Sports', color: 'from-emerald-700 to-green-900', aspect: 'normal' },
  { id: 4, label: 'Art & Craft Exhibition', category: 'Arts', color: 'from-emerald-500 to-emerald-700', aspect: 'wide' },
  { id: 5, label: 'Library Reading', category: 'Classrooms', color: 'from-teal-700 to-emerald-800', aspect: 'normal' },
  { id: 6, label: 'Computer Studies', category: 'Computer Lab', color: 'from-green-700 to-emerald-900', aspect: 'normal' },
  { id: 7, label: 'Football Training', category: 'Sports', color: 'from-emerald-800 to-teal-900', aspect: 'normal' },
  { id: 8, label: 'Grade 6 Graduation', category: 'Events', color: 'from-emerald-600 to-green-800', aspect: 'tall' },
  { id: 9, label: 'Drama Performance', category: 'Arts', color: 'from-teal-600 to-emerald-800', aspect: 'wide' },
  { id: 10, label: 'Garden Project', category: 'Outdoor', color: 'from-green-600 to-emerald-700', aspect: 'normal' },
  { id: 11, label: 'Mathematics Class', category: 'Classrooms', color: 'from-emerald-700 to-teal-800', aspect: 'normal' },
  { id: 12, label: 'Inter-School Debate', category: 'Events', color: 'from-teal-700 to-green-900', aspect: 'normal' },
  { id: 13, label: 'Choir Practice', category: 'Arts', color: 'from-emerald-500 to-teal-700', aspect: 'normal' },
  { id: 14, label: 'Netball Tournament', category: 'Sports', color: 'from-green-700 to-teal-900', aspect: 'normal' },
  { id: 15, label: 'Science Exhibition', category: 'Events', color: 'from-emerald-600 to-emerald-900', aspect: 'normal' },
]

import { useState } from 'react'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory)

  return (
    <>
      <PageBanner
        title="School Gallery"
        subtitle="A visual story of life at Euphrates Academy — in the classroom, on the field, and everywhere in between."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12" role="group" aria-label="Filter gallery by category">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/20'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-100'}`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
            {filtered.map(item => (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer
                  ${item.aspect === 'tall' ? 'row-span-2' : item.aspect === 'wide' ? 'col-span-2' : ''}`}
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-end p-4
                  group-hover:brightness-90 transition-all duration-300`}
                >
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-white/60 bg-white/10 rounded-full px-2 py-0.5">{item.category}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-20 text-sm">No images in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
