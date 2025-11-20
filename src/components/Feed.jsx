import { useEffect, useState } from 'react'
import { ExternalLink, Star } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Feed() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/posts`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div id="feed" className="max-w-6xl mx-auto px-4 py-10 text-blue-800">Loading...</div>
    )
  }

  return (
    <section id="feed" className="max-w-6xl mx-auto px-4 py-10 grid gap-4">
      {items.length === 0 && (
        <div className="text-blue-700/70">No posts yet. Be the first to recommend a manhwa!</div>
      )}
      {items.map((p) => (
        <article key={p.id} className="rounded-3xl bg-white/60 backdrop-blur-xl ring-1 ring-blue-200/60 shadow-sm p-5">
          <div className="flex items-start gap-4">
            {p.image_urls?.[0] && (
              <img src={p.image_urls[0]} alt="cover" className="w-28 h-36 object-cover rounded-2xl ring-1 ring-blue-200/60" />
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900">{p.title}</h3>
              {p.rating !== undefined && (
                <div className="mt-1 inline-flex items-center gap-1 text-blue-800">
                  <Star className="w-4 h-4 text-yellow-500" /> {p.rating}/10
                </div>
              )}
              {p.genres?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.genres.map((g, i) => (
                    <span key={i} className="px-2 py-1 rounded-lg bg-blue-100/70 text-blue-800 text-xs ring-1 ring-blue-200">{g}</span>
                  ))}
                </div>
              )}
              {p.summary && <p className="mt-2 text-blue-800/80">{p.summary}</p>}
              {p.links?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.links.map((l, i) => (
                    <a key={i} href={l} target="_blank" className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 underline">
                      <ExternalLink className="w-4 h-4" /> Link {i + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
