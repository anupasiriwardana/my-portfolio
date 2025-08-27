import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        {/* Profile Image at Top */}
        <div className="mb-8 flex justify-center w-full">
          <Image
            src="/profilePicture.jpg"
            alt="Profile picture"
            width={240}
            height={240}
            className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-teal-400"
            priority
          />
        </div>
        {/* Name and Description Side by Side (now stacked) */}
        <div className="flex flex-col items-center justify-center w-full mb-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-center">
            <span className="text-white">Anupa</span>
            <span className="text-teal-400"> Siriwardana</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-400 mb-4 animate-fade-in-delay text-center">
            Full Stack Developer
          </p>
          <p className="text-xl text-gray-500 mb-0 max-w-2xl mx-auto leading-relaxed text-center">
            Software Engineering Undergraduate | AI Security Enthusiast
          </p>
        </div>
        {/* Social Links and Scroll Button Below */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/anupasiriwardana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/anupa-siriwardana-198471235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:anupasiriwardana123@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}