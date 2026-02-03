import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import RiderTechSection from "@/components/rider-tech-section"
// import SignatureMarqueeSection from "@/components/signature-marquee-section"
import BikeShowcase from "@/components/bike-showcase"
import HelmetHall from "@/components/helmet-hall"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MasonryGallerySection from "@/components/masonry-gallery-section"
import Image from "next/image"
import { RaceDayCountdown } from "@/components/race-day-countdown"
import { InteractiveSchedule } from "@/components/interactive-schedule"
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion"

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-50">
        <Header />
      </div>
      <div className="relative">

        {/* 1. 배경 이미지 설정 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mission-bg.png"
            alt="Hero and Mission Background"
            fill 
            className="object-cover object-top"
            priority 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <div>
            <MissionSection />
          </div>
        </div>

      </div>
      <div>
        <MasonryGallerySection />
        {/* <TrackSplitSection /> */}
        {/* <RiderTechSection />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/trilha2.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <HelmetHall />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/splash.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center bg-lorenzo-dark"
            priority={false}
          />
        </div>
        <BikeShowcase />

        <RaceDayCountdown />
                <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/trilhadiee.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center bg-lorenzo-dark"
            priority={false}
          />
        </div>
        <InteractiveSchedule />
        <HistoricalResultsAccordion />

        <SocialSection /> */}
        <Footer />
      </div>
    </main>
  )
}
