import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Israeli-Indian Hackathon',
  description: 'Official website for the indian-israeli hackathon',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
