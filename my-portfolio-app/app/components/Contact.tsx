import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="panel px-5 py-16 sm:px-10 sm:py-24">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="pill mb-6">Contact</span>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="mt-5 leading-relaxed text-muted">
          I&apos;m looking for Software Engineer roles and I&apos;m always happy to talk about backend systems,
          blockchain or ML security. Drop me an email and I&apos;ll get back to you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-dark">
            <Mail size={16} /> Say hello
          </a>
          <a href={profile.resume} download="AnupaSiriwardana-RESUME.pdf" className="btn-light">
            <Download size={16} /> Download resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-[1.5fr_1fr_1fr]">
        {details.map(({ icon: Icon, label, value, href }) => {
          const body = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas">
                <Icon size={17} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted">{label}</span>
                <span className="block truncate text-sm">{value}</span>
              </span>
            </>
          )
          return href ? (
            <a key={label} href={href} className="card card-hover flex items-center gap-3 p-4">
              {body}
            </a>
          ) : (
            <div key={label} className="card flex items-center gap-3 p-4">
              {body}
            </div>
          )
        })}
      </Reveal>

      <Reveal delay={200} className="mt-8 flex justify-center gap-3">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-light !py-2">
          <Github size={16} /> GitHub <ArrowUpRight size={14} className="text-muted" />
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-light !py-2">
          <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="text-muted" />
        </a>
      </Reveal>
    </section>
  )
}
