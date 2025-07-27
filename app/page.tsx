import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularTopics } from "@/components/popular-topics"
import { AboutSection } from "@/components/about-section"
import { JapaneseClassShowcase } from "@/components/japanese-class-showcase"
import { ClassDemonstration } from "@/components/class-demonstration"
import { AudioLearningSection } from "@/components/audio-learning-section"
import { BookShowcase } from "@/components/book-showcase"
import { NewsShowcase } from "@/components/news-showcase"
import { PriceSection } from "@/components/price-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/seo/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div id="home" className="min-h-screen bg-gray-50" style={{position: 'relative', overflow: 'visible'}}>
        <Header />
        <HeroSection />
        <AboutSection />
        <JapaneseClassShowcase />
        <ClassDemonstration />
        <PopularTopics />
        <PriceSection />
        <AudioLearningSection />
        <BookShowcase />
        <NewsShowcase />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}
