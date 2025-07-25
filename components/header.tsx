import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet" // Import Sheet components

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors cursor-pointer">NKS</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">
              About
            </a>
            <a href="#course" className="text-gray-700 hover:text-purple-600">
              Course
            </a>
            <a href="#price" className="text-gray-700 hover:text-purple-600">
              Price
            </a>
            <a href="#class" className="text-gray-700 hover:text-purple-600">
              Class
            </a>
            <a href="#textbook" className="text-gray-700 hover:text-purple-600">
              Textbook
            </a>
            <a href="#news" className="text-gray-700 hover:text-purple-600">
              News
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">
              Contact
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Visible Navigation Items */}
            <nav className="flex space-x-2">
              <a href="#about" className="text-gray-700 hover:text-purple-600 text-sm whitespace-nowrap">
                About
              </a>
              <a href="#course" className="text-gray-700 hover:text-purple-600 text-sm whitespace-nowrap">
                Course
              </a>
              <a href="#price" className="text-gray-700 hover:text-purple-600 text-sm whitespace-nowrap">
                Price
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 text-sm whitespace-nowrap">
                Contact
              </a>
            </nav>
            
            {/* Hamburger Menu for Hidden Items */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 py-6">
                  <a href="#home" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Home
                  </a>
                  <a href="#class" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Class
                  </a>
                  <a href="#textbook" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    Textbook
                  </a>
                  <a href="#news" className="text-gray-700 hover:text-purple-600 text-lg font-medium">
                    News
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
