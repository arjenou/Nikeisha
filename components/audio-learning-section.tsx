"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Headphones, Play, Volume2, Music } from "lucide-react"
import { trackEvent } from "@/components/seo/google-analytics"

export function AudioLearningSection() {
  const handleRedirect = () => {
    // Track the click event
    trackEvent('click', 'audio_learning', 'external_redirect')
    window.open("http://www.nikeisya.com/m/", "_blank")
  }

  return (
    <section id="audio-learning" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold mb-2">音声学習</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">録音学習</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            音声を通じて効果的に学習できる専門的なオーディオ教材で、リスニングスキルを向上させましょう
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">専門音声教材</h3>
                  <p className="text-gray-600 text-sm">
                    プロフェッショナルな音声教材で、正確な発音とリスニング力を向上
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">インタラクティブ学習</h3>
                  <p className="text-gray-600 text-sm">
                    聞いて、繰り返して、実践的な音声学習体験を提供
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Volume2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">多様なレベル</h3>
                  <p className="text-gray-600 text-sm">
                    初級から上級まで、レベルに応じた音声教材をご用意
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Music className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">楽しい学習</h3>
                  <p className="text-gray-600 text-sm">
                    音楽的な要素を取り入れた、楽しく効果的な学習方法
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Call to Action */}
          <div className="text-center lg:text-left">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl opacity-10 transform rotate-2"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-10 transform -rotate-2"></div>
              
              {/* Main content */}
              <div className="relative bg-white rounded-3xl p-16 shadow-xl">
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-20 h-20 mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                    <Headphones className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    今すぐ音声学習を始めよう
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    専門的な音声教材で、あなたの語学学習を次のレベルへ。リスニング力と発音を同時に向上させる効果的な学習方法をご体験ください。
                  </p>
                </div>

                <Button
                  onClick={handleRedirect}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="h-5 w-5 mr-2" />
                  音声学習を体験する
                </Button>

                <p className="text-sm text-gray-500 mt-4">
                  * 外部サイトに移動します
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 transform scale-x-150 h-32"></div>
        </div>
      </div>
    </section>
  )
}
