import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Globe, Plane } from "lucide-react"

export const courseCategories = [
  {
    title: "中国語コース",
    titleEn: "Chinese Course",
    description: "初心者から上級者まで、体系的な中国語学習を提供します。",
    icon: BookOpen,
    courses: [
      "中国語入門",
      "HSK対策",
      "ビジネス中国語",
      "日常会話",
      "中国語発音矯正",
      "中国文化理解",
      "中国語検定対策",
      "中国語作文",
    ],
  },
  {
    title: "日本語コース",
    titleEn: "Japanese Course",
    description: "日本での生活やビジネスに役立つ実践的な日本語を学びます。",
    icon: Globe,
    courses: [
      "日本語入門",
      "JLPT対策 (N1-N5)",
      "ビジネス日本語",
      "日常会話",
      "日本語発音矯正",
      "日本文化理解",
      "日本語検定対策",
      "日本語作文",
    ],
  },
  {
    title: "英語コース",
    titleEn: "English Course",
    description: "グローバルなコミュニケーション能力を向上させるための英語学習。",
    icon: GraduationCap,
    courses: [
      "英会話初級",
      "TOEFL/IELTS対策",
      "ビジネス英語",
      "旅行英会話",
      "英文法強化",
      "英語プレゼンテーション",
      "英語ディスカッション",
      "英語面接対策",
    ],
  },
  {
    title: "留学サポート",
    titleEn: "Study Abroad Support",
    description: "中国や日本への留学を全面的にサポートします。",
    icon: Plane,
    courses: [
      "留学カウンセリング",
      "ビザ申請サポート",
      "学校選び",
      "出願書類作成",
      "現地生活オリエンテーション",
      "奨学金情報",
      "留学中のサポート",
      "帰国後のキャリア相談",
    ],
  },
]

export function PopularTopics() {
  return (
    <section id="course" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">コース一覧</p>
          <h2 className="text-3xl font-bold text-gray-900">人気の学習トピック</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            お客様のニーズに合わせた多様なコースをご用意しております
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-3 mb-4">
                  <category.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{category.description}</p>
                <ul className="text-gray-700 text-sm space-y-1 mb-4 w-full">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center justify-center text-center">
                      <span className="text-center">{course}</span>
                    </li>
                  ))}
                </ul>
                {/* <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  詳細を見る →
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
