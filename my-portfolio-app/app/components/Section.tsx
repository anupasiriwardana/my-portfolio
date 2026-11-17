import Reveal from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: React.ReactNode
  className?: string
}

/** A rounded panel with a centred heading, matching the stacked-card layout. */
export default function Section({ id, eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`panel px-5 py-14 sm:px-10 sm:py-20 ${className}`}>
      <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <span className="pill mb-4">{eyebrow}</span>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}
