import { Check } from 'lucide-react'

const STEPS = [
  {
    title: 'Fit clarity',
    desc: 'We analyze roles and your profile to reveal where you truly fit and why.'
  },
  {
    title: 'Gap map',
    desc: 'Pinpoint missing skills and experience. Get a plan to close each gap.'
  },
  {
    title: 'Proof engine',
    desc: 'Turn achievements into quantified proof across CV, LinkedIn, and portfolio.'
  },
  {
    title: 'Precision targeting',
    desc: 'Fewer, better applications with tailored, evidence-backed narratives.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Clarity, gap closure, and proof — applied to your career brand end‑to‑end.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {STEPS.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
