import type { Metadata, Viewport } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@/components/seo/google-analytics'

export const metadata: Metadata = {
  title: {
    default: '二継社 NKS - 専門的な中国語・日本語教育 | オンライン語学スクール',
    template: '%s | 二継社 NKS'
  },
  description: '二継社（NKS）は17年の実績を持つ専門的な語学教育機関です。中国語、日本語、英語のオンライン授業、留学サポート、音声学習教材を提供。初心者から上級者まで対応可能。',
  keywords: [
    '中国語教室', 'オンライン中国語', '日本語教育', '語学スクール', 'HSK対策', 'JLPT対策', 
    '留学サポート', '音声学習', '二継社', 'NKS', '中国語会話', 'ビジネス中国語',
    '日本升学', '中国語検定', '語学学習', 'オンライン授業', '個人レッスン', 'グループレッスン'
  ],
  authors: [{ name: '二継社 NKS' }],
  creator: '二継社 NKS',
  publisher: '二継社 NKS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nikeisha.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    siteName: '二継社 NKS - 専門的な語学教育',
    title: '二継社 NKS - 専門的な中国語・日本語教育 | オンライン語学スクール',
    description: '17年の実績を持つ専門的な語学教育機関。中国語、日本語、英語のオンライン授業、留学サポート、音声学習教材を提供。',
    url: '/',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '二継社 NKS - 専門的な語学教育',
      },
    ],
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '二継社 NKS - 専門的な中国語・日本語教育',
    description: '17年の実績を持つ専門的な語学教育機関。オンライン語学授業と留学サポートを提供。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 替换为实际的Google验证码
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'education',
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
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://nikeisha.com'} />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="二継社 NKS" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="overflow-x-hidden">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
