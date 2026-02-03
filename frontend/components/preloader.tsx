"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }, 1700)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ opacity: 0, scale: 1.4, transition: { duration: 1, ease: "easeOut" } 
}}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="relative flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex items-baseline text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter"
            >
              <span className="text-lorenzo-text-light font-brier ml-1">Coqueli Flower</span>

                   
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ pacity: 0, y: -20, transition: { duration: 1, delay: 1 }}}
            transition={{ delay: 0.6 }}
            className="absolute bottom-12 font-[family-name:var(--font-oswald)] text-sm md:text-base font-bold tracking-widest uppercase"
          >
            FLORIST ACADEMY
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
