"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, FileText, Users, Award } from "lucide-react"

const enrollmentPrograms = [
  {
    title: "日本学部文科理科升学辅导",
    titleEn: "Japanese Undergraduate Admission Guidance",
    description: "专业指导日本大学本科申请，涵盖文科理科全专业方向",
    pdfLink: "/pricePdf/学部文理价格表.pdf",
    icon: GraduationCap,
    features: [
      "个人定制升学方案",
      "专业选择指导",
      "面试培训",
      "申请材料准备",
      "模拟考试辅导",
      "校园参观安排"
    ],
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    title: "日本大学院文科理科升学辅导",
    titleEn: "Japanese Graduate School Admission Guidance", 
    description: "针对研究生院申请的专业指导，助您进入理想的日本大学院",
    pdfLink: "/pricePdf/大学院文理价格表_compressed.pdf",
    icon: Award,
    features: [
      "研究计划书指导",
      "导师联系支援",
      "研究方向咨询",
      "学术能力提升",
      "奖学金申请",
      "论文写作指导"
    ],
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200"
  }
]

export function JapaneseEnrollmentGuidance() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">日本升学专业辅导</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            专业的升学指导团队，为您的日本留学之路提供全方位支持，从学部到大学院的完整升学解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {enrollmentPrograms.map((program, index) => (
            <Card key={index} className={`${program.bgColor} ${program.borderColor} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${program.bgColor} rounded-full p-4 mr-4 shadow-md`}>
                    <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                    <p className="text-sm text-gray-600">{program.titleEn}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-600" />
                    服务内容
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${program.iconColor.replace('text-', 'bg-')} mr-2 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={program.pdfLink}
                    download
                    className={`flex-1 ${program.iconColor.replace('text-', 'bg-')} text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center font-medium`}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    价格表下载
                  </a>
                  <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                    了解详情
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
