import { skills } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use to build">
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {skills.categories.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 100}>
            <div className="card h-full p-6">
              <p className="eyebrow mb-4">{c.title}</p>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span key={s} className="pill transition-colors hover:border-ink hover:text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-5xl text-center">
        <p className="eyebrow mb-4">Soft skills</p>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.soft.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
