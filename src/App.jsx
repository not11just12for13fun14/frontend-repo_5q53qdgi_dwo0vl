import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Principles from './components/Principles'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Principles />
      <HowItWorks />
      <Waitlist />
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SmashThatJob. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-gray-900" href="#principles">Principles</a>
            <a className="hover:text-gray-900" href="#how">How it works</a>
            <a className="hover:text-gray-900" href="#waitlist">Waitlist</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
