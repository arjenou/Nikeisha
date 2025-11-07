import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Name and Address */}
          <div className="lg:col-span-1 px-0">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">株式会社二継社</span>
            </div>
            <p className="text-gray-400 leading-relaxed">东京都練馬区豊玉北5丁目23番11号302室</p>
          </div>

          {/* Key Points - Spread out in columns */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">特徴</h3>
              <ul className="text-gray-400 space-y-2">
                <li>日本人向け中国語教育の専門機関</li>
                <li>オリジナル教材と生活サポート</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">サービス</h3>
              <ul className="text-gray-400 space-y-2">
                <li>プロ教師陣</li>
                <li>入会金・月謝なし</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center md:justify-center">
          <p className="text-gray-400 text-sm text-left md:text-center">
            Copyright © 2023 Nikeisha All rights reserved.
          </p>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white"></Button>
        </div>
      </div>
    </footer>
  )
}
