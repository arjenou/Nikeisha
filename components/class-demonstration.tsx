"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const classImages = [
  {
    src: "/images/class-demo-1.jpg",
    alt: "专业教师白板授课",
  },
  {
    src: "/images/class-demo-2.jpg",
    alt: "一对一辅导课程",
  },
  {
    src: "/images/class-demo-3.jpg",
    alt: "师生互动学习",
  },
  {
    src: "/images/class-demo-4.jpg",
    alt: "老师与儿童学生互动",
  },
  {
    src: "/images/class-demo-5.jpg",
    alt: "小组学习讨论",
  },
  {
    src: "/images/class-demo-6.jpg",
    alt: "学生们在课堂上",
  },
  {
    src: "/images/class-demo-11.jpg",
    alt: "老师指导学生学习",
  },
  {
    src: "/images/class-demo-12.jpg",
    alt: "商务中文一对一教学",
  },
  {
    src: "/images/class-demo-13.jpg",
    alt: "老师辅导儿童学习",
  },
  {
    src: "/images/class-demo-14.jpg",
    alt: "学生们在课堂上交流",
  },
  {
    src: "/images/class-demo-15.jpg",
    alt: "老师在白板上书写",
  },
  {
    src: "/images/class-demo-16.jpg",
    alt: "学生使用学习设备",
  },
  {
    src: "/images/class-demo-17.jpg",
    alt: "老师和学生讨论学习资料",
  },
  {
    src: "/images/class-demo-18.jpg",
    alt: "老师在白板上教学儿童",
  },
]

export function ClassDemonstration() {
  const imagesPerView = 5 // Number of images visible in one row at a time
  const topRowSourceImages = classImages.slice(0, Math.ceil(classImages.length / 2)) // First half of images
  const bottomRowSourceImages = classImages.slice(Math.ceil(classImages.length / 2)) // Second half of images

  // Duplicate images to create a seamless looping effect
  // We add enough images to cover the transition back to the start
  const topRowDisplayImages = [...topRowSourceImages, ...topRowSourceImages.slice(0, imagesPerView)]
  const bottomRowDisplayImages = [...bottomRowSourceImages, ...bottomRowSourceImages.slice(0, imagesPerView)]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true) // Controls CSS transition property

  // Auto-scroll functionality
  useEffect(() => {
    const totalUniqueImagesInRow = topRowSourceImages.length // Number of unique images in one row

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If we are about to show the duplicated set of images,
        // disable transition and jump back to the start instantly.
        if (prevIndex >= totalUniqueImagesInRow) {
          setIsTransitioning(false) // Disable transition for instant jump
          return 0 // Jump back to the first unique image
        }
        return prevIndex + 1
      })
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [topRowSourceImages.length])

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

  // The number of dots corresponds to the number of unique slides in a row
  const numberOfDots = topRowSourceImages.length

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">クラス体験</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">リアルな授業風景、専門的な学習環境、個別対応の学習体験</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Top Row Carousel Container */}
          <div
            className={`flex space-x-6 mb-6 ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${translateXValue}px)` }}
          >
            {topRowDisplayImages.map((image, index) => (
              <div
                key={`top-${index}`} // Key can be just index as elements are stable in the DOM
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

          {/* Bottom Row Carousel Container */}
          <div
            className={`flex space-x-6 ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${translateXValue}px)` }}
          >
            {bottomRowDisplayImages.map((image, index) => (
              <div
                key={`bottom-${index}`} // Key can be just index as elements are stable in the DOM
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
