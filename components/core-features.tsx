import { Monitor, BookOpen, Laptop, Headphones } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Virtual Classroom",
    description: "オンラインでの授業や教材閲覧が可能です。",
  },
  {
    icon: BookOpen,
    title: "Remote Education",
    description: "場所を選ばずリモート学習をサポートします。",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "デジタル教材で効率良く学習を進められます。",
  },
  {
    icon: Headphones,
    title: "Educator Support",
    description: "経験豊富な講師陣が学習を全面サポートします。",
  },
]

export function CoreFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div>
            <p className="text-purple-600 font-semibold mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Features</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
