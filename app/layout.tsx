import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikisya - NKS语言教育',
  description: 'NKS语言教育 - 专业的中文和日语教学服务',
  generator: 'Next.js',
  icons: {
    icon: '/images/nsk.png',
    shortcut: '/images/nsk.png',
    apple: '/images/nsk.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
