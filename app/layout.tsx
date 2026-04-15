import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joy Agents — AI Agents That Work For You',
  description: 'Deploy intelligent AI agents that handle your content, research, outreach, and more. The marketplace for creators who want to scale without burnout.',
  keywords: 'AI agents, automation, content creation, social media, creators, YouTubers, streamers',
  openGraph: {
    title: 'Joy Agents — AI Agents That Work For You',
    description: 'Deploy intelligent AI agents that handle your content, research, outreach, and more.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-space-black font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
