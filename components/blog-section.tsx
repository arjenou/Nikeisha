import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Complete Web Developer Guideline 2023",
    author: "Abingir Hossen",
    date: "17 April, 2023",
    excerpt: "It is a long established fact that a reader will be distracted by the readable",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Social Media Marketing and MASTERY(A-Z ) Journey",
    author: "Shahin Alam",
    date: "20 August, 2023",
    excerpt: "It is a long established fact that a reader will be distracted by the readable",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Branding: How to Brand Your self and Your Business",
    author: "Iqbal Safa",
    date: "10 Jan, 2023",
    excerpt: "It is a long established fact that a reader will be distracted by the readable",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">BLOG & NEWS</p>
          <h2 className="text-3xl font-bold text-gray-900">Trending on Our Blogs</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
