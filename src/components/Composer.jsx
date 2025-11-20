import { useState } from 'react'
import { ImagePlus, Link2, Star } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Composer({ onPosted }) {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [rating, setRating] = useState(8)
  const [genres, setGenres] = useState('')
  const [links, setLinks] = useState('')
  const [imageUrls, setImageUrls] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const payload = {
        title: title.trim(),
        summary: summary.trim() || undefined,
        rating: rating ? Number(rating) : undefined,
        genres: genres
          .split(',')
          .map((g) => g.trim())
          .filter(Boolean),
        links: links
          .split(',')
          .map((l) => l.trim())
          .filter(Boolean),
        image_urls: imageUrls
          .split(',')
          .map((u) => u.trim())
          .filter(Boolean),
      }

      const res = await fetch(`${API_BASE}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to post')
      const data = await res.json()
      onPosted?.(data.id)
      setTitle(''); setSummary(''); setGenres(''); setLinks(''); setImageUrls(''); setRating(8)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="compose" className="max-w-3xl mx-auto px-4">
      <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl ring-1 ring-blue-200/60 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-blue-900">Create a recommendation</h2>
        <p className="text-sm text-blue-700/70 mb-4">Share why this manhwa is worth reading. Add links and images too.</p>

        <form onSubmit={submit} className="grid gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className="w-full px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200 text-blue-900 placeholder-blue-400/70 outline-none"
          />

          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={3}
            placeholder="Why do you recommend it?"
            className="w-full px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200 text-blue-900 placeholder-blue-400/70 outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200">
              <Star className="w-4 h-4 text-blue-600" />
              <input
                type="number"
                min="0" max="10" step="0.5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="bg-transparent outline-none w-full text-blue-900"
              />
            </div>
            <input
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
              placeholder="Genres (comma separated)"
              className="px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200 text-blue-900 placeholder-blue-400/70 outline-none"
            />
            <div className="hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200">
              <Link2 className="w-4 h-4 text-blue-600" />
              <input
                value={links}
                onChange={(e) => setLinks(e.target.value)}
                placeholder="Links (comma separated URLs)"
                className="bg-transparent outline-none w-full text-blue-900"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 ring-1 ring-blue-200">
              <ImagePlus className="w-4 h-4 text-blue-600" />
              <input
                value={imageUrls}
                onChange={(e) => setImageUrls(e.target.value)}
                placeholder="Image URLs (comma separated)"
                className="bg-transparent outline-none w-full text-blue-900"
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex justify-end">
            <button
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? 'Posting...' : 'Post recommendation'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
