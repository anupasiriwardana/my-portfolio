'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data'

export default function Navigation() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = ''
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-300 lg:w-fit lg:gap-8 ${
          scrolled
            ? 'border-line bg-panel/85 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)] backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Main"
      >
        <a href="#home" className="text-[0.95rem] font-semibold tracking-tight">
          {profile.shortName}
          <span className="text-muted">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === id ? 'bg-ink text-panel' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-dark hidden !py-2 sm:inline-flex">
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="icon-btn lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-canvas transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-5">
          <span className="text-[0.95rem] font-semibold tracking-tight">
            {profile.shortName}
            <span className="text-muted">.</span>
          </span>
          <button type="button" onClick={() => setOpen(false)} className="icon-btn" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <ul className="mt-10 flex flex-col gap-1 px-6">
          {navItems.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  // Close the menu first (restores page scroll), then jump to the section
                  e.preventDefault()
                  setOpen(false)
                  setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    history.replaceState(null, '', `#${id}`)
                  }, 60)
                }}
                className="flex items-baseline gap-4 border-b border-line py-4 text-2xl font-medium tracking-tight"
              >
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-dark">
            View Resume
          </a>
        </div>
      </div>
    </header>
  )
}
