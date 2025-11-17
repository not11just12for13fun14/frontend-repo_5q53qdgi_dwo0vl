import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500 text-white shadow-md shadow-fuchsia-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-slate-100">Smash</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">ThatJob</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition-colors" href="#principles">Principles</a>
          <a className="hover:text-white transition-colors" href="#how">How it works</a>
          <a className="hover:text-white transition-colors" href="#waitlist">Waitlist</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-slate-200 bg-slate-800/60">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
