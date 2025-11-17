const PRINCIPLES = [
  {
    title: 'Honesty and clarity first',
    desc: 'Show you the truth about your fit and how to improve.'
  },
  {
    title: 'Gap closure',
    desc: 'Identify deltas and guide you to close them with concrete steps.'
  },
  {
    title: 'Precision over volume',
    desc: 'Fewer, better applications — no wasted effort.'
  },
  {
    title: 'Evidence-driven',
    desc: 'Achievements, numbers, and proof win trust.'
  },
  {
    title: 'Direct but human',
    desc: 'Confident coaching without judgment.'
  },
  {
    title: '360° branding',
    desc: 'CV, LinkedIn, web presence, and interview prep in sync.'
  },
  {
    title: 'Career-long partner',
    desc: 'Beyond job search: growth, promotions, pivots.'
  },
  {
    title: 'Cloud-native, privacy-strong',
    desc: 'Easy, collaborative, and secure by design.'
  },
  {
    title: 'Outcome-centric',
    desc: 'We measure value in recruiter replies and interviews.'
  },
  {
    title: 'Ethical guidance',
    desc: 'We steer you away from low-fit applications with better alternatives.'
  }
]

export default function Principles() {
  return (
    <section id="principles" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/60 relative">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full blur-3xl bg-fuchsia-600/10" />
        <div className="absolute -top-10 right-20 h-56 w-56 rounded-full blur-3xl bg-cyan-500/10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Principles</h2>
          <p className="mt-3 text-slate-300">The values that shape how we build and how we help you grow.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="relative rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition group">
              <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/10 to-cyan-500/10 pointer-events-none" />
              <h3 className="relative text-lg font-semibold text-white">{p.title}</h3>
              <p className="relative mt-2 text-slate-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
