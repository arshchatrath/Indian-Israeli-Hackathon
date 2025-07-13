import type { Metadata } from 'next'
import './globals.css'
import Head from "next/head";

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
      <Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="icon apple-icon" href="favicon.avif" />
        </Head>
      <body>{children}</body>
    </html>
  )
}
