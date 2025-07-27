import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-24 md:py-32 lg:py-64 opacity-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">二継社</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">自信开启中文之旅</h2>
            <h3 className="text-xl text-gray-700 mb-6">自信を持って中国語を学ぼう</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              2008年上海設立、日本人専門教育を大学的内容にて各高度中国語教育、
              中日語業務対、経営スタイル自由的時、入会金なし、いつでもスタート可能！
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <a href="#contact">お問い合わせ →</a>
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/video-call-hero.png"
                alt="Online language learning video call interface"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Keep the floating elements for visual interest */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-20 left-10 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-0 w-6 h-6 bg-yellow-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
