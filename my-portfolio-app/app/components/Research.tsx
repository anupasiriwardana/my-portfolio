import { Blocks, ScanEye } from 'lucide-react'
import { research } from '../data'
import Reveal from './Reveal'
import Section from './Section'

const icons = [ScanEye, Blocks]

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research Interests"
      title="Two areas I keep coming back to"
      intro="Making machine learning models harder to fool, and making financial systems that don't need blind trust."
    >
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {research.map((r, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={r.title} delay={i * 120}>
              <article className="card card-hover flex h-full flex-col p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas">
                    <Icon size={19} />
                  </span>
                  <span className="pill">
                    {r.status === 'Ongoing' && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    {r.status}
                  </span>
                </div>
                <p className="eyebrow">{r.area}</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{r.title}</h3>
                <p className="mt-1 text-sm text-muted">{r.context}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{r.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
