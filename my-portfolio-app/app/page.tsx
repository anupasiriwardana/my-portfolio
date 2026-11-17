import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data'

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-3 px-3 pb-3 pt-3 sm:gap-4 sm:px-4 sm:pt-4">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home" className="hover:text-ink">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}
