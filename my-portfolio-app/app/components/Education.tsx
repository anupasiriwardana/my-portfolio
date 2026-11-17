import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { achievements, education } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education, certifications & achievements">
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
        {/* Education timeline */}
        <Reveal>
          <div className="card h-full p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-lg font-medium tracking-tight">Education</h3>
            </div>
            <ol className="space-y-6">
              {education.education.map((e) => (
                <li key={e.title} className="relative border-l border-line pl-5">
                  <span
                    className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                      e.current ? 'bg-accent' : 'bg-ink'
                    }`}
                  />
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h4 className="mt-1 font-medium">{e.title}</h4>
                  <p className="text-sm text-ink-soft">{e.institution}</p>
                  {e.detail && <p className="mt-1 text-sm text-muted">{e.detail}</p>}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={100}>
          <div className="card h-full p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas">
                <BadgeCheck size={18} />
              </span>
              <h3 className="text-lg font-medium tracking-tight">Certifications & courses</h3>
            </div>
            <ul className="divide-y divide-line">
              {education.certifications.map((c) => (
                <li key={c.title} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-medium">{c.title}</h4>
                    {c.year && <span className="shrink-0 font-mono text-xs text-muted">{c.year}</span>}
                  </div>
                  <p className="text-sm text-ink-soft">{c.issuer}</p>
                  {c.detail && <p className="mt-1 text-sm text-muted">{c.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Achievements */}
      <div className="mx-auto mt-5 max-w-5xl">
        <Reveal>
          <div className="card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas">
                <Award size={18} />
              </span>
              <h3 className="text-lg font-medium tracking-tight">Achievements & activities</h3>
            </div>
            <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="font-mono text-xs text-muted">{a.year}</p>
                  <h4 className="mt-1 font-medium">{a.title}</h4>
                  <p className="text-sm text-ink-soft">{a.org}</p>
                  <p className="mt-1 text-sm text-muted">{a.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
