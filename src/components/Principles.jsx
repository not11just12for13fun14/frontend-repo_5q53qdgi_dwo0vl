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
    <section id="principles" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Principles</h2>
          <p className="mt-3 text-gray-600">The values that shape how we build and how we help you grow.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
