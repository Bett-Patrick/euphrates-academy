import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import SectionTitle from '../components/SectionTitle'
import CTAButton from '../components/CTAButton'
import { newsItems } from '../data/content'

const categoryColors = {
  Academics: 'bg-emerald-100 text-emerald-800',
  Sports: 'bg-blue-100 text-blue-800',
  Events: 'bg-amber-100 text-amber-800',
  Admissions: 'bg-purple-100 text-purple-800',
}

const featured = newsItems[0]
const rest = newsItems.slice(1)

const gradients = [
  'from-emerald-700 to-emerald-900',
  'from-teal-600 to-emerald-800',
  'from-green-700 to-teal-800',
  'from-emerald-600 to-green-900',
]

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News & Updates"
        subtitle="Stay updated with the latest happenings, achievements, and announcements from Euphrates Academy."
        breadcrumbs={[{ label: 'News' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <div className="mb-16">
            <SectionTitle eyebrow="Latest News" title="Featured Story" centered={false} />
            <div className="card-lift bg-white rounded-2xl border border-emerald-100 overflow-hidden">
              <div className={`h-64 bg-gradient-to-br ${gradients[0]} relative flex items-end p-8`}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[featured.category] || 'bg-white/20 text-white'}`}>
                    {featured.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight max-w-xl">
                    {featured.title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-5 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <SectionTitle eyebrow="More Stories" title="Recent Updates" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rest.map((item, i) => (
              <article key={item.id} className="card-lift bg-white rounded-2xl border border-emerald-100 overflow-hidden flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${gradients[(i + 1) % gradients.length]} relative`}>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-white/20 text-white'}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-emerald-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{item.excerpt}</p>
                  <a href="#" className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mt-auto">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="bg-emerald-900 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Stay in the Loop
            </h2>
            <p className="text-emerald-200/80 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Subscribe to the Euphrates Academy newsletter for termly updates, event announcements, and school news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-emerald-700 text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <CTAButton variant="gold" size="md">Subscribe</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
