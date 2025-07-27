import Script from 'next/script'

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "二継社 NKS",
    "alternateName": "NKS Language School",
    "description": "17年の実績を持つ専門的な語学教育機関。中国語、日本語、英語のオンライン授業、留学サポート、音声学習教材を提供。",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/images/nsk.png`,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/images/og-image.jpg`,
    "telephone": "+81-080-4413-6300",
    "email": "izhengppp691@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "postalCode": "124-0023",
        "addressCountry": "JP",
        "addressRegion": "東京都",
        "addressLocality": "葛飾区",
        "streetAddress": "東新小岩2-28-1 2階22室 (Room 22, 2nd Floor, 1-28-2, Higashi-Shinkoiwa)"
    },
    "foundingDate": "2007",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "Place",
      "name": "Japan, China, Online Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Language Learning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "中国語コース",
            "description": "初心者から上級者まで対応の中国語学習コース",
            "provider": {
              "@type": "Organization",
              "name": "二継社 NKS"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "日本語コース",
            "description": "日本大学・大学院升学指导和商务日语",
            "provider": {
              "@type": "Organization",
              "name": "二継社 NKS"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "英語コース",
            "description": "グローバルなコミュニケーション能力向上のための英語学習",
            "provider": {
              "@type": "Organization",
              "name": "二継社 NKS"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "留学サポート",
            "description": "中国や日本への留学を全面的にサポート",
            "provider": {
              "@type": "Organization",
              "name": "二継社 NKS"
            }
          }
        }
      ]
    },
    // "sameAs": [
    //   "https://www.facebook.com/nikeisha", // 请替换为实际社交媒体链接
    //   "https://twitter.com/nikeisha",
    //   "https://www.instagram.com/nikeisha",
    //   "https://www.youtube.com/c/nikeisha"
    // ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "二継社 NKS",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com",
    "description": "専門的な語学教育機関のオフィシャルサイト",
    "publisher": {
      "@type": "Organization",
      "name": "二継社 NKS"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "コース一覧",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/#course`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "料金プラン",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/#price`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "お問い合わせ",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://nikeisha.com"}/#contact`
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  )
}
