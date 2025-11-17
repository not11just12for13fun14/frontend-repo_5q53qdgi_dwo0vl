import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid lg:grid-cols-2 gap-10 relative">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2 py-1 rounded-full w-fit mb-4">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Outcome–centric career platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
            Be better. Be seen better.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            We give you clarity on where you fit, transform how you present yourself, and build the evidence that earns replies. Precision over volume. Honesty without judgment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#waitlist" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition shadow-lg shadow-gray-900/10">
              Join the waitlist
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <a href="#principles" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition">
              Read the principles
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">Evidence‑driven</p>
              <p>Achievements and proof over fluff.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Precision over volume</p>
              <p>Fewer, better applications.</p>
            </div>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/30 bg-white/50 shadow-xl">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-70" />
        </div>
      </div>
    </section>
  )
}
