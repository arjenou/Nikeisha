"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const japaneseClassImages = [
  {
    src: "/JapaneseClassroom/1.jpg",
    alt: "日本升学课程指导",
  },
  {
    src: "/JapaneseClassroom/2.jpg",
    alt: "日语学习环境",
  },
  {
    src: "/JapaneseClassroom/3.jpg",
    alt: "升学指导课堂",
  },
  {
    src: "/JapaneseClassroom/4.jpg",
    alt: "日本文化学习",
  },
  {
    src: "/JapaneseClassroom/5.jpg",
    alt: "一对一升学辅导",
  },
  {
    src: "/JapaneseClassroom/6.jpg",
    alt: "日语能力测试准备",
  },
]

export function JapaneseClassShowcase() {
  const imagesPerView = 5 // Number of images visible in one row at a time
  
  // Use all images in a single row
  const displayImages = [...japaneseClassImages, ...japaneseClassImages.slice(0, imagesPerView)]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true) // Controls CSS transition property

  // Auto-scroll functionality
  useEffect(() => {
    const totalUniqueImages = japaneseClassImages.length // Number of unique images

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we are about to show the duplicated set of images,
        // disable transition and jump back to the start instantly.
        if (prevIndex >= totalUniqueImages) {
          setIsTransitioning(false) // Disable transition for instant jump
          return 0 // Jump back to the first unique image
        }
        return prevIndex + 1
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Re-enable transition after an instant jump
  useEffect(() => {
    if (!isTransitioning) {
      // A small timeout is needed to allow the DOM to update with the new position
      // before re-enabling the transition for the next slide.
      const timeout = setTimeout(() => {
        setIsTransitioning(true)
      }, 50) // Very short delay

      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  // Calculate the width of a single image item including its right margin
  // w-64 is 256px, space-x-6 is 24px
  const itemWidth = 256 + 24

  // Calculate the translateX value based on the current index
  const translateXValue = currentIndex * itemWidth

  // The number of dots corresponds to the number of unique images
  const numberOfDots = japaneseClassImages.length

  return (
    <section id="japanese-class" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">中国留学コース授業一覧</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">専門的な中国進学指導、個別化された学習プラン、充実した学術サポート</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Single Row Carousel Container */}
          <div
            className={`flex space-x-6 ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${translateXValue}px)` }}
          >
            {displayImages.map((image, index) => (
              <div
                key={`single-${index}`}
                className="flex-shrink-0 w-64 h-48 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: numberOfDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true) // Ensure transition is enabled for manual clicks
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex % numberOfDots ? "bg-purple-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}