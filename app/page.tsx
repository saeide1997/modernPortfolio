import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
    </div>
  )
}