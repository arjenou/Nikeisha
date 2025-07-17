import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, BookOpen, Clock } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    title: "The Complete HTML & CSS Bootcamp 2023 Edition",
    instructor: "Janet Fleming",
    rating: 5.0,
    students: 329,
    lessons: 15,
    price: "$55.00",
    duration: "15 week",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Grow Personal Financial Security Thinking & Principles",
    instructor: "Janet Maria",
    rating: 5.0,
    students: 229,
    lessons: 17,
    price: "$59.00",
    duration: "18 week",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Complete Guide to Build RESTful API Application",
    instructor: "Janet Fleming",
    rating: 5.0,
    students: 529,
    lessons: 15,
    price: "$55.00",
    duration: "25 week",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Competitive Strategy Law for Management Consultants",
    instructor: "Abingir Hossen",
    rating: 5.0,
    students: 399,
    lessons: 14,
    price: "$85.00",
    duration: "45 week",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Machine Learning A-Z: Hands On Python and Java",
    instructor: "Isabelle Bruner",
    rating: 5.0,
    students: 729,
    lessons: 20,
    price: "$50.00",
    duration: "32 week",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Learning How To Write As A Professional Author",
    instructor: "Shahin Alam",
    rating: 5.0,
    students: 329,
    lessons: 10,
    price: "$45.00",
    duration: "14 week",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-purple-600 font-semibold mb-2">POPULAR COURSES</p>
            <h2 className="text-3xl font-bold text-gray-900">Featured On This Month</h2>
          </div>
          <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 bg-transparent">
            View All Courses →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">{course.instructor}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">({course.rating})</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-4 line-clamp-2">{course.title}</h3>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-600 text-lg">{course.price}</span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
