import Link from 'next/link'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
        <nav>
            <Link href="/home">home</Link> | <Link href="/about">about</Link>
        </nav>
        <div className="app-container">
            {children}
        </div>
    </body>
    </html>
  )
}
