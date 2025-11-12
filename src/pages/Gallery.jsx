export default function Gallery() {
  const images = Array.from({ length: 9 }).map((_, i) => `https://images.unsplash.com/photo-15${i}00?auto=format&fit=crop&w=800&q=60`)

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
      <p className="text-gray-600 mb-6">Replace with your photos. Send me links or upload and I'll update.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded-xl bg-gray-200">
            <img src={`https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60`} alt="Wedding" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
