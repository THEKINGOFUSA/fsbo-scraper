import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FSBO Car Deal Finder',
  description: 'Automated scraper for For Sale By Owner car listings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
