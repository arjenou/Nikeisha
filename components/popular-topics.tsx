import { Card, CardContent } from "@/components/ui/card"

export const courseCategories = [
  {
    title: "中国语コース",
    titleEn: "Chinese Courses",
    icon: "🇨🇳",
    courses: [
      "基礎日常会話（初級、中級、上級）",
      "ビジネス会話（初級、中級、上級）",
      "リスニング・スピーキング会話（初級、中級、上級）",
      "中国赴任準備",
      "中国語検定対策（HSK、HSKK、BCT、YCT、中国語検定）",
      "上海語",
      "在日華人国語（人民教育出版社教材、中国と同期）",
      "標準中国語（小・中・高校生）",
      "中国語視聴覚",
      "ピンインと四声",
      "留学生コース（中国留学希望者向け）",
    ],
    color: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "日语コース",
    titleEn: "Japanese Courses",
    icon: "🇯🇵",
    courses: [
      "日语会话（初、中、高）",
      "商务会话（初、中、高）",
      "JLPT日语对策",
      "EJU日语对策",
      "JETST日语对策",
      "NAT日语对策",
    ],
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    title: "英语コース",
    titleEn: "English Courses",
    icon: "🇺🇸",
    courses: ["日常会话（初级、中级、高级）", "商务会话（初级、中级、高级）", "英检（5-1级）", "ことも向け英会話"],
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    title: "留学コース",
    titleEn: "Study Abroad",
    icon: "✈️",
    courses: ["可以办理到中国上海、北京、西安等的全国大学留学"],
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
  },
]

export function PopularTopics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">コース一覧</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            基礎から上級まで、さまざまな学習ニーズに応える専門的な語学教育コース
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courseCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-300 border-2 ${category.color} group hover:scale-105 rounded-3xl`}
            >
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">{category.title}</h3>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700 text-sm">
                  {category.courses.map((course, courseIndex) => {
                    // Split the course string at the first opening parenthesis for line break
                    const parts = course.split("（", 2)
                    return (
                      <div key={courseIndex} className="text-center">
                        {" "}
                        {/* Added text-center here */}
                        {parts[0]}
                        {parts.length > 1 && (
                          <>
                            <br />
                            {"（" + parts[1]}
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
