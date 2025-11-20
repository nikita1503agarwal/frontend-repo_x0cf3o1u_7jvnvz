import { Menu, Search, Star, Image } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-blue-100/40 border-b border-blue-200/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400/80 ring-1 ring-white/30 shadow-sm flex items-center justify-center">
            <Star className="w-5 h-5 text-white drop-shadow" />
          </div>
          <span className="font-semibold text-blue-900 tracking-tight">Manhwa Forum</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 ring-1 ring-blue-200/60 shadow-sm">
            <Search className="w-4 h-4 text-blue-500" />
            <input
              className="bg-transparent outline-none text-sm placeholder-blue-400/70 text-blue-900"
              placeholder="Search titles, genres, users..."
            />
          </div>
          <button className="px-3 py-2 rounded-xl bg-blue-500 text-white text-sm shadow hover:bg-blue-600 transition">
            New Post
          </button>
        </div>

        <button className="md:hidden p-2 text-blue-700">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
