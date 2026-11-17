import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="panel relative overflow-hidden px-5 pb-14 pt-28 sm:px-10 sm:pb-20 sm:pt-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-7">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={176}
            height={176}
            priority
            className="h-36 w-36 rounded-full object-cover ring-4 ring-card shadow-[0_12px_32px_-14px_rgb(0_0_0/0.35)] sm:h-44 sm:w-44"
          />
        </div>

        <p className="mb-4 text-xl font-medium tracking-tight text-muted sm:text-2xl">
          Hi, I&apos;m {profile.name}
        </p>

        <h1 className="text-[2.4rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink-soft sm:text-base">
          <span>{profile.role}</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted sm:inline-block" />
          <span>{profile.interests}</span>
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-dark">
            See my work <ArrowDown size={16} />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-light">
            Resume <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-1.5 text-xs text-muted">
          <MapPin size={13} /> {profile.location}
        </p>
      </div>
    </section>
  )
}
