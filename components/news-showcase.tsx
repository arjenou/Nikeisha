import Image from "next/image"

export function NewsShowcase() {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">最新情報</p>
          <h2 className="text-3xl font-bold text-gray-900">NKSの最新イベント＆お得情報</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/news-banner-17th-anniversary-pink.jpg"
              alt="NKS 17th Anniversary News (Pink Banner)"
              width={800}
              height={500}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/news-banner-17th-anniversary-white.jpg"
              alt="NKS 17th Anniversary News (White Banner)"
              width={800}
              height={500}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
