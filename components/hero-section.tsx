import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
        <section className="relative bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              専門的な<br />
              <span className="text-yellow-300">語学教育</span>で<br />
              未来を切り開く
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-purple-100 leading-relaxed">
              17年の実績を持つ二継社（NKS）で、あなたの語学学習を次のレベルへ
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
