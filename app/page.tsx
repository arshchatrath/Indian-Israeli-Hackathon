"use client"
import { motion, useScroll, useTransform } from "framer-motion"
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

export default function Home() {
  const { scrollYProgress } = useScroll()
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8"],
  )

  return (
    <motion.div style={{ backgroundColor }} className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="themes">
          <Themes />
        </section>
        <section id="organizers">
          <Organizers />
        </section>
        <section id="judges">
          <Judges />
        </section>
        <section id="registration">
          <Registration />
        </section>
        <section id="prizes">
          <Prizes />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="technical-support">
          <TechnicalSupport />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}
