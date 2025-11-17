import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-gray-900">Smash</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">ThatJob</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-gray-900 transition-colors" href="#principles">Principles</a>
          <a className="hover:text-gray-900 transition-colors" href="#how">How it works</a>
          <a className="hover:text-gray-900 transition-colors" href="#waitlist">Waitlist</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
