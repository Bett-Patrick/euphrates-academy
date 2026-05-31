import { useState } from "react";
import PageBanner from "../components/PageBanner";
import SectionTitle from "../components/SectionTitle";
import { galleryImages } from "../data/content";
import { X } from "lucide-react";

const categories = ["All", ...new Set(galleryImages.map((g) => g.category))];

// Extended images for gallery page
const allImages = [
  ...galleryImages,
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=75", alt: "Music class performance", category: "Music" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=75", alt: "School assembly morning", category: "Events" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75", alt: "Athletics on the track", category: "Sports" },
  { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=75", alt: "Quiet reading time", category: "Library" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? allImages : allImages.filter((i) => i.category === filter);

  return (
    <main>
      <PageBanner
        title="School Gallery"
        subtitle="A window into the vibrant daily life, activities, and achievements at Euphrates Academy."
        breadcrumb="Home › Gallery"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-emerald-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img)}
                className="relative overflow-hidden rounded-xl aspect-square group focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-2">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-md">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.src.replace("w=600", "w=1200")}
            alt={lightbox.alt}
            className="max-w-4xl w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/70 text-sm">{lightbox.alt}</p>
        </div>
      )}
    </main>
  );
}
