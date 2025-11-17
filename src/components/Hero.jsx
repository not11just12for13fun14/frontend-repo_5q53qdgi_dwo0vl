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
          <ParallaxCharacters />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-xl" />
        </div>
      </div>
    </section>
  )
}

function ParallaxCharacters() {
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
    const tx = (px - 0.5) * 16
    const ty = (py - 0.5) * 16
    setT({ rx, ry, tx, ty })
  }

  function reset() {
    setT({ rx: 0, ry: 0, tx: 0, ty: 0 })
  }

  const layers = [
    { id: 'l1', depth: 0.35 },
    { id: 'l2', depth: 0.55 },
    { id: 'l3', depth: 0.8 },
  ]

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="absolute inset-0"
      role="img"
      aria-label="Friendly, diverse characters celebrating growth and wellbeing"
    >
      <style>{`
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes floatFast { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
      `}</style>

      {/* Ambient backdrop */}
      <div className="absolute -inset-24 opacity-60" aria-hidden>
        <div className="absolute inset-0 rounded-full blur-3xl" style={{
          background: 'radial-gradient(60% 60% at 50% 50%, rgba(34,197,94,0.15) 0%, rgba(56,189,248,0.12) 40%, rgba(236,72,153,0.10) 80%, transparent 100%)'
        }} />
      </div>

      {/* Stage */}
      <div
        className="absolute inset-0"
        style={{
          transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: 'transform 120ms ease-out'
        }}
      >
        {/* Confetti-like soft dots for happiness */}
        <SoftDot x="12%" y="18%" color="#A7F3D0" blur="28px" t={t} factor={0.35} />
        <SoftDot x="84%" y="26%" color="#FDE68A" blur="30px" t={t} factor={0.25} />
        <SoftDot x="72%" y="78%" color="#BAE6FD" blur="26px" t={t} factor={0.3} />

        {/* Character cluster */}
        <CharacterCard
          x="14%" y="56%" scale={0.9} hue="amber"
          skin="#F1C27D" shirt="#0EA5E9" bgFrom="rgba(250,204,21,0.25)" bgTo="rgba(56,189,248,0.2)"
          smile
          t={t}
          depth={layers[0].depth}
          float='floatSlow'
          label="Cheerful person with curly hair and blue shirt"
        />
        <CharacterCard
          x="62%" y="54%" scale={0.92} hue="emerald"
          skin="#C68642" shirt="#22C55E" bgFrom="rgba(16,185,129,0.25)" bgTo="rgba(99,102,241,0.2)"
          smile
          t={t}
          depth={layers[1].depth}
          float='floatFast'
          label="Happy person with short hair and green shirt"
        />
        <CharacterCard
          x="38%" y="22%" scale={1.05} hue="sky"
          skin="#FFDBAC" shirt="#38BDF8" bgFrom="rgba(56,189,248,0.25)" bgTo="rgba(236,72,153,0.2)"
          smile
          t={t}
          depth={layers[2].depth}
          float='floatSlow'
          label="Smiling person with bun and sky shirt"
        />
        <CharacterCard
          x="78%" y="18%" scale={0.78} hue="violet"
          skin="#8D5524" shirt="#8B5CF6" bgFrom="rgba(147,51,234,0.2)" bgTo="rgba(16,185,129,0.2)"
          smile
          t={t}
          depth={layers[0].depth}
          float='floatSlow'
          label="Playful person with glasses and violet shirt"
        />
        <CharacterCard
          x="8%" y="20%" scale={0.75} hue="pink"
          skin="#E0AC69" shirt="#EC4899" bgFrom="rgba(236,72,153,0.22)" bgTo="rgba(56,189,248,0.18)"
          smile
          t={t}
          depth={layers[1].depth}
          float='floatFast'
          label="Joyful person with short fringe and pink shirt"
        />
      </div>
    </div>
  )
}

function SoftDot({ x, y, color, blur, t, factor }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: x, top: y, width: 14, height: 14,
        backgroundColor: color,
        filter: `blur(${blur})`, opacity: 0.6,
        transform: `translate3d(${(t.tx||0)*factor}px, ${(t.ty||0)*factor}px, 0)`,
        transition: 'transform 150ms ease-out'
      }}
      aria-hidden
    />
  )
}

function CharacterCard({ x, y, scale = 1, skin, shirt, bgFrom, bgTo, smile = true, t, depth = 0.6, float = 'floatSlow', label }) {
  const px = (t.tx || 0) * depth
  const py = (t.ty || 0) * depth

  return (
    <figure
      aria-label={label}
      className="absolute select-none"
      style={{
        left: x,
        top: y,
        transform: `translate3d(${px}px, ${py}px, 0) scale(${scale})`,
        transition: 'transform 140ms ease-out'
      }}
    >
      <div
        className="relative w-44 h-52 rounded-2xl p-3 shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
          border: '1px solid rgba(255,255,255,0.1)',
          animation: `${float} 7s ease-in-out infinite`
        }}
      >
        {/* face circle */}
        <div className="absolute left-1/2 -translate-x-1/2 top-7 w-28 h-28 rounded-full" style={{ backgroundColor: skin, boxShadow: 'inset 0 -6px 0 rgba(0,0,0,0.06)' }} />
        {/* hair */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-30 h-16 rounded-[24px] bg-slate-800" style={{ width: 120 }} />
        {/* eyes */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex gap-6" aria-hidden>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90" />
        </div>
        {/* smile */}
        {smile && (
          <svg className="absolute left-1/2 -translate-x-1/2 top-[104px]" width="64" height="28" viewBox="0 0 64 28" aria-hidden>
            <path d="M8 10 C 24 28, 40 28, 56 10" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          </svg>
        )}
        {/* shirt */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-28 h-24 rounded-[18px]" style={{ backgroundColor: shirt }} />
        {/* shine */}
        <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent 40%)', mixBlendMode: 'overlay' }} aria-hidden />
      </div>
    </figure>
  )
}
