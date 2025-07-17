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
  { level: "0-N1", time: "310小时", price: "57600元", unitPrice: "189元" },
  { level: "", time: "210小时", price: "48000元", unitPrice: "228元" },
  { level: "", time: "160小时", price: "39800元", unitPrice: "248元" },
  { level: "", time: "110小时", price: "29600元", unitPrice: "269元" },
  { level: "", time: "60小时", price: "16800元", unitPrice: "280元" },
  { level: "", time: "30小时", price: "8800元", unitPrice: "293元" },
]

const examPreparationPrices = [
  { level: "0-N1", time: "75小时", price: "24900元", unitPrice: "332元" },
  { level: "0-N2", time: "60小时", price: "19880元", unitPrice: "331元" },
  { level: "0-N3", time: "45小时", price: "14860元", unitPrice: "330元" },
  { level: "0-N4", time: "30小时", price: "9800元", unitPrice: "326元" },
  { level: "0-N5", time: "30小时", price: "9600元", unitPrice: "320元" },
]

export function PriceSection() {
  return (
    <section id="price" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">料金プラン</p>
          <h2 className="text-3xl font-bold text-gray-900">コース料金一覧</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            お客様の学習スタイルに合わせた柔軟な料金プランをご用意しております。
          </p>
        </div>

        {/* Chinese Teaching Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">中文教学</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Chinese Teaching 1V1 Course Price Table */}
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-4">
              <CardTitle className="text-center">
                <span role="img" aria-label="person emoji" className="mr-2">
                  👤
                </span>{" "}
                1V1 (1コア=45分)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead
                        rowSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px] text-center align-bottom whitespace-normal"
                      >
                        コマ数
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center whitespace-normal"
                      >
                        スタンダード
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center whitespace-normal"
                      >
                        平日
                      </TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        初中级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        高级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        初中级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        高级
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white divide-y divide-gray-200">
                    {oneOnOnePrices.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="px-4 py-4 text-sm text-gray-700 font-medium text-center whitespace-normal">
                          {row.lessons}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.standardBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.standardAdvanced}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.weekdayBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
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
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-4">
              <CardTitle className="text-center">
                <span role="img" aria-label="two people emoji" className="mr-2">
                  👥
                </span>{" "}
                ペア (Pair Lesson)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead
                        rowSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px] text-center align-bottom whitespace-normal"
                      >
                        コマ数
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center whitespace-normal"
                      >
                        スタンダード
                      </TableHead>
                      <TableHead
                        colSpan={2}
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center whitespace-normal"
                      >
                        平日
                      </TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        初中级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        高级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        初中级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        高级
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white divide-y divide-gray-200">
                    {groupPrices.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="px-4 py-4 text-sm text-gray-700 font-medium text-center whitespace-normal">
                          {row.lessons}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.standardBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.standardAdvanced}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.weekdayBeginnerIntermediate}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
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
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-4">
              <CardTitle className="text-center">
                <span role="img" aria-label="airplane emoji" className="mr-2">
                  ✈️
                </span>{" "}
                留学日语课程教学 (1对1)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-normal">
                        等级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-normal">
                        时间
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        価格
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        単価
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white divide-y divide-gray-200">
                    {studyAbroadJapanesePrices.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="px-4 py-4 text-sm text-gray-700 font-medium whitespace-normal">
                          {row.level}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 whitespace-normal">{row.time}</TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.price}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
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
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-4">
              <CardTitle className="text-center">
                <span role="img" aria-label="book emoji" className="mr-2">
                  📚
                </span>{" "}
                考级辅导课程 (1对1)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-normal">
                        等级
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-normal">
                        时间
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        価格
                      </TableHead>
                      <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-right whitespace-normal">
                        単価
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white divide-y divide-gray-200">
                    {examPreparationPrices.map((row, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="px-4 py-4 text-sm text-gray-700 font-medium whitespace-normal">
                          {row.level}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 whitespace-normal">{row.time}</TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
                          {row.price}
                        </TableCell>
                        <TableCell className="px-4 py-4 text-sm text-gray-700 text-right whitespace-normal">
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
