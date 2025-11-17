import { useState, useRef } from 'react'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

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
          <ParallaxEmblem />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}

function ParallaxEmblem() {
  const ref = useRef(null)
  const [t, setT] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - py) * 10 // tilt X
    const ry = (px - 0.5) * 10 // tilt Y
    const tx = (px - 0.5) * 16 // translate X
    const ty = (py - 0.5) * 16 // translate Y
    setT({ rx, ry, tx, ty })
  }

  function reset() {
    setT({ rx: 0, ry: 0, tx: 0, ty: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="absolute inset-0 grid place-items-center"
      aria-label="Wellbeing emblem with subtle parallax"
    >
      {/* Ambient backdrop */}
      <div className="absolute -inset-24 opacity-60" aria-hidden>
        <div className="absolute inset-0 rounded-full blur-3xl" style={{
          background: 'radial-gradient(60% 60% at 50% 50%, rgba(34,197,94,0.15) 0%, rgba(56,189,248,0.12) 40%, rgba(236,72,153,0.10) 80%, transparent 100%)'
        }} />
      </div>

      {/* Layer group with tilt */}
      <div
        style={{
          transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: 'transform 120ms ease-out'
        }}
        className="relative w-[72%] sm:w-[68%] lg:w-[60%] aspect-square"
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-[28px] p-[2px]"
          style={{
            background: 'linear-gradient(135deg, rgba(250,204,21,0.35), rgba(16,185,129,0.35), rgba(59,130,246,0.35))'
          }}
        >
          <div className="h-full w-full rounded-[26px] bg-slate-900/70 backdrop-blur-md" />
        </div>

        {/* Glow halo */}
        <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-amber-300/15 via-emerald-300/10 to-sky-300/15 blur-2xl" aria-hidden />

        {/* Central orb */}
        <div
          className="absolute inset-4 rounded-[22px] shadow-2xl"
          style={{
            background: 'radial-gradient(120% 120% at 10% 10%, rgba(250,204,21,0.25), transparent 40%), radial-gradient(120% 120% at 90% 20%, rgba(16,185,129,0.28), transparent 45%), radial-gradient(120% 120% at 50% 90%, rgba(56,189,248,0.28), rgba(2,6,23,0.6) 70%)'
          }}
        >
          <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-slate-900/40 via-slate-900/20 to-slate-900/60" />

          {/* Soft sheen */}
          <div className="absolute -inset-px rounded-[22px]" style={{
            background: 'conic-gradient(from 120deg at 50% 50%, rgba(255,255,255,0.08), transparent 30%, rgba(255,255,255,0.08) 60%, transparent 90%)',
            mixBlendMode: 'overlay',
            opacity: 0.9
          }} aria-hidden />

          {/* Smile path */}
          <svg
            className="absolute inset-0"
            viewBox="0 0 100 100"
            role="img"
            aria-label="Smiling arc indicating wellbeing"
            style={{ transform: `translate3d(${t.tx}px, ${t.ty}px, 0)` , transition: 'transform 120ms ease-out'}}
          >
            <defs>
              <linearGradient id="smileStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FACC15" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            <path
              d="M25 58 C 40 78, 60 78, 75 58"
              fill="none"
              stroke="url(#smileStroke)"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.95"
            />
            {/* Eyes */}
            <circle cx="38" cy="42" r="3" fill="white" opacity="0.9" />
            <circle cx="62" cy="42" r="3" fill="white" opacity="0.9" />
          </svg>

          {/* Confidence tick */}
          <div
            className="absolute right-6 top-6 h-10 w-10 rounded-full grid place-items-center shadow-lg"
            style={{
              transform: `translate3d(${t.tx * 0.6}px, ${t.ty * 0.6}px, 0)`,
              transition: 'transform 120ms ease-out',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(56,189,248,0.25))',
              border: '1px solid rgba(255,255,255,0.12)'
            }}
            aria-hidden
          >
            <Sparkles className="h-5 w-5 text-emerald-300" />
          </div>

          {/* Floating happy dots */}
          <Dot x="18%" y="22%" size={8} color="#FDE68A" t={t} factor={0.4} />
          <Dot x="82%" y="50%" size={7} color="#A7F3D0" t={t} factor={0.5} />
          <Dot x="36%" y="78%" size={6} color="#BAE6FD" t={t} factor={0.35} />
        </div>
      </div>
    </div>
  )
}

function Dot({ x, y, size, color, t, factor }) {
  return (
    <div
      className="absolute rounded-full shadow"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 24px ${color}55`,
        transform: `translate3d(${(t.tx || 0) * factor}px, ${(t.ty || 0) * factor}px, 0)`,
        transition: 'transform 150ms ease-out'
      }}
      aria-hidden
    />
  )
}
