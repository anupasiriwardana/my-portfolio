import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="A mix of personal and group projects, from smart contracts to REST APIs and retrieval pipelines."
    >
      {/* Featured projects */}
      <div className="mx-auto max-w-5xl space-y-6">
        {projects.featured.map((p, i) => {
          const imageFirst = i % 2 === 0
          return (
            <Reveal key={p.title}>
              <article className="card card-hover grid overflow-hidden md:grid-cols-2">
                <div
                  className={`relative flex items-center bg-canvas p-4 sm:p-6 ${
                    imageFirst ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-card shadow-[0_10px_30px_-18px_rgb(0_0_0/0.35)]">
                    <Image
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className={`flex flex-col p-6 sm:p-8 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="pill">
                      {p.status === 'Ongoing' && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                      {p.status}
                    </span>
                    <span className="text-xs text-muted">{p.type}</span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight">{p.title}</h3>
                  <p className="text-sm text-muted">{p.subtitle}</p>

                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-dark">
                      <Github size={16} /> View code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      {/* Other projects */}
      <div className="mx-auto mt-16 max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-5 text-center">More projects</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.other.map((p, i) => {
            const Wrapper = p.github ? 'a' : 'div'
            return (
              <Reveal key={p.title} delay={i * 100}>
                <Wrapper
                  {...(p.github ? { href: p.github, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card card-hover group flex h-full flex-col p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="text-xs text-muted">{p.type}</span>
                    {p.github && (
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    )}
                  </div>
                  <h4 className="text-lg font-medium tracking-tight">{p.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
