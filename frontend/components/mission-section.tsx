"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [signatureDrawn, setSignatureDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.2])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -200])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSignatureDrawn(true), 800)
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextTransform = () => {
    if (scrollProgress < 0.2) {
      const progress = scrollProgress / 0.2
      return {
        opacity: progress,
        transform: `translateX(${(1 - progress) * -50}px)`,
      }
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
    }
  }

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative min-h-screen bg--background text-lorenzo-text-light py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
         

          <div className="relative w-full flex items-center justify-center mt-16">
            <img
              src="/images/icon/ico-coqueli.png"
              className="h-full w-auto max-h-[400px] object-contain"
              
            />
          </div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl">
            <br />
            <span className="text-lorenzo-light font-brier text-10xl">ACCESSIBILITY</span>
            <br />수원역 도보 5분 거리로 
            <br />KTX 및 지하철 접근성이 편리합니다
            <br />
            <br />
            <span className="text-lorenzo-light font-brier f leading-[1.1]">LECTURER</span>
            <br />모든 운영진 및 강사진은 
            <br />원예·웨딩 전공 및 석사 출신으로
            <br />
            차별화된 실력과 감각을 갖추고 있습니다
            <br />
            <br />
            <span className="text-lorenzo-light font-brier leading-[1.1]">CLASS</span>
            <br />
            실무 중심의 수준 높은 강의와 트렌디한 커리큘럼을 제공하며,
            <br />
            관련 분야 취업 연계까지 지원합니다
          </h2>
        </div>

        

        </div>
    </section>
  )
}
