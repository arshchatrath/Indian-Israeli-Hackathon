"use client"

import type React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)

    setMousePosition({
      x: (e.clientX - centerX) / rect.width,
      y: (e.clientY - centerY) / rect.height,
    })
  }

  const handleRegistration = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScn8F1KEg57rFbDvFhCqqyyHD3TkLKKUFqPR-g39aUe69EhYw/viewform",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const handleGuidelines = () => {
    window.location.href = "/guidelines"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <motion.div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"
          style={{
            x: useTransform(mouseX, [-300, 300], [-10, 10]),
            y: useTransform(mouseY, [-300, 300], [-10, 10]),
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(147, 51, 234, 0.05))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.05), transparent, rgba(59, 130, 246, 0.05))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(147, 51, 234, 0.05))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Interactive floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{
          x: useTransform(mouseX, [-300, 300], [-15, 15]),
          y: useTransform(mouseY, [-300, 300], [-15, 15]),
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{
          x: useTransform(mouseX, [-300, 300], [10, -10]),
          y: useTransform(mouseY, [-300, 300], [10, -10]),
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-15"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Main Content with 3D Transform */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto perspective-1000"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="relative">
          {/* Animated title with stagger effect */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 relative"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              transition={{ duration: 0.3 }}
            >
              Israeli-Indian
            </motion.span>
            <motion.span className="block text-blue-600 relative" variants={itemVariants}>
              Hackathon 2025
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={
                  isHovered
                    ? {
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                }}
              >
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </motion.div>
            </motion.span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium" variants={itemVariants}>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Restorative Health Care Hackathon
            </motion.span>
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg shadow-lg relative overflow-hidden group"
                onClick={handleRegistration}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20"
                  initial={false}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                />
                <span className="relative z-10 flex items-center">
                  Register Now
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                borderColor: "#3b82f6",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg relative overflow-hidden group"
                onClick={handleGuidelines}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-50 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  View Guidelines
                  <FileText className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats or key info with counter animation */}
          <motion.div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" variants={itemVariants}>
            {[
              { label: "Prize Pool", value: "₹1,00,000", prefix: "" },
              { label: "Participants Expected", value: "500", prefix: "+" },
              { label: "Countries", value: "2", prefix: "" },
            ].map((stat, index) => (
              <motion.div key={index} className="relative" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + index * 0.2, duration: 0.5, type: "spring" }}
                >
                  {stat.value}
                  {stat.prefix}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
