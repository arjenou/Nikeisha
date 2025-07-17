import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Happy student"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-purple-600 font-semibold mb-2">Testimonial</p>
                <h2 className="text-3xl font-bold text-gray-900">What Our Student Says</h2>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 italic">
              "Client-centric potentialities. Intrinsically redefine resource-leveling meta-services via fully tested
              action items. Appropriately brand open source e-tailers through one-to-one communities. Conveniently
              empower functionalized through technically sound quality vectors Uniquely embrace high standards."
            </blockquote>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">Isabelle Bruner</p>
                <p className="text-gray-600 text-sm">JavaScript Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
