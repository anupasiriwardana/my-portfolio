import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const description =
  'Final year Software Engineering undergraduate building reliable backends and on-chain systems. Interested in blockchain and adversarial machine learning.'

export const metadata: Metadata = {
  title: 'Anupa Siriwardana | Software Engineer',
  description,
  keywords: [
    'Anupa Siriwardana',
    'Software Engineer',
    'Backend Developer',
    'Blockchain',
    'Solidity',
    'Adversarial Machine Learning',
    'Node.js',
    'Spring Boot',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Anupa Siriwardana' }],
  openGraph: {
    title: 'Anupa Siriwardana | Software Engineer',
    description,
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#efefec',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
