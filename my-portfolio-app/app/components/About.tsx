import { Check } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A backend focused engineer who likes to build things end to end.">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-5">
        <Reveal className="space-y-5 md:col-span-3">
          {profile.about.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink-soft">
              {para}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-3 pt-3">
            {profile.stats.map((s) => (
              <div key={s.label} className="card px-3 py-4 text-center sm:px-4">
                <p className="text-2xl font-medium tracking-tight sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-[0.7rem] text-muted sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <div className="card h-full p-6">
            <p className="eyebrow mb-4">What I work on</p>
            <ul className="space-y-3">
              {profile.focus.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-canvas">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
