import { Briefcase } from 'lucide-react'
import { experience } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="mx-auto max-w-4xl space-y-6">
        {experience.map((job) => (
          <Reveal key={job.company + job.period}>
            <article className="card p-6 sm:p-8">
              <header className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight sm:text-xl">{job.role}</h3>
                    <p className="text-sm text-muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <span className="pill self-start">{job.period}</span>
              </header>

              <p className="mt-6 leading-relaxed text-ink-soft">{job.summary}</p>

              <div className="mt-6 space-y-6">
                {job.projects.map((p) => (
                  <div key={p.name} className="relative border-l border-line pl-5">
                    <span className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full bg-ink" />
                    <h4 className="font-medium">{p.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
