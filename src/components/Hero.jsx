import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Iridescent grid + glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.10),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.10),transparent_45%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]">
          <div className="h-full w-full opacity-[0.08]" style={{backgroundImage:'linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid lg:grid-cols-2 gap-10 relative">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-fuchsia-300/90 bg-fuchsia-400/10 border border-fuchsia-300/20 px-2 py-1 rounded-full w-fit mb-4">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Outcome–centric career platform
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Be better. Be seen better.
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            We give you clarity on where you fit, transform how you present yourself, and build the evidence that earns replies. Precision over volume. Honesty without judgment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#waitlist" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white hover:brightness-110 transition shadow-lg shadow-fuchsia-500/20">
              Join the waitlist
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <a href="#principles" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">
              Read the principles
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-200">Evidence‑driven</p>
              <p>Achievements and proof over fluff.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Precision over volume</p>
              <p>Fewer, better applications.</p>
            </div>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}
