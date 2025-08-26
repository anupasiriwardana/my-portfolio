import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anupa Siriwardana - Software Engineer',
  description: 'Software Engineering undergraduate and Full Stack Developer specializing in AI security and modern web development technologies.',
  keywords: 'Software Engineer, Full Stack Developer, Next.js, React, AI Security, Portfolio',
  authors: [{ name: 'Anupa Siriwardana' }],
  openGraph: {
    title: 'Anupa Siriwardana - Software Engineer',
    description: 'Software Engineering undergraduate and Full Stack Developer',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}