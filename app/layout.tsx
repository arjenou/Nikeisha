import type { Metadata } from 'next'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
