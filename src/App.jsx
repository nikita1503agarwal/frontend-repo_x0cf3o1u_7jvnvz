import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Composer from './components/Composer'
import Feed from './components/Feed'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* subtle grid pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Navbar />
      <Hero />

      <main className="relative z-10 space-y-12 pb-16">
        <Composer onPosted={() => window.location.reload()} />
        <Feed />
      </main>

      <footer className="mt-10 py-8 text-center text-blue-700/70">
        Built for manhwa fans • Share, rate, and discover
      </footer>
    </div>
  )
}

export default App
