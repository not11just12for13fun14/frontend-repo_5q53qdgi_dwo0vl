import { useRef, useState } from 'react'
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
          <DreamStoryScene />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}

function DreamStoryScene() {
  const ref = useRef(null)
  const [t, setT] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - py) * 8
    const ry = (px - 0.5) * 8
    const tx = (px - 0.5) * 18
    const ty = (py - 0.5) * 18
    setT({ rx, ry, tx, ty })
  }
  function reset() { setT({ rx: 0, ry: 0, tx: 0, ty: 0 }) }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="absolute inset-0 rm:stop-anim"
      role="img"
      aria-label="Cartoon dream sequence: a job seeker helped by SmashThatJob from confusion to clarity and celebration"
    >
      <style>{`
        @keyframes floatA { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes floatB { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes drift { 0% { transform: translateX(0) } 100% { transform: translateX(-60px) } }
        @keyframes twinkle { 0%,100% { opacity: .5 } 50% { opacity: 1 } }
        @media (prefers-reduced-motion: reduce) {
          .rm\\:stop-anim *, .rm\\:stop-anim { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Dreamy night sky */}
      <div className="absolute inset-0" style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: 'transform 120ms ease-out'
      }}>
        {/* gradient aura */}
        <div className="absolute -inset-28 opacity-70" aria-hidden>
          <div className="absolute inset-0 rounded-full blur-3xl" style={{
            background: 'radial-gradient(60% 60% at 50% 50%, rgba(236,72,153,0.14) 0%, rgba(56,189,248,0.12) 45%, rgba(16,185,129,0.12) 85%, transparent 100%)'
          }} />
        </div>

        {/* stars */}
        {Array.from({ length: 24 }).map((_, i) => (
          <Star key={i} x={`${5 + (i*4)%90}%`} y={`${8 + (i*7)%80}%`} size={1 + (i % 3)} t={t} twinkleDelay={i * 0.15} />
        ))}
        {/* moon */}
        <Moon x="78%" y="14%" t={t} />
        {/* clouds */}
        <Cloud x="12%" y="18%" width={160} t={t} depth={0.25} />
        <Cloud x="68%" y="26%" width={200} t={t} depth={0.35} />
        <Cloud x="32%" y="70%" width={180} t={t} depth={0.2} />

        {/* Story panels: 1) overwhelmed 2) assisted by the app 3) celebration */}
        <StoryPanel
          x="8%" y="50%" t={t} depth={0.35} title="Feeling lost" subtitle="Too many job posts, not enough signal"
          mood="sad"
        />
        <StoryPanel
          x="36%" y="34%" t={t} depth={0.55} title="Guided by clarity" subtitle="Our app highlights fit and evidence"
          mood="assist" highlight
        />
        <StoryPanel
          x="68%" y="52%" t={t} depth={0.8} title="Message received" subtitle="Replies and interviews roll in"
          mood="joy"
        />

        {/* helper sprites */}
        <HelperTick x="44%" y="46%" t={t} depth={0.6} />
        <HelperTick x="60%" y="40%" t={t} depth={0.75} />
        <Sparkle x="72%" y="38%" t={t} depth={0.7} />
        <Sparkle x="76%" y="64%" t={t} depth={0.6} />
      </div>
    </div>
  )
}

function Star({ x, y, size = 2, t, twinkleDelay = 0 }) {
  const tx = (t.tx || 0) * 0.12
  const ty = (t.ty || 0) * 0.12
  return (
    <div
      className="absolute rounded-full"
      style={{ left: x, top: y, width: size + 1, height: size + 1, backgroundColor: 'white', opacity: 0.8,
        transform: `translate(${tx}px, ${ty}px)`, transition: 'transform 150ms ease-out',
        animation: `twinkle 2.6s ease-in-out ${twinkleDelay}s infinite` }}
      aria-hidden
    />
  )
}

function Moon({ x, y, t }) {
  const tx = (t.tx || 0) * 0.18
  const ty = (t.ty || 0) * 0.18
  return (
    <div className="absolute" style={{ left: x, top: y, transform: `translate(${tx}px, ${ty}px)`, transition: 'transform 150ms ease-out' }} aria-hidden>
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.25)]" />
    </div>
  )
}

function Cloud({ x, y, width = 160, t, depth = 0.3 }) {
  const tx = (t.tx || 0) * depth
  const ty = (t.ty || 0) * depth
  return (
    <div className="absolute" style={{ left: x, top: y, transform: `translate(${tx}px, ${ty}px)`, transition: 'transform 140ms ease-out' }} aria-hidden>
      <div className="relative" style={{ width }}>
        <div className="absolute -top-2 left-6 h-8 w-8 rounded-full bg-white/10 blur" />
        <div className="h-8 rounded-full bg-white/8 backdrop-blur-sm border border-white/5" style={{ width }} />
        <div className="absolute -top-3 left-10 h-10 w-16 rounded-full bg-white/10 blur" />
      </div>
    </div>
  )
}

function StoryPanel({ x, y, t, depth = 0.5, title, subtitle, mood = 'assist', highlight = false }) {
  const tx = (t.tx || 0) * depth
  const ty = (t.ty || 0) * depth
  return (
    <figure
      className="absolute select-none"
      style={{ left: x, top: y, transform: `translate3d(${tx}px, ${ty}px, 0)`, transition: 'transform 140ms ease-out' }}
      aria-label={`${title}: ${subtitle}`}
    >
      <div className="relative w-60 sm:w-72 h-40 sm:h-44 rounded-2xl p-3 shadow-xl border border-white/10" style={{
        background: highlight
          ? 'linear-gradient(135deg, rgba(236,72,153,0.20), rgba(56,189,248,0.20))'
          : 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(2,6,23,0.6))',
      }}>
        {/* subtle shine */}
        <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.10), transparent 45%)', mixBlendMode: 'overlay' }} aria-hidden />

        {/* cartoon avatar */}
        <Avatar mood={mood} />

        {/* captions */}
        <figcaption className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm">
          <p className="font-semibold text-slate-100 drop-shadow">{title}</p>
          <p className="text-slate-300/80">{subtitle}</p>
        </figcaption>

        {/* ambient floaters */}
        <div className="absolute -top-2 -right-2 w-24 h-24" aria-hidden>
          <div className="absolute right-3 top-4 w-2 h-2 rounded-full bg-fuchsia-300/80" style={{ animation: 'floatA 6s ease-in-out infinite' }} />
          <div className="absolute right-8 top-6 w-1.5 h-1.5 rounded-full bg-cyan-300/80" style={{ animation: 'floatB 7s ease-in-out infinite' }} />
        </div>
      </div>
    </figure>
  )
}

function Avatar({ mood = 'assist' }) {
  const face = (
    <>
      <div className="absolute left-4 top-4 w-20 h-20 rounded-full" style={{ backgroundColor: '#FFDBAC', boxShadow: 'inset 0 -6px 0 rgba(0,0,0,0.06)' }} />
      <div className="absolute left-6 top-3 w-16 h-10 rounded-[24px] bg-slate-800" />
      <div className="absolute left-11 top-[58px] flex gap-6" aria-hidden>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90" />
      </div>
    </>
  )

  if (mood === 'sad') {
    return (
      <div className="absolute inset-3 rounded-xl bg-slate-900/50">
        {face}
        <svg className="absolute left-1/2 -translate-x-1/2 top-[88px]" width="60" height="26" viewBox="0 0 60 26" aria-hidden>
          <path d="M8 18 C 24 4, 36 4, 52 18" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
        </svg>
        <div className="absolute right-3 top-3 text-[10px] text-slate-300/80 bg-slate-800/60 border border-white/10 rounded-md px-2 py-1">404s. Ghosted.</div>
      </div>
    )
  }

  if (mood === 'joy') {
    return (
      <div className="absolute inset-3 rounded-xl bg-slate-900/40">
        {face}
        <svg className="absolute left-1/2 -translate-x-1/2 top-[88px]" width="60" height="26" viewBox="0 0 60 26" aria-hidden>
          <path d="M8 10 C 24 24, 36 24, 52 10" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
        </svg>
        <div className="absolute right-3 top-3 text-[10px] text-emerald-200 bg-emerald-500/20 border border-emerald-300/20 rounded-md px-2 py-1">Interview booked ✓</div>
      </div>
    )
  }

  // assist
  return (
    <div className="absolute inset-3 rounded-xl bg-slate-900/45">
      {face}
      <svg className="absolute left-1/2 -translate-x-1/2 top-[88px]" width="60" height="26" viewBox="0 0 60 26" aria-hidden>
        <path d="M8 12 C 24 20, 36 20, 52 12" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
      </svg>
      {/* mini UI hints */}
      <div className="absolute right-3 top-3 text-[10px] text-sky-200 bg-sky-500/20 border border-sky-300/20 rounded-md px-2 py-1">Best-fit roles</div>
      <div className="absolute left-28 top-14 w-28 h-16 rounded-lg bg-slate-800/70 border border-white/10" />
      <div className="absolute left-28 top-14 -ml-2 -mt-2 w-4 h-4 rounded-full bg-fuchsia-400/80 shadow-[0_0_24px_rgba(217,70,239,0.6)]" style={{ animation: 'floatA 6s ease-in-out infinite' }} />
      <div className="absolute left-40 top-24 -ml-2 -mt-2 w-4 h-4 rounded-full bg-cyan-300/90 shadow-[0_0_24px_rgba(56,189,248,0.6)]" style={{ animation: 'floatB 7s ease-in-out infinite' }} />
    </div>
  )
}

function HelperTick({ x, y, t, depth = 0.6 }) {
  const tx = (t.tx || 0) * depth
  const ty = (t.ty || 0) * depth
  return (
    <div className="absolute" style={{ left: x, top: y, transform: `translate(${tx}px, ${ty}px)`, transition: 'transform 140ms ease-out' }} aria-hidden>
      <div className="w-8 h-8 rounded-full bg-emerald-400/30 backdrop-blur border border-emerald-300/30 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(16,185,129,0.35)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    </div>
  )
}

function Sparkle({ x, y, t, depth = 0.6 }) {
  const tx = (t.tx || 0) * depth
  const ty = (t.ty || 0) * depth
  return (
    <div className="absolute" style={{ left: x, top: y, transform: `translate(${tx}px, ${ty}px)`, transition: 'transform 140ms ease-out' }} aria-hidden>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-80">
        <path d="M12 2l2.5 5L20 9.5 15 12l-3 5-3-5-5-2.5L9.5 7 12 2z" />
      </svg>
    </div>
  )
}
