import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularTopics } from "@/components/popular-topics"
import { AboutSection } from "@/components/about-section"
import { ClassDemonstration } from "@/components/class-demonstration"
import { BookShowcase } from "@/components/book-showcase"
import { NewsletterSection } from "@/components/newsletter-section"
import { CoreFeatures } from "@/components/core-features"
import { NewsShowcase } from "@/components/news-showcase"
import { PriceSection } from "@/components/price-section" // Re-add import
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <PopularTopics />
      <AboutSection />
      <ClassDemonstration />
      <BookShowcase />
      <NewsShowcase />
      <PriceSection /> {/* Re-add component */}
      <ContactForm />
      <Footer />
    </div>
  )
}
