"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const books = [
  {
    id: 1,
    title: "実用中国語 ピンイン編",
    image: "/images/book-pinyin.jpg",
    description:
      "日本人向けに開発されたピンイン教材。発音の弱点を全方位で克服し、短期間で発音・声調・句読の完璧な移行を実現します。",
    author: "鄭佩貞、劉佳",
    publisher: "二継社中国語研究スタッフ",
    price: "58元",
    category: "chinese",
  },
  {
    id: 2,
    title: "実用中国語 会話速成 1",
    image: "/images/book-practical-chinese-1.jpg",
    description:
      "日本人向けに作成され、中国全土で出版されている三言語対応の教材。教科書を閉じたら話せないという弱点を克服し、同時に中国語検定対策も可能。第1冊修了でレベル3相当。",
    author: "鄭佩貞、劉佳",
    publisher: "陝西出版集団 陝西旅行出版社",
    price: "65元",
    category: "chinese",
  },
  {
    id: 3,
    title: "実用中国語 会話速成 2",
    image: "/images/book-practical-chinese-2.jpg",
    description:
      "日本人向けに作成され、中国全土で出版されている三言語対応の教材。教科書を閉じたら話せないという弱点を克服し、同時に中国語検定対策も可能。第2冊修了でレベル4相当。",
    author: "鄭佩貞、劉佳",
    publisher: "陝西出版集団 陝西旅行出版社",
    price: "65元",
    category: "chinese",
  },
  {
    id: 4,
    title: "実用中国語 会話速成 3",
    image: "/images/book-practical-chinese-3.jpg",
    description:
      "日本人向けに作成され、中国全土で出版されている三言語対応の教材。教科書を閉じたら話せないという弱点を克服し、同時に中国語検定対策も可能。第3冊修了でレベル5相当。",
    author: "鄭佩貞、周長静",
    publisher: "陝西出版集団 陝西旅行出版社",
    price: "65元",
    category: "chinese",
  },
  {
    id: 5,
    title: "実用中国語 会話速成 4",
    image: "/images/book-practical-chinese-4.jpg",
    description:
      "日本人向けに作成され、中国全土で出版されている三言語対応の教材。教科書を閉じたら話せないという弱点を克服し、同時に中国語検定対策も可能。第4冊修了でレベル6相当。",
    author: "鄭佩貞、周長静",
    publisher: "陝西出版集団 陝西旅行出版社",
    price: "65元",
    category: "chinese",
  },
  {
    id: 6,
    title: "NKS 聞いて話す中国語 第1冊",
    image: "/images/book-nks-listening-speaking-1.png",
    description:
      "“話せない中国語”を克服するために出版された教材。会話力を高めつつ、HSKK初級に対応。第1冊は初級レベル。",
    author: "周長静、鄭佩貞",
    publisher: "二継社中国語",
    price: "78.00元",
    category: "chinese",
  },
  {
    id: 7,
    title: "NKS 聞いて話す中国語 第2冊",
    image: "/images/book-nks-listening-speaking-2.png",
    description:
      "“話せない中国語”を克服するために出版された教材。会話力を高めつつ、HSKK中級に対応。第2冊は中級レベル。",
    author: "周長静、鄭佩貞",
    publisher: "二継社中国語",
    price: "218.00元",
    category: "chinese",
  },
  {
    id: 8,
    title: "NKS 聞いて話す中国語 第3冊",
    image: "/images/book-nks-listening-speaking-3.png",
    description:
      "“話せない中国語”を克服するために出版された教材。会話力を高めつつ、HSKK高級に対応。第3冊は上級レベル。",
    author: "周長静、鄭佩貞",
    publisher: "二継社中国語",
    price: "218.00元",
    category: "chinese",
  },
  {
    id: 9,
    title: "たのしい日本語 第1冊",
    image: "/images/book-japanese-vol1.jpg",
    description: "日本在住の華人向けに開発された日本語教材。内容が生き生きしており、初学者に最適。",
    author: "二継社ラーニングセンター",
    publisher: "二継社ラーニングセンター",
    price: "90元",
    category: "japanese",
  },
  {
    id: 10,
    title: "たのしい日本語 基礎読解と作文",
    image: "/images/book-japanese-basic-rw.jpg",
    description: "日本在住の華人向けに開発された日本語教材。読解と書き方の基礎を重視し、内容が生き生きとしている。",
    author: "二継社ラーニングセンター",
    publisher: "二継社ラーニングセンター",
    price: "90元",
    category: "japanese",
  },
  {
    id: 11,
    title: "たのしい日本語 第2冊",
    image: "/images/book-japanese-vol2.jpg",
    description: "日本在住の華人向けに開発された日本語教材。段階的に難易度が上がり、基礎を持つ学習者に適している。",
    author: "二継社ラーニングセンター",
    publisher: "二継社ラーニングセンター",
    price: "90元",
    category: "japanese",
  },
  {
    id: 12,
    title: "たのしい日本語 練習帳",
    image: "/images/book-japanese-workbook-vol1.jpg",
    description: "日本在住の華人向けに開発された日本語教材。復習用ワークブックで、学習内容を定着させ、実践力を強化。",
    author: "二継社ラーニングセンター",
    publisher: "二継社ラーニングセンター",
    price: "80元",
    category: "japanese",
  },
  {
    id: 13,
    title: "新編ビジネス日本語 会話教材 初級",
    image: "/images/book-business-japanese-beginner.jpg",
    description: "日本での就職を目指す学習者のためのビジネス日本語会話教材。職場会話スキルを習得できます。",
    author: "盧思源（総編集）、申美花（主編）、鄭佩貞、中熊明子（副主編）",
    publisher: "東南大学出版社",
    price: "未知",
    category: "japanese",
  },
]

export function BookShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("chinese") // Default to Chinese

  const filteredBooks = books.filter((book) => book.category === selectedCategory)

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredBooks.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [filteredBooks.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredBooks.length) % filteredBooks.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredBooks.length)
  }

  const currentBook = filteredBooks[currentIndex]

  // Determine image dimensions based on book series
  const getImageDimensions = (imagePath: string) => {
    if (imagePath.includes("nks-listening-speaking") || imagePath.includes("japanese")) {
      return { width: 400, height: 300 } // Horizontal books
    }
    return { width: 300, height: 400 } // Vertical books (default)
  }

  const { width, height } = getImageDimensions(currentBook.image)

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">教材紹介</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">日本人学習者の特性に合わせて丁寧に設計された、専門的な教材</p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant={selectedCategory === "chinese" ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory("chinese")
              setCurrentIndex(0) // Reset index when changing category
            }}
            className={
              selectedCategory === "chinese"
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
            }
          >
            中国語教材
          </Button>
          <Button
            variant={selectedCategory === "japanese" ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory("japanese")
              setCurrentIndex(0) // Reset index when changing category
            }}
            className={
              selectedCategory === "japanese"
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
            }
          >
            日本語教材
          </Button>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="relative flex justify-center items-center min-h-[300px]">
              <div className="relative z-10 max-w-md mx-auto w-full h-full flex justify-center items-center">
                <Image
                  src={currentBook.image || "/placeholder.svg"}
                  alt={currentBook.title}
                  width={width}
                  height={height}
                  className="object-contain rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-blue-200 rounded-full opacity-60"></div>
            </div>

            {/* Book Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentBook.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentBook.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-500 font-medium w-20">著者：</span>
                  <span className="text-gray-700">{currentBook.author}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 font-medium w-20">出版：</span>
                  <span className="text-gray-700">{currentBook.publisher}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {filteredBooks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
