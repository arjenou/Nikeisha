import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">日语教学</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Study Abroad Japanese Course Table */}
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
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
          </Card>

          {/* Exam Preparation Guidance Course Table */}
          <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
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
          </Card>
        </div>
      </div>
    </section>
  )
}
