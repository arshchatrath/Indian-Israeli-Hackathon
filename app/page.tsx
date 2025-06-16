"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import About from "@/components/about"
import Themes from "@/components/themes"
import Organizers from "@/components/organizers"
import Judges from "@/components/judges"
import Registration from "@/components/registration"
import Prizes from "@/components/prizes"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import TechnicalSupport from "@/components/technical-support"
import SPOC from "@/components/spoc" // <-- Add this import

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)

  // Smooth spring animations for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    ["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569"],
  )

  // Parallax effect for background elements
  const y1 = useTransform(smoothProgress, [0, 1], [0, -50])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -100])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.3, 0.1])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen relative overflow-hidden"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div className="fixed inset-0 pointer-events-none" style={{ y: y1, opacity }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-30" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-100 rounded-full blur-lg opacity-25" />
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-100 rounded-full blur-xl opacity-20" />
      </motion.div>

      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: y2, opacity: useTransform(opacity, [0, 1], [0, 0.5]) }}
      >
        <div className="absolute top-60 right-10 w-20 h-20 bg-cyan-100 rounded-full blur-lg opacity-30" />
        <div className="absolute bottom-60 right-1/3 w-36 h-36 bg-blue-50 rounded-full blur-2xl opacity-15" />
      </motion.div>

      <Navbar />

      <motion.main variants={containerVariants}>
        <motion.section id="home" variants={sectionVariants}>
          <Hero />
        </motion.section>

        <motion.section id="timeline" variants={sectionVariants}>
          <Timeline />
        </motion.section>

        <motion.section id="about" variants={sectionVariants}>
          <About />
        </motion.section>

        <motion.section id="themes" variants={sectionVariants}>
          <Themes />
        </motion.section>

        <motion.section id="organizers" variants={sectionVariants}>
          <Organizers />
        </motion.section>

        <motion.section id="judges" variants={sectionVariants}>
          <Judges />
        </motion.section>

        <motion.section id="registration" variants={sectionVariants}>
          <Registration />
        </motion.section>

        <motion.section id="prizes" variants={sectionVariants}>
          <Prizes />
        </motion.section>

        <motion.section id="partners" variants={sectionVariants}>
          <Partners />
        </motion.section>

        <motion.section id="technical-support" variants={sectionVariants}>
          <TechnicalSupport />
        </motion.section>

        {/* Insert SPOC section before Contact */}
        <motion.section id="spoc" variants={sectionVariants}>
          <SPOC />
        </motion.section>

        <motion.section id="contact" variants={sectionVariants}>
          <Contact />
        </motion.section>
      </motion.main>

      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}
