import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/about-us-image.jpg"
              alt="Professional instructor"
              width={400}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
          </div>

          <div>
            <p className="text-purple-600 font-semibold mb-2">私たちについて</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              中国語教育のリーダーとして、
              <br />
              実績と信頼のある教育機関
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              二緒設は2008年に上海で設立され、日本人向け中国語教育の専門機関として、長年にわたり
              実績と信頼を積み重ねてまいりました。専門的な教育課程に特化し、大学申請や中国企業
              での実務経験したオリジナル教材を導入して、初心者から上級者まで幅広く対応しており
              ます。全ての授業はリスニング教材について充実した内容、多様な形式によるコース選
              択肢で、そして専門・オンライン・通学部の多様な学習方法で1対1の学習、日本で中国語の学 習環境であります。
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">日本人専用教材を自社開発</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">スマホで教材無料視聴</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">プロ教師陣</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">就職・検定もサポート</span>
              </div>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700">Know About Us →</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
