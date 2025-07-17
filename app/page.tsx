import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularTopics } from "@/components/popular-topics"
import { AboutSection } from "@/components/about-section"
import { ClassDemonstration } from "@/components/class-demonstration"
import { BookShowcase } from "@/components/book-showcase"
import { NewsShowcase } from "@/components/news-showcase"
import { PriceSection } from "@/components/price-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <PopularTopics />
      <ClassDemonstration />
      <BookShowcase />
      <NewsShowcase />
      <PriceSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
