"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, Users, Award, Download, Maximize2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const oneOnOnePrices = [
  {
    lessons: "20",
    standardBeginnerIntermediate: "3375円",
    standardAdvanced: "3575円",
    weekdayBeginnerIntermediate: "3175円",
    weekdayAdvanced: "3375円",
  },
  {
    lessons: "40",
    standardBeginnerIntermediate: "3275円",
    standardAdvanced: "3475円",
    weekdayBeginnerIntermediate: "3075円",
    weekdayAdvanced: "3275円",
  },
  {
    lessons: "60",
    standardBeginnerIntermediate: "3175円",
    standardAdvanced: "3375円",
    weekdayBeginnerIntermediate: "2975円",
    weekdayAdvanced: "3175円",
  },
  {
    lessons: "80",
    standardBeginnerIntermediate: "3075円",
    standardAdvanced: "3275円",
    weekdayBeginnerIntermediate: "2875円",
    weekdayAdvanced: "3075円",
  },
  {
    lessons: "120",
    standardBeginnerIntermediate: "2968円",
    standardAdvanced: "3168円",
    weekdayBeginnerIntermediate: "2768円",
    weekdayAdvanced: "2968円",
  },
]

const groupPrices = [
  {
    lessons: "40",
    standardBeginnerIntermediate: "2768円",
    standardAdvanced: "2868円",
    weekdayBeginnerIntermediate: "2668円",
    weekdayAdvanced: "2768円",
  },
  {
    lessons: "80",
    standardBeginnerIntermediate: "2568円",
    standardAdvanced: "2668円",
    weekdayBeginnerIntermediate: "2468円",
    weekdayAdvanced: "2578円",
  },
]

const studyAbroadJapanesePrices = [
  { level: "0-N1", time: "310小时", price: "57600元", unitPrice: "189元", showLevel: true },
  { level: "0-N1", time: "210小时", price: "48000元", unitPrice: "228元", showLevel: false },
  { level: "0-N1", time: "160小时", price: "39800元", unitPrice: "248元", showLevel: false },
  { level: "0-N1", time: "110小时", price: "29600元", unitPrice: "269元", showLevel: false },
  { level: "0-N1", time: "60小时", price: "16800元", unitPrice: "280元", showLevel: false },
  { level: "0-N1", time: "30小时", price: "8800元", unitPrice: "293元", showLevel: false },
]

const examPreparationPrices = [
  { level: "0-N1", time: "75小时", price: "24900元", unitPrice: "332元", showLevel: true },
  { level: "0-N2", time: "60小时", price: "19880元", unitPrice: "331元", showLevel: true },
  { level: "0-N3", time: "45小时", price: "14860元", unitPrice: "330元", showLevel: true },
  { level: "0-N4", time: "30小时", price: "9800元", unitPrice: "326元", showLevel: true },
  { level: "0-N5", time: "30小时", price: "9600元", unitPrice: "320元", showLevel: true },
]

const enrollmentPrograms = [
  {
    title: "日本学部文科理科升学辅导",
    titleEn: "Japanese Undergraduate Admission Guidance",
    description: "专业指导日本大学本科申请，涵盖文科理科全专业方向",
    imageUrl: "/pricePdf/daxue.jpg",
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
    imageUrl: "/pricePdf/daxueyuan.jpg",
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

// 可点击放大的图片组件
function ClickableImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      const response = await fetch(src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${title}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      // 如果fetch失败，使用备用方法
      const link = document.createElement('a')
      link.href = src
      link.download = `${title}.jpg`
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Maximize2 className="h-5 w-5 text-gray-700" />
            </div>
            <div 
              className="bg-white rounded-full p-2 shadow-lg"
              onClick={handleDownload}
            >
              <Download className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* 放大显示的模态框 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleDownload}
              className="absolute top-4 right-4 bg-white text-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Download className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 bg-white text-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export function PriceSection() {
  return (
    <section id="price" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">料金プラン</p>
          <h2 className="text-3xl font-bold text-gray-900">コース料金一覧</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            お客様の学習スタイルに合わせた柔軟な料金プランをご用意しております
          </p>
        </div>

        {/* Chinese Teaching Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">中文教学</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Chinese Teaching 1V1 Course Price Table */}
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 md:py-6">
              <CardTitle className="text-center text-sm md:text-lg font-bold">
                <span role="img" aria-label="person emoji" className="mr-2 md:mr-3 text-lg md:text-2xl">
                  👤
                </span>
                一対一 (1-on-1 Lesson)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <TableRow className="border-none">
                      <TableHead
                        rowSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-purple-700 w-[80px] md:w-[120px] align-bottom border-r border-purple-200"
                      >
                        <div>コマ数</div>
                        <div className="text-xs text-purple-500 font-normal">* 45分</div>
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-purple-700 border-r border-purple-200"
                      >
                        スタンダード
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-purple-700"
                      >
                        平日
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-purple-600 border-r border-purple-200">
                        初中级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-purple-600 border-r border-purple-200">
                        高级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-purple-600 border-r border-purple-200">
                        初中级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-purple-600">
                        高级
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {oneOnOnePrices.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 border-b border-gray-100 last:border-none"
                      >
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-800 font-bold text-center border-r border-gray-100">
                          {row.lessons}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.standardBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.standardAdvanced}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.weekdayBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold">
                          {row.weekdayAdvanced}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Chinese Teaching Pair Course Price Table */}
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 md:py-6">
              <CardTitle className="text-center text-sm md:text-lg font-bold">
                <span role="img" aria-label="two people emoji" className="mr-2 md:mr-3 text-lg md:text-2xl">
                  👥
                </span>
                ペア (Pair Lesson)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <TableRow className="border-none">
                      <TableHead
                        rowSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-blue-700 w-[80px] md:w-[120px] align-bottom border-r border-blue-200"
                      >
                        <div>コマ数</div>
                        <div className="text-xs text-blue-500 font-normal">* 45分</div>
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-blue-700 border-r border-blue-200"
                      >
                        スタンダード
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-blue-700"
                      >
                        平日
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-blue-600 border-r border-blue-200">
                        初中级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-blue-600 border-r border-blue-200">
                        高级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-blue-600 border-r border-blue-200">
                        初中级
                      </TableHead>
                      <TableHead className="px-1 md:px-6 py-1 md:py-3 text-center text-xs font-semibold text-blue-600">
                        高级
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {groupPrices.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 border-b border-gray-100 last:border-none"
                      >
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-800 font-bold text-center border-r border-gray-100">
                          {row.lessons}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.standardBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.standardAdvanced}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.weekdayBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-1 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold">
                          {row.weekdayAdvanced}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Japanese Teaching Section */}
        {/* <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">日语教学</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Study Abroad Japanese Course Table */}
          {/* <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 md:py-6">
              <CardTitle className="text-center text-sm md:text-lg font-bold">
                <span role="img" aria-label="airplane emoji" className="mr-2 md:mr-3 text-lg md:text-2xl">
                  ✈️
                </span>
                留学日语课程教学 (1对1)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                                    <TableHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                    <TableRow className="border-none">
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-orange-700 border-r border-orange-200">
                        等级
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-orange-700 border-r border-orange-200">
                        时间
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-orange-700 border-r border-orange-200">
                        価格
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-orange-700">
                        単価
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {studyAbroadJapanesePrices.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-200 border-b border-gray-100 last:border-none"
                      >
                        {row.showLevel && (
                          <TableCell 
                            rowSpan={6}
                            className="px-2 md:px-6 py-4 md:py-6 text-xs md:text-sm text-white font-bold text-center align-middle bg-gradient-to-b from-orange-500 to-red-500 border-r border-orange-300"
                          >
                            {row.level}
                          </TableCell>
                        )}
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.time}
                        </TableCell>
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.price}
                        </TableCell>
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold">
                          {row.unitPrice}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card> */}

          {/* Exam Preparation Guidance Course Table */}
          {/* <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 md:py-6">
              <CardTitle className="text-center text-sm md:text-lg font-bold">
                <span role="img" aria-label="book emoji" className="mr-2 md:mr-3 text-lg md:text-2xl">
                  📚
                </span>
                考级辅导课程 (1对1)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                    <TableRow className="border-none">
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-green-700 border-r border-green-200">
                        等级
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-green-700 border-r border-green-200">
                        时间
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-green-700 border-r border-green-200">
                        価格
                      </TableHead>
                      <TableHead className="px-2 md:px-6 py-2 md:py-4 text-center text-xs md:text-sm font-bold text-green-700">
                        単价
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {examPreparationPrices.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className="hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 transition-all duration-200 border-b border-gray-100 last:border-none"
                      >
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-800 font-bold text-center border-r border-gray-100">
                          {row.level}
                        </TableCell>
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.time}
                        </TableCell>
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold border-r border-gray-100">
                          {row.price}
                        </TableCell>
                        <TableCell className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-700 text-center font-semibold">
                          {row.unitPrice}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card> */}
        {/* </div> */}

        {/* Japanese Enrollment Guidance Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">日本升学专业辅导</h3>
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

                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      <ClickableImage
                        src={program.imageUrl}
                        alt={`${program.title}价格表`}
                        title={program.title}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
