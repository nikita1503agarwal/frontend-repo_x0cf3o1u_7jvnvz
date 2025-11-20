export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/60 via-blue-50/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900">
              Share and discover the best Manhwas
            </h1>
            <p className="mt-3 text-blue-700/80">
              A light, glassy forum for readers to post recommendations, rate current series, and link to official sources.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#compose" className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition">
                Write a post
              </a>
              <a href="#feed" className="px-4 py-2 rounded-xl bg-white/60 ring-1 ring-blue-200 text-blue-800 hover:bg-white/80 transition">
                Browse feed
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/30 to-blue-500/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl bg-white/50 backdrop-blur-xl ring-1 ring-blue-200/60 shadow-xl p-5">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 ring-1 ring-blue-200/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
