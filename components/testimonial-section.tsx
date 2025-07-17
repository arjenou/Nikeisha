import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">お客様の声</p>
          <h2 className="text-3xl font-bold text-gray-900">受講生からのフィードバック</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            当校のコースを受講されたお客様からの貴重なご意見をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">山田 太郎</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「中国語の学習は初めてでしたが、先生方がとても丁寧に教えてくださり、楽しく学ぶことができました。今では日常会話に自信が持てるようになりました。」
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">佐藤 花子</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「ビジネス中国語コースを受講しました。実践的な内容で、すぐに仕事で使えるフレーズを習得できました。講師の経験談も大変参考になりました。」
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>YM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">田中 健太</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「留学サポートを利用して中国の大学に進学しました。ビザ申請から現地での生活まで、きめ細やかなサポートで安心して留学生活を送ることができました。」
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
