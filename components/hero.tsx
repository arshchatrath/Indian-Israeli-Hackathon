"use client"

import type React from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ArrowRight, FileText, Sparkles, Users, Trophy, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animations for mouse tracking
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 })

  const rotateX = useTransform(springY, [-300, 300], [8, -8])
  const rotateY = useTransform(springX, [-300, 300], [-8, 8])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 8, -8, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const logoVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180, 
      opacity: 0,
      y: -50 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1.2,
      },
    },
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(99, 102, 241, 0.1) 35%, 
              rgba(168, 85, 247, 0.05) 70%, 
              transparent 100%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Parallax geometric shapes */}
        <motion.div
          className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-3xl blur-sm"
          style={{
            x: useTransform(springX, [-300, 300], [-20, 20]),
            y: useTransform(springY, [-300, 300], [-20, 20]),
            rotate: useTransform(springX, [-300, 300], [-5, 5]),
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-sm"
          style={{
            x: useTransform(springX, [-300, 300], [15, -15]),
            y: useTransform(springY, [-300, 300], [15, -15]),
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-2xl blur-sm"
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* LOGOS FIRST */}
      <motion.div 
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-full flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex justify-center items-center gap-8 sm:gap-12 mb-2">
          <motion.img
            src="/coe logo.png"
            alt="Center of Excellence"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            variants={logoVariants}
            whileHover={{ scale: 1.08, rotate: 2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          />
          <motion.img
            src="/thapar logo.png"
            alt="Thapar University"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
            variants={logoVariants}
            whileHover={{ scale: 1.08, rotate: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          />
        </div>
        <motion.p 
          className="text-sm font-semibold text-gray-600 tracking-wider uppercase"
          variants={itemVariants}
        >
          Presents
        </motion.p>
      </motion.div>

      {/* Enhanced Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-40 sm:pt-48"
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
          {/* Enhanced Main Title */}
          <motion.div className="relative mb-8">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-8xl font-black mb-2 relative"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                Israeli-Indian
              </motion.span>
            </motion.h1>
            
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-8xl font-black relative"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent relative"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                Hackathon 2025
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div 
            className="relative mb-12"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl sm:text-3xl text-gray-700 font-semibold tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
            >
              Restorative Health Care Hackathon
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" 
            variants={itemVariants}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold shadow-2xl rounded-2xl overflow-hidden group border-0"
                onClick={handleRegistration}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Register Now
                  <motion.div 
                    animate={{ x: [0, 8, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-blue-600 text-blue-700 hover:bg-blue-50 hover:border-purple-600 hover:text-purple-700 px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/80"
                onClick={handleGuidelines}
              >
                <span className="flex items-center">
                  View Guidelines
                  <FileText className="ml-3 h-6 w-6" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto" 
            variants={itemVariants}
          >
            {[
              { 
                label: "Prize Pool", 
                value: "₹1,00,000", 
                icon: Trophy,
                gradient: "from-yellow-500 to-orange-500" 
              },
              { 
                label: "Participants Expected", 
                value: "500+", 
                icon: Users,
                gradient: "from-blue-500 to-purple-500" 
              },
              { 
                label: "Countries", 
                value: "2", 
                icon: Globe,
                gradient: "from-green-500 to-blue-500" 
              },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 2.2 + index * 0.2, 
                  duration: 0.6, 
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-xl border border-gray-200/50 group-hover:border-blue-200/50 transition-all duration-500">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <motion.div
                    className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-700 font-semibold text-base">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}