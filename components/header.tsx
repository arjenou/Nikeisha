import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Import Sheet components

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold text-lg">NKS</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Home
            </a>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                About
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Course
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Class
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Textbook
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                News
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Price
              </a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 py-6">
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Home
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    About
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Course
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Class
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Textbook
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    News
                  </a>
                  <a href="#" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Price
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
