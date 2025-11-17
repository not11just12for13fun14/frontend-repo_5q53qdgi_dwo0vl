import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Principles from './components/Principles'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 relative">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" aria-hidden>
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl bg-gradient-to-br from-fuchsia-600/30 via-cyan-500/20 to-indigo-600/30" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full blur-3xl bg-gradient-to-br from-blue-600/20 via-emerald-500/20 to-purple-600/30" />
      </div>

      <Navbar />
      <Hero />
      <Principles />
      <HowItWorks />
      <Waitlist />
      <footer className="border-t border-slate-800/80 bg-gradient-to-t from-transparent to-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SmashThatJob. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-200 transition-colors" href="#principles">Principles</a>
            <a className="hover:text-slate-200 transition-colors" href="#how">How it works</a>
            <a className="hover:text-slate-200 transition-colors" href="#waitlist">Waitlist</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
